import { useEffect, useRef } from 'react';

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(); 
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


// import { useEffect, useRef, useCallback } from 'react';

// const useOutsideClick = (callback) => {
//   const ref = useRef(null);

//   const handleClickOutside = useCallback((event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       callback();
//     }
//   }, [callback]);

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [handleClickOutside]);

//   return ref;
// };

// export default useOutsideClick;




