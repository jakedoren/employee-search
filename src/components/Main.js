import React, {useState} from 'react'
import employeedata from '../employee.json'
import './main.css'

const Main = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filteredArray, setFilteredArray] = useState(employeedata)
    


    

    return (
        <div className="main">
            <div>{filteredArray.length}</div>
            <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search..."/>
            <div className="employee-head-wrapper">
                <div className="employee-head">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Employee ID</p>
            </div>
            </div>
            
            { setFilteredArray(employeedata.filter((val) => {
                if(searchInput === "") {
                    return (
                        val
                    )
                } else if(val.first_name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                    return val
                }
            }))
            .map((val,key) => {
                return(
                    <div className="employee-wrapper">
                        <div key={key} className="employee">
                            <p>{val.first_name}</p> <p>{val.last_name} </p> <p>{val.email}</p> <p>{val.employee_id}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Main
