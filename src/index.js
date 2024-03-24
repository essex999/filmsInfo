import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MainWrapper } from './styledComponents/styledComponents'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<MainWrapper>
			<App />
		</MainWrapper>
	</React.StrictMode>
)
