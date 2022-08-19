import StyledJoin from "../../styled/Join.styled";

const Join = () => {
  return (
    <>
      <StyledJoin>
        <h1 className="join-title">
          Join Niyo <span>Family</span>
        </h1>
        <h3 className="join-text">
          Be the first to know about all things at Niyo Group
        </h3>
        <form className="join-form">
          <input
            className="join-email join-button"
            type="text"
            value="Email Address"
          />
          <br />
          <input
            className="join-submit join-button"
            type="submit"
            value="Sign Up"
          />
        </form>
      </StyledJoin>
    </>
  );
};

export default Join;
