const userReducer = (state={user: {}, loggedIn: false, error: ""}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {user: action.user, loggedIn: true}

        case 'LOGIN_ERROR':
            return {...state, loginError: action.error}

        default:
            return state;
    }

}

export default userReducer;