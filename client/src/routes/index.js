import {
    Routes,
    Route
} from "react-router-dom"

import WithAuth from '../components/WithAuth'
import LoginPage from "../pages/loginPage"
import PostsPage from "../pages/postsPage"

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/authenticate' element={<LoginPage />} />
            <Route path='/' element={<WithAuth><PostsPage /></WithAuth>}
            />
        </Routes>
    )
}

export default PageRoutes