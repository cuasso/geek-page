import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

import UserContext from "../../stores/user/user-context"

const WithAuth = ({ children }) => {
    const userCtx = useContext(UserContext)
    const location = useLocation()

    console.log(userCtx)

    if (!userCtx.token) {
        return <Navigate to="/authenticate" state={{ from: location }} replace />
    }

    return children
}


export default WithAuth