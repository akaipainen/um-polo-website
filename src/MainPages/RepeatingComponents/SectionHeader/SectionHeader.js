import React from 'react'

import Dropdown from '../Dropdown/Dropdown'

import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="sectionContainer">
      <div className="sectionHeaderText">
        { props.title }
      </div>
      { props.children }
    </div>
  );
};

export default SectionHeader;