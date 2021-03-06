import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!mesh || !mesh.current) return;

    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? "hotpink" : "orange"} wireframe />
    </mesh>
  );
};
export default Box;
