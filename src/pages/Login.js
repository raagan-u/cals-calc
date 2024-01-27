const LoginVal = () => {
	return (
		<div class="container">
		<div class="login_card">
			<form>
				<p><label class="txt-labels">Username </label> <input type="text" id="uname"></input><br/><br/></p>
				<p><label class="txt-labels">Password </label> <input type="password" id="password"></input><br/><br/></p>
				<button type="submit" class="fctl-btn">LOGIN</button>
			</form>
		</div>
		</div>
	)
}

export default LoginVal;