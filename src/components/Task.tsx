import styles from './Task.module.css'
import { Trash } from 'phosphor-react';

interface TaskProps {
    isCompleted: boolean;
    taskContent: string;
    onDeleteTask: (task: string) => void;
}

export function Task({isCompleted, taskContent, onDeleteTask}: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(taskContent)
    }

    return(
        <div className={styles.task} >
            <div className={styles.taskContent}>
                <input type="checkbox" id='task' />
                <label htmlFor='task'>{taskContent}</label>
            </div>
            <button onClick={handleDeleteTask} title="Deletar uma tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}