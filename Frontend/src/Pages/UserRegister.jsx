import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const UserRegister = () => {
  return (
    <>
      <h1 className="display-3">User Registration Form</h1>
      <div className="container">
        <Form>
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your First Name"
              type="text"
            />
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Last Name"
              type="text"
            />
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default UserRegister;
