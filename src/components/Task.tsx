// import styles from './Task.module.css'
// import { Trash } from 'phosphor-react';

// interface TaskProps {
//     id: number;
//     isCompleted: boolean;
//     taskContent: string;
//     onDeleteTask: (id: number) => void;
// }

// export function Task({ id, isCompleted, taskContent, onDeleteTask}: TaskProps) {
//     function handleDeleteTask() {
//         onDeleteTask(id)
//     }

//     return(
//         <div className={styles.task} >
//             <div className={styles.taskContent}>
//                 <input type="checkbox" id='task' checked={isCompleted} />
//                 <label htmlFor='task'>{taskContent}</label>
//             </div>
//             <button onClick={handleDeleteTask} title="Deletar uma tarefa">
//                 <Trash size={16} />
//             </button>
//         </div>
//     )
// }