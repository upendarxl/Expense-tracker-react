import {useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'




export function AddTransaction() {
const [text, settext] = useState('');
const [amount, setamount] = useState(0);
const [value, setValue] = useState(new Date(null));




const {addTransaction} = useContext(GlobalContext)

const onSubmit = e => {
  e.preventDefault()

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount

  }
  addTransaction(newTransaction)
}



  return (

    <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value= {text} onChange={(e) =>settext(e.target.value)} id="text" placeholder="Enter text..." />
      </div>
     
      

      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" id="amount" value= {amount} onChange={(e) =>setamount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </>
  )
  
}


