import { useState, useEffect, useRef } from 'react';


//used track previous states for comparison purposes. ex use:  previousItem = usePrevious(itemInput.property),
 export const usePrevious = value => {

        const ref = useRef();

        useEffect(() => {
        ref.current = value;
        }, [value]);

    return ref.current;
}

//force the re-rendering of state.
export const useForceUpdate = () => {
    const [value, setValue] = useState(0); 
    return () => setValue(value => ++value); // update the state to force render
}