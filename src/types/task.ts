export type TaskType = {
	id: number
	value: string
	createdAt: Date
	isCompleted: boolean
	isEditing?: boolean
	isActive: boolean
	timeSpent: number
	isTimerRunning: boolean
}

export type FilterType = 'all' | 'active' | 'completed'
