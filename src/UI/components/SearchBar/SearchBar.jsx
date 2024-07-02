import { useState } from 'react'
import IconArrowDropDownLine from '../../../assets/IconComponents/arrowElectronIcon.js'
import { categories } from '../../../consts.js'
import { BarContentPopUp } from '../BarContentPopUp/BarContentPopUp.jsx'
import styles from './SearchBar.module.scss'
export const SearchBar = () => {
	const [isToggle, setToggle] = useState(true)
	const [onFocusData, setOnFocusData] = useState({})
	const placeholderValue = 'Поиск Фильмов и Сериалов'
	const [typeNumber, setTypeNumber] = useState(0)
	const [isNavSubMenu, setIsNavSubMenu] = useState(false)
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

				<div>
					<input
						className={styles.HeaderInput}
						onFocus={() => {
							setToggle(!isToggle)
						}}
						onBlur={() => {
							setToggle(!isToggle)
						}}
						type='text'
						placeholder={isToggle ? placeholderValue : ''}
					/>
				</div>
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
