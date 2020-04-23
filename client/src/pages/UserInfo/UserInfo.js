import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function UserInfo() {

    return (
        <Container>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="">Name</label>
                    <input type="" class="form-control" placeholder=""/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Birthdate</label>
                    <input type="text" class="form-control"  placeholder="mm/dd/yyyy"/>
                </div>
                <div class="form-group">
                    <label for="">Blood Type</label>
                    <select id="" class="form-control">
                        <option selected>Choose...</option>
                        <option>A-positive</option>
                        <option>A-negative</option>
                        <option>B-positive</option>
                        <option>B-negative</option>
                        <option>AB-positive</option>
                        <option>AB-negative</option>
                        <option>O-positive</option>
                        <option>O-negative</option>
                    </select>
                </div>
                    <div class="form-group">
                    <label for="">Allergies</label>
                    <textarea type="text" class="form-control" id=""/>
                    </div>
                    <div class="form-group">
                    <label for="">Diagnoses</label>
                    <textarea type="text" class="form-control" id=""/>
                    </div>
                    <div class="form-group">
                    <label for="">Family History</label>
                    <textarea type="text" class="form-control" id=""/>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Container>
    )
}

