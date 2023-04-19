import React from "react";
import {useState} from "react";
import './styles.css';
import axios from "axios";

const Neet = (props)=>{
    const [year,setYear] = useState('');
    const [month,setMonth] = useState('');
    const [shift,setShift] = useState('');
    const onYearChange = (event)=>{
        setYear(event.target.value);
    }
    const onMonthChange = (event)=>{
        setMonth(event.target.value);
    }
    const onShiftChange = (event)=>{
        setShift(event.target.value);
    }
    async function onSubmitHandler (event){
        event.preventDefault();
        const response = await axios.post('http://localhost:5000/neet',{year:year,month:month,shift:shift})
        const data = await response.data;
        props.onClick(data);
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler} className='form'>
                <h1> NEET QN PAPERS</h1>
                <div className="row">
                    <div className="title">
                        <span>Year:</span>
                        <span>Month:</span>
                        <span>Shift:</span>
                    </div>
                    <div className="select">
                        <select name='year' id='year' onChange={onYearChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                        </select>
                        <select name='exam-type' id='exam-type' onChange={onMonthChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Attempt-1'>Attempt-1</option>
                            <option value='Attempt-2'>Attempt-2</option>
                        </select>
                        <select name='exam-type' id='exam-type' onChange={onShiftChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Shift1'>Shift1</option>
                            <option value='Shift2'>Shift2</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Neet;