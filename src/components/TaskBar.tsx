import {  PlusCircle, Trash } from 'phosphor-react'
import styles from './TaskBar.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'
import stylesList from './TaskList.module.css';
import stylesTask from './Task.module.css'
import clipboard from '../assets/Clipboard.svg'
// import { Task } from './Task';


export function TaskBar() {
    const [tasks, setTasks] =  useState([{
            id: 1,
            isCompleted: false,
            taskContent: `Em pé sem cair, deitado sem dormir, sentado sem
                cochilar e fazendo pose.`,
        },
        {
            id: 2,
            isCompleted: true,
            taskContent: `Quem num gosta di mim que vai caçá sua turmis! Todo
                mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!`
        },
        {
            id: 3,
            isCompleted: false,
            taskContent: `Copo furadis é disculpa de bebadis, arcu quam euismod
                magna. Per aumento de cachacis, eu reclamis.`,
        },
    ])
    const taskListSize = Object.keys(tasks).length
    console.log({
        taskListSize

    })
    const [newTask, setNewTask] = useState('')

    const [createdTasksCounter, setCreatedTasksCounter] = useState(taskListSize)
    const [finishedTasksCounter, setFinishedTasksCounter] = useState(0)

    useEffect(() => {
        let finishedTasks = 0
        tasks.forEach(task => {
            if (task.isCompleted) {
                finishedTasks++
            }
        })
        setFinishedTasksCounter(finishedTasks)
    }, [tasks]);

    interface TaskProps {
        id: number;
        isCompleted: boolean;
        taskContent: string;
        onDeleteTask: (id: number) => void;
    }

    function Task({ id, isCompleted, taskContent, onDeleteTask}: TaskProps) {
        function handleDeleteTask() {
            onDeleteTask(id)
        }

        return(
            <div className={stylesTask.task} >
                <div className={stylesTask.taskContent}>
                    <input type="checkbox" id='task' checked={isCompleted} />
                    <label htmlFor='task'>{taskContent}</label>
                </div>
                <button onClick={handleDeleteTask} title="Deletar uma tarefa">
                    <Trash size={16} />
                </button>
            </div>
        )
    }
    const isNewTaskEmpty = newTask.length===0

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo não pode estar vazio');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        setTasks([...tasks, {isCompleted: false, taskContent: newTask, id: Math.floor(Math.random()*1000)}]);
        setCreatedTasksCounter((state) => state + 1)
        console.log(JSON.stringify(tasks))
        console.log(createdTasksCounter)
        setNewTask('')
    }

    function deleteTask(id: number) {
        console.log(id)
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id;
        })

        setTasks(tasksWithoutDeletedOne)
        setCreatedTasksCounter((state) => state - 1)
        console.log(createdTasksCounter)
    }

    // const noTasksToDisplay = (createdTasksCounter === 0)
    if (createdTasksCounter === 0) {
        return(
        <>
            <form onSubmit={handleCreateNewTask} className={styles.taskBar} >
                <textarea
                    id='newTaskContent'
                    name='newTask'
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button
                    type='submit'
                    disabled={isNewTaskEmpty}
                >
                    Criar
                    < PlusCircle size={20} />
                </button>
            </form>

            <div className={stylesList.taskList}>
                <header>
                    <div className={stylesList.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={stylesList.tasksCounter}>{0}</div>
                    </div>
                    <div className={stylesList.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={stylesList.tasksCounter}>{0}</div>
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
        </>)
    }
    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.taskBar} >
                <textarea
                    id='newTaskContent'
                    name='newTask'
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button
                    type='submit'
                    disabled={isNewTaskEmpty}
                >
                    Criar < PlusCircle size={20} />
                </button>
            </form>

            <div className={stylesList.taskList}>
                <header>
                    <div className={stylesList.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <div className={stylesList.tasksCounter}>{createdTasksCounter}</div>
                    </div>
                    <div className={stylesList.finishedTasks}>
                        <strong>Concluídas</strong>
                        <div className={stylesList.tasksCounter}>{finishedTasksCounter}</div>
                    </div>
                </header>

                <div className={stylesList.tasksItems}>
                    {tasks.map(task => {
                        return <Task
                                key={task.id}
                                id={task.id}
                                isCompleted={task.isCompleted}
                                taskContent={task.taskContent}
                                onDeleteTask={deleteTask}
                            />
                        }
                    )}
                </div>

            </div>
        </>

    )
}