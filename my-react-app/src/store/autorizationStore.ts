import { makeObservable, action, runInAction } from 'mobx'

class AutorizationModel {
    isAuthenticated = false
    constructor() {
        makeObservable(this, {
            setIsAuthenticated: action,
        })
    }

    setIsAuthenticated = (value: boolean) => {
        runInAction(() => {
            this.isAuthenticated = value
        })
    }
}

const autorizationStore = new AutorizationModel()
export default autorizationStore
