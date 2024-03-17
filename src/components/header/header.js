import { useState } from 'react'
import IconArrowDropDownLine from '../Icons/arrowElectronIcon'
import {
	CategoryButton,
	HeaderButtonsGroup,
	HeaderInput,
	HeaderInputGroup,
	HeaderLogo,
	HeaderMain,
	HeaderNav,
} from './headerStyles'
import { NavSubMenu } from './navSubMenu/navSubMenu'
export const Header = () => {
	const categories = ['Фильмы', 'Сериалы', 'Мультфильмы', 'Аниме']

	const [isToggle, setToggle] = useState(true)
	const [isFocused, setFocused] = useState({})
	const placeholderValue = 'Поиск Фильмов и Сериалов'

	return (
		<HeaderMain>
			<HeaderLogo></HeaderLogo>
			<HeaderNav>
				<HeaderButtonsGroup>
					{categories.map((content, index) => (
						<CategoryButton
							onMouseOver={e => {
								setFocused({ focused: true, index: index })
							}}
							onMouseLeave={e => {
								setFocused({ focused: false, index: index })
							}}
							key={index}
						>
							{content}
							<IconArrowDropDownLine index={index} focus={isFocused} />
						</CategoryButton>
					))}
				</HeaderButtonsGroup>

				<HeaderInputGroup>
					<HeaderInput
						onFocus={() => {
							setToggle(!isToggle)
						}}
						onBlur={() => {
							setToggle(!isToggle)
						}}
						type='text'
						placeholder={isToggle ? placeholderValue : ''}
					/>
				</HeaderInputGroup>
			</HeaderNav>
			<NavSubMenu />
		</HeaderMain>
	)
}
