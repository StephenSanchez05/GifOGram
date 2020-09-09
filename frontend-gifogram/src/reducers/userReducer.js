const userReducer = (state={user: {}, blogs: [], loggedIn: false, error: ""}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {...state, user: action.user, loggedIn: true}

        case 'LOGIN_ERROR':
            return {...state, loginError: action.error}

        case 'ADD_POST':
            state.blogs.push(action.blog);
            return {...state}

        case 'GRAB_POST':
            return { ...state, blogs: action.blogs}


        default:
            return state;
    }

}

export default userReducer;