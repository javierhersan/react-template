import { signal, effect } from "@preact/signals-react"

export const username = signal(null)
export function setUsername (key) {
	username.value = key
}

export const password = signal(null)
export function setPassword (key) {
	password.value = key
}

effect(()=>{console.log("Username signal: ", username.value)})
effect(()=>{ console.log("Password signal: ", password.value)})

