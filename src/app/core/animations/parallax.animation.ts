import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export interface ParallaxLayer {
  element: HTMLElement;
  depth: number;
  tilt?: boolean;
}

export function setupParallax(container: HTMLElement, layers: ParallaxLayer[]): () => void {
  if (!container || !layers.length || isReducedMotion() || typeof window === 'undefined') {
    return () => {};
  }

  // Pre-configure ultra-fast quickTo setters for 120 FPS tracking
  const quickLayers = layers
    .filter((l) => Boolean(l.element))
    .map(({ element, depth, tilt }) => {
      element.style.willChange = 'transform';

      const setX = gsap.quickTo(element, 'x', { duration: 0.4, ease: 'power2.out' });
      const setY = gsap.quickTo(element, 'y', { duration: 0.4, ease: 'power2.out' });
      const setRotateY = tilt
        ? gsap.quickTo(element, 'rotateY', { duration: 0.4, ease: 'power2.out' })
        : null;
      const setRotateX = tilt
        ? gsap.quickTo(element, 'rotateX', { duration: 0.4, ease: 'power2.out' })
        : null;

      if (tilt) {
        gsap.set(element, { transformPerspective: 800 });
      }

      return {
        depth,
        tilt,
        setX,
        setY,
        setRotateX,
        setRotateY,
        element
      };
    });

  let rect = container.getBoundingClientRect();
  let hasMotion = false;

  const updateRect = () => {
    rect = container.getBoundingClientRect();
  };

  const applyParallax = (relX: number, relY: number) => {
    for (let i = 0; i < quickLayers.length; i++) {
      const q = quickLayers[i];
      q.setX(relX * q.depth);
      q.setY(relY * q.depth);
      if (q.tilt && q.setRotateY && q.setRotateX) {
        q.setRotateY(relX * 14);
        q.setRotateX(-relY * 14);
      }
    }
  };

  // Mouse move handler for desktop
  const onMouseMove = (event: MouseEvent) => {
    const width = rect.width || 1;
    const height = rect.height || 1;
    const relX = (event.clientX - rect.left) / width - 0.5;
    const relY = (event.clientY - rect.top) / height - 0.5;
    applyParallax(relX * 1.2, relY * 1.2);
  };

  // Touch drag tracking for mobile
  const onTouchMove = (event: TouchEvent) => {
    if (event.touches.length === 0) return;
    const touch = event.touches[0];
    const width = window.innerWidth || rect.width || 1;
    const height = window.innerHeight || rect.height || 1;
    const relX = (touch.clientX - width / 2) / (width / 2);
    const relY = (touch.clientY - height / 2) / (height / 2);
    applyParallax(relX * 0.9, relY * 0.9);
  };

  // 1. Gyroscope Orientation Listener (calibrated for standard handheld angle ~58°-60°)
  const onDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (event.gamma === null || event.beta === null) {
      return;
    }
    hasMotion = true;

    // Gamma: Left-to-Right tilt (-25deg to +25deg range)
    const clampedGamma = Math.max(-25, Math.min(25, event.gamma));
    const relX = clampedGamma / 25;

    // Beta: Natural handheld vertical angle calibrated to ~58°
    const clampedBeta = Math.max(-25, Math.min(25, event.beta - 58));
    const relY = clampedBeta / 25;

    applyParallax(relX * 1.2, relY * 1.2);
  };

  // 2. DeviceMotion Fallback (Accelerometer Gravity Vector)
  const onDeviceMotion = (event: DeviceMotionEvent) => {
    const acc = event.accelerationIncludingGravity;
    if (!acc || acc.x === null || acc.y === null) {
      return;
    }
    hasMotion = true;

    const clampedX = Math.max(-6, Math.min(6, acc.x));
    const relX = -(clampedX / 6);

    // Gravity component calibrated for natural ~58° handheld angle (~8.2 m/s2)
    const clampedY = Math.max(-5, Math.min(5, (acc.y || 0) - 8.2));
    const relY = clampedY / 5;

    applyParallax(relX * 1.2, relY * 1.2);
  };

  const onMouseLeave = () => {
    if (!hasMotion) {
      applyParallax(0, 0);
    }
  };

  // Request iOS 13+ permission on user touch
  const requestSensorsPermission = () => {
    if (
      typeof window !== 'undefined' &&
      'DeviceOrientationEvent' in window &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'
    ) {
      (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> })
        .requestPermission()
        .then((state) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
          }
        })
        .catch(() => {});
    }

    if (
      typeof window !== 'undefined' &&
      'DeviceMotionEvent' in window &&
      typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'
    ) {
      (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> })
        .requestPermission()
        .then((state) => {
          if (state === 'granted') {
            window.addEventListener('devicemotion', onDeviceMotion, { passive: true });
          }
        })
        .catch(() => {});
    }
  };

  container.addEventListener('mouseenter', updateRect, { passive: true });
  container.addEventListener('mousemove', onMouseMove, { passive: true });
  container.addEventListener('mouseleave', onMouseLeave, { passive: true });
  container.addEventListener('touchstart', requestSensorsPermission, { passive: true, once: true });
  container.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('resize', updateRect, { passive: true });

  // Direct sensor attachment
  if (typeof window !== 'undefined') {
    window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
    window.addEventListener('devicemotion', onDeviceMotion, { passive: true });
  }

  return () => {
    container.removeEventListener('mouseenter', updateRect);
    container.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('mouseleave', onMouseLeave);
    container.removeEventListener('touchstart', requestSensorsPermission);
    container.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('resize', updateRect);
    if (typeof window !== 'undefined') {
      window.removeEventListener('deviceorientation', onDeviceOrientation);
      window.removeEventListener('devicemotion', onDeviceMotion);
    }
    quickLayers.forEach((q) => {
      q.element.style.willChange = 'auto';
    });
  };
}
