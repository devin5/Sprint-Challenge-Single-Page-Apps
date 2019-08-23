import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import  "semantic-ui-css//semantic.min.css";
import { NavLink } from "react-router-dom";



const TabNav = props => {

      return (
            <Menu>
              <Menu.Item key = "welcomepage" > 
                <Icon name = "home"></Icon>
                <NavLink exact to ='/'>Home Page</NavLink>
              </Menu.Item>
              
              <Menu.Item key = 'character'>
              <Icon name = "users"></Icon>
              <NavLink to ='/character'>Characters</NavLink>
              </Menu.Item>
      
              <Menu.Item key = "loction" > 
                <Icon name = "map"></Icon>
                <NavLink to ='/location'>Locations</NavLink>
              </Menu.Item>
      
              <Menu.Item key = "episode" > 
                <Icon name = "video"></Icon>
                <NavLink to ='/episode'>Episodes</NavLink>
              </Menu.Item>
            </ Menu>
          )
}

  

export default TabNav