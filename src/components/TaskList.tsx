import { Task } from './Task';
import { useState } from 'react';

import stylesList from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg'


export function TaskList() {
    const [tasks, setTasks] =  useState([{
            isCompleted: false,
            taskContent: `Em pé sem cair, deitado sem dormir, sentado sem
                cochilar e fazendo pose.`,
        },
        {
            isCompleted: true,
            taskContent: `Quem num gosta di mim que vai caçá sua turmis! Todo
                mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!`
        },
        {
            isCompleted: false,
            taskContent: `Copo furadis é disculpa de bebadis, arcu quam euismod
                magna. Per aumento de cachacis, eu reclamis.`,
        },
    ])

    const [createdTasks, setCreatedTasks] = useState(tasks.length)
    const [finishedTasks, setFinishedTasks] = useState(0)

    const noTasksToDisplay = (createdTasks === 0)

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.taskContent !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne)
        setCreatedTasks(tasksWithoutDeletedOne.length)
    }


    if (noTasksToDisplay) {
        return(
            <div className={stylesList.taskList}>
                <header>
                    <div className={stylesList.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={stylesList.tasksCounter}>{createdTasks}</div>
                    </div>
                    <div className={stylesList.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={stylesList.tasksCounter}>{finishedTasks}</div>
                    </div>
                </header>

                <div className={stylesList.emptyTasksItems}>
                    <img src={clipboard} alt="Prancheta" />
                    <strong className={stylesList.emptyTasksItemsText}>
                        Você ainda não tem tarefas cadastradas
                    </strong>
                    <span className={stylesList.emptyTasksItemsText}>
                        Crie tarefas e organize seus itens a fazer
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={stylesList.taskList}>
                <header>
                    <div className={stylesList.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={stylesList.tasksCounter}>{createdTasks}</div>
                    </div>
                    <div className={stylesList.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={stylesList.tasksCounter}>{finishedTasks}</div>
                    </div>
                </header>

                <div className={stylesList.tasksItems}>
                    {tasks.map(task => {
                        return <Task
                                key={task.taskContent}
                                isCompleted={task.isCompleted}
                                taskContent={task.taskContent}
                                onDeleteTask={deleteTask}
                            />
                        }
                    )}
                </div>

            </div>
        )
    }
}