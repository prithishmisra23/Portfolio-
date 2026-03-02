import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        };

        const onMouseEnter = () => {
            cursor.classList.add('hovering');
        };

        const onMouseLeave = () => {
            cursor.classList.remove('hovering');
        };

        document.addEventListener('mousemove', onMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div id="custom-cursor" ref={cursorRef} className="hidden md:block pointer-events-none" />;
};

export default CustomCursor;
