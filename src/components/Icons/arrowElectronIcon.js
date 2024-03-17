import { useEffect, useState } from 'react'

function IconArrowDropDownLine(props) {
	const [isTarget, setTarget] = useState(false)

	useEffect(() => {
		props.focus.index === props.index && props.focus.focused === true
			? setTarget(true)
			: setTarget(false)
	}, [props])
	return (
		<svg
			viewBox='0 0 24 24'
			fill='white'
			height='25px'
			width='25px'
			tabIndex='0'
			style={
				isTarget
					? {
							transition: 'transform 0.2s ease',
							transform: 'rotate(180deg) ',
							outline: 'none',
					  }
					: {
							transition: 'transform 0.2s ease',
							transform: 'rotate(0deg)',
							outline: 'none',
					  }
			}
		>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z' />
		</svg>
	)
}

export default IconArrowDropDownLine
