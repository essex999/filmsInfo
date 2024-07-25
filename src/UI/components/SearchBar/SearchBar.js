import { useEffect, useState } from 'react'
import IconArrowDropDownLine from '../../../assets/IconComponents/arrowElectronIcon.js'
import { categories } from '../../../consts.js'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '../../../assets/IconComponents/searchIcon.js'
import { setSearchTextContent } from '../../../redux/slicers/searchMovieParamsSlicer.js'
import { BarContentPopUp } from '../BarContentPopUp/BarContentPopUp.jsx'
import styles from './SearchBar.module.scss'
export const SearchBar = ({ setTrigger }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [isToggle, setToggle] = useState(true)
	const [onFocusData, setOnFocusData] = useState({})
	const placeholderValue = 'Поиск Фильмов и Сериалов'
	const [typeNumber, setTypeNumber] = useState(0)
	const [isNavSubMenu, setIsNavSubMenu] = useState(false)
	const [textcontent, setTextContent] = useState('')
	const pathname = useLocation().pathname

	const searchPage = pathname.split('/').find(el => el === 'search')
	const inputTextContent = useSelector(
		state => state.searchParams.searchTextContent
	)

	useEffect(() => {
		setTextContent(inputTextContent)
	}, [])
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

						dispatch(setSearchTextContent(textcontent))

						if (!searchPage) {
							navigate('/search/1')
						}

						if (setTrigger) {
							setTrigger(Math.random())
						}
					}}
				>
					<input
						className={styles.HeaderInput}
						value={textcontent}
						onChange={e => {
							setTextContent(e.target.value)
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
