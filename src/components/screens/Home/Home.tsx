import { useState } from 'react'
import { TaskType } from '../../../types/task'
import { Footer } from '../../ui/Footer/Footer'
import { NewTaskForm } from '../../ui/NewTaskForm/NewTaskForm'
import { TaskList } from '../../ui/TaskList/TaskList'
import styles from './Home.module.scss'

export default function Home(): JSX.Element {
	const [taskValue, setTaskValue] = useState<string>('')
	const [tasks, setTasks] = useState<TaskType[]>([])
	const [filter, setFilter] = useState<string>('all')
	const [minutes, setMinutes] = useState<string>('')
	const [seconds, setSeconds] = useState<string>('')

	const getFilteredTasks = (): TaskType[] => {
		if (filter === 'active') return tasks.filter(task => !task.isCompleted)
		if (filter === 'completed') return tasks.filter(task => task.isCompleted)
		return tasks
	}
	const filteredTasks = getFilteredTasks()

	return (
		<section className={styles.todoapp}>
			<header className={styles.header}>
				<h1 className={styles.header_title}>Todos</h1>
				<NewTaskForm
					taskValue={taskValue}
					setTaskValue={setTaskValue}
					setTasks={setTasks}
					seconds={seconds}
					setSeconds={setSeconds}
					minutes={minutes}
					setMinutes={setMinutes}
				/>
			</header>
			<section className={styles.main}>
				<TaskList
					tasks={tasks}
					setTasks={setTasks}
					filteredTasks={filteredTasks}
					minutes={minutes}
					seconds={seconds}
					setMinutes={setMinutes}
					setSeconds={setSeconds}
				/>
			</section>
			<Footer
				tasks={tasks}
				setTasks={setTasks}
				filter={filter}
				setFilter={setFilter}
			/>
		</section>
	)
}
