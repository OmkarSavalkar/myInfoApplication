import React from "react";

const Ratings = (props) => {
  const { bgcolor, rate } = props;

  const Parentdiv = {
    height: 6,
    width: "100%",
    backgroundColor: "#3c4b63",
    borderRadius: 50,
    margin: "8px 0px",
  };

  const Childdiv = {
    height: "100%",
    width: `${rate}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};
export default Ratings;
