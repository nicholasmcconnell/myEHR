import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  Button } from "../../components/Forms";


export function PatientHandler({ confirmed, isConfirmed }) {

    if (confirmed) {
        return (
              <div className={"remove"}>
                <Button
                  className="btn minus"
                  style={{ float: "left" }}
                  onClick={() => {
                    isConfirmed(!confirmed);
                  }}
                >
                  <i className="fas fa-ban" /> Cancel
                </Button>
              </div>
            );
          } else {
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
                      isConfirmed(!confirmed);
                    }}
                  >
                    <i class="fas fa-user-plus"></i> New Patient
                  </Link>
                  </div>
                  <div className={"remove"}>
                    <Button className="btn minus"
                      style={{ float: "left" }}
                      onClick={() => {
                        isConfirmed(!confirmed);
                    }}
                   >
                    <i className="fas fa-user-minus"/> Remove Patient
                  </Button>
                </div>
              </div>
            );
    }
}

