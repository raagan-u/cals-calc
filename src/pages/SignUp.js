import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import "../assets/login.css"
const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {signup, error, isLoading} = useSignup()

	const handleSubmit = async(e) => {
		e.preventDefault()

		await signup(email, password)
	}

	return (
		<body>
			<div className="container">
				<form className="login" onSubmit={handleSubmit}>

					<div className="input-box">
						<input type="email"  placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
					</div>
					<div className="input-box">
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
					</div>
					<button disabled={isLoading}>Sign Up</button>
					{error && <div className="error">{error}</div>}
					<div className="signup"><p>Already Registered? </p><Link to="/login"><button>Login</button></Link></div>
				</form>	
			</div>
		</body>
	)
}

export default SignUp;