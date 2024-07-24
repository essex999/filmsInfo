import { useQueryClient } from '@tanstack/react-query'

export const useSearchedMoviesData = () => {
	const queryClient = useQueryClient()

	const getSearchedMoviesData = (query, page) => {
		return queryClient.getQueryData([
			'searchedMoviesData',
			{ query: query, page: page },
		])
	}

	return { getSearchedMoviesData }
}
