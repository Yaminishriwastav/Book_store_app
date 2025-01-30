import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const API_URL ="https://reinvented-nostalgic-reminder.glitch.me/books"

const Book =()=>{
    const{user}=useAuth();
    const[books,setBooks]=useState([]);

    useEffect(()=>{
        if (!user) return;

        axios
        .get(API_URL,{headers:{Authorization:`Bearer${user.token}`}})
        .then((response)=>{
            setBooks(response.data);
        })
        .catch((error)=> console.log("error fetching books:", error));

    },[user]);

    return(
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book)=>(
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Book;