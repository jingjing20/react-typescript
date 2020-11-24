import React, { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('add effect', positions.x)
        const updateMouse = (e: MouseEvent) => {
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateMouse);
        return () => {
            document.removeEventListener('mousemove', updateMouse);
            console.log('remove effect', positions.x);
        }
    }, []);
    return positions;
}

export default useMousePosition;