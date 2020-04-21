import React, { useState, useEffect } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
    
    return width;
};

const index = () => {
    const width = useWindowWidth(); // Our custom Hook

    return (
        <div>
            <p>Using custom useWindowWidth() Hook</p>
            <p>Resize the window</p>
            <p>Window width is {width}</p>
            <p>
                <a className="simple-link" href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889" target="_blanh">
                    Hooks by Dan Abramov
                </a>
            </p>
        </div>
    );
};

export default index;