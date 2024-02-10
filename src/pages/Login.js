import { useState } from "react"

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
		
	const handleSubmit = async(e) => {
		e.preventDefault()
		console.log(email,password)
	}
		
	return (
		<form className="login" onSubmit={handleSubmit}>
			<h1>SIGN UP</h1>
		
			<label>Email : </label>
			<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
		
			<label>Password : </label>
			<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
		
			<button>LOGIN</button>
		</form>
	)
}

export default Login;