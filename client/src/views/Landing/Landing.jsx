/* import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <>

            <Link to='/home'>
                <button>Home</button>
            </Link>
        </>
    )
}

export default Landing; */
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <Link to='/home'>
        <button className={styles.button}>START</button>
      </Link>
    </div>
  );
};

export default Landing;