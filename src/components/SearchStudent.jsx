import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {
    const [data,setData]=useState(
        {
            "studentname" : " "
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">STUDENT NAME</label>
                            <input type="text" className="form-control" name='studentname' value={data.studentname} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-primary" onClick={readValue}>SEARCH</button>
                        </div>
                        </center>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchStudent