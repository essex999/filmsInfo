import { useSelector } from 'react-redux'
import { Header } from '../../components/header/header'
import { MovieBox } from '../../components/movieBox/movieBox'
import PaginationMui from '../../components/muiComponents/pagination'
import { DataContainer } from './styledComponents'
export const MoviesPage = () => {
	const movies = useSelector(state => state.searchMovieParams.movieData)
	console.log(movies)
	return (
		<>
			<Header />
			<DataContainer>
				{movies.docs && movies.docs.length ? (
					movies.docs.map(el => (
						<MovieBox
							key={el.id}
							name={el.name}
							year={el.year}
							countries={el.countries}
							genres={el.genres}
							poster={el.poster.previewUrl}
						/>
					))
				) : (
					<h2>Нет результатов поиска </h2>
				)}
			</DataContainer>
			{movies.docs && <PaginationMui pages={movies.pages} />}
		</>
	)
}
