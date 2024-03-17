import styled from 'styled-components'

export const NavSubMenuGroup = styled.div`
	height: auto;
	width: auto;
	background-color: #222d33;
	border: 1px solid red;
	position: relative;
	top: 0px;
	left: 0px;
	padding: 20px;
`
export const NavSubMenuGroupGenres = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 20px;
`
export const NavSubMenuGroupFilter = styled.div``
export const NavSubMenuGroupFilterSelectButton = styled.button`
	width: 100%;
	padding: 10px;
	border: 2px solid #0a8b98;
	color: white;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const NavSubMenuGroupButton = styled.button`
	color: #ffffff;

	border: none;
	outline: none;
	background-color: transparent;

	width: 164px;
	display: flex;
	align-items: center;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`
export const NavSubMenuGroupButtonList = styled.div`
	overflow: auto;
	height: 200px;
	padding: 10px;
	border-left: 2px solid #0a8b98;
	border-top: 2px solid #0a8b98;
	border-right: 2px solid #0a8b98;
	color: white;
	background-color: black;
`
export const ButtonGroup = styled.div`
	height: auto;
	width: 174px;
`
