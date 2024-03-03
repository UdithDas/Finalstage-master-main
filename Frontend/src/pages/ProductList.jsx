import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios'

const ProductList = () => {

    const [input,setInput]=useState({
        type:''
    });

    const addHandler = (e) => {
        const {name,value}=e.target
        setInput((input) => ({...input,[name]:value}))
        console.log(input)
        }

        const saveInput =(event) =>{
            event.preventDefault();
            axios.post("http://localhost:3005/type",input)
            .then((response) =>{
            alert("Record Saved")
            })
            .catch(err=>console.log(err))
            }

    return (
        <div align="center" className='txt'>
       <h3>Restaurant Type</h3><br/><br/>
       <TextField  label="Restuarant" name='type' variant="outlined" type='text' onChange={addHandler}/><br/><br/>
       <Button align="center" variant='contained' onClick={saveInput}>Submit</Button>
      
    </div>
    );
};

export default ProductList;