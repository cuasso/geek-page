export const getUser = () => {
    const data = localStorage.getItem('user')
    const user = data ? JSON.parse(data) : {}
    return user.user
}

export const getToken = () => {
    const data = localStorage.getItem('user')
    const user = data ? JSON.parse(data) : {}
    return user.token
}

export const deleteToken = () => {
    localStorage.removeItem('user')
}