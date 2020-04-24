import React, { useEffect, useState } from "react";
import { Container, Row, Col } from '../../components/Grid';
import "./Medications.css";
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
                console.log(res.data)
            )
            .catch(err => console.log(err));
    };

    return ( 
        <Container>
    <div class="table-responsive">
                <table class="table">
                    <tbody>
                            <tr class="accordion-toggle collapsed" id="accordion1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
                                <td class="expand-button"></td>
                                <td>Amlodipine</td>

                            </tr>
                            <tr class="hide-table-padding">
                            <td></td>
                            <td colspan="3">
                            <div id="collapseOne" class="collapse in p-3">
                            <div class="row">
                                <div class="col-2">Pill Description</div>
                                <div class="col-6">value 1</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Dosage</div>
                                <div class="col-6">value 2</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Frequency</div>
                                <div class="col-6">value 3</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Reason</div>
                                <div class="col-6">value 4</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Pharmacy</div>
                                <div class="col-6">value 3</div>
                            </div>
                            </div></td>
                            </tr>
                            <tr class="accordion-toggle collapsed" id="accordion1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
                                <td class="expand-button"></td>
                                <td>Metformin</td>

                            </tr>
                            <tr class="hide-table-padding">
                            <td></td>
                            <td colspan="3">
                            <div id="collapseOne" class="collapse in p-3">
                            <div class="row">
                                <div class="col-2">Drug Code</div>
                                <div class="col-6">value 1</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Dosage</div>
                                <div class="col-6">value 2</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Frequency</div>
                                <div class="col-6">value 3</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Reason</div>
                                <div class="col-6">value 4</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Pharmacy</div>
                                <div class="col-6">value 3</div>
                            </div>
                            </div></td>
                            </tr>
                        </tbody>
                </table>
                </div>
            </Container>
    );
}

export default Medications;