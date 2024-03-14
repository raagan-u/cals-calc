import  { Link }  from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    logout()
  }

  const toggleCollapsed = () => {
	setCollapsed(!collapsed);
  }

  	if (!user) return
	return (	
		<div>
			<nav className={`left-navbar ${collapsed ? 'collapsed' : '' }`}>
				<button className="collapse-button" onClick={toggleCollapsed}>{collapsed ? '☰' : 'x'}</button><br /><br />
				<ul className={`nav-list ${collapsed ? 'collapsed' : '' }`}>
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/Log">Log</Link>
					</li>
				</ul>
				{!user && !collapsed && <div>
					<ul>
						<li className="nav-item">
							<Link to="/Login">Login</Link>
						</li >
						<li className="nav-item">
							<Link to="/Signup">SignUP</Link>
						</li>
					</ul>
				</div>}
				{user && !collapsed && <div>
					<br></br><button className="nav-item" onClick={handleClick}>LOGOUT</button>
				</div>}	
			</nav>
		</div>
	)
}

export default Navbar;