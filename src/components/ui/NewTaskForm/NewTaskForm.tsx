import { TaskType } from '../../../types/task'
import styles from './NewTaskForm.module.scss'

type NewTaskFormProps = {
	taskValue: string
	setTaskValue: React.Dispatch<React.SetStateAction<string>>
	setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
	minutes: string
	seconds: string
	setMinutes: React.Dispatch<React.SetStateAction<string>>
	setSeconds: React.Dispatch<React.SetStateAction<string>>
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({
	taskValue,
	setTaskValue,
	setTasks,
	minutes,
	seconds,
	setMinutes,
	setSeconds
}) => {
	const createTask = () => {
		const totalSeconds =
			(parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0)

		if (taskValue.trim() === '') return

		setTasks(prev => [
			{
				id: Date.now(),
				value: taskValue.trim(),
				createdAt: new Date(),
				isCompleted: false,
				isActive: true,
				timeSpent: totalSeconds,
				isTimerRunning: true
			},
			...prev
		])
		setTaskValue('')
		setMinutes('')
		setSeconds('')
	}

	const handleTimeChange =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value
			if (/^\d*$/.test(value)) {
				setter(value)
			}
		}

	return (
		<form
			className={styles.new_todo_form}
			onSubmit={event => {
				event.preventDefault()
				createTask()
			}}
		>
			<input
				className={styles.new_todo}
				placeholder='What needs to be done?'
				value={taskValue}
				onChange={event => setTaskValue(event.target.value)}
				autoFocus
			/>
			<input
				className={styles.new_todo_form__timer}
				placeholder='Min'
				type='number'
				value={minutes}
				onChange={handleTimeChange(setMinutes)}
			/>
			<input
				className={styles.new_todo_form__timer}
				placeholder='Sec'
				type='number'
				value={seconds}
				onChange={handleTimeChange(setSeconds)}
			/>
			<button
				type='submit'
				style={{ display: 'none' }}
			></button>
		</form>
	)
}
