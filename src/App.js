import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage.js'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
   books:[]
  }

  componentDidMount() {
   BooksAPI.getAll().then(books => {
     this.setState({ books });
   });
 }

  //book si shelf

 updateToNewShelf = (book,shelf) =>{
   BooksAPI.update(book,shelf)
            .then(updated => (BooksAPI.getAll().then((books) =>{
              this.setState({
                books:books
              })
            })))

 }

 changeShelf = (e, filteredBook) => {
    const books = this.state.books;
    const shelf = e.target.value;
    filteredBook.shelf = e.target.value;
    this.setState({
      books
    });
    this.updateToNewShelf(filteredBook,shelf)
  }



  render() {
    console.log(this.state.books)

    return (
      <div className="app">
        <Route exact path='/' render= {() =>(
          <ListBooks allBooks = {this.state.books}
            changeShelf = {this.changeShelf}
            />
        )} />
        <Route path='/search' render ={ () =>(
          <SearchPage changeShelf = {this.changeShelf}/>
         )}/>
      </div>
    )
  }
}

export default BooksApp
