import { createContext, useState } from "react";

const UserContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token, user) => { },
})

const retrieveStoredUser = () => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : {}
}


export const UserProvider = props => {
    let loggedUser = retrieveStoredUser()
    const [user, setUser] = useState(loggedUser)

    const login = (token, user) => {
        const data = { token, user }
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
    }

    const userContext = {
        token: user.token,
        user: user.user,
        login: login
    }

    return <UserContext.Provider value={userContext}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext