import React from "react";
import { SectionSubTitle, SectionTitle } from "../../../styledComponents";
import seperatorImage from "../../../images/seperatorImage.png";
import ScrollIndicator from "../scrollIndicator";
import FloatingButton from "../floatingButton";

const SectionTitleComponent = (props) => {
  const { sectionTitle, sectionDescription, contactsSection } = props;
  return (
    <div>
      {(sectionTitle != null ||
        sectionTitle !== undefined ||
        sectionTitle !== "") &&
      sectionTitle ? (
        <>
          <FloatingButton />
          <SectionTitle>
            <img
              src={seperatorImage}
              alt="seperator icon"
              style={{ width: "6%" }}
            />{" "}
            {sectionTitle}
            <img
              src={seperatorImage}
              alt="seperator icon"
              style={{
                width: "6%",
              }}
            />{" "}
          </SectionTitle>
        </>
      ) : (
        <></>
      )}
      <SectionSubTitle>{sectionDescription}</SectionSubTitle>
      {(sectionTitle != null ||
        sectionTitle !== undefined ||
        sectionTitle !== "") &&
      !contactsSection ? (
        <ScrollIndicator />
      ) : (
        <></>
      )}
    </div>
  );
};
export default SectionTitleComponent;
