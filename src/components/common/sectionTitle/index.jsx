import React from "react";
import { SectionSubTitle, SectionTitle } from "../../../styledComponents";
import seperatorImage from "../../../images/seperatorImage.png";
import ScrollIndicator from "../scrollIndicator";
import FloatingButton from "../floatingButton";
import ModeToggle from "../modeToggle";

const SectionTitleComponent = (props) => {
  const { sectionTitle, sectionDescription, contactsSection } = props;
  return (
    <div>
      {(sectionTitle != null ||
        sectionTitle !== undefined ||
        sectionTitle !== "") &&
      sectionTitle ? (
        <>
          {contactsSection ? <></> : <FloatingButton fromHeader={false} />}

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
          {contactsSection ? <></> : <ModeToggle fromHeader={false} />}
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
