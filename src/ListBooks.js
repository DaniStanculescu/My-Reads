import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import BookPage from './BookPage'


class ListBooks extends Component {
  state={

  }



  render(){
    let wantToRead = this.props.allBooks.filter((book) => book.shelf === 'wantToRead') ;
    let read = this.props.allBooks.filter((book) => book.shelf === 'read') ;
    let currentlyReading = this.props.allBooks.filter((book) => book.shelf === 'currentlyReading') ;

    return(
      <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                      {currentlyReading.length>0 && (
                      <BookPage booksPage = {currentlyReading}
                        changeShelf = {this.props.changeShelf} />
                    )}
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                      {wantToRead.length > 0 && (
                                             <BookPage booksPage = {wantToRead}
                                               changeShelf = {this.props.changeShelf}/>
                                           )}

                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                      {read.length>0 && (
                           <BookPage booksPage = {read}
                             changeShelf = {this.props.changeShelf} />
                         )}
                  </div>
              </div>

        <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
       </div>
    )
  }

}

export default ListBooks
