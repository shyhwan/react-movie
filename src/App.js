import Button from './Button';
import styles from './App.module.css';

function App() {
    return (
        <div>
            <h1 className={styles.title}>Hellow!</h1>
            <Button text={'any'} />
        </div>
    );
}

export default App;
