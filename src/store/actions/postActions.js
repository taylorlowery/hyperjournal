export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Tater',
            authorLastName: 'Lowery',
            authorId: 1337,
            createdAt: new Date()
        }).then(() => {
            // then continue with dispatch as normal
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ERROR', err });
        });        
    }
}