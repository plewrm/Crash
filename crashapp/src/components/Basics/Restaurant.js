import React, { Fragment } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import { useEffect, useState } from "react"
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import Content from './Readmore'
// import Read from './Read'

const uniqueList=[
  ...new Set(
    Menu.map(((curElem)=>{
      return curElem.category;
    }))
  ),
  "All",
];
const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu)
  const [menuList,setMenuList]=useState(uniqueList)
  const filterItem =(category)=>{
    if(category==="All")
    {
      setMenuData(Menu)
      return;
    }
const updateList= Menu.filter((curElem)=>{
  return curElem.category === category;
});
setMenuData(updateList);
  }
  return (
    
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
   {/* <Content/> */}
    </>
  )
}

export default Restaurant
