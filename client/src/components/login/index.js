import { useState } from "react"
import { LoginContainer } from "./style"
import Selector from "../selector"
import SubmitForm from '../submitForm'
import { login } from "../../services/usersService"


const Login = () => {
    const [singIn, setSingIn] = useState(true)
    const [defaultOption, setdefaultOption] = useState(1)

    const singInForm = {
        inputs: [
            { name: "Mail", type: "text", },
            { name: "Password", type: "password" }
        ],
        button: 'sing in',
        submit: login 
    }

    const signUpForm = {
        inputs: [
            { name: "Name", type: "text", },
            { name: "Mail", type: "text" },
            { name: "Password", type: "password" }
        ],
        button: 'sing up',
        submit: (e) => { console.log(e) }
    }

    const onChangeHandler = (value) => {
        setSingIn(value === 1)
        setdefaultOption(value)
    }

    return (
        <LoginContainer>
            <Selector
                options={['SING IN', 'SING UP']}
                defaultValue={defaultOption}
                onChange={onChangeHandler} />

            <SubmitForm
                inputs={singIn ? singInForm.inputs : signUpForm.inputs}
                button={singIn ? singInForm.button : signUpForm.button}
                submit={singIn ? singInForm.submit : signUpForm.submit}
            />
        </LoginContainer>
    )
}

export default Login