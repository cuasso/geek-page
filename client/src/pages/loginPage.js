import styled from 'styled-components'
import Login from '../components/login'

const LoginPage = () => (
    <LoginContainer>
        <H2>
            Welcome to the geek page!!! page created by geeks for geeks <br />
            Where you can read all your favorite posts about comics, animes and movies. <br />
            Perhaps you too are encouraged to publish your own articles.
        </H2>
        <Login />
    </LoginContainer>
)

const LoginContainer = styled.div`
    display: flex;
    flex-direction:column;
`
const H2 = styled.h2`
    width:50%;
    margin: 5rem auto;
    text-align: center;

    @media (max-width: 1000px) {
        width:70%;
    }
`

export default LoginPage