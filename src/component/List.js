import React from 'react'

import { useDispatch , useSelector } from 'react-redux'
import {First} from '../action/Action'
import { useState } from 'react'
import './style.css'



export const List = () => {
const Act =useDispatch()
const[data,  setdata] = useState("")
const[desc,  setdesc] = useState("")
const[dat,  setdat] = useState("")

const star = useSelector(x=>x.Update)





    return (
        <div>
        <div id='list'  style={{border:'solid black 1px'} }>
       
        <div id='txt' >TITLE</div>
       <div> <input onChange={(event)=>{setdata (event.target.value)} }></input></div>
       <div id='txt'>DESCRIPTION</div>
       <div> <input onChange={(event)=>{setdesc (event.target.value)} }></input></div>
       <div  id='txt'>DATE</div>
       <div><input type= 'Date' onChange={(event)=>{setdat (event.target.value)} } ></input></div>
       <button id='listbtn' type="button" class="btn btn-info" onClick={()=>{Act(First({  data ,desc ,dat }))} } >ADD</button>
       {console.log(star)}

            
        </div>
        </div>
    )
}
