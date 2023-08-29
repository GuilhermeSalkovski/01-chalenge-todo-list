import {  PlusCircle } from 'phosphor-react'
import styles from './TaskBar.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

export function TaskBar() {
    const [newTask, setNewTask] = useState('')

    const isNewTaskEmpty = newTask.length===0

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
        console.log(newTask)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo não pode estar vazio');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        console.log('Task Created')
        setNewTask('')

    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.taskBar} >
            <textarea
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
    )
}