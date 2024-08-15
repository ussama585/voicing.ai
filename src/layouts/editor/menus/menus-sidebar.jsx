import { script } from 'assets/img/images'
import { text } from 'assets/img/images'
import { brand } from 'assets/img/images'
import { assets } from 'assets/img/images'
import { avatar } from 'assets/img/images'
import React from 'react'

const MenusSidebar = ({activeTab, setActiveTab}) => {
  return (
    <div className="menu-tab">
      <div className={`menu-tab-wrapper ${activeTab === 'editor' && "background-active"}`} onClick={() => setActiveTab("editor")}>
        <img src={avatar} alt="Avatar" />
        <p>Avatar</p>
      </div>
      <div className={`menu-tab-wrapper ${activeTab === 'script' && "background-active"}`} onClick={() => setActiveTab("script")}>
        <img src={script} alt="Script" />
        <p>Script</p>
      </div>
      <div className={`menu-tab-wrapper ${activeTab === 'assets' && "background-active"}`} onClick={() => setActiveTab("assets")}>
        <img src={assets} alt="Assets" />
        <p>Assets</p>
      </div>
      <div className={`menu-tab-wrapper ${activeTab === 'text' && "background-active"}`}>
        <img src={text} alt="Text" />
        <p>Text</p>
      </div>
      <div className={`menu-tab-wrapper ${activeTab === 'brand' && "background-active"}`}>
        <img src={brand} alt="Brand Kit" />
        <p>Brand Kit</p>
      </div>
    </div>
  )
}

export default MenusSidebar