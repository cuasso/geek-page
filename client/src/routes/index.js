import {
    Routes,
    Route,
    Navigate
} from "react-router-dom"

import WithAuth from '../components/WithAuth'
import LoginPage from "../pages/loginPage"
import PostsPage from "../pages/postsPage"

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/authenticate' element={<LoginPage />} />
            <Route path='/posts' element={<WithAuth><PostsPage /></WithAuth>} />
            <Route path='*' element={<Navigate to="/posts" />} />
        </Routes>
    )
}

export default PageRoutes