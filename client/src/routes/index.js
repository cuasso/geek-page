import {
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import styled from "styled-components"

import WithAuth from '../components/WithAuth'
import LoginPage from "../pages/loginPage"
import PostsPage from "../pages/postsPage"

const PageRoutes = () => {
    return (
        <RouteContainer>
            <Routes>
                <Route path='/authenticate' element={<LoginPage />} />
                <Route path='/posts' element={<WithAuth><PostsPage /></WithAuth>} />
                <Route path='*' element={<Navigate to="/posts" />} />
            </Routes>
        </RouteContainer>
    )
}

const RouteContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 2rem 0 10rem 0;
`

export default PageRoutes