import React from "react";

function Footer(props) {
  const { text, element } = props;
  return text ? <div class="centered footer">{text}</div> : <div class="centered footer">{element()}</div>;
}

export default Footer;
