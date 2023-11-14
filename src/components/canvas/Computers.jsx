 import { Suspense, useEffect, useState } from "react";
 // This imports an empty canvas allowing us to place something on it.
 import { Canvas } from "@react-three/fiber";
 // These imports will help us draw on the canvas and import 3-D models via useGLTF
 import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
 import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  
   const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    // When using three.js we'll use a mesh tag instead of a div tag.
    <mesh>
      {/* We need to add lights so we can see the computer model */}
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
       {/* Adds a glare to the monitor */}
       <pointLight intensity={12}/>
       <directionalLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [0, 3, -2.2] : [0, -3.25, 1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
   //Add a listener for changes to the screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
   // Set the initial vavlue of the "isMobile" state variable
    setIsMobile(mediaQuery.matches);
//Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Remove the listener when the component is unmounted 
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  return (
    <Canvas
      frameLoop="demand"
      shadows
      // The camera lets us know where were looking at the model from.
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
         {/* Allows us to move the model left and right. */}
        <OrbitControls
          enableZoom={false}
          // This only allows us to turn the monitor horizontally.
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI /2}
      />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;