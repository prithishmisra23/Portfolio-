import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { MathUtils } from 'three';

const NeuralNetwork = (props) => {
    const ref = useRef();

    // Generate random points in a sphere layout
    const sphere = useMemo(() => {
        const float32Array = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 1 + Math.random() * 0.5; // Radius between 1 and 1.5
            float32Array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
            float32Array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
            float32Array[i * 3 + 2] = radius * Math.cos(phi);                   // z
        }
        return float32Array;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // Additive blending for glow effect
                />
            </Points>
        </group>
    );
};

const NetworkBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <NeuralNetwork />
            </Canvas>
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        </div>
    );
};

export default NetworkBackground;
