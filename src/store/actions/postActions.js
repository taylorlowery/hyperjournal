export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorUId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorUId,
            createdAt: new Date()
        }).then(() => {
            // then continue with dispatch as normal
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ERROR', err });
        });        
    }
}