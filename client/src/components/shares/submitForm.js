import PropTypes from "prop-types"
import styled from "styled-components"
import { SubmitButton } from "../UI/button"
import Input from "../UI/input"

const SubmitForm = props => {
    const { button, inputs, onSubmit } = props

    const inputsElements = (inputs.map(input =>
        <Input placeholder={input.name} type={input.type} />)
    )

    return (
        <FormContainer>
            {inputsElements}
            <SubmitButton onSubmit={onSubmit}>
                {button}
            </SubmitButton>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: 100%;
`


export default SubmitForm

