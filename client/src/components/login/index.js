import { LoginContainer, Selector } from "./style"
import Button from "../../themes/button"
import Input from "../../themes/input"

const Login = () => {

    return (
        <LoginContainer>
            <Selector>
                <p>SIGN IN</p><p>SING UP</p>
            </Selector>

            <Input type="text" placeholder="mail" />
            <Input type="password" placeholder="password" />
            <Button>LOG IN</Button>
        </LoginContainer>
    )
}

export default Login