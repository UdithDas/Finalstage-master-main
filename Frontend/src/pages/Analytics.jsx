import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import './Analytics.css'
import Commentview from './Commentview';





const Analytics = (props) => {  
    var[selected,setSelected]=useState()
var[update,setUpdate]=useState(false)
var [user,setUser] = useState([]);
useEffect(()=>{
axios.get("http://localhost:3005/view")
.then(response =>{
console.log(response.data)
setUser(response.data) })
.catch(err=>console.log(err))
},[])

const deleteValues=(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:3005/remove/"+id)
    .then((response)=>{
    alert("Deleted")
    //to reload window
    window.location.reload(false);
    })}
    
const updateValues = (value) =>{
        console.log("updated:",value)
        setSelected(value);
        setUpdate(true);
        }
        var result=      
        <div className='table-container'>
     
<Typography variant='h5'>User Details</Typography><br></br>

<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table" className='table'>
<TableHead>
<TableRow>
<TableCell>Restuarant ID</TableCell>
<TableCell>Restuarant</TableCell>
<TableCell>Cuisine</TableCell>
<TableCell>Type</TableCell>
<TableCell>Rating</TableCell>
<TableCell>Contact no</TableCell>
<TableCell>Manager</TableCell>
<TableCell>No of Tables</TableCell>
<TableCell>Country</TableCell>
<TableCell>State</TableCell>
<TableCell>District</TableCell>
<TableCell>User id</TableCell>
<TableCell>Status</TableCell>
<TableCell>Edit</TableCell>
<TableCell>Delete</TableCell>
</TableRow>
</TableHead>
<TableBody>
{user.map((value,index)=>{
return(
<TableRow key={index}>
<TableCell>{value.restuarantid}</TableCell>
<TableCell>{value.restuarant}</TableCell>
<TableCell>{value.cuisine}</TableCell>
<TableCell>{value.type}</TableCell>
<TableCell>{value.rating}</TableCell>
<TableCell>{value.contactno}</TableCell>
<TableCell>{value.manager}</TableCell>
<TableCell>{value.nooftables}</TableCell>
<TableCell>{value.country}</TableCell>
<TableCell>{value.state}</TableCell>
<TableCell>{value.district}</TableCell>
<TableCell>{value.userid}</TableCell>
<TableCell>{value.status}</TableCell>
<TableCell><ModeEditIcon color='success' onClick={()=>updateValues(value)}/></TableCell>
<TableCell><DeleteForeverIcon color='error'
onClick={()=>deleteValues(value._id)}/></TableCell>
</TableRow>
)
})}
</TableBody>
</Table>
</TableContainer>

</div>
   
if(update)
    result=<Commentview data={selected} method='put'/>
    return (result)
    
};

export default Analytics;