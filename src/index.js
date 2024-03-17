import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/header'
import './index.css'
import { MainWrapper } from './styledComponents/styledComponents'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<MainWrapper>
			<Header></Header>
		</MainWrapper>
	</React.StrictMode>
)
