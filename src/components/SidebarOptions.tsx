import React from 'react'
import ReactDOM from 'react-dom';
import "./SidebarOption.css"
import { IonItem } from "@ionic/react";
import { SideMenuItem } from '../models/SideMenuItem';



const SidebarOptions:React.FC<SideMenuItem>=(props) => {
  return (
    <div className="sidebarOption">
      
      <h2>{props.title}</h2>
      
    </div>
  );
};

export default SidebarOptions
