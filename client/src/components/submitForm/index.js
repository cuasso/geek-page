import { useRef, useState } from "react"
import styled from "styled-components"
import to from 'await-catch';
import { SubmitButton } from "../UI/button"
import Input from "../UI/input"
import { LoadingSpinner } from "../UI/spinner"
import { WarningMessage } from "../UI/Messages";

const SubmitForm = props => {
    const inputsRefs = useRef([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { button, inputs, submit, onSuccess, onError } = props

    const inputsElements = (inputs.map((input, index) =>
        <Input ref={el => inputsRefs.current[index] = el}
            key={`${input.name}-${index}`}
            name={input.name.toLowerCase()}
            placeholder={input.name}
            type={input.type} />)
    )

    const onClickHandler = async (event) => {
        event.preventDefault();
        setLoading(true)
        setError(false)

        let body = {}
        inputsRefs.current.forEach(input => body[input.name] = input.value)
        const [err, data] = await to(submit(body))
        setLoading(false)

        if (err) {
            setError(true)
            setErrorMessage(err)
            onError()
        }

        onSuccess(data)
    }

    return (
        <FormContainer>
            {inputsElements}
            {error && <WarningMessage>{errorMessage}</WarningMessage>}
            <SubmitButton onClick={onClickHandler} width='250px' height='50px'>
                {loading ? (<LoadingSpinner />) : button}
            </SubmitButton>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: 100%;
`


export default SubmitForm

