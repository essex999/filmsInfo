import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { queryClient } from './query/queryClient'
import { store } from './redux/store'
import { Home } from './screens/home/home'
import { MoviesPage } from './screens/moviesPage/moviesPage'
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/movies/:page' element={<MoviesPage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	)
}

export default App
