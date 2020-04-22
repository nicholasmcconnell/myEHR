import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Medications() {
    const [drugs, setDrugs] = useState([])

    //load all drugs and store them 
    useEffect(() => {
        loadDrugs()
    }, [])

    //loads all drugs and set them to drugs... needs to be fixed later so that there's one to load drugs and then one for the btn (modal?)
    function loadDrugs() {
        API.getDrugInfo()
            .then(res =>
                setDrugs(res.data[0].shortdef[0]) 
            )
            .catch(err => console.log(err));
    };

    return ( 
      <p>{drugs}</p>
    );
}

export default Medications;