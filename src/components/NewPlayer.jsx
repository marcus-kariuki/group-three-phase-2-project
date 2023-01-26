import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';





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
        <div className="player-form">
        <Form action="POST" onSubmit={handleSubmit}>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Names</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Names" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridClub">
              <Form.Label>Club</Form.Label>
              <Form.Control type="text" placeholder="Club Name" />
            </Form.Group>
          </Row>

           <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLeague">
              <Form.Label>League</Form.Label>
              <Form.Control type="text" placeholder="Enter League" />
            </Form.Group>

    
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>D.O.B</Form.Label>
              <Form.Control type="date" placeholder="yy-m-d" />
            </Form.Group>
          </Row>

    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="number/text" placeholder="salary" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridDeal">
              <Form.Label>Deal</Form.Label>
              <Form.Select defaultValue="Sale">
                <option>Sale</option>
                <option>Loan</option>
              </Form.Select>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridMarketValue">
              <Form.Label>Market Value</Form.Label>
              <Form.Control type="number/text" placeholder="" />
            </Form.Group>
          </Row>

            
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control type="number/text" placeholder="height" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridFoot">
              <Form.Label>Strong Foot</Form.Label>
              <Form.Select defaultValue="Right">
                <option>Right</option>
                <option>Left</option>
              </Form.Select>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridNationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Control type="text" placeholder="nationality" />
            </Form.Group>
    
    
            <Form.Group as={Col} controlId="formGridPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" placeholder="position" />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="url" placeholder="copy image url" />
            </Form.Group>
            


            <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridPace">
              <Form.Label>Pace</Form.Label>
              <Form.Control type="number" placeholder="Pace" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridShooting">
              <Form.Label>Shooting</Form.Label>
              <Form.Control type="number" placeholder="Shooting" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassing">
              <Form.Label>Passing</Form.Label>
              <Form.Control type="number" placeholder="passing" />
            </Form.Group>

          </Row>

          <Row className="mb-3">
                
                <Form.Group as={Col} controlId="formGridDribbling">
                  <Form.Label>Dribbling</Form.Label>
                  <Form.Control type="number" placeholder="dribbling" />
                </Form.Group>
    
    
                <Form.Group as={Col} controlId="formGridDefending">
                  <Form.Label>Defending</Form.Label>
                  <Form.Control type="number" placeholder="defending" />
                </Form.Group>
    
    
                <Form.Group as={Col} controlId="formGridPhysical">
                  <Form.Label>Physical</Form.Label>
                  <Form.Control type="number" placeholder="physical" />
                </Form.Group>
    
              </Row>

              <Row>

              <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder="description" style={{height:'100px'}}/>
                </Form.Group>

              </Row>


    
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
        </div>
      );
}
 
export default NewPlayer;

