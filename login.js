import './Login.css';
import Form from "react-bootstrap/Form";
import React from "react";

import Button from "react-bootstrap/Button";

const Loginss = (props) => {
  const loginHandler = () => {
    console.log(props);
    props.history.push("./AddingEmployess");
  };

  return (
    <div className="container-new">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Loginss;
