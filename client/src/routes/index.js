import {
    Routes,
    Route
} from "react-router-dom"

import LoginPage from "../pages/loginPage"


const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/authenticate' element={<LoginPage />}/>
            <Route path='/' element={<LoginPage />}/>
        </Routes>
    )
}

export default PageRoutes