import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li key= {book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStatetoProps)(BookList);

// why do we write like this?
