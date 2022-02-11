import { useState, useContext } from "react"
import { LoginContainer } from "./style"
import Selector from "../selector"
import SubmitForm from '../submitForm'
import { login } from "../../services/usersService"
import UserContext from "../../stores/user/user-context"
import { useLocation, useNavigate } from "react-router-dom"


const Login = () => {
    const [singIn, setSingIn] = useState(true)
    const [defaultOption, setDefaultOption] = useState(1)
    const userCtx = useContext(UserContext)
    const location = useLocation()
    const navigate = useNavigate()

    const singInForm = {
        inputs: [
            { name: "Mail", type: "text", },
            { name: "Password", type: "password" }
        ],
        button: 'sing in',
        submit: login,
        onSuccess: (data) => {
            userCtx.login(data.token, data.user)
            const from = location.state?.from.pathname || '/'
            navigate(from, { replace: true })
        }
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
        setDefaultOption(value)
    }

    return (
        <LoginContainer>
            <Selector
                options={['SING IN', 'SING UP']}
                defaultValue={defaultOption}
                onChange={onChangeHandler} />

            {singIn && <SubmitForm
                inputs={singInForm.inputs}
                button={singInForm.button}
                submit={singInForm.submit}
                onSuccess={singInForm.onSuccess}
            />
            }
            {!singIn && <SubmitForm
                inputs={signUpForm.inputs}
                button={signUpForm.button}
                submit={signUpForm.submit}
            />
            }
        </LoginContainer>
    )
}

export default Login