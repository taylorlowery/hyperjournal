const initState = {
    posts: [
        {id: '1', title: 'First Hyperpost', content:'Here goes nothing... sending my thoughts into the cyber-aether.'},
        {id: '2', title: 'Love in a Time of Computer Virus', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor reprehenderit facere autem corporis, saepe minus iste rerum quas recusandae accusantium quaerat sed atque unde vel iusto adipisci tempore! Iusto.'},
        {id: '3', title: '"Here\'s hacking at you, cyber-kid"', content:'My review of Casablanca if it were in the matrix.'}
    ]
}
const postReducer = (state = initState, action) => {
    return state;
}

export default postReducer;