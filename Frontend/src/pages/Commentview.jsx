import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Commentview = (props) => {
    var [inputs,setInputs]=useState(props.data)
    
    const inputHandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const savedata =()=>{
      
        if(props.method ==='put'){
          
            axios.put("http://localhost:3005/sedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Typography variant='h5' className='regs'>Registration</Typography><br></br>
            <form>
            <TextField  label="Restuarant" name='restuarant' variant="outlined" type='text' value={inputs.restuarant} onChange={inputHandler} required/><br/><br/>
            <TextField id="cuisine" name='cuisine' label="Cuisine Type" variant="outlined" type='text' value={inputs.cuisine} onChange={inputHandler}/><br/><br/>
            <TextField id="contactno" name='contactno' label="Contact no:" variant="outlined" type='phone' value={inputs.contactno} onChange={inputHandler}/><br/><br/>
            <TextField id="manager" name='manager' label="Manager" variant="outlined" type='text' value={inputs.manager} onChange={inputHandler}/><br/><br/>
            <TextField id="nooftables" name='nooftables' label="No of Tables for Booking" variant="outlined" type='number' value={inputs.nooftables} onChange={inputHandler}/><br/><br/>
            <TextField id="dis" name='district' label="District" variant="outlined" type='text' value={inputs.district} onChange={inputHandler}/><br/><br/>
            <TextField id="uid" name='userid' label="User id" variant="outlined" type='text' value={inputs.userid} onChange={inputHandler}/><br/><br/>
            <TextField id="pwd" name='password' label="Password" variant="outlined" type='password' value={inputs.password} onChange={inputHandler}/><br/><br/>
            <Button variant="outlined" onClick={savedata}>Register</Button>
            </form>
    </div>
  )
}

export default Commentview
