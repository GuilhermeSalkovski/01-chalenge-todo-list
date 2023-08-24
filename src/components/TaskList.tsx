import { useState } from 'react';

import clipboard from '../assets/Clipboard.svg'

import styles from './TaskList.module.css';

export function TaskList(){
    const [createdTasks, setCreatedTasks] = useState(0)
    const [finishedTasks, setFinishedTasks] = useState(0)

    const noTasksToDisplay = (createdTasks === 0) && (finishedTasks === 0)

    if (noTasksToDisplay) {
        return(
            <div className={styles.taskList}>
                <header>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={styles.tasksCounter}>{createdTasks}</div>
                    </div>
                    <div className={styles.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={styles.tasksCounter}>{finishedTasks}</div>
                    </div>
                </header>

                <div className={styles.emptyTasksItems}>
                    <img src={clipboard} alt="Prancheta" />
                    <strong className={styles.emptyTasksItemsText}>
                        Você ainda não tem tarefas cadastradas
                    </strong>
                    <span className={styles.emptyTasksItemsText}>
                        Crie tarefas e organize seus itens a fazer
                    </span>
                </div>

            </div>
        )
    } else {
        return (
            <div className={styles.taskList}>
                <header>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={styles.tasksCounter}>{createdTasks}</div>
                    </div>
                    <div className={styles.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={styles.tasksCounter}>{finishedTasks}</div>
                    </div>
                </header>

                <div className={styles.tasksItems}>
                    Muitas tarefas para serem feitas aqui
                </div>

            </div>
        )
    }
}