import React from 'react';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="../images/bg.jpg" className="card-img" alt="background" height="1100px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center bg-dark p-2 text-white bg-opacity-75">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Welcome to DIMBA.org</h5>
                        <p className="card-text lead fs-4">YOUR TRUSTED TRANSFER MARKET APP.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;