import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMainPageData } from '../../../query/moviesApi/getMainPageData'
import { Header } from '../../components/Header/Header'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import SliderHolder from '../../components/SliderHolder/SliderHolder'
import styles from './home.module.scss'
export const Home = () => {
	const navigate = useNavigate()

	const { pageNumber } = useParams()

	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		if (pageNumber) {
			setCurrentPage(parseInt(pageNumber))
		}
	}, [])

	const { data, refetch, isSuccess } = useMainPageData(currentPage)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div className={styles.wrapper}>
			<Header />
			<SearchBar />
			<SliderHolder></SliderHolder>
			<button onClick={refetch}>Siuda</button>
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

						navigate(`/home/${value}`)
						scrollToTop()
					}}
				/>
			)}
		</div>
	)
}
