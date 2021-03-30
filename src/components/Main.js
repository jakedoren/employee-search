import React, {useState} from 'react'
import employeedata from '../employee.json'
import './main.css'

const Main = () => {
    const [searchInput, setSearchInput] = useState("")
    


    

    return (
        <div className="main">
            <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search..."/>
            {employeedata.filter((val) => {
                if(searchInput === "") {
                    return (
                        val
                    )
                } else if(val.first_name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                    return val
                }
            }).map((val,key) => {
                return(
                <div key={key} className="employee">
                    <p>{val.first_name}</p> <p>{val.last_name} </p> <p>{val.email}</p> <p>{val.employee_id}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Main
