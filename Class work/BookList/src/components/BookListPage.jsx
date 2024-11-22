import React, { useState } from "react";
import style from "../styles/booklist.module.css";


const BookListPage = ()=>{


    
    const book = ["Name of the wind", "The wise man's fear", "Rafka on the shore", "The Master and the Margarita"] 
    const [bookList, setBookList ] = useState(book)
    const addBook = (event) =>{
        console.log(event)
        event.preventDefault();
        const newBook = event.target[0].value;
        setBookList((prevBooks)=>(
            [...prevBooks, newBook]
        ))//never update state directly
        console.log(newBook);
        event.target[0].value = "";
    }

    const handleDelete = (index)=>{
        setBookList(bookList.filter((_, i)=>(i != index))
    )
    }

    return(


        <div id={style.wrapper}>
            <header>
                <div id={style.pageBanner}>
                <h1 className={style.title}> Book Collections</h1>
                    <p>Books</p>
                    <form id={style.searchBooks}>
                        <input type="text" placeholder="Search books..." />
                    </form>
                </div>
            </header>
            <div id={style.bookList}>
                <h2 className={style.title}>Books to Read</h2>
                <ul>

                    {
                        bookList.map((book, index)=>(
                            <li key={index}>
                                <span className={style.name}>{book}</span>
                                <span onClick={()=>handleDelete(index)} className={style.delete}>delete</span>
                            </li>
                        ))
                    }

                    {/* <li>
                    <span class={style.name}>Name of the Wind</span>
                    <span class={style.delete}>delete</span>
                    </li>
                    <li>
                    <span class={style.name}> The Wise Man's Fear</span>
                    <span class={style.delete}>delete</span>
                    </li>
                    <li>
                    <span class={style.name}> Kafka on the Shore</span>
                    <span class={style.delete}>delete</span>
                    </li>
                    <li>
                    <span class={style.name}> The Master and the Margarita</span>
                    <span class={style.delete}>delete</span>
                    </li> */}
                    
                </ul>
            </div>
            <form onSubmit={addBook} id={style.addBook}>
                <input type="text" placeholder="Add a book..." />
                <button>Add</button>
            </form>

        </div>
    )

};


export default BookListPage;
