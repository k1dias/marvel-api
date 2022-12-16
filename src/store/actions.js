function getCharacters(context) {
    context.commit('getCharacters')
}

function getCharacter(context, id) {
    context.commit('getCharacter', id)
}

const setSearchChar = ({ commit }, res) => commit('setSearchChar', res)


export {
    getCharacters,
    getCharacter,
    setSearchChar,
}
