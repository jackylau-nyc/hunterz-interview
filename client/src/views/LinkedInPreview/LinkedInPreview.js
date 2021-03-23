import React, { useState } from "react";
import PageContainer from "../common/containers/PageContainer";
import HeaderContainer from "../common/containers/HeaderContainer";
import Search from "./components/PreviewSearch/PreviewSearch";
import Output from "./components/PreviewOutput/PreviewOutput";

export default function LinkedInPreview() {
  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState("none");
  return (
    <div>
      <HeaderContainer />
      <PageContainer>
        <Search setImage={setImage} setDisplay={setDisplay} />
        <Output image={image} display={display} />
      </PageContainer>
    </div>
  );
}
