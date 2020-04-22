import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Medications() {
    const [drugs, setDrugs] = useState([])

    //load all drugs and store them 
    useEffect(() => {
      loadDrugs()
    }, [])
  
    //loads all drugs and set them to drugs
    function loadDrugs() {
      API.getDrugs()
        .then(res => 
          console.log(res.data[0])
        )
        .catch(err => console.log(err));
    };

    return (
        
                <h1>{drugs}</h1>
       
    );
}

export default Medications;