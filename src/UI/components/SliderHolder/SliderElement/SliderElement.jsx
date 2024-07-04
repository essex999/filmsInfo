import styles from './SliderElement.module.scss'

export const SliderElement = () => {
	return (
		<>
			<div className={styles.imgElement}>
				<img
					className={styles.img}
					src='https://kinogo.uk/uploads/mini/short/12/a5e08b5d2ee172f11bdacda9c4fe16.jpg'
				/>
			</div>

			<h4 className={styles.h}>Падение империи</h4>
			<p className={styles.text}>2024, США, Фэнтези</p>
		</>
	)
}
