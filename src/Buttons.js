import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { isLoading, handlePage, page, nbPages } = useGlobalContext();

  return (
    <div className='btn-container'>
      <button
        disabled={isLoading || page === 0}
        onClick={() => handlePage('decrease')}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading || page === nbPages - 1}
        onClick={() => handlePage('increase')}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
