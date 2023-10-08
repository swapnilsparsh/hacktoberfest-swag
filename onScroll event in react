import {useEffect, useState} from 'react';

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          padding: '10px 0',
          top: '0',
          backgroundColor: 'white',
          borderBottom: '3px solid black',
          width: '100%',
        }}
      >
        <h2>Scroll Top: {scrollTop}</h2>
      </div>

      <div style={{marginTop: '10rem'}}>
        {[...Array(100)].map((_, index) => (
          <p key={index}>Content {index}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
