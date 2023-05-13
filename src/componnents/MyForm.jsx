import React from 'react'
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from 'react';

import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
// CommonJS



const MyForm = () => {
    const [ND_Login, setND_Login] = useState("");
    const [NDOD, setNDOD] = useState("0000000000");
    const Swal = require('sweetalert2');
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formEntries = Array.from(formData.entries());
        const formObject = Object.fromEntries(formEntries);
        let storedForms = JSON.parse(localStorage.getItem("myForms")) || [];
        storedForms.push(formObject);
        localStorage.setItem("myForms", JSON.stringify(storedForms));
        e.target.reset();
        Swal.fire('Votre incident a bien été renseigné')
    };
    const handleND_LoginChange = (e) => {
        setND_Login(e.target.value);
        setNDOD(e.target.value);
    };


    return (
        <Container className="col-lg-10 mt-5 pb-5 text-center">
            <Link to={'/incidents'} className='btn btn-dark'>Go to incident page</Link>
            <hr />
            <Accordion defaultActiveKey="0"  >
                <Accordion.Item eventKey="1" className='bg-dark bg-opacity-25'>
                    <Accordion.Header className='bg-dark bg-opacity-25'>Déclarer un nouvel incident</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleSubmit} className='text-light p-5 bg-dark bg-opacity-50'>
                            <Container>
                                <h1>Formulaire de déclaration d'incident</h1>
                                <hr />
                                <Row xs={1} md={4} lg={5}>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Opération </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Operation"
                                                placeholder="example NA "
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="dob">
                                            <Form.Label> No de commande </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="NoCOmmand"
                                                placeholder="example DTLI01026698 "
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label>ND/Login </Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="ND_Login"
                                                maxLength="10"
                                                placeholder="Phone Number"
                                                value={ND_Login}
                                                onChange={handleND_LoginChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="dob">
                                            <Form.Label>Date enregistrement </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="Date"
                                                placeholder="Date enregistrement"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="Heure">
                                            <Form.Label>Heure enregistrement </Form.Label>
                                            <Form.Control
                                                type="time"
                                                name="Heure"
                                                placeholder="Heure enregistrement"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <br />
                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                        {" "}

                                        <InputGroup.Text>
                                            Catégorie client
                                        </InputGroup.Text>
                                        <Form.Control as="textarea" aria-label="With textarea" name='Categorie_client' required />

                                    </Col>
                                    <Col>
                                        {" "}
                                        <InputGroup>
                                            <InputGroup.Text>Adresse d'installation</InputGroup.Text>
                                            <Form.Control as="textarea" aria-label="With textarea" name='adressinstallation' required />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <InputGroup>
                                            <InputGroup.Text>Complément d'adresse </InputGroup.Text>
                                            <Form.Control as="textarea" aria-label="With textarea" name='complementadresse' required />
                                        </InputGroup>
                                    </Col>
                                    <Col>

                                        <InputGroup.Text>Switch, Port </InputGroup.Text>
                                        <Form.Control
                                            as="textarea"
                                            aria-label="With textarea"
                                            placeholder="Example SW-KGAR, 1/14/48"
                                            name='switchPort'
                                            required
                                        />

                                    </Col>
                                </Row>

                                <Row xs={1} md={2} lg={4} className="">
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Répartiteur </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Repartiteur"
                                                placeholder="Example OJH34_SYAD"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Zone réseau </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="ZoneReseau"
                                                placeholder="Example KOJ-OJH34"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Constitution </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Constitution"
                                                placeholder="Example Aucune"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> N° d'orde </Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="NoOrder"
                                                placeholder="Example 01026698"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row xs="auto" lg={5} className="p-5">
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Type de commande </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Typedecommande"
                                                placeholder="Example NA"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Group controlId="dob">
                                            <Form.Label> Type de prestation </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Typedeprestation"
                                                placeholder="Example DTVLI"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="NDOD">
                                            <Form.Label> NDOD </Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="NDOD"
                                                value={NDOD}
                                                disabled
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="dob">
                                            <Form.Label> Catégorie </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Categorie"
                                                placeholder="Example Residentiel (R)"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="dob">
                                            <Form.Label> Raison sociale </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Raisonsocial"
                                                placeholder="Example null"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>

                            <Row xs={1} lg={3}>
                                <Col>
                                    {" "}
                                    <Form.Group controlId="dob">
                                        <Form.Label> Opérateur émmetteur </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="OperateurEmmetteur"
                                            placeholder="Example WNA"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    {" "}
                                    <Form.Group controlId="dob">
                                        <Form.Label> Débit </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Debit"
                                            placeholder="Example  20 Mb/s"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    {" "}
                                    <Form.Group controlId="dob">
                                        <Form.Label> Qualité de service </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="QS"
                                            placeholder="Example  P0P1P2P3"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <hr />
                            <FloatingLabel controlId="floatingTextarea2" label="Laissez un commentaier ici">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    name='COmment'
                                    style={{ height: "100px" }}
                                />
                            </FloatingLabel>
                            <hr />
                            <Button variant="outline-light" type={"submit"} className='align-self-end'>
                                Generer le rapport & Envoyer
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
    )
}

export default MyForm