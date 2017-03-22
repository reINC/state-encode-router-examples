// import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })

// Tutorial step 2: handle navigate action in the main reducer to reset the state
const todoApp = (state = {}, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return todoApp(action.state, {})

    default:
      return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      }
  }
}

export default todoApp
