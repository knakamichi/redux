import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){
    // when app is booted up, no action is selected so state returns null (see active book reducer)
    // code below is for when state returns null
    if (!this.props.book){
      return (<div> Select a book to get started... </div>);
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div> Title: {this.props.book.title}</div>
        <div> Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// glue to connect react and redux
function mapStatetoProps(state) {
  // state.activebook => ActiveBook reducer is creating activebook piece of state.
  return {
    book: state.activeBook
  };
}


// promote BookList from a component to a container, - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStatetoProps)(BookDetail);
