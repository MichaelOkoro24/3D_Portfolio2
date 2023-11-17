import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// Decal import will be used as the texture of the ball and OrbitControls allows us to move it around.
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

// Loads the percentages for the Canvas
import CanvasLoader from '../Loader'

const Ball = (props) => {
  // This gives the ball texture that comes from react-three/drei
  const [ decal ] = useTexture([props.imgUrl]);

  return (
    <Float 
      speed={1.75} 
      rotationIntensity={1} 
      floatIntensity={2}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffest 
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[ 2* Math.PI, 0, 6.25]}
        flatShading
        map={decal}
        
      />
      </mesh>

    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
         {/* Allows us to move the model left and right. */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas;