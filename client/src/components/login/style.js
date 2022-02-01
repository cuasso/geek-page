import styled from "styled-components"
import colors from "../../themes/colors"

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 500px;
    height: 500px;
    margin: 15px auto;
    margin-top: 3rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;
    align-items: center;
    overflow: hidden;
    > * {
        margin: 1em 0;
    }    
`
export const Selector = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: ${colors.red};
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    margin-bottom: 2rem;
`

export const Option = styled.p`

`