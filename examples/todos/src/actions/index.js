// Tutorial step 5: Fix nextTodoId. This variable is a hidden local state which breaks the design. Use a random id instead.
// let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: Math.floor(Math.random() * 0x100000000), // nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// Tutorial step 1: add an navigate action
export const navigate = (state) => ({
  type: 'NAVIGATE',
  state
})
