import React, { Component } from "react";
import Content from '../ContentHeaderFooter/ContentHeaderFooter'
class Header extends  Component {
  render(){
    const {type} = this.props;
    return (
      type === 'header' ?
      <header className='bg_yellow'>
        <Content></Content>
      </header> 
      :
      <footer className='bg_yellow'>
        <Content></Content>
      </footer> 
    )
  }
}


export default Header;