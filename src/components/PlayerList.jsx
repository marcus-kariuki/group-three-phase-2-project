import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";

const PlayerList = ({ players, title }) => {
    let navigate = useNavigate();
    let { id } = useParams();

    const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="card text-bg-dark border-0">
        <img
          src="../images/bg.jpg"
          className="card-img"
          alt="background"
          height="1000px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center bg-dark p-2 text-white bg-opacity-75">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Welcome to DIMBA.org
            </h5>
            <p className="card-text lead fs-4">
              YOUR TRUSTED TRANSFER MARKET APP.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center py-5 text-black fw-bolder text-white">
          {title}
        </h2>
        {/* Search player */}
        <Container >
          <Form.Control size="sm" 
           type="text" 
           placeholder="Search player..."
           onChange={(ev)=> setSearchTerm(ev.target.value)}
          />
        </Container>

        {players.filter((player)=>{
            if (searchTerm === ""){
                return player
            } else if (player.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return player
            }
        }).map((player) => {
          const handleDelete = () => {

            fetch(`https://dimba-api.herokuapp.com/players/${player.id}`, {
              method: "DELETE",
            });
            // .then((res)=> res.json())
            // .then((data)=>{

            // })
          };
          return (
            <div
              key={player.id}
              className="card col-12 col-md-4 col-xl-3 col-xxl-2 text-start bg-dark text-white shadow m-3"
              style={{ width: "18rem" }}
            >
              <img
                src={player.image}
                className="card-img-top"
                alt={player.name}
                style={{
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  height: "325px",
                }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Name: {player.name}</h5>
                <h6>Country:{player.nationality}</h6>
                <h6>Current Club:{player.club}</h6>
                <h6>Offer:{player.type}</h6>
                <h6>Position :{player.position}</h6>

                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      navigate(`/players/${player.id}`);
                    }}
                    className="btn btn-info"
                  >
                    Details
                  </button>
                  <button onClick={handleDelete} className="btn btn-danger">
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerList;
