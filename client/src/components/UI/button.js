import styled from "styled-components"
import colors from "../../themes/colors"

export const SubmitButton = props => {
    const { minWidth } = props
    return (
        <BaseButton type='submit' style={{ minWidth: minWidth }} {...props}>
            {props.children}
        </BaseButton>
    )
}

const BaseButton = styled.button`
    display: block;
    margin: 0 auto;
    font-size: 1rem;
    padding: 1rem 6rem;
    text-transform:uppercase;
    border-radius: 2rem;

    ${props => props.type === 'submit' && `
        background-color: ${colors.red};
        border: none;
        color: white;        
        :hover{
            background-color: ${colors.lightRed};
        }`
    }
`