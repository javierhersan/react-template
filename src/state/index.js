import { signal } from "@preact/signals-react"

export const username = signal(null)
export function setUsername (key) {
	username.value = key
}

export const password = signal(null)
export function setPassword (key) {
	password.value = key
}
