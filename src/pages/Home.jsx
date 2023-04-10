import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext"

const Home = () => {
    
    const {user, setUser} = useUserContext();

    const navigate = useNavigate()

    const Login = () => {
        setUser(true)
        navigate('/dashboard')  //me envia al dashboard
    }
    
    return (
        <>
        <h1>Home</h1>
        <button onClick={Login}>Login</button>
        </>
    )

}

export default Home