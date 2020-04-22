import React from 'react'

        
export const Container = ({ classes, children }) => <div className={`container ${classes}`}>{children}</div>

export const Collapse = ({ classes, children, id }) => <div className={classes} id={id}>{children}</div>

export const Row = ({ classes, children }) => <div className={`row ${classes}`}>{children}</div>

export const Col = ({ size, classes, children }) => {
return ( <div 
    className={size.split(' ').map( size => `col-${size}`).join(' ')
    +" "+ classes}>{children}</div>
 )
}