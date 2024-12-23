import { TaskType } from '../../../types/task'
import { Task } from '../Task/Task'

type TaskListProps = {
	tasks: TaskType[]
	setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
	filteredTasks: TaskType[]
	minutes: string
	seconds: string
	setMinutes: React.Dispatch<React.SetStateAction<string>>
	setSeconds: React.Dispatch<React.SetStateAction<string>>
}

export const TaskList: React.FC<TaskListProps> = ({
	tasks,
	setTasks,
	filteredTasks
}) => {
	const deleteTask = (id: number) => {
		setTasks([...tasks].filter(todo => todo.id !== id))
	}

	return (
		<ul className='todo-list'>
			{filteredTasks.map(todo => (
				<Task
					key={todo.id}
					todo={todo}
					taskValue={todo.value}
					tasks={tasks}
					setTasks={setTasks}
					deleteTask={deleteTask}
				/>
			))}
		</ul>
	)
}
