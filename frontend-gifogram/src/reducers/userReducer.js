const userReducer = (state={user: {}, blogs: [], loggedIn: false, error: ""}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {user: action.user, loggedIn: true}

        case 'LOGIN_ERROR':
            return {...state, loginError: action.error}

        case 'ADD_POST':
            const blog = { post: action.blog.post, userid: action.blog.userid};
            return { ...state.blogs, blog}


        default:
            return state;
    }

}

export default userReducer;