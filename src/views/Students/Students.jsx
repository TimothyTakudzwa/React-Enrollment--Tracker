import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Table,
  Button,
  Modal,
  ProgressBar,
  FormGroup,
  FormControl
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";

class Students extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      students: [],
      show: false,
     
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(JSON.stringify(data));
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
      
    });
    event.preventDefault();
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/bVBJXHgtnS?indent=2")
      .then(response => response.json())
      .then(data => {
        this.setState({ students: data });
      });
  }

  render() {
    const contents = this.state.students.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>{item.age}</td>
          <td>{item.sex}</td>
        </tr>
      );
    });

    if (this.state.students.length === 0) {
      return <ProgressBar active now={98} />;
    } else {
      return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Button bsStyle="primary" block onClick={this.handleShow}>
                Create New Student
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Student Name"
                        onChange={this.handleChange}
                        name="name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Student Surname"
                        onChange={this.handleChange}
                        name="surname"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="number"
                        value={this.state.value}
                        placeholder="Enter Student Age"
                        onChange={this.handleChange}
                        name="age"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        componentClass="select"
                        value={this.state.value}
                        placeholder="Enter Student Sex"
                        onChange={this.handleChange}
                        name="surname"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </FormControl>
                    </FormGroup>

                    <Button
                      bsStyle="primary"
                      type="submit"
                      block
                      onClick={this.handleShow}
                    >
                      Save Changes
                    </Button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
            </Row>

            <br />
            <Row>
              <Col md={12}>
                <Card
                  title="List of All Students"
                  category="Table Showing a list of all Students"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          {thArray.map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>{contents}</tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

export default Students;
