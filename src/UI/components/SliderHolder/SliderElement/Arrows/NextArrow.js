import styles from './Arrows.module.scss'

export const NextArrow = props => {
	const { onClick } = props
	const show = true

	if (!show) {
		return
	}

	return (
		<div className={`${styles.nextArrow} ${styles.common}`} onClick={onClick}>
			{' '}
			<svg viewBox='0 0 24 24' fill='currentColor' height='30px' width='30px'>
				<path d='M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
			</svg>
		</div>
	)
}
