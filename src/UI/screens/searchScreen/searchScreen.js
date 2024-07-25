import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useSearchMovies } from '../../../query/moviesApi/useSearchMovie'
import { Header } from '../../components/Header/Header'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import styles from './searchScreen.module.scss'
export const SearchScreen = () => {
	const navigate = useNavigate()

	const { pageNumber } = useParams()

	const [currentPage, setCurrentPage] = useState(1)
	const [trigger, setTrigger] = useState(0)
	const inputTextContent = useSelector(
		state => state.searchParams.searchTextContent
	)

	const { data, refetch, isLoading, isFetching } = useSearchMovies({
		query: inputTextContent,
		page: currentPage,
	})

	useEffect(() => {
		if (pageNumber && pageNumber !== 1 && inputTextContent !== '') {
			setCurrentPage(parseInt(pageNumber))
			refetch()
		}
	}, [pageNumber])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		refetch()
	}, [trigger])

	return (
		<div className={styles.wrapper}>
			<Header />
			<SearchBar setTrigger={setTrigger} />

			<div className={styles.dataContainer}>
				{(data ? data.docs : []).map((el, index) => (
					<MovieCard
						key={index}
						poster={el.poster}
						genres={el.genres}
						name={el.name}
						alternativeName={el.alternativeName}
						year={el.year}
						countries={el.countries}
					/>
				))}
			</div>
			{data && (
				<Pagination
					className={styles.paginationWrapper}
					count={data.pages}
					page={currentPage}
					onChange={(e, value) => {
						setCurrentPage(value)
						navigate(`/search/${value}`)
						scrollToTop()
					}}
				/>
			)}
		</div>
	)
}
