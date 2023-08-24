import { Header } from './components/Header';
import { TaskBar } from './components/TaskBar';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';
import './global.css';


export function App() {
    return (
        <div className={styles.wrapper}>
            < Header />
            < TaskBar />
            < TaskList />
        </div>
    )
}

