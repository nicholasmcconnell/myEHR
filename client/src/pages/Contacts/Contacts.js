import React, { useState, useContext } from 'react';
import { Contacts as Forward } from '../../components/Contacts';
import PatientContext from '../../utils/PatientContext';

export default function Contacts() {
    const { patientId, name } = useContext(PatientContext);


    return (
        <div>
            {/* <Forward /> */}
        </div>
    )
}
