import { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     if (user) setLoggedInUser(user);
    });
  }, []);

  const logout = () => {
    signOut(auth);
  }
  
  return (
    <div className='flex justify-between py-2'>
      <h1 className='text-xl mt-4 ml-2 font-bold'>
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
      <div className='flex justify-center items-center'>
        <img src={loggedInUser ? loggedInUser.photoURL : ""} alt="profile-picuture" width={50} height={50} className='rounded-full cursor-pointer' />
        <h1 className='font-bold text-2xl ml-2 cursor-pointer'>{loggedInUser ? loggedInUser.displayName : ""}</h1>
      </div>
      <div className='flex justify-center items-center mr-2'>
        <button onClick={logout} className="flex items-center space-x-2 px-4 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-l from-purple-400 to-purple-700 hover:from-purple-500 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-0 hover:duration-500 hover:scale-110">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>

        <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
