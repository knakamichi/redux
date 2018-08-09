// State argument is not an application state, only the state this reducer is responsible for.
// state = null -> if the state argument is undefined, define it as null (es6 statement)
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

      // don`t mutate state! ex bad code below
      // state.title = book.title
      // return state
  }

  return state;
}
