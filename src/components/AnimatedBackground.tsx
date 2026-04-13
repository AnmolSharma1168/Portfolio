import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const AnimatedBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any = null;

    const loadVanta = async () => {
      const CLOUDS = (await import("vanta/dist/vanta.clouds.min")).default;

      if (vantaRef.current && !effect) {
        effect = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0xffffff,
          skyColor: 0x88c9e3,
          cloudColor: 0xcde0f5,
          cloudShadowColor: 0x245585,
          sunColor: 0xffaa33,
          sunGlareColor: 0xff7744,
          sunlightColor: 0xffaa44,
          speed: 1,
        });
        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0"
    />
  );
};

export default AnimatedBackground;
