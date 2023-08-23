import {  PlusCircle } from 'phosphor-react'
import styles from './TaskBar.module.css'

export function TaskBar() {
    return (
        <div className={styles.taskBar}>
            <textarea >
                Adicione uma tarefa
            </textarea>
            <button>
                <strong>Criar</strong> {< PlusCircle size={16} weight='bold' />}
            </button>
        </div>
    )
}