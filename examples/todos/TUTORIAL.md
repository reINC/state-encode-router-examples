# Steps to apply state-encode-router
1. Add an navigate action in `src/actions/index.js`;
2. Handle navigate action in the main reducer `src/reducers/index.js` to reset the state;
3. Initialize the router and listen to navigation in `src/index.js`;
4. Subscribe to state change and perform navigation in `src/index.js`;
5. Fix nextTodoId in `src/actions/index.js`. This variable is a hidden local state which breaks the design. Use a random id instead.
