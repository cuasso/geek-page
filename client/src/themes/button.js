import styled from "styled-components";
import colors from './colors'

const Button = styled.button`
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: ${colors.red};
    color : white;
    border: none;

    :hover {
        background-color: ${colors.lightRed};
    }
`

export default Button