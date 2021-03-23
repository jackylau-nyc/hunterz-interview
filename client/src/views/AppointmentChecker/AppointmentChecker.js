import React from "react";
import HeaderContainer from "../common/containers/HeaderContainer";
import PageContainer from "../common/containers/PageContainer";
import Check from "./components/AppCheck";

export default function AppointmentChecker() {
  return (
    <>
      <HeaderContainer />
      <PageContainer>
        <Check />
      </PageContainer>
    </>
  );
}
