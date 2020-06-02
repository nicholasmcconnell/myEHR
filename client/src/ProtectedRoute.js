import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth'

export default function ProtectedRoute({ component: Component, ...rest}) {
    return (
        <Route 
            {...rest}  
                render={props => { 
                if(Auth.isAuthenticated()) {
                    
                    return <Component {...rest} {...props} />
                } else{ 
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
        }  }
       />
    )
}
