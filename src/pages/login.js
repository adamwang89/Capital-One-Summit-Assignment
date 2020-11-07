import React, { Component } from "react";
import "../css/login.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

export default class Login extends Component {

  render() {

    return (
      <div className="signup-login">
        <Form className="signup-login-form">
          <FormGroup className="form-logo">
            <h1 className="form-logo-header">FETCH</h1>
          </FormGroup>
          <FormGroup className="form-title">
            <h2>Login</h2>
          </FormGroup>
          <FormGroup className="form-username">
            <Input
              className="form-input-group"
              name="email"
              placeholder="Username"
              id="email"
              type="email"
            />
            <center>
            </center>
          </FormGroup>
          <FormGroup className="form-password">
            <Input
              className="form-input-group"
              name="password"
              placeholder="Password"
              id="password"
              type="password"
            />
            <center>
            </center>
          </FormGroup>
          <FormGroup className="form-stay" check>
            <Label check>
              <Input type="checkbox" /> Click To Remain Signed In
            </Label>
          </FormGroup>
          <FormGroup className="form-button-group">
            <Button className="form-button">
                <a href="/search">Let's Go</a>
            </Button>
          </FormGroup>
          <FormGroup className="form-links">
            <h1 className="form-link-h1">
              <a href="/">Create Account</a>|<a>Forgot Password</a>
            </h1>
          </FormGroup>
        </Form>

        
        <div className="signup-login-main">
        </div>
      </div>
    );
  }
}
