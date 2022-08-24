import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slack from "../../assets/join/slack.png";
import StyledJoin from "./style";

import { Modal } from "antd";
import { Message } from "./style";

const Join = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://dapp-api.niyo.co/v1/niyogroup/signup-email-list", {
        email: email,
      })
      .then((res) => {
        console.log(res.data.message);

        setIsModalVisible(true);
        setLoading(false);
      })
      .catch((error) => {
        toast(error.message);
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    const newdata = e.target.value;
    setEmail(newdata);
  };
  return (
    <>
      <StyledJoin>
        <h1 className="join-title">
          Join the Niyo <span>Family</span>
        </h1>
        <h3 className="join-text">
          Be the first to know about <br />
          all things at Niyo Group
        </h3>

        <form className="join-form" onSubmit={(e) => Submit(e)}>
          <input
            className="join-email join-button"
            type="text"
            onChange={(e) => handleChange(e)}
            value={email}
            placeholder="Email Address"
          />
          <button className="join-submit join-button" type="submit">
            {loading ? (
              <>
                {" "}
                <i className="fas fa-spinner fa-spin"></i>
              </>
            ) : (
              "Subscribe"
            )}{" "}
          </button>
          {/* <input
            className="join-submit join-button"
            type="submit"
            value="Sign Up"
          /> */}
        </form>
        <ToastContainer />
      </StyledJoin>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <Message>
          <h1>Yay! Welcome Home</h1>
          <p>
            We're delighted to have you join the Niyo Family. You'll receive a
            welcome email shortly, and right now we recommend introducing
            yourself to our friendly community on slack.
          </p>
          <a
            href="https://join.slack.com/t/niyofamily/shared_invite/zt-1csrxss03-ppiaWG0hF6ks~VlP8JXL0A"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              {" "}
              <img src={slack} alt="Slack Logo" />
              Join Niyo Slack
            </button>
          </a>
        </Message>
      </Modal>
    </>
  );
};

export default Join;
