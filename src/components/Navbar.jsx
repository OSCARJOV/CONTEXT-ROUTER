import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UserContex, useUserContext } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useUserContext(); // lo destructuro para traer el hook

    //console.log(useUserContext()); // con esta funcion llamo a todo el metodo
    return (
        <nav>
            <NavLink to="/">Home</NavLink> |

            {user && (
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <button onClick={() => setUser(false)}>LogOut</button>
                </>
            )}
        </nav>
    )
}
export default Navbar