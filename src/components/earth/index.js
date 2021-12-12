import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';

export function Earth(props) {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.1} />
      <Stars radius={300} depth={200} count={2000} factor={7} saturation={0} fade={true} />
      <mesh>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={false} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.2} roughness={0.9} />
        <OrbitControls 
          enableZoom={true} 
          enalbePan={true} 
          enableRatate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4} />
      </mesh>
    </>
  )
}