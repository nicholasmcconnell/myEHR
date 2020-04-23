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
        <button className={props.classes} {...props} />
    );
  }