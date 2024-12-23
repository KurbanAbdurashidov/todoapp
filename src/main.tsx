import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.scss'
import Home from './components/screens/Home/Home'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Home />
	</StrictMode>
)
