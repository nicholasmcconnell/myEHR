import React from 'react'
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

export default function Profiles({name, id }) {


    return (
        <Link to={{
            pathname:'/ehr',
            state: { patientId: id }
        }}
            style={{textDecoration: 'none'}} >
            <div className="card box-shadow mt-5">
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p className="card-text"> Access {name}'s information here</p>
            </div>
            </div>
        </Link>
    )
}
