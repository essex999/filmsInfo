import { useState } from 'react'
import ListArrow from '../../Icons/listArrow'
import {
	ButtonGroup,
	NavSubMenuGroup,
	NavSubMenuGroupButton,
	NavSubMenuGroupButtonList,
	NavSubMenuGroupFilter,
	NavSubMenuGroupFilterSelectButton,
	NavSubMenuGroupGenres,
} from './navSubMenuStyles'

export const NavSubMenu = () => {
	const genres = [
		'Вестерны',
		'Семейные',
		'Фэнтези',
		'Биографические',
		'Арт-хаус',
		'Боевики',
		'Военные',
		'Детективы',
		'Криминал',
		'Приключения',
		'Драмы',
		'Спортивные',
		'Фантастика',
		'Комедии',
		'Мелодрамы',
		'Триллеры',
		'Ужасы',
		'Мюзиклы',
		'Музыкальные',
		'Исторические',
		'Документальные',
		'Эротика',
		'Детские',
		'Путешествия',
		'Познавательные',
		'Театр',
		'Концерт',
		'Стендап',
		'Короткометражные',
		'Русские',
		'Украинские',
		'Зарубежные',
	]

	const years = []
	for (let year = 1906; year <= 2024; year++) {
		years.push(year)
	}
	const [isYear, setYear] = useState('За все время')
	return (
		<NavSubMenuGroup>
			<NavSubMenuGroupGenres>
				{genres.map((element, index) => (
					<NavSubMenuGroupButton key={index}>{element}</NavSubMenuGroupButton>
				))}
			</NavSubMenuGroupGenres>
			<NavSubMenuGroupFilter>
				<ButtonGroup>
					<NavSubMenuGroupButtonList>
						{years.map(element => (
							<div>{element}</div>
						))}
					</NavSubMenuGroupButtonList>
					<NavSubMenuGroupFilterSelectButton>
						{isYear} <ListArrow />
					</NavSubMenuGroupFilterSelectButton>
				</ButtonGroup>
			</NavSubMenuGroupFilter>
		</NavSubMenuGroup>
	)
}
