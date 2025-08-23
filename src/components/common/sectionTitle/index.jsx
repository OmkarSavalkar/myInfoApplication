import React from "react";
import { SectionSubTitle, SectionTitle } from "../../../styledComponents";
import seperatorImage from "../../../images/seperatorImage.png";
import ScrollIndicator from "../scrollIndicator";

const SectionTitleComponent = (props) => {
  const { sectionTitle, sectionDescription, contactsSection, lightMode } =
    props;

  return (
    <div>
      {(sectionTitle != null ||
        sectionTitle !== undefined ||
        sectionTitle !== "") &&
      sectionTitle ? (
        <>
          <SectionTitle lightMode={lightMode}>
            <img
              src={seperatorImage}
              alt="seperator icon"
              style={{ width: "5%" }}
            />{" "}
            {sectionTitle}
            <img
              src={seperatorImage}
              alt="seperator icon"
              style={{
                width: "5%",
                marginLeft: "0.5%",
              }}
            />{" "}
          </SectionTitle>
        </>
      ) : (
        <></>
      )}
      <SectionSubTitle lightMode={lightMode}>
        {sectionDescription}
      </SectionSubTitle>
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
