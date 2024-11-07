import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Home = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) navigate('/');
  });

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
