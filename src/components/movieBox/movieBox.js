import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './movieBox.module.css'

export const MovieBox = props => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div className={styles.elementBox}>
			<div className={styles.imageBox}>
				{isLoading && <div className={styles.skeleton}></div>}
				<img
					className={styles.image}
					style={{ display: isLoading ? 'none' : 'block' }}
					src={props.poster}
					onLoad={() => {
						setIsLoading(false)
						console.log('load')
					}}
				></img>
			</div>

			<div className={styles.movieInfo}>
				<Link className={styles.movieName}>{props.name}</Link>

				<div className={styles.movieSpecs}>
					{props.year},{props.countries ? props.countries[0].name : ''},
					{props.genres[0].name || ''}
				</div>
			</div>
		</div>
	)
}
