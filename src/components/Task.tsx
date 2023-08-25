import styles from './Task.module.css'
import { Trash } from 'phosphor-react';

interface TaskProps {
    isCompleted: boolean;
    taskContent: string;
}

function handleDeleteTask() {
    console.log('Tarefa deletada')
}

export function Task({isCompleted, taskContent}: TaskProps) {
    return(
        <div className={styles.task}>
            <input type="checkbox" id='task' />
            <label htmlFor='task'>{taskContent}</label>
            <button onClick={handleDeleteTask} title="Deletar uma tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}