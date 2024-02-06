import { useState } from "react";

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async(e) => {
		e.preventDefault()

		console.log(email,password)
	}

	return (
		<form className="signup" onSubmit={handleSubmit}>
			<h1>SIGN UP</h1>

			<label>Email : </label>
			<input type="email" onSubmit={(e) => setEmail(e.target.value)} value={email} />

			<label>Password : </label>
			<input type="password" onSubmit={(e) => setPassword(e.target.value)} value={password} />

			<button>SIGN UP</button>
		</form>
	)
}

export default SignUp;