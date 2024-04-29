import styles from './index.module.css'
import { username as _username, password as _password } from '../../state'
import { useSignals } from '@preact/signals-react/runtime'
import MobileNav from '../../components/MobileNav'
// import { useEffect } from 'react'

export default function Feed({ username = _username, password = _password }) {
	useSignals()
	console.log('Feed')
	// useEffect(() => {
	// 	setInterval(() => {
	// 		username.value = null
	// 		password.value = null
	// 	}, 10000)
	// }, [])

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
