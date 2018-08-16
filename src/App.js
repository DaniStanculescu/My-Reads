import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage.js'
import Books from './BookPage'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render= {() =>(
          <Books />
        )} />
        <Route path='/search' render ={ () =>(
          <SearchPage />
         )}/>
      </div>
    )
  }
}

export default BooksApp
