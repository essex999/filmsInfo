import styled from 'styled-components'

export const MainWrapper = styled.div`
	background-color: #09161c;
	width: 1000px;
	min-height: 100%;
`

export const Bar = styled.div`
	margin-left: 10px;
	width: 200px;
	background-color: #1c1c1c;
	margin: 20px;
	box-sizing: border-box;
	height: 586px;
`

export const BarButton = styled.button`
	height: 25px;
	width: 65px;
	outline: none;
	background-color: transparent;
	border: 2px solid #4c5053;
	padding-left: 5px;
	padding-right: 5px;
	border-radius: 10px;
	color: #a9aeb4;

	&:hover {
		background-color: #4c5053;
	}
`
