import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li
          key= {book.title}
          onClick = {() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// glue to connect react and redux
function mapStatetoProps(state) {
  // whatever returned here will show up as props in booklist (function inside react-redux library)
  return {
    books: state.books
  };
}

// anything returned from this function is will end up as props on book-list container
function mapDispatchtoProps(dispatch) {
  // whenever selectBook (action creator) is called, the result here should be passed to all of the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote BookList from a component to a container, - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStatetoProps, mapDispatchtoProps)(BookList);

// why do we write like this?
