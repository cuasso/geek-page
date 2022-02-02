import { useState } from "react"
import styled from "styled-components"
import { SubmitButton } from "../UI/button"
import Input from "../UI/input"
import { LoadingSpinner } from "../UI/spinner"

const SubmitForm = props => {
    const [loading, setLoading] = useState(false)
    const { button, inputs, submit } = props

    const inputsElements = (inputs.map(input =>
        <Input placeholder={input.name} type={input.type} />)
    )

    const onClickHandler = (event) => {
        event.preventDefault();
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <FormContainer>
            {inputsElements}
            <SubmitButton onClick={onClickHandler} minWidth='250px'>
                {loading ? (<LoadingSpinner left='-55%' />) : button}
            </SubmitButton>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: 100%;
`


export default SubmitForm

