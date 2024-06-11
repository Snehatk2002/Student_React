import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewStudent = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
        axios.get("").then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <center>
                <h2>STUDENTS</h2>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">ADMISSION NO</th>
                                        <th scope="col">ROLL NO</th>
                                        <th scope="col">PARENT NAME</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(
                                (value, index) => {
                                    return <tr>
                                        <th scope="row">{value.name}</th>
                                        <td>{value.admissionno}</td>
                                        <td>{value.rollno}</td>
                                        <td>{value.parentname}</td>
                                      </tr>
                                }
                                    )
                            }
                                    </tbody>
                                  </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent