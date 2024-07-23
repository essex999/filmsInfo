import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import styles from './searchScreen.module.scss'
export const SearchScreen = () => {
	const navigate = useNavigate()

	const { pageNumber } = useParams()

	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		if (pageNumber) {
			setCurrentPage(parseInt(pageNumber))
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const queryClient = useQueryClient()

	const data = queryClient.getQueryData(['searchedMoviesData'])
	console.log(data)
	return (
		<div className={styles.wrapper}>
			<Header />
			<SearchBar />

			{/* <div className={styles.dataContainer}>
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

						navigate(`/home/${value}`)
						scrollToTop()
					}}
				/>
			)} */}
		</div>
	)
}
