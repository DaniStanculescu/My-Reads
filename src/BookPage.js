import React , { Component } from 'react'
import { Link } from 'react-router-dom'

class Books extends Component {


  state ={

  }


  render() {

  let  currentlyReading ='';
  let read = '';
  let wantToRead = '';
  let none ='';

for (let book of this.props.booksPage)
{
  console.log(book.shelf)
}



    return(
    <div className='bookshelf-books'>
      <ol className='books-grid'>
      {this.props.booksPage.map((book,index)=>(
        <li key={index}>
         <div  className="book">
           <div className="book-top">
             <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
             <div className="book-shelf-changer">
               <select
                 name='shelf'
                 onChange= {e => this.props.changeShelf(e,book)}
                 value = {book.shelf ? book.shelf : 'none'}
                 >
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading" >Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read </option>
                 <option value="none">None </option>
               </select>
             </div>
           </div>
           <div className="book-title">{book.title}</div>
           <div className="book-authors">{book.authors}</div>
           <div className="book-shelf-selected">Current shelf <span className='book-selected-name'>{book.shelf}</span></div>
         </div>
       </li>
      ))}

     </ol>
    </div>
)

  }

}


export default Books
