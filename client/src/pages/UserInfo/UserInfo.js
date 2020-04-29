import React, { useState } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { ContactInfo } from '../../components/ContactInfo';

export default function UserInfo() {

    const [generalInfo, setGeneralInfo] = useState([]),
        [editGenState, setGenState ]= useState(false);
    
    return (
        <Container classes={'mt-5'}>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <ContactInfo 
                        toggleState={() => setGenState(!editGenState)} 
                        editState={editGenState} 
                        />
                </Col>
           </Row>
        </Container>
    )

    // return (
    //     <Container>
    //         <form>
    //             <div class="form-row">
    //                 <div class="form-group col-md-6">
    //                 <label for="">First Name</label>
    //                 <input type="" class="form-control" placeholder=""/>
    //                 </div>
    //                 <div class="form-group col-md-6">
    //                 <label for="">Last Name</label>
    //                 <input type="" class="form-control" placeholder=""/>
    //                 </div>
    //             </div>
    //             <div class="form-group">
    //                 <label for="inputAddress">Birthdate</label>
    //                 <input type="text" class="form-control"  placeholder="mm/dd/yyyy"/>
    //             </div>
    //             <div class="form-group">
    //                 <label for="">Blood Type</label>
    //                 <select id="" class="form-control">
    //                     <option selected>Choose...</option>
    //                     <option>A-positive</option>
    //                     <option>A-negative</option>
    //                     <option>B-positive</option>
    //                     <option>B-negative</option>
    //                     <option>AB-positive</option>
    //                     <option>AB-negative</option>
    //                     <option>O-positive</option>
    //                     <option>O-negative</option>
    //                 </select>
    //             </div>
    //                 <div class="form-group">
    //                     <label for="">Allergies</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group">
    //                     <label for="">Diagnoses</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group">
    //                     <label for="">Family History</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group row">
    //                     <div class="col-md-6">
    //                         <button type="submit" class="btn btn-primary">Save</button>
    //                     </div>
    //                     <div class="col-md-6">
    //                         <button type="" class="btn btn-primary">Delete</button>
    //                     </div>
    //                 </div>
    //         </form>
    //     </Container>
    // )
}

