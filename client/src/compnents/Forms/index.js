import React from 'react'



export function Input(props) {
    return (
        <input className="form-control" {...props} />
    );
  }
  
export function TextArea(props) {
    return (
        <textarea className="form-control" {...props} />
    );
  }

export function Button(props) {
    return (
        <button className="btn btn-primary btn-lg" onSubmit={props.submitEmail} {...props} />
    );
  }