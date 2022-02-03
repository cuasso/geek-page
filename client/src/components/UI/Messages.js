import styled, { css } from "styled-components"
import colors from "../../themes/colors"

export const WarningMessage = ({ children }) => {
    return <Message type='warning'>{children}</Message>
}

const Message = styled.p`
    width: 85%;
    height: auto;
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 1.5rem;
    overflow-wrap: break-word;
    text-align: center;

    ${props => props.type === 'warning' && css`        
        color: ${colors.brown};
        background-color: ${colors.lightYellow};
    `}
`