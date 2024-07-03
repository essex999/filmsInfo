import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { Home } from './UI/screens/home/home'
import { queryClient } from './query/queryClient'
import { store } from './redux/store'
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	)
}

export default App
