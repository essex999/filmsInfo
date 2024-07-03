
import styles from './Arrows.module.scss'

export const  PrevArrow = (props) =>{

	const {  onClick } = props;
	const show = false


if (!show) {
	return
}

	return (
		<div className={`${styles.prevArrow} ${styles.common} ${styles.transform}`}    onClick={onClick} ><svg
	viewBox="0 0 24 24"
			fill="currentColor"
			height= '30px'
		width= '30px'
	  
	>
		<path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
	</svg></div>
	)
}