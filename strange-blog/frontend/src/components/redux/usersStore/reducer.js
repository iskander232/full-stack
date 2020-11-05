function reducer(state, action) {
    return [...state, action.value];
}

export default reducer;