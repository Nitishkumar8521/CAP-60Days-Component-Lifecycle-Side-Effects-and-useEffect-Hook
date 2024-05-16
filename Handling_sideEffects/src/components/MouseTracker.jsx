import { useEffect } from 'react';

function MouseTracker() {
    useEffect(() => {
        // Function to call when the mouse moves
        function handleMouseMove(event) {
            console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        }

        // Add event listener when the component mounts
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div>
            Move your mouse around and check the console to see the position.
        </div>
    );
}

export default MouseTracker;
