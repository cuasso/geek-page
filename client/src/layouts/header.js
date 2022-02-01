import styled from "styled-components"
import colors from "../themes/colors"

const Header = () => (
    <HeaderContainer>
        <Title>The Geek Page</Title>
    </HeaderContainer>
)

const HeaderContainer = styled.div`
    display: grid;
    align-items: center;    
    background: ${colors.red};
    min-height: 100px;
`

const Title = styled.h1`
    font-size: 2rem;
    color: ${colors.yellow};
    margin: 0 auto;
`

export default Header