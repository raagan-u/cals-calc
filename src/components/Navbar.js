import  { Link }  from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout()
  }

	return (	
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <label className="navbar-brand">CALS-CALC</label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
		<Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
		<Link className="nav-link" to="/Log">Log</Link>
        </li>
        <li className="nav-item">
		<Link className="nav-link" to="/Meal">Meal</Link>
        </li>
      </ul>
    </div>
		{user && (
			<div>
				<span style={{"color": "white"}}>{user.email}</span>
				<button id="sign-out" onClick={handleClick} className="btn">LOG OUT</button>
			</div>
		)}
		{!user && (<div>
	<ul className="navbar-nav">
		<li className="nav-item">
			<Link className="nav-link" to="/login">LOG IN</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/signup">SIGN UP</Link>
		</li>
	</ul>
	</div>)}
  </div>
</nav>		
		</div>
	)
}

export default Navbar;