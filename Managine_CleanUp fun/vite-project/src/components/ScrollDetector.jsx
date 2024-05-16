import  { useEffect } from 'react';

function ScrollDetector() {
    useEffect(() => {
        
        const handleScroll = () => {
            console.log(window.scrollY); 
        };

        // Subscribe to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            // Unsubscribe from the scroll event
            window.removeEventListener('scroll', handleScroll);
            console.log('Event listener removed');
        };
    }, []); 

    return (
        <div>
            <h1>Scroll down the page</h1>
            <p>Check the console to see the scroll position.</p>
            <div style={{ height: '1500px' }}></div> 
        </div>
    );
}

export default ScrollDetector;
