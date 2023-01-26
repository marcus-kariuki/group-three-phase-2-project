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
    const [foot, setFoot]= useState('Right')
    const [salary, setSalary]= useState(0)
    const [pace, setPace]= useState(0)
    const [shooting, setShooting]= useState(0)
    const [passing, setPassing]= useState(0)
    const [dribbling, setDribbling]= useState(0)
    const [defending, setDefending]= useState(0)
    const [physical, setPhysical]= useState(0)
    
    const handleSubmit = (ev)=>{
        ev.preventDefault()
        const player = {type, name, height, image, nationality, position, league, dob, description, club, value, foot, salary, pace, shooting, passing, dribbling, defending, physical} 

        fetch('http://localhost:3000/players', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(player)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=> console.log(data))
    }


    return ( 
        <div className=" player-form  border border-dark-subtle border-2 rounded ">
            <h2>Add a New Player to the Transfer Pool</h2>
            <form action="POST" onSubmit={handleSubmit}>
                {/* type-select */}
                <div className="mb-3">
                <label htmlFor="type" className="form-label">Type</label>
                <select 
                    className="form-select"
                    name="" 
                    id="type"
                    value={type}
                    onChange={(ev)=> setType(ev.target.value)}
                    
                >
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>
                </div>


                {/* name */}
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(ev)=> setName(ev.target.value)}
                />
                </div>

                {/* height */}
                <div className="mb-3">
                <label htmlFor="height" className="form-label">Height</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="height"
                    value={height}
                    onChange={(ev)=> setHeight(ev.target.value)}
                />
                </div>

                {/* image */}
                <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input 
                    className="form-control"
                    type="url" 
                    id="image"
                    value={image}
                    onChange={(ev)=>setImage(ev.target.value)}
                />
                </div>

                {/* nationality */}
                <div className="mb-3">
                <label htmlFor="nationality" className="form-label">nationality</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="nationality"
                    value={nationality}
                    onChange={(ev)=> setNationality(ev.target.value)}
                />
                </div>

                {/* position */}
                <div className="mb-3">
                <label htmlFor="position" className="form-label">position</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="position"
                    value={position}
                    onChange={(ev)=> setPosition(ev.target.value)}
                />
                </div>

                {/* league */}
                <div className="mb-3">
                <label htmlFor="league" className="form-label">league</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="league"
                    value={league}
                    onChange={(ev)=>setLeague(ev.target.value)}
                />
                </div>

                {/* dob */}
                <div className="mb-3">
                <label htmlFor="dob" className="form-label">dob</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="dob"
                    value={dob}
                    onChange={(ev)=> setDob(ev.target.value)}
                />
                </div>


                {/* club */}
                <div className="mb-3">
                <label htmlFor="club" className="form-label">club</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="club"
                    value={club}
                    onChange={(ev)=> setClub(ev.target.value)}
                />
                </div>

                {/* value-number */}
                <div className="mb-3">
                <label htmlFor="value" className="form-label">value</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="value"
                    value={value}
                    onChange={(ev)=> setValue(ev.target.value)}
                />
                </div>

                {/* foot-select */}
                <div className="mb-3">
                <label htmlFor="foot" className="form-label">Foot</label>
                <select
                    className="form-select" 
                    name="" 
                    id="foot" 
                    value={foot}
                    onChange={(ev)=> setFoot(ev.target.value)}
                >
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                </select>
                </div>

                {/* salary-number */}
                <div className="mb-3">
                <label htmlFor="salary" className="form-label">salary</label>
                <input 
                    className="form-control"
                    type="text" 
                    id="salary"
                    value={salary}
                    onChange={(ev)=> setSalary(ev.target.value)}
                />
                </div>

                {/* pace */}
                <div className="mb-3">
                <label htmlFor="pace" className="form-label">pace</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="pace"
                    value={pace}
                    onChange={(ev)=> setPace(ev.target.value)}
                />
                </div>

                {/* shooting */}
                <div className="mb-3">
                <label htmlFor="shooting" className="form-label">shooting</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="shooting"
                    value={shooting}
                    onChange={(ev)=> setShooting(ev.target.value)}
                />
                </div>

                {/* passing */}
                <div className="mb-3">
                <label htmlFor="passing" className="form-label">passing</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="passing"
                    value={passing}
                    onChange={(ev)=> setPassing(ev.target.value)}
                />
                </div>

                {/* dribbling */}
                <div className="mb-3">
                <label htmlFor="dribbling" className="form-label">dribbling</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="dribbling"
                    value={dribbling}
                    onChange={(ev)=> setDribbling(ev.target.value)}
                />
                </div>

                {/* defending */}
                <div className="mb-3">
                <label htmlFor="defending" className="form-label">defending</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="defending"
                    value={defending}
                    onChange={(ev)=> setDefending(ev.target.value)}
                />
                </div>


                {/* physical */}
                <div className="mb-3">
                <label htmlFor="physical" className="form-label">physical</label>
                <input 
                    className="form-control"
                    type="number" 
                    id="physical"
                    value={physical}
                    onChange={(ev)=> setPhysical(ev.target.value)}
                />
                </div>

                {/* description */}
                <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea 
                    className="form-control"
                    name="" 
                    id="description" 
                    cols="50" 
                    rows="3"
                    value={description}
                    onChange={(ev)=> setDescription(ev.target.value)}
                    ></textarea>
                </div>

                <button className="btn btn-primary">Add</button>
            </form>
        </div>
     );
}
 
export default NewPlayer;