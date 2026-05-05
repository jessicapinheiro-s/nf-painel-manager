import { Outlet } from "react-router-dom"
import Modal from "./components/ui/Modal"

export const Layout = () => {
    return (
        <>
            <Outlet />
            <Modal />
        </>
    )
}