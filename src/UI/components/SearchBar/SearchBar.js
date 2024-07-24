import { useEffect, useState } from 'react'
import IconArrowDropDownLine from '../../../assets/IconComponents/arrowElectronIcon.js'
import { categories } from '../../../consts.js'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '../../../assets/IconComponents/searchIcon.js'
import { useSearchMovies } from '../../../query/moviesApi/useSearchMovie.js'
import { setSearchTextContent } from '../../../redux/slicers/searchMovieParamsSlicer.js'
import { BarContentPopUp } from '../BarContentPopUp/BarContentPopUp.jsx'
import styles from './SearchBar.module.scss'
export const SearchBar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [isToggle, setToggle] = useState(true)
	const [onFocusData, setOnFocusData] = useState({})
	const placeholderValue = 'Поиск Фильмов и Сериалов'
	const [typeNumber, setTypeNumber] = useState(0)
	const [isNavSubMenu, setIsNavSubMenu] = useState(false)
	const [inputValue, seInputValue] = useState('')

	const { data, refetch, isLoading, isFetching } = useSearchMovies({
		query: inputValue,
		page: 1,
	})

	useEffect(() => {
		console.log(data)
		if (data !== undefined) {
			navigate('/search/1')
		}
	}, [data])
	return (
		<div
			className={styles.HeaderMain}
			onMouseLeave={e => {
				setIsNavSubMenu(false)
			}}
		>
			<div className={styles.HeaderNav}>
				<div className={styles.HeaderButtonsGroup}>
					{categories.map((content, index) => (
						<div
							className={styles.CategoryButton}
							onMouseOver={e => {
								setOnFocusData({
									focused: true,
									index: index,
								}) //arrow animation event
								setTypeNumber(index + 1)
								setIsNavSubMenu(true) //searchBarMenu popUp event
							}}
							onMouseLeave={e => {
								setOnFocusData({ focused: false, index: index }) //arrow animation event
							}}
							key={index}
						>
							{content}
							<IconArrowDropDownLine index={index} focus={onFocusData} />
						</div>
					))}
				</div>

				<form
					className={styles.form}
					onSubmit={e => {
						e.preventDefault()
						refetch()
					}}
				>
					<input
						className={styles.HeaderInput}
						onChange={e => {
							seInputValue(e.target.value)
							dispatch(setSearchTextContent(e.target.value))
						}}
						onFocus={() => {
							setToggle(!isToggle)
						}}
						onBlur={() => {
							setToggle(!isToggle)
						}}
						type='text'
						placeholder={isToggle ? placeholderValue : ''}
					/>
					<button type='submit'>
						<SearchIcon className={styles.searchIcon} />
					</button>
				</form>
			</div>
			<BarContentPopUp
				show={isNavSubMenu}
				content={onFocusData}
				typeNumber={typeNumber}
				showToggle={setIsNavSubMenu}
			/>
		</div>
	)
}
