import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { Form, Input, Select } from "antd";
const Editdata = ({Id,firstName,empData,setEmpData,lastName, email ,salary, date}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //let's start updating the UI
  const [inputName, setInputName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputSalary, setInputSalary] = useState(salary);
  const [inputDate, setInputDate] = useState(date);

  //let's work  with enter data into the table

  // const [isName, setIsName] = useState("");
  // const [isLastName, setIsLastName] = useState("");
  // const [isEmail, setIsEmail] = useState("");
  // const [isSalary, setIsSalary] = useState("");
  // const [isDate, setIsDate] = useState("");

  //between the UI
  const showModal = () => {
    setIsModalVisible(true);
  
    console.log(firstName);
  console.log(lastName);
  };

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
      id: Id,
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
      const employee = {
        Id,
        firstName,
        lastName,
        email,
        salary,
        date
      };

      // console.log(employee);
  
      for (let i = 0; i < empData.length; i++) {
        if (empData[i].id === Id) {
         setEmpData([data]);
          console.log(data)
          break;
        }
      }
      // setEmpData(empData);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      Edit      
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
          
            onChange={(e) => setInputName(e.target.value)}
          >
            <Input placeholder="Rushil"
            value={inputName} />
          </Form.Item>
          <Form.Item
            label="Last Name"
           
            onChange={(e) => setInputLastName(e.target.value)}
          >
            <Input placeholder="Patel"
            value={inputLastName} />
          </Form.Item>
          <Form.Item
            label="Email"
            
            onChange={(e) => setInputEmail(e.target.value)}
          >
            <Input placeholder="abc@gmail.com" 
              value={inputEmail}
            />
          </Form.Item>
          <Form.Item
            label="Salary"
           
            onChange={(e) => setInputSalary(e.target.value)}
          >
            <Input placeholder="Salary in Number" 
              value={inputSalary}
            />
          </Form.Item>

          <Form.Item
            label="Enter Date"
           
            onChange={(e) => setInputDate(e.target.value)}
          >
            <Input placeholder="12-11-2021" 
              value={inputDate}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Editdata;
