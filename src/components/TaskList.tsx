import { useState } from 'react';

import clipboard from '../assets/Clipboard.svg'

import styles from './TaskList.module.css';
import { Task } from './Task';

export function TaskList(){
    const tasks = [{
            isCompleted: false,
            taskContent: `Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s`,
        },
        {
            isCompleted: true,
            taskContent: `It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.`
        },
        {
            isCompleted: false,
            taskContent: `It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum`,
        },
    ]

    const [createdTasks, setCreatedTasks] = useState(1)
    const [finishedTasks, setFinishedTasks] = useState(0)

    const noTasksToDisplay = (createdTasks === 0) && (finishedTasks === 0)



    tasks.map((task) => {
        const completedTasks = []
        if(task.isCompleted)
            completedTasks.push(task)
        return completedTasks
    })

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
                    < Task isCompleted={true} taskContent={'Hello World. This is the new task'}/>
                    < Task isCompleted={false} taskContent={'Olá mundo. Essa é uma nova tarefa'}/>
                    < Task isCompleted={true} taskContent={'Hola mundo. Esta es la nueva tarea'}/>
                </div>

            </div>
        )
    }
}