import styles from './index.module.css'
import useCredentialStore from '../../state'
import { useSignals } from '@preact/signals-react/runtime'
import MobileNav from '../../components/MobileNav'
// import { useEffect } from 'react'

export default function Feed() {
	useSignals()
	const { username, password } = useCredentialStore()
	console.log('Feed')

	return (
		<div className={styles.container}>
			<header className={styles.header}></header>
			<main className={styles.main}>
				<h1>Feed</h1>
				<div>Username: {username}</div>
				<div>Password: {password && password}</div>
			</main>
			<MobileNav />
		</div>
	)
}
