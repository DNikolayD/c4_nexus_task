import { useState } from "react";

import classes from "./Menu.css"
import image from "../../img/logo_transparent.png"

const Menu = ({onSaveTypeHandler, className}) => {
  
    const filterChangeHandler = (e) => {
      onSaveTypeHandler(e.target.attributes.getNamedItem('data-filter').value)
    } 

    const unfoldHandler = () => {
      const navList = document.getElementById("nav_list")
      const header = document.getElementsByClassName("header")[0]
      const itemHolder = document.getElementsByClassName("item1")[0]
      console.log(navList)
      if (navList.className === "list") {
        navList.className += " responsive";
      } else {
        navList.className = "list";
      }
      if (header.className === "header") {
        header.className += " responsive";
      } else {
        header.className = "header";
      }
      if (itemHolder.className === "item1") {
        itemHolder.className += " responsive";
      } else {
        itemHolder.className = "list";
      }
    }

    return (
      <div className={className}>
        <img src={image} className="image" />
        <ul className="list" id="nav_list">
  <li className='list_item'><a className='list_item_link' data-filter="dress" href="#home" onClick={filterChangeHandler}>Dresses</a></li>
  <li className='list_item'><a className='list_item_link' data-filter="bag" onClick={filterChangeHandler} href="#news">Bags</a></li>
  <li className='list_item'><a className='list_item_link' data-filter="jewlery" onClick={filterChangeHandler} href="#contact">Jewelry</a></li>
  <li className='list_item'><a className='list_item_link' data-filter="T-shirt" onClick={filterChangeHandler} href="#about">T-shirts</a></li>
  <li className='icon'><a className='list_item_link' onClick={unfoldHandler}><i className="fa fa-bars"></i></a></li>
</ul>
      </div>
    );
  };

  export default Menu