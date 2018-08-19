import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BookPage from './BookPage'
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {

  state ={
    query: '',
    searchResults:[],
    filteredResults:[]
  }


filterResult= book =>{
  let newBooks =[];
  for(let b of this.state.searchResults)
  {
    if(b.imageLinks)
      newBooks.push(b);
  }
  this.setState({
    filteredResults:newBooks
  })
}



///here we update the query
  updateQuery = (query) =>{
    this.setState({
      query:query
    })
    this.updateSearchedBooksInList(query);

  }

updateSearchedBooksInList = (query) => {
  if(query){
    BooksAPI.search(query).then((books) =>{
       if(books.error){
         this.setState({searchResults:[]})
          this.filterResult(this.state.searchResults)
       }
       else{
         this.setState({searchResults:books})
      //   this.filterResult(this.state.searchResults)
       this.filterResult(this.state.searchResults)

       }

    })
  }else{
    this.setState({searchResults:[]})
 this.filterResult(this.state.searchResults)
    //this.filterResult(this.state.searchResults)

  }


}



  render() {
console.log(this.state.filteredResults)
    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange ={(event) => this.updateQuery(event.target.value)}
              />

          </div>
        </div>
        <div className="search-books-results">
          {this.state.filteredResults.length>0 &&(
            <BookPage booksPage = {this.state.filteredResults}
             changeShelf = {this.props.changeShelf}
             />
          )}



        </div>
      </div>
    )
  }

}



export default SearchPage
