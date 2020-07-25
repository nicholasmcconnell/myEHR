import React, { useState } from "react";
import { Col } from "../../components/Grid";
import { NewContact } from "../../components/NewContact";
import { Input, Button } from "../../components/Forms";

export function Contacts({
  data,
  name,
  target,
  remove,
  newContact,
  toggleNew,
  newTarget,
  toggleState,
  formSubmit
}) {

  const [ confirmed, isConfirmed ] = useState(false),

    formatPhoneNumberLink = number => number ? number.replace(/[^\d]/g, '') : "",
  
    getNewContact = nextContact => {
      if (nextContact) {
        return (
          <NewContact
            target={newTarget}
            toggleState={toggleNew}
            formSubmit={formSubmit}
          />
        );
      }
    },

    confirmRemoval = i => {
      if (confirmed) {
        return (
          <div className={"remove"}>
            <Button
              type="button"
              className="btn btn-danger"
              style={{ float: "right" }}
              onClick={remove.bind(null, i, () => {isConfirmed(!confirmed)})}
            >
              <i className="fas fa-user-times"> </i> Confirm Delete
            </Button>
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
          <div className={"remove"}>
            <Button
              className="btn minus"
              style={{ float: "left" }}
              onClick={() => {
                isConfirmed(!confirmed);
              }}
            >
              <i className="fa fa-minus" /> Remove Contact
            </Button>
          </div>
        );
      }
    };

  function renderContacts(contacts) {
    return contacts.map((contact, i) => {
      if (contact.edit) {
        return (
          <div key={i} className={"mt-5"}>
            <Col size={"md-12"}>
              <Button
                className="fas fa-backspace fa-2x"
                style={confirmed ? { ...toggleBtn, color: "white" } : { ...toggleBtn, color: "#d9534f" }}
                onClick={toggleState.bind(null, i)}
              />
            </Col>
            <form>
              <div className={"form-row"}>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Contact for</label>
                  <Input
                    value={contact.contact}
                    name="contact"
                    placeholder="Dr, Pharmacy, etc.."
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Office or Business Name</label>
                  <Input
                    value={contact.office}
                    name="office"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Contact Name</label>
                  <Input
                    value={contact.name}
                    name="name"
                    placeholder="Dr. Smith"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-6"} classes={"form-group"}>
                  <label>Address Line 1</label>
                  <Input
                    value={contact.addressOne}
                    name="addressOne"
                    style={input}
                    onChange={target(i)}
                  />{" "}
                </Col>
                <Col size={"md-6"} classes={"form-group"}>
                  <label>Address Line 2</label>
                  <Input
                    value={contact.addressTwo}
                    name="addressTwo"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-3"} classes={"form-group"}>
                  <label>City</label>
                  <Input
                    value={contact.city}
                    name="city"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>{window.innerWidth > 992 ? 'State/Providence:' : 'State:'}</label>
                  <Input
                    value={contact.state}
                    name="state"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>Zip/Postal Code</label>
                  <Input
                    value={contact.zip}
                    name="zip"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>Country</label>
                  <Input
                    value={contact.country}
                    name="country"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Primary Phone</label>
                  <Input
                    value={contact.primaryPhone}
                    name="primaryPhone"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-2"} classes={"form-group"}>
                  <label>Ext.</label>
                  <Input
                    value={contact.primaryExt}
                    name="primaryExt"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Another Phone</label>
                  <Input
                    value={contact.secondaryPhone}
                    name="secondaryPhone"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-2"} classes={"form-group"}>
                  <label>Ext.</label>
                  <Input
                    value={contact.secondaryExt}
                    name="secondaryExt"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Fax</label>
                  <Input
                    value={contact.fax}
                    name="fax"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Email</label>
                  <Input
                    value={contact.email}
                    name="email"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Website</label>
                  <Input
                    value={contact.website}
                    name="website"
                    style={input}
                    onChange={target(i)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-12"}>
                  {confirmRemoval(i)}

                  <Button
                    className="btn"
                    style={confirmed ? { display: "none" } : updtBtn}
                    onClick={toggleState.bind(null, i)}
                  >
                    <i className="fas fa-sync-alt mr-2" />
                    update
                  </Button>
                </Col>
              </div>
            </form>
          </div>
        );
      } else {
        return (
          <div key={i} className={"mt-5 contacts-info"}>
            <Col size={"md-12"} classes={"contacts-edit"}>
              <Button
                className="fas fa-user-edit fa-2x"
                style={{...toggleBtn, color: 'white'}}
                onClick={ ()=>{
                  isConfirmed(false); 
                  toggleState(i)
                }}
              />
            </Col>
            <form>
              <div className={"form-row"}>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Contact for:</label>
                  <div style={fieldText}>{contact.contact}</div>
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Office or Business Name:</label>
                  <div style={fieldText}>{contact.office}</div>
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Contact Name:</label>
                  <div style={fieldText}>{contact.name}</div>
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-6"} classes={"form-group"}>
                  <label>Address line 1:</label>
                  <div style={fieldText}>{contact.addressOne}</div>
                </Col>
                <Col size={"md-6"} classes={"form-group"}>
                  <label>Address line 2:</label>
                  <div style={fieldText}>{contact.addressTwo}</div>
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-3"} classes={"form-group"}>
                  <label>City:</label>
                  <div style={fieldText}>{contact.city}</div>
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>{window.innerWidth > 992 ? 'State/Providence:' : 'State:'}</label>
                  <div style={fieldText}>{contact.state}</div>
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>Zip/Postal Code:</label>
                  <div style={fieldText}>{contact.zip}</div>
                </Col>
                <Col size={"md-3"} classes={"form-group"}>
                  <label>Country:</label>
                  <div style={fieldText}>{contact.country}</div>
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Primary Phone:</label>
                  <div style={{...fieldText, textDecoration: 'underline'}}>
                  <a href={`tel:${formatPhoneNumberLink(contact.primaryPhone)}`}>{contact.primaryPhone}</a>
                  </div>
                </Col>
                <Col size={"md-2"} classes={"form-group"}>
                  <label>Ext:</label>
                  <div style={fieldText}>{contact.primaryExt}</div>
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Another Phone:</label>
                  <div style={{...fieldText, textDecoration: 'underline'}}>
                  <a href={`tel:${formatPhoneNumberLink(contact.secondaryPhone)}`}>{contact.secondaryPhone}</a>
                  </div>
                </Col>
                <Col size={"md-2"} classes={"form-group"}>
                  <label>Ext:</label>
                  <div style={fieldText}>{contact.secondaryExt}</div>
                </Col>
              </div>
              <div className="form-row">
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Fax:</label>
                  <div style={fieldText}>{contact.fax}</div>
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Email:</label>
                  <div style={{...fieldText, textDecoration: 'underline'}}>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </div>
                </Col>
                <Col size={"md-4"} classes={"form-group"}>
                  <label>Website:</label>
                  <div style={{...fieldText, textDecoration: 'underline'}}> 
                  <a target="_blank" rel="noreferrer noopener" 
                    href={`https://${contact.website}`}>{contact.website}</a>
                  </div>
                </Col>
              </div>
            </form>
          </div>
        );
      }
    });
  }

  return (
    <div className={"my-5"}>
      <em>
        <h5 style={{ textDecoration: "underline" }}>
          Emergency or other contact Info {name ? `for ${name}` : ''}:
        </h5>
      </em>

      {renderContacts(data)}

      {getNewContact(newContact)}

      <div className={"add"}>
        <Button
          className="btn plus"
          style={newContact ? { display: "none" } : { display: "block", float: 'right' }}
          onClick={toggleNew}
        >
          <i className="fa fa-plus" /> New Contact
        </Button>
      </div>
    </div>
  );
}

const fieldText = {
    fontStyle: "italic",
    fontWeight: "1000",
		padding: '10px 10px 10px 0',
    color: "black"
  },
  input = {
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    transition: "all 0.30s ease-in-out"
  },
  updtBtn = {
    float: "right",
    margin: "0",
    backgroundColor: "#214c91",
    color: "white"
  },
  toggleBtn = {
    float: "right",
    border: "none",
    margin: "0",
    backgroundColor: "white"
  };
