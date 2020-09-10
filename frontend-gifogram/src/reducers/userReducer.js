const userReducer = (state={user: {}, blogs: [], gifs: [], loggedIn: false, error: ""}, action) => {

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

        case 'ADD_GIF':
            state.gifs.push(action.gifs);
            return {...state}

        case 'GRAB_GIF':
            return { ...state, gifs: action.gifs}


        default:
            return state;
    }

}

export default userReducer;