import React, { useState } from "react";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

function Products({ Toggle }) {
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
          <i className="bi-plus"></i>&nbsp;Add a new product
        </Button>
        <br />
        {/* start of modal add product */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi-plus"></i>&nbsp;Add a new product
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
                  <Form.Label>Price :</Form.Label>
                  <Form.Control placeholder="Price" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Quantity :</Form.Label>
                  <Form.Control placeholder="Quantity" />
                </Col>

                <Col>
                  <Form.Label>Category :</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>PC</option>
                    <option value="PC">PC</option>
                    <option value="Screen">Screen</option>
                    <option value="Keyboard">Keyboard</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formFile">
                    <Form.Label>Picture :</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description :</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
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
        {/* end of modal add product */}
        {/* start of modal edit product */}
        <Modal show={modShow} onHide={handleCloseMod} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi-pencil-square"></i>&nbsp;Edit this product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Name :</Form.Label>
                  <Form.Control placeholder="Name" value="HP" />
                </Col>

                <Col>
                  <Form.Label>Price :</Form.Label>
                  <Form.Control placeholder="Price" value="1000" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Quantity :</Form.Label>
                  <Form.Control placeholder="Quantity" value="3" />
                </Col>

                <Col>
                  <Form.Label>Category :</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>PC</option>
                    <option value="PC">PC</option>
                    <option value="Screen">Screen</option>
                    <option value="Keyboard">Keyboard</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formFile">
                    <Form.Label>Picture :</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description :</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value="Processeur  Intel Core i3-4005U"
                    />
                  </Form.Group>
                </Col>
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
        {/* end of modal edit product */}
        {/* start of modal delete product */}
        <Modal show={supShow} onHide={handleCloseSup}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi-trash"></i> &nbsp;Delete this product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <p>Are you sure you want to delete this product?</p>
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
      {/* end of modal delete product */}
        <br />

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>HP</td>
              <td>1000</td>
              <td>3</td>
              <td>PC</td>
              <td>Processeur Intel Core i3-4005U</td>
              <td>
                <div className="d-flex">
                  <Button variant="warning" onClick={handleShowMod}>
                    <i className="bi-pencil-square"></i>
                  </Button>{" "}
                  &nbsp;
                  <Button variant="danger" onClick={handleShowSup}>
                    <i className="bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Products;
