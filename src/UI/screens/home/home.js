import { SearchBar } from '../../components/SearchBar/SearchBar'
import styles from './home.module.scss'
export const Home = () => {
	return (
		<div className={styles.wrapper}>
			<SearchBar />
			<div className={styles.dataContainer}></div>
		</div>
	)
}
