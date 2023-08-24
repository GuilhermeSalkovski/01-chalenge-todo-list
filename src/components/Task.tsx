import styles from './Task.module.css'

export function Task({isCompleted, taskContent}) {
    return(
        <div className={styles.task}>
            <input type="checkbox" id='task' />
            <label for="task">{taskContent}</label>
        </div>
    )
}