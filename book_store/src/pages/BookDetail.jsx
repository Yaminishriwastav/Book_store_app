import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails=()=>{
    const {id} =useParams();
    const{book,setBook}=useState(null);

    useEffect(()=>{
        axios.get("https://reinvented-nostalgic-reminder.glitch.me/books/ ${id}")
           .then ((response)=>{
            setBook(response.data);
        });
        },[id]);

        if(!book) return <p>Loading...</p>
 return(
    <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>Author:{book.author}</p>
    </div>
 );

};

export default BookDetails;