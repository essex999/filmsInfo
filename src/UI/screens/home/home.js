import { SearchBar } from '../../components/SearchBar/SearchBar'
import SliderHolder from '../../components/SliderHolder/SliderHolder'
import styles from './home.module.scss'
export const Home = () => {
	return (
		<div className={styles.wrapper}>
			<SearchBar />
			<div className={styles.dataContainer}>
				 <SliderHolder></SliderHolder>
			</div>
		</div>
	)
}
