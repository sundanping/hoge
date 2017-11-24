
export default {
  SET_LIST: (state, { type, list }) => {
    state.Lists[type] = list
  },
  PUSH_LIST: (state, { type, list }) => {
    state.Lists[type] = state.Lists[type].concat(list)
  },
  SET_CATEGORIES: (state, { type, data }) => {
    state.Categories[type] = data
  },
}
