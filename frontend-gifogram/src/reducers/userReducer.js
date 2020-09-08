const userReducer = (state={user: {}, blogs: [], loggedIn: false, error: ""}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {user: action.user, loggedIn: true, blogs: []}

        case 'LOGIN_ERROR':
            return {...state, loginError: action.error}

        case 'ADD_POST':
            state.blogs.push(action.blog);
            return {...state}


        default:
            return state;
    }

}

export default userReducer;