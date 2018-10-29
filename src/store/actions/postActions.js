export const createPost = (post) => {
    return (dispatch, getState) => {
        // make async call to db


        // then continue with dispatch as normal
        dispatch({ type: 'CREATE_POST', post });
    }
}