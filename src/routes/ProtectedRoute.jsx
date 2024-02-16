import { Navigate } from 'react-router-dom'
import { username, password } from '../state'

function ProtectedRoute({ children }) {
	if (!username.value & !password.value) {
		return <Navigate to='/' replace />
	}

	return children
}

export default ProtectedRoute
