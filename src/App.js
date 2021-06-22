import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getLocalTheme = () => {
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getLocalTheme());

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    if (theme === 'dark') {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted - Dan Abramov blog</h1>
          <button className='btn' onClick={handleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
