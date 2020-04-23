import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function UserInfo() {

    return (
        <Container>
            <div class="col-lg-6" id="profileButtons">
                <button type="button" class="btn btn-info btn-lg btn-block">Profile 1</button>
                <button type="button" class="btn btn-info btn-lg btn-block">Profile 2</button>
                <button type="button" class="btn btn-info btn-lg btn-block">Profile 3</button>
                <button type="button" class="btn btn-info btn-lg btn-block">Profile 4</button>
                <button type="button" class="btn btn-info btn-lg btn-block">Profile 5</button>
            </div>
            
        </Container>
    )
}
