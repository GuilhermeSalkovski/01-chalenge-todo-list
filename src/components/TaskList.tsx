import { Task } from './Task';
import { useState } from 'react';

import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg'


export function TaskList() {
    const tasks = [{
            isCompleted: false,
            taskContent: `Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.`,
        },
        {
            isCompleted: true,
            taskContent: `It has survived not only five centuries.`
        },
        {
            isCompleted: false,
            taskContent: `It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages.`,
        },
    ]

    const [createdTasks, setCreatedTasks] = useState(tasks.length)
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
                    {tasks.map(task => {
                        return <Task isCompleted={task.isCompleted} taskContent={task.taskContent}/>
                        }
                    )}

                    {/* < Task isCompleted={true} taskContent={'Hello World. This is the new task'}/>
                    < Task isCompleted={false} taskContent={'Olá mundo. Essa é uma nova tarefa'}/>
                    < Task isCompleted={true} taskContent={'Hola mundo. Esta es la nueva tarea'}/> */}
                </div>

            </div>
        )
    }
}