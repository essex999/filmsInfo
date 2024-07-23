import React from 'react'
import styles from './MovieCard.module.scss'
export const MovieCard = ({
	poster,
	genres,
	name,
	alternativeName,
	year,
	countries,
}) => {
	const getDataFromArray = data => {
		return (
			(data === 'countries' ? countries : genres)
				// eslint-disable-next-line array-callback-return
				.map((el, index) => {
					if (index < 3) {
						return el.name
					}
				})
				.filter(el => el !== undefined)
		)
	}
	return (
		<>
			<div className={styles.sliderContent}>
				<img className={styles.img} alt='movieImage' src={poster.previewUrl} />

				<h4 className={styles.h}>{name ? name : alternativeName}</h4>
				<p className={styles.text}>
					{`${year}, ${getDataFromArray('countries')}, ${getDataFromArray()}`}
				</p>
			</div>
		</>
	)
}
