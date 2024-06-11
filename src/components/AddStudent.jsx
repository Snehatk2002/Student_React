import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name" : " ",
            "admissionno":" ",
            "rollno" : " ",
            "parentname" : " ",
            
        }
    )
    const inputHandler=(event)=>{
      setData({ ...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                    alert("SUCCESSFULLY ADDED")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
        

    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">NAME</label>
                                    <input type="text" className="form-control"  name='name' value={data.name} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >ADMISSION NO</label>
                                    <input type="text" className="form-control" name='admissionno' value={data.admissionno} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >ROLL NO</label>
                                    <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >PARENT NAME</label>
                                    <input type="text" className="form-control" name='parentname' value={data.parentname} onChange={inputHandler}/>
                                </div>
                                <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>REGISTER</button>
                                    </div>
                                    </center>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent