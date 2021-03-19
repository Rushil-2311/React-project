import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { Form, Input, Select } from "antd";
const Adddata = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //let's start updating the UI
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSalary, setInputSalary] = useState("");
  const [inputDate, setInputDate] = useState("");

  //let's work  with enter data into the table

  // const [isName, setIsName] = useState("");
  // const [isLastName, setIsLastName] = useState("");
  // const [isEmail, setIsEmail] = useState("");
  // const [isSalary, setIsSalary] = useState("");
  // const [isDate, setIsDate] = useState("");

  //between the UI
  const showModal = () => {
    setIsModalVisible(true);
  };

  //  console.log(props.yourEmpData);
  //  console.log(props.setyourEmpData);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //for date picker
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  // for the from layout
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  //function of change the data

  const handleOk = () => {
    const data = {
      id: Math.random,
      firstName: inputName,
      lastName: inputLastName,
      email: inputEmail,
      salary: inputSalary,
      date: inputDate,
    };
    if (
      inputSalary == "" ||
      inputLastName == "" ||
      inputEmail == "" ||
      inputSalary == "" ||
      inputDate == ""
    ) {
      setIsModalVisible(true);
    } else {
      props.setYourEmpData([...props.yourEmpData, data]);
      console.log(typeof Need);
      setIsModalVisible(false);
      console.log("hey you");
      setInputName("");
      setInputLastName("");
      setInputEmail("");
      setInputSalary("");
      setInputDate("");
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Employee Data
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} name="control-ref">
          <Form.Item
            label="First Name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          >
            <Input placeholder="Rushil" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
          >
            <Input placeholder="Patel" />
          </Form.Item>
          <Form.Item
            label="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          >
            <Input placeholder="abc@gmail.com" />
          </Form.Item>
          <Form.Item
            label="Salary"
            value={inputSalary}
            onChange={(e) => setInputSalary(e.target.value)}
          >
            <Input placeholder="Salary in Number" />
          </Form.Item>

          <Form.Item
            label="Enter Date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          >
            <Input placeholder="12-11-2021" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Adddata;
