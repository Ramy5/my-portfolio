import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { HomeInfo, Loader } from "../components";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";

const Landing = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  console.log(
    "🚀 ~ file: Landing.jsx:12 ~ Landing ~ currentStage:",
    currentStage
  );

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
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
      screenPlaneScale = [3, 3, 3];
      screenPlanePosition = [0, -4, -4];
    }

    return [screenPlaneScale, screenPlanePosition];
  };

  const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize();
  const [screenPlaneScale, screenPlanePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
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
          <directionalLight position={[100, 30, 10]} intensity={2} />
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
            planePosition={screenPlanePosition}
            planeScale={screenPlaneScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Landing;
