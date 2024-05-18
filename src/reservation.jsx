import { useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom";


function Reservation(){
    const [name, setName]=useState()
    const [pid, setpid]=useState()
    const [did, setdid]=useState()
    const [mobileno, setmobileno]=useState()
    const [testname, settestname]=useState()
    const [date, setdate] = useState()
    const [time, settime]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/reservation',{name, pid, did,mobileno, testname, date,time})
        .then(result => {console.log(result)
            navigate('/success')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="background d-flex justify-content-center  vh-100">
            <div className=" w-50">
                <h2>Reservation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                         </div>
                         <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Pid</strong>
                        </label>
                        <input 
                            type="number"
                            placeholder="Enter patient id"
                            autoComplete="off"
                            name="pid"
                            className="form-control rounded-0"
                            onChange={(e) => setpid(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Did</strong>
                        </label>
                        <input 
                            type="number"
                            placeholder="Enter doctor id"
                            autoComplete="off"
                            name="did"
                            className="form-control rounded-0"
                            onChange={(e) => setdid(e.target.value)}
                        />
                    </div>
                   
                   
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Mobile Number</strong>
                        </label>
                        <input 
                            type="number"
                            placeholder="Enter mobile number"
                            autoComplete="off"
                            name="mobileno"
                            className="form-control rounded-0"
                            onChange={(e) => setmobileno(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Testname</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter test name"
                            autoComplete="off"
                            name="testname"
                            className="form-control rounded-0"
                            onChange={(e) => settestname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="dateInput">
                            <strong>Date</strong>
                        </label>
                        <input 
                            type="date"
                            placeholder="Select Date"
                            autoComplete="off"
                            name="date"
                            className="form-control rounded-0"
                            onChange={(e) => setdate(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Time</strong>
                        </label>
                        <input 
                            type="time"
                            step={1}
                            placeholder="Select time"
                            autoComplete="off"
                            name="time"
                            className="form-control rounded-0"
                            onChange={(e) => settime(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">RESERVE</button>
                    </form>
                    
            </div>
        </div>
    );
}
export default Reservation;