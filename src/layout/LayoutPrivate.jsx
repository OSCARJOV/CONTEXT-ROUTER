import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const LayoutPrivate = () => {

    const { user, setUser } = useUserContext();

    const navigate = useNavigate()

    useEffect(() => {
        console.log(user);
        if(!user){
            navigate("/")
        }
    }, [user]);

    //OPCION 2
    //EN LUGAR DE USEeFFECT --- return <>{user ? <Outlet/> : <Navigate to="/" /> } </>;

    return (
        <>
        <Outlet/>  
        {/* //ESTO ES PARA QUE DEVUELVA EL LayoutPrivate */}
        </>
    )}

export default LayoutPrivate


