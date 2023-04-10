import { Outlet } from "react-router-dom"

const LayoutRoot = () => {
    return (
        <>
        <p>nav</p>
        <Outlet/>
        <p>Footer</p>
        </>
    )
}

export default LayoutRoot
