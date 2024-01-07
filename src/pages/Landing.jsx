import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { HomeInfo, Loader } from "../components";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";

/**
 * Landing component represents the landing page of the portfolio.
 * It displays a 3D scene with a rotating island and a plane.
 * The current stage and rotation state can be adjusted.
 */
const Landing = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenPlaneScale, screenPlanePosition;

    if (window.innerWidth < 768) {
      screenPlaneScale = [1.5, 1.5, 1.5];
      screenPlanePosition = [0, -1.5, 0];
    } else {
      screenPlaneScale = [2.5, 2.5, 2.5];
      screenPlanePosition = [0, -2.5, 0];
    }

    return [screenPlaneScale, screenPlanePosition];
  };

  const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize();
  const [screenPlaneScale, screenPlanePosition] = adjustPlaneForScreenSize();

  return (
    <section className="relative w-full h-screen">
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* <spotLight /> */}
          <directionalLight position={[100, 10, 10]} intensity={2} />
          {/* <pointLight /> */}
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1.5}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={screenPlanePosition}
            scale={screenPlaneScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Landing;
