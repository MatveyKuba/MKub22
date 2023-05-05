const storageToken = {
    get() {
        try {
            return localStorage.getItem('token')
        } catch {
            alert('There is not this item in LS')
        }
    },

    set(token: string) {
        localStorage.setItem('token', token)
    },
}

export default storageToken
