import { TaskType } from '../../../types/task'
import { TaskFilter } from '../TaskFilter/TaskFilter'
import styles from './Footer.module.scss'

type FooterProps = {
	tasks: TaskType[]
	setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
	filter: string
	setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Footer: React.FC<FooterProps> = ({
	tasks,
	setTasks,
	filter,
	setFilter
}) => {
	return (
		<footer className={styles.footer}>
			<span className={styles.todo_count}>
				{tasks.length ? `${tasks.length} items left` : 'No items'}
			</span>
			<TaskFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<button
				className={styles.clear_completed}
				onClick={() => setTasks(tasks.filter(task => !task.isCompleted))}
			>
				Clear completed
			</button>
		</footer>
	)
}
