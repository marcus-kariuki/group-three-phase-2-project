import { useState } from "react";


const NewPlayer = () => {
    const [type, setType]= useState('sale')
    const [name, setName]= useState('')
    const [height, setHeight]= useState(0)
    const [image, setImage]= useState('')
    const [nationality, setNationality]= useState('')
    const [position, setPosition]= useState('CM')
    const [league, setLeague]= useState('')
    const [dob, setDob]= useState('')
    const [description, setDescription]= useState('')
    const [club, setClub]= useState('')
    const [value, setValue]= useState('')
    const [foot, setFoot]= useState('')
    const [salary, setSalary]= useState(0) 
    return ( 
        <div>
            <form action="POST">
                {/* type-select */}
                <label htmlFor="type" className="form-label">Type</label>
                <select name="" id="type">
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>
                {/* name */}
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" />

                {/* height */}
                <label htmlFor="height" className="form-label">Height</label>
                <input type="number" id="height"/>
                {/* image */}
                <label htmlFor="image" className="form-label">Image</label>
                <input type="image" id="image"/>

                {/* nationality */}
                <label htmlFor="nationality" className="form-label">nationality</label>
                <input type="text" id="nationality"/>

                {/* position */}
                <label htmlFor="position" className="form-label">position</label>
                <input type="text" id="position"/>

                {/* league */}
                <label htmlFor="league" className="form-label">league</label>
                <input type="number" id="league"/>

                {/* dob */}
                <label htmlFor="dob" className="form-label">dob</label>
                <input type="number" id="dob"/>

                {/* description */}
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name="" id="description" cols="30" rows="10"></textarea>

                {/* club */}
                <label htmlFor="club" className="form-label">club</label>
                <input type="number" id="club"/>

                {/* value-number */}
                <label htmlFor="value" className="form-label">value</label>
                <input type="number" id="value"/>

                {/* foot-select */}
                <label htmlFor="foot" className="form-label">Foot</label>
                <select name="" id="foot" >
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                </select>

                {/* salary-number */}
                <label htmlFor="salary" className="form-label">salary</label>
                <input type="number" id="salary"/>


                <button>Add</button>
            </form>
        </div>
     );
}
 
export default NewPlayer;