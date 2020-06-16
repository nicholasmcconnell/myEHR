import React from 'react'


export const Input = props => <input className="form-control" {...props} />

  
export const TextArea = props =>  <textarea className="form-control" {...props} />
    

export const Button = props => <button {...props} >{props.children}</button>


export const Messenger = ({ msg, color }) => <p style={{color: color}}>{msg}</p>


export const LoggerBtn = ({ btnType }) => { 
    return (
      <Button className={'btn btn-primary btn-lg btn-block'} 
      type="submit">
        {btnType}
      </Button>
    )
}
