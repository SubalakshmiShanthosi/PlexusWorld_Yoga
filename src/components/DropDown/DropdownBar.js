import React from 'react'

import { asanas } from '../../utils/asanas'

import './DropDown.css'

export default function DropDownBar({ poseList, currentPose, setCurrentPose }) {
  return (
    <div className="dropdown dropdown-container">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        id="pose-dropdown-btn"
        aria-expanded="false"
      >
        {currentPose}
      </button>
      <ul
        className="dropdown-menu dropdown-custom-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {poseList.map((pose) => (
          <li onClick={() => setCurrentPose(pose)}>
            <div className="dropdown-item-container">
              <p className="dropdown-item-1">{pose}</p>
              <img src={asanas[pose]} className="dropdown-img" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 