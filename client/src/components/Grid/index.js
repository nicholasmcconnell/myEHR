import React from 'react'


export const Container = ({ classes, children }) => <div className={classes ? `container ${classes}`: 'container'}>{children}</div>

export const Row = ({ classes, children }) => <div className={classes ? `row ${classes}`: 'row'}>{children}</div>

export const Col = ({ size, classes, children }) => ( 
        <div 
            className={size.split(' ').map( size => `col-${size}`).join(' ')+" "+ classes || ''}>{children}
        </div>
    )
    

export const Collapse = ({ navState, children, id }) => { 
    const classes = navState ? 'navbar-collapse collapse show' : 'navbar-collapse collapse';

     return <div className={classes} id={id}>{children}</div>
}