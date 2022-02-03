import { useRef, useState } from "react"
import styled from "styled-components"
import { SubmitButton } from "../UI/button"
import Input from "../UI/input"
import { LoadingSpinner } from "../UI/spinner"

const SubmitForm = props => {
    const inputsRefs = useRef([])
    const [loading, setLoading] = useState(false)
    const { button, inputs, submit } = props

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

        let body = {}
        inputsRefs.current.forEach(input => body[input.name] = input.value)
        const result = await submit(body)
        console.log(result)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <FormContainer>
            {inputsElements}
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

