import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <div className='flex justify-between'>
      <h1 className='text-xl mt-4 mb-4 font-bold'>
        <span className='text-red-500'>A</span>
        <span className='text-orange-500'>l</span>
        <span className='text-yellow-300'>l</span>
        <span className='text-green-500'>i</span>
        <span className='text-blue-500'>s</span>
        <span className='text-violet-500'>o</span>
        <span className='text-red-500'>n</span>{' '}
        <span className='text-orange-500'>B</span>
        <span className='text-yellow-300'>u</span>
        <span className='text-green-500'>r</span>
        <span className='text-blue-500'>g</span>
        <span className='text-violet-500'>e</span>
        <span className='text-red-500'>r</span>
        <span className='text-orange-500'>s</span> Chat App
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
