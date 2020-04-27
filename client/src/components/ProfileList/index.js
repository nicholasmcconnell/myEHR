import React from 'react'
import { Link } from 'react-router-dom';

export default function Profiles({name}) {


    return (
        <Link to='/medications' >
            <div className="card box-shadow" style={style}>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p className="card-text"> Access First_Name's information here</p>
                
            </div>
            </div>
        </Link>
    )
}

const style = {
    textDecoration: 'none',
    marginTop: '50px'
}