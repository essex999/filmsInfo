import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
	refetchOnWindowFocus: false,
})

export { queryClient }
