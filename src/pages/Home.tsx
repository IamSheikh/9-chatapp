import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) navigate('/');
  });

  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
