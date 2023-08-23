import { Header } from './components/Header';
import { TaskBar } from './components/TaskBar';

import styles from './App.module.css';
import './global.css';
import { TaskList } from './components/TaskList';

export function App() {
    return (
        <div className={styles.wrapper}>
            < Header />
            < TaskBar />
            < TaskList />
        </div>
    )
}

