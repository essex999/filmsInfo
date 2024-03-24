import styled from 'styled-components'

export const HeaderMain = styled.div`
	height: 80px;
	width: 100%;
	background-color: #222d33;
`

export const HeaderLogo = styled.div`
	height: 40px;
	width: 100%;
	background-color: #060f13;
`
export const HeaderNav = styled.div`
	height: 40px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const HeaderButtonsGroup = styled.div`
	gap: 10px;
	display: flex;
`

export const CategoryButton = styled.button`
	color: #ffffff;

	border: none;
	outline: none;
	background-color: transparent;
	height: auto;
	width: auto;
	display: flex;
	align-items: center;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`
export const HeaderInputGroup = styled.div``
export const HeaderInput = styled.input`
	border: none;
	outline: none;
	background-color: transparent;
	border-bottom: 1px solid #bdc0c2;
	width: 200px;
	padding-left: 5px;
	padding-right: 5px;
	color: #ffff;
	&::placeholder {
		color: #bdc0c2;
		text-align: center;
	}
`
