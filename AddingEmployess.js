import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import './AddingEmployess.css';
import Header from './Header';
import { Modal, Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editdata from './EditData';
import employeesData from "./Data";
const AddEmployees = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    setEmpData(employeesData);
  }, []);

  // const HandleEdit=(idEditData)=>{
  //   const [isModalVisible, setIsModalVisible] = useState(false);
    
  //   setIsModalVisible(true); 

  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };
  
  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };

  //  return(
  //   <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  //   <p>Some contents...</p>
  //   <p>Some contents...</p>
  //   <p>Some contents...</p>
  // </Modal>
  //  );
  // }
   
   const handleDelete=(id)=>{
     console.log(id); 
     setEmpData(empData.filter(employee => employee.id !== id));
   } 

  return (
    <div>
    <Header empData={empData} setEmpData={setEmpData}/>
     <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
               
                    {empData &&
                        empData.map((e) => {
                        return (
                            <tr>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.salary}</td>
                            <td>{e.date}</td>
                            <td>
                            <div className="flex">

                               <Editdata 
                                 Id={e.id}
                                 firstName={e.firstName}
                                 lastName={e.lastName}
                                 email={e.email}
                                 salary={e.salary}
                                 date={e.date}
                                 empData={empData} setEmpData={setEmpData}
                               />
                               <button className="hey-button" onClick={()=>handleDelete(e.id)}>Delete</button>

                            </div>
                            </td>
                            </tr>
                        );
      })}
    </tbody>
      </Table>
    </div>
  );
};
export default AddEmployees;
