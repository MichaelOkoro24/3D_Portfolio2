import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {  Decal, OrbitControls, Preload, useGLTF, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Loads the Earth model on the canvas from the public folder
const Earth = () => { 
    const earth = useGLTF( './planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true}}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      {/* Loads the screen with a percentage when loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Allows us to move the earth in different directions with the mouse */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
      </Suspense>
        <Earth />
    </Canvas>
  )

}

export default EarthCanvas;