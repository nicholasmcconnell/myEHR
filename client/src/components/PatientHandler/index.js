import React from 'react'
import { Link } from 'react-router-dom';
import {  Button } from "../../components/Forms";


export function PatientHandler({ removeState, toggleRemoveState, confirmed, cancel }) {

    if (removeState) {
      if (confirmed) {
        return (
              <div className={"remove"}>
                <Button
                  className="btn minus"
                  style={removeState ? { float: "left", color: "tomato"} : {float: "left"}}
                  onClick={cancel}
                >
                  <i className="fas fa-hand-point-right" /> last chance to cancel
                </Button>
              </div>
            );
          } else {
        return (
              <div className={"remove"}>
                <Button
                  className="btn minus"
                  style={removeState ? { float: "left", color: "tomato"} : {float: "left"}}
                  onClick={() => {
                    toggleRemoveState(!removeState);
                  }}
                >
                  <i className="fas fa-ban" /> Cancel
                </Button>
              </div>
            );
          } 
        }else {
            return (
              <div>
                <div className={"add"}>
                  <Link to={{
                 pathname:'/ehr',
                 state: { patientId: "" }
                }} 
                    className="btn plus"
                    style={{ float: "right" }}
                    onClick={() => {
                      toggleRemoveState(!removeState);
                    }}
                  >
                    <i class="fas fa-user-plus"></i> New Patient
                  </Link>
                  </div>
                  <div className={"remove"}>
                    <Button className="btn minus"
                      style={{ float: "left" }}
                      onClick={() => {
                        toggleRemoveState(!removeState);
                    }}
                   >
                    <i className="fas fa-user-minus"/> Remove Patients
                  </Button>
                </div>
              </div>
            );
    }
}

