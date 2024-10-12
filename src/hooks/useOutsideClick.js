import { useEffect, useRef } from 'react';

const useOutsideClick = (closeFunction) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (typeof closeFunction === 'function') {
        closeFunction(); 
      } else {
        console.error('closeFunction is not a function:', closeFunction);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
