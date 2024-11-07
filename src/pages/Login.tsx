import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase';

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/app');
    }
  });
  const login = () => {
    signInWithPopup(auth, provider).then(async ({ user }) => {
      const data = {
        name: user.displayName,
        email: user.email,
        profile: user.photoURL,
      };
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Yeah you! What? Clown 🤡');
      } else {
        await setDoc(doc(firestore, 'users', user.uid), data);
        console.log('Hey Clown 🤡');
      }
    });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-2xl flex justify-center items-center flex-col  rounded-md px-4'>
        <h1 className='text-3xl mt-4 mb-4 font-bold'>
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

        <button
          onClick={login}
          className='px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow transition duration-150 mb-4'
        >
          <img
            className='w-6 h-6'
            src='https://www.svgrepo.com/show/475656/google-color.svg'
            loading='lazy'
            alt='google logo'
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
