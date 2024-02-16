import styles from './index.module.css'
import { username, password } from '../../state'
import MobileNav from '../../components/MobileNav'

export default function Feed() {
	return (
		<div className={styles.container}>
			<header className={styles.header}></header>
			<main className={styles.main}>
				<h1>Feed</h1>
				<div>Username: {username.value && username.value}</div>
				<div>Password: {password.value && password.value}</div>
			</main>
			<MobileNav />
		</div>
	)
}
