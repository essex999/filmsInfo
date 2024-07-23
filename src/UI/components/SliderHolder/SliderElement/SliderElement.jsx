import styles from './SliderElement.module.scss'

export const SliderElement = ({
	name,
	alternativeName,
	year,
	countries,
	genres,
	poster,
}) => {
	return (
		<div className={styles.sliderElement}>
			<img className={styles.img} src={poster.previewUrl} alt='imgabe' />
		</div>
	)
}
