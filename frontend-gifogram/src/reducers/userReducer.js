const userReducer = (state={user: {}, loggedIn: false}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {user: action.user, loggedIn: true}

        default:
            return state;
    }

}

export default userReducer;