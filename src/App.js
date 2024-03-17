import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { queryClient } from './query/queryClient'
import { store } from './redux/store'
import { Home } from './screens/home/home'
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
