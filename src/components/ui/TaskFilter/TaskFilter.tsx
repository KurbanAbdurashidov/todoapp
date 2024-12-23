import cn from 'classnames'

type TaskFilterProps = {
	filter: string
	setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
	filter,
	setFilter
}) => {
	return (
		<ul className='filters'>
			<li>
				<button
					className={cn({
						selected: filter === 'all'
					})}
					onClick={() => setFilter('all')}
				>
					All
				</button>
			</li>
			<li>
				<button
					className={cn({
						selected: filter === 'active'
					})}
					onClick={() => setFilter('active')}
				>
					Active
				</button>
			</li>
			<li>
				<button
					className={cn({
						selected: filter === 'completed'
					})}
					onClick={() => setFilter('completed')}
				>
					Completed
				</button>
			</li>
		</ul>
	)
}
