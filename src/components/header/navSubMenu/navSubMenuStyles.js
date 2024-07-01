import styled from 'styled-components'

export const NavSubMenuGroup = styled.div`
	height: auto;
	width: auto;
	background-color: #222d33;
	position: relative;
	padding: 20px;
	padding-bottom: 80px;
	margin-left: 20px;
	margin-right: 20px;
	box-shadow: inset 0px 4px 7px -2px rgba(0, 0, 0, 1);
`
export const NavSubMenuGroupGenres = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 20px;
`
export const NavSubMenuGroupFilter = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	margin-bottom: 20px;
	margin-right: 140px;
	display: flex;
	gap: 120px;
	flex-direction: row;
	align-items: flex-end;
`
export const NavSubMenuGroupFilterSelectButton = styled.button`
	width: 100%;
	padding: 10px;
	border: 2px solid #0a8b98;
	color: white;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
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

export const FilterText = styled.div`
	color: #fff;

	font-size: 18px;

	padding: 20px 20px 6px 20px;
`
export const YearElement = styled.div`
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`

export const NavSearchButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #00a0b0;
	border: 1px solid #0098a7;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	padding: 11px 10px 11px 10px;
	height: 40px;
	width: 86px;
`
