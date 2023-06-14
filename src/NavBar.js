import { NavLink } from "react-router-dom"

function NavBar(){
    return (
    <div className="navbar">
        <h1>Cryptocurrency Popularity Contest</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/Assets">Assets</NavLink>
        <NavLink to="/Submit">Submit</NavLink>
        
    </div>
    )
}

export default NavBar