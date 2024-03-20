import React, { useState } from "react";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

function Customers({ Toggle }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modShow, setModShow] = useState(false);
  const handleCloseMod = () => setModShow(false);
  const handleShowMod = () => setModShow(true);

  const [supShow, setSupShow] = useState(false);
  const handleCloseSup = () => setSupShow(false);
  const handleShowSup = () => setSupShow(true);

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <Button variant="success" onClick={handleShow}>
          <i className="bi bi-person-plus"></i>&nbsp;Add a new customer
        </Button>
        <br />
        {/* start of modal add customer */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi bi-person-plus"></i>&nbsp;Add a new customer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Name :</Form.Label>
                  <Form.Control placeholder="Name" />
                </Col>

                <Col>
                  <Form.Label>E-mail :</Form.Label>
                  <Form.Control placeholder="E-mail" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>DATE :</Form.Label>
                  <Form.Control placeholder="DATE" />
                </Col>

                <Col>
                  <Form.Label>SALARY :</Form.Label>
                  <Form.Control placeholder="SALARY" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formFile">
                    <Form.Label>AGE :</Form.Label>
                    <Form.Control placeholder="AGE" />
                  </Form.Group>
                </Col>

                <Col></Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleClose}
              style={{ backgroundColor: "#9c27b0", border: "none" }}
            >
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* end of modal add customer */}
        {/* start of modal edit customer */}
        <Modal show={modShow} onHide={handleCloseMod} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <FontAwesomeIcon icon={faUserEdit} />
              &nbsp;Edit this customer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Name :</Form.Label>
                  <Form.Control placeholder="Name" value="Jesse Thomas" />
                </Col>

                <Col>
                  <Form.Label>E-mail :</Form.Label>
                  <Form.Control
                    placeholder="E-mail"
                    value="jessethomas@gmail.com "
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>DATE :</Form.Label>
                  <Form.Control placeholder="DATE" value="03/24/2018" />
                </Col>

                <Col>
                  <Form.Label>SALARY :</Form.Label>
                  <Form.Control placeholder="SALARY" value="$10909.52 " />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formFile">
                    <Form.Label>AGE :</Form.Label>
                    <Form.Control placeholder="AGE" value="42" />
                  </Form.Group>
                </Col>

                <Col></Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleCloseMod}
              style={{ backgroundColor: "#9c27b0", border: "none" }}
            >
              Modify
            </Button>
            <Button variant="secondary" onClick={handleCloseMod}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* end of modal edit customer */}
        {/* start of modal delete customer */}
        <Modal show={supShow} onHide={handleCloseSup}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FontAwesomeIcon icon={faUserTimes} /> &nbsp;Delete this customer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <p>Are you sure you want to delete this customer?</p>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseSup}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleCloseSup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end of modal delete customers */}
        <br />

        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>DATE</th>
                <th>AGE</th>
                <th>SALARY</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jesse Thomas</td>
                <td>jessethomas@gmail.com</td>
                <td>03/24/2018</td>
                <td>42</td>
                <td>$10909.52</td>
                <td>
                  <div className="d-flex">
                    <Button variant="warning" onClick={handleShowMod}>
                      <FontAwesomeIcon icon={faUserEdit} />
                    </Button>
                    &nbsp;
                    <Button variant="danger" onClick={handleShowSup}>
                      <FontAwesomeIcon icon={faUserTimes} />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
