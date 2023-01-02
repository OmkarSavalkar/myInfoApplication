import React, { useState } from "react";
import styles from "../contacts/index.module.scss";
import { StyledButton } from "../../styledComponents";
import SectionTitleComponent from "../common/sectionTitle";
import { send } from "emailjs-com";
import { useSnackbar } from "react-simple-snackbar";

const options = {
  style: {
    backgroundColor: "orange",
    color: "white",
    fontFamily: "Menlo, monospace",
    fontSize: "15px",
    textAlign: "center",
  },
};

const Contacts = () => {
  const [openSnackbar] = useSnackbar(options);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Omkar",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      toSend,
      process.env.REACT_APP_USER
    );

    send(
      `${process.env.REACT_APP_SERVICE}`,
      `${process.env.REACT_APP_TEMPLATE}`,
      toSend,
      `${process.env.REACT_APP_USER}`
    )
      .then((response) => {
        openSnackbar("Message sent successfully ! ");
        setToSend({
          from_name: "",
          to_name: "Omkar",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        openSnackbar("Something went wrong ! ");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <SectionTitleComponent
        sectionTitle="Contact"
        sectionDescription={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      />
      <form className={styles["form"]}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
          ! Buzz Me !
        </div>
        <p type="Name:">
          <input
            className={styles["input-styles"]}
            placeholder="Write your name here.."
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          ></input>
        </p>
        <p type="Email:">
          <input
            className={styles["input-styles"]}
            placeholder="Let me to contact you back.."
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          ></input>
        </p>
        <p type="Message:">
          <textarea
            className={styles["input-styles"]}
            name="message"
            value={toSend.message}
            onChange={handleChange}
            placeholder="What would you like to tell me.."
            rows="5"
            cols="30"
          ></textarea>
        </p>
        <p>
          <StyledButton
            buttonMargin={"3px"}
            title="Send message"
            onClick={onSubmit}
          >
            Send Message <i className="fa fa-paper-plane" />
          </StyledButton>
        </p>
      </form>
    </div>
  );
};
export default Contacts;
