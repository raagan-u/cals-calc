import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowNavbar = ({children}) => {
	const location = useLocation();
	const [ShowNav, setShowNav] = useState(false);
	
	useEffect(()=> {
		if(location.pathname === "/login") {
			setShowNav(false);
		} else {
			setShowNav(true);
		}
	}, [location])

	return (
		<div>{ShowNav && children}</div>
	)
}

export default ShowNavbar;