import { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { genres } from '../../../consts'
import { getMovieByParams } from '../../../query/api'
import ListArrowIcon from '../../Icons/listArrow'
import {
	ButtonGroup,
	FilterText,
	NavSearchButton,
	NavSubMenuGroup,
	NavSubMenuGroupButton,
	NavSubMenuGroupButtonList,
	NavSubMenuGroupFilter,
	NavSubMenuGroupFilterSelectButton,
	NavSubMenuGroupGenres,
	YearElement,
} from './navSubMenuStyles'

export const NavSubMenu = props => {
	const [genre, setGenre] = useState('')
	const [year, setYear] = useState('За все время')
	const [isShowList, setIshowList] = useState(false)

	const getMovie = useMutation(
		['getMovie'],
		(year, genre) => getMovieByParams(year, genre),
		{
			onSuccess: data => {
				console.log(data)
			},
		}
	)

	const getMovieHandleCLick = () => {
		getMovie.mutate({ year, genre })
	}

	const years = []
	for (let year = 2024; year > 1906; year--) {
		years.push(year)
	}

	const listRef = useRef(null)
	if (props.show === false) {
		return
	}
	return (
		<NavSubMenuGroup>
			<NavSubMenuGroupGenres>
				{genres.map((element, index) => (
					<NavSubMenuGroupButton
						onClick={() => {
							setGenre(element)
						}}
						key={index}
					>
						{element}
					</NavSubMenuGroupButton>
				))}
			</NavSubMenuGroupGenres>
			<NavSubMenuGroupFilter>
				<FilterText>Выберите жанр и год</FilterText>
				<ButtonGroup
					onMouseLeave={() => {
						setIshowList(false)
					}}
				>
					<NavSubMenuGroupButtonList
						ref={listRef}
						style={{ display: isShowList ? 'block' : 'none' }}
					>
						{years.map((element, index) => (
							<YearElement
								key={index}
								onClick={() => {
									setYear(element)
									setIshowList(false)
								}}
							>
								{element}
							</YearElement>
						))}
					</NavSubMenuGroupButtonList>
					<NavSubMenuGroupFilterSelectButton
						onClick={() => {
							setIshowList(!isShowList)
						}}
					>
						{year} <ListArrowIcon />
					</NavSubMenuGroupFilterSelectButton>
				</ButtonGroup>
				<NavSearchButton
					onClick={() => {
						getMovieHandleCLick()
					}}
				>
					Поехали!
				</NavSearchButton>
			</NavSubMenuGroupFilter>
		</NavSubMenuGroup>
	)
}
