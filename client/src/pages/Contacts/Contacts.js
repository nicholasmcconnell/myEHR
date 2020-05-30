import React, { useState, useContext } from 'react';
import { Contacts as Forward } from '../../components/Contacts';
import PatientContext from '../../utils/PatientContext';

export default function Contacts() {
    const { _currentValue } = useContext(PatientContext);
  console.log(PatientContext._currentValue, _currentValue)

    return (
        <div>
            {/* <Forward /> */}
        </div>
    )
}
