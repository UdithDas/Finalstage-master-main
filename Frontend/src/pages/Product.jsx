import React, { useState } from 'react';
import { Button, Rating} from '@mui/material'
import './Product.css'
import axios from 'axios'

const Product = () => {

    const [input,setInput]=useState({
        rating:''
    });

    const selectHandler = (e) => {
        const {name,value}=e.target
        setInput((input) => ({...input,[name]:value}))
        console.log(input)
        }

        const saveData =(event) =>{
            alert("Hai")
            event.preventDefault();
            axios.post("http://localhost:3005/rate",input)
            .then((response) =>{
            alert("Record Saved")
            })
            .catch(err=>console.log(err))
            }

    

    return (
        <div align="center" className='txt'>
       <h3>Restaurant Rating</h3><br/><br/>
       Rating Approved by Govt&nbsp;&nbsp;<Rating name="rating" defaultValue={3} size='small' onChange={selectHandler} /><br/><br/>
       <Button align="center" variant='contained' onClick={saveData}>Submit</Button>
      
    </div>
    );
};

export default Product;