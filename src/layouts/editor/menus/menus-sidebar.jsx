import { avatarWhite } from 'assets/img/images'
import { assetsBlack } from 'assets/img/images'
import { brandkitBlack } from 'assets/img/images'
import { scriptWhite } from 'assets/img/images'
import { textWhite } from 'assets/img/images'
import { brandkitWhite } from 'assets/img/images'
import { assetsWhite } from 'assets/img/images'
import { avatarBlack } from 'assets/img/images'
import { textBlack } from 'assets/img/images'
import { scriptBlack } from 'assets/img/images'
import React from 'react'

const MenusSidebar = ({ activeTab, handleChangeTab }) => {
  return (
    <div className="menu-tab">
      <div
        className={`menu-tab-wrapper cursor-pointer p-4 ${activeTab === 'avatar' ? "bg-blue-500 text-white" : "bg-white-200 text-black"} hover:bg-blue-500 hover:text-white`}
        onClick={() => handleChangeTab("avatar")}
      >
        <img src={activeTab === 'avatar' ? avatarWhite : avatarBlack} alt="Avatar" />
        <p className="mt-2">Avatar</p>
      </div>
      <div
        className={`menu-tab-wrapper cursor-pointer p-4 ${activeTab === 'script' ? "bg-blue-500 text-white" : "bg-white-200 text-black"} hover:bg-blue-500 hover:text-white`}
        onClick={() => handleChangeTab("script")}
      >
        <img src={activeTab === 'script' ? scriptWhite : scriptBlack} alt="Script" />
        <p className="mt-2">Script</p>
      </div>
      <div
        className={`menu-tab-wrapper cursor-pointer p-4 ${activeTab === 'assets' ? "bg-blue-500 text-white" : "bg-white-200 text-black"} hover:bg-blue-500 hover:text-white`}
        onClick={() => handleChangeTab("assets")}
      >
        <img src={activeTab === 'assets' ? assetsWhite : assetsBlack} alt="Assets" />
        <p className="mt-2">Assets</p>
      </div>
      <div
        className={`menu-tab-wrapper cursor-pointer p-4 ${activeTab === 'text' ? "bg-blue-500 text-white" : "bg-white-200 text-black"} hover:bg-blue-500 hover:text-white`}
        onClick={() => handleChangeTab("text")}
      >
        <img src={activeTab === 'text' ? textWhite : textBlack} alt="Text" />
        <p className="mt-2">Text</p>
      </div>
      <div
        className={`menu-tab-wrapper cursor-pointer p-4 ${activeTab === 'brand' ? "bg-blue-500 text-white" : "bg-white-200 text-black"} hover:bg-blue-500 hover:text-white`}
        onClick={() => handleChangeTab("brand")}
      >
        <img src={activeTab === 'brand' ? brandkitWhite : brandkitBlack} alt="Brand Kit" />
        <p className="mt-2">Brand Kit</p>
      </div>
    </div>

  )
}

export default MenusSidebar