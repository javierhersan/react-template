import { Navigate } from 'react-router-dom'
import { username as _username, password as _password } from '../state'
import { useSignals } from '@preact/signals-react/runtime'

function ProtectedRoute({
	children,
	username = _username,
	password = _password,
}) {
	useSignals()
	console.log('ProtectedRoute')
	if (!username.value && !password.value) {
		return <Navigate to='/' replace />
	}
	return children
}

export default ProtectedRoute
