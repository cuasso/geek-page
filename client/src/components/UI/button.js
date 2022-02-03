import styled from "styled-components"
import colors from "../../themes/colors"

export const SubmitButton = props => {
    const { width, height } = props
    return (
        <BaseButton type='submit' style={{ width: width, height: height }} {...props}>
            {props.children}
        </BaseButton>
    )
}

const BaseButton = styled.button`
    display: flex;
    margin: 0 auto;
    font-size: 1rem;
    padding: 1rem 6rem;
    text-transform:uppercase;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;

    ${props => props.type === 'submit' && `
        background-color: ${colors.red};
        border: none;
        color: white;        
        :hover{
            background-color: ${colors.lightRed};
        }`
    }
`