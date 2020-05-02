import React from 'react'

import Dropdown from '../Dropdown/Dropdown'

import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="sectionContainer">
      <div className="sectionHeaderText">
        { props.text }
      </div>
      { props.children }
    </div>
  );
};

export default SectionHeader;