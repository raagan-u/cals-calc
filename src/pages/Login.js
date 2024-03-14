import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "../assets/login.css"
import { Link } from "react-router-dom"

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login,error,isLoading } = useLogin();
		
	const handleSubmit = async(e) => {
		e.preventDefault()
		await login(email,password)
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
					<button disabled={isLoading}>Login</button>
					{error && <div className="error">{error}</div>}
					<div className="signup"><p>Not Registered? </p><Link to="/signup"><button>Sign Up</button></Link></div>
				</form>	
			</div>
		</body>
	)
}

export default Login;