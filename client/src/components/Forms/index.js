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
        <button {...props} >
          {props.children}
        </button>
    );
  }
  export function LoggerBtn({ btnType }) { 
    
      return (
        <Button className={'btn btn-primary btn-lg btn-block'} 
        type="submit">
          {btnType}
        </Button>
      )
  }
