import React from 'react'

import "./SectionHeader.css";

const SectionHeader = (props) => {
var input = props.space + ""
if(input === "undefined"){
  input = ""
}
input = "sectionContainer"+input;
  return (
    <div className={input}>
      <div className="sectionHeaderText">
        { props.title }
      </div>
      { props.children }
    </div>
  );
};

export default SectionHeader;