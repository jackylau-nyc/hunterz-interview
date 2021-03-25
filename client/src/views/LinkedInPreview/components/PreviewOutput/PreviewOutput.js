import React from "react";
import "./PreviewOutput.css";

function PreviewOutput(props) {
  //const ss = {process.env.PUBLIC_URL + "/images/screenshot.png"};
  let imgSrc = props.image !== null ? props.image : "150x150.gif";
  return (
    <img
      className="preview-output"
      style={{ display: props.display }}
      src={imgSrc}
      alt="screenshot"
    />
  );
}

export default PreviewOutput;
