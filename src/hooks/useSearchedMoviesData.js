import { useQueryClient } from '@tanstack/react-query'

export const useSearchedMoviesData = () => {
	const queryClient = useQueryClient()

	const getSearchedMoviesData = (query, page) => {
		const data = queryClient.getQueryData([
			'searchedMoviesData',
			{ query: query, page: page },
		])
		return data
	}
	if (getSearchedMoviesData !== undefined) {
		return { getSearchedMoviesData }
	}
}
