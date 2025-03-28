/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: N01516 (https://sketchfab.com/N01506)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tamagotchi-2311779775cb42a5ac81c4a378af176e
Title: Tamagotchi
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Group } from "three";

export function Tamagochi(props) {
  const { nodes, materials } = useGLTF("/models/scene.gltf");
  const group = useRef<Group>(null);
  if (group.current) {
    group.current.rotation.y += 0.01;
  }
  useFrame(() => {
    group.current.rotation.y += 0.01;
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-1.816, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface87_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface88_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface89_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface128_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface129_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface115_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface116_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface117_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface118_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface119_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface120_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface121_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface122_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface123_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface124_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface125_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface126_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface127_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface90_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface91_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface92_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface93_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface94_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface95_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface96_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface97_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface98_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface99_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface100_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface101_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface102_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface103_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface104_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface105_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface106_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface107_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface108_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface109_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface110_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface111_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface112_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface113_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface114_lambert1_0.geometry}
            material={materials.lambert1}
            position={[8.905, -88.984, -57.487]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/scene.gltf");
