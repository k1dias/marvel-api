function getCharacters(context) {
    context.commit('getCharacters')
  }

function getCharacter(context, id) {
    context.commit('getCharacter', id)
}

export {
    getCharacters,
    getCharacter
}
