import React from 'react';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button';
import './Header.css';
import Adddata from './Adddata';

const Header=(props)=>{
    const logouthandler = () => {
        console.log(props);
        props.history.push("./login");
      };
    return(
        <div className="header">
          <h1>Employee Management Software</h1>
          <div className="your-flex">
             <Adddata yourEmpData={props.empData} setYourEmpData={props.setEmpData}/>
            <Button variant="success" onClick={logouthandler}>Log out</Button>
            </div>
        </div>

    );
}

export default withRouter(Header);