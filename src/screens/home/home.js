import { useQuery } from 'react-query'
import { getMovie } from '../../query/api'
export const Home = () => {
	const data = useQuery('getMovie', getMovie)

	console.log(data)
	return <div style={{ color: 'red' }}></div>
}
