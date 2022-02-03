import { useState, forwardRef } from "react"
import styled from "styled-components"
import colors from "../../themes/colors"

const Input = forwardRef((props, ref) => {
    const [inputEmpty, setInputEmpty] = useState('')
    const { name, type, placeholder } = props

    const inputHandler = event => setInputEmpty(event.target.value)

    return (
        <Container>
            <InputField type={type} onChange={inputHandler} name={name} ref={ref} />
            <Placeholder show={inputEmpty}>{placeholder}</Placeholder>
            <Underline show={inputEmpty} />
        </Container>
    )
})

export default Input

const Container = styled.div`
    width: 75%; 
    margin: 3rem auto; 
    position: relative;
`

const InputField = styled.input`
    color: ${colors.black}; 
    width: 100%; 
    box-sizing: border-box; 
    letter-spacing: 1px;
    border: 0; 
    padding: 8px 0; 
    border-bottom: 1px solid ${colors.grey}; 
    background-color: transparent;

    &:focus{ outline: none; }
    
    &:focus ~ label
    {
      top: -13px; 
      font-size: 12px; 
      color: ${colors.lightRed}; 
      transition: 0.3s;
    }
    
    :focus ~ span
    {
      width: 100%; 
      transition: 0.4s; 
      left: 0;
    }
`

const Placeholder = styled.label`
    position: absolute; 
    left: 0; 
    width: 100%; 
    top: 9px; 
    color: ${colors.greyTwo}; 
    transition: 0.3s; 
    z-index: -1; 
    letter-spacing: 0.5px;
    ${props => props.show && `
        top: -13px; 
        font-size: 12px; 
        transition: 0.3s;
    `}
`

const Underline = styled.span`
    position: absolute;
    bottom: 0; 
    left: 50%; 
    width: 0; 
    height: 2px; 
    background-color: ${colors.lightRed}; 
    transition: 0.4s;
`