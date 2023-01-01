import React from "react";
import { SectionSubTitle, SectionTitle } from "../../../styledComponents";
import seperatorImage from "../../../images/seperatorImage.png";
import ScrollIndicator from "../scrollIndicator";

const SectionTitleComponent = (props) => {
  const { sectionTitle, sectionDescription } = props;
  return (
    <div>
      {(sectionTitle != null ||
        sectionTitle !== undefined ||
        sectionTitle !== "") &&
      sectionTitle ? (
        <SectionTitle>
          <img
            src={seperatorImage}
            alt="seperator icon"
            style={{ width: "10%" }}
          />{" "}
          {sectionTitle}
          <img
            src={seperatorImage}
            alt="seperator icon"
            style={{
              width: "10%",
            }}
          />{" "}
        </SectionTitle>
      ) : (
        <></>
      )}
      <SectionSubTitle>{sectionDescription}</SectionSubTitle>
      {sectionTitle != null ||
      sectionTitle !== undefined ||
      sectionTitle !== "" ? (
        <ScrollIndicator />
      ) : (
        <></>
      )}
    </div>
  );
};
export default SectionTitleComponent;
