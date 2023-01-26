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
        <div className=" player-form container text-center d-flex justify-content-around m-5 p-5 border border-dark-subtle border-2 rounded ">
            <form action="POST">
                {/* type-select */}
                <div className="mb-3">
                <label htmlFor="type" className="form-label ">Type</label>
                <select name="" id="type">
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>
                </div>


                {/* name */}
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" />
                </div>

                {/* height */}
                <div className="mb-3">
                <label htmlFor="height" className="form-label">Height</label>
                <input type="number" id="height"/>
                </div>

                {/* image */}
                <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="image" id="image"/>
                </div>

                {/* nationality */}
                <div className="mb-3">
                <label htmlFor="nationality" className="form-label">nationality</label>
                <input type="text" id="nationality"/>
                </div>

                {/* position */}
                <div className="mb-3">
                <label htmlFor="position" className="form-label">position</label>
                <input type="text" id="position"/>
                </div>

                {/* league */}
                <div className="mb-3">
                <label htmlFor="league" className="form-label">league</label>
                <input type="number" id="league"/>
                </div>

                {/* dob */}
                <div className="mb-3">
                <label htmlFor="dob" className="form-label">dob</label>
                <input type="number" id="dob"/>
                </div>


                {/* club */}
                <div className="mb-3">
                <label htmlFor="club" className="form-label">club</label>
                <input type="number" id="club"/>
                </div>

                {/* value-number */}
                <div className="mb-3">
                <label htmlFor="value" className="form-label">value</label>
                <input type="number" id="value"/>
                </div>

                {/* foot-select */}
                <div className="mb-3">
                <label htmlFor="foot" className="form-label">Foot</label>
                <select name="" id="foot" >
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                </select>
                </div>

                {/* salary-number */}
                <div className="mb-3">
                <label htmlFor="salary" className="form-label">salary</label>
                <input type="number" id="salary"/>
                </div>


                {/* description */}
                <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name="" id="description" cols="50" rows="3"></textarea>
                </div>

                <button>Add</button>
            </form>
        </div>
     );
}
 
export default NewPlayer;