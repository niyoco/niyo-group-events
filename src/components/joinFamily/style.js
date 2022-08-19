import breakpointSizes from "../../constants/breakPointSizes";
import styled from "styled-components";
import empoweredImage from "../../assets/backgroundImages/empowered-image.jpeg";

const StyledJoin = styled.div`
  background-image: url(${empoweredImage});
  background-size: ${({ bgSize }) => (bgSize ? bgSize : "cover")};
  background-position: ${({ bgPosition }) =>
    bgPosition ? bgPosition : "center"};
  padding: ${({ pad }) => (pad ? pad : "0 0")};
  border-radius: ${({ radius }) => (radius ? radius : "none")};
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};

  .join-title:before {
    display: ${({ display }) => (display ? display : "block")};
    width: ${({ width }) => (width ? width : "90px")};
    content: ${({ content }) => (content ? content : "")};
    border-top: ${({ borderTop }) =>
      borderTop ? borderTop : "3px solid #fbaf00"};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : "2")};
  }

  .join-title {
    font-family: ${({ fontFamily }) =>
      fontFamily ? fontFamily : "AtypDisplay-Bold"};
    color: ${({ color }) => (color ? color : "#fff")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "40px")};
    margin: ${({ margin }) => (margin ? margin : "0")};

    span {
      color: ${({ color }) => (color ? color : "#fbaf00")};
    }
  }

  .join-text {
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: ${({ margin }) => (margin ? margin : "10px 0 20px 0")};
    color: ${({ color }) => (color ? color : "#fff")};
  }

  .join-form {
    width: ${({ width }) => (width ? width : "100%")};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    display: ${({ display }) => (display ? display : "block")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
  }

  .join-email {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
    color: ${({ color }) => (color ? color : "#fff")};
    border: ${({ border }) => (border ? border : "none")};
    margin: ${({ margin }) => (margin ? margin : "20px 0")};
  }

  ::placeholder {
    color: ${({ color }) => (color ? color : "#afafaf")};
  }

  .join-submit {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#070909")};
    color: ${({ color }) => (color ? color : "#fff")};
    border: ${({ border }) => (border ? border : "none")};
  }

  .join-submit:hover {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fbaf00")};
    color: ${({ color }) => (color ? color : "#fff")};
  }

  .join-button {
    width: ${({ width }) => (width ? width : "40%")};
    height: ${({ height }) => (height ? height : "50px")};
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10px"};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
    padding: ${({ padding }) => (padding ? padding : "0 0 0 22px")};
  }

  // Responsive Sizing
  // Mobile
  @media ${breakpointSizes.mobile} {
    height: ${({ height }) => (height ? height : "auto")};
    padding: ${({ pad }) => (pad ? pad : "50px 0")};

    .join-title:before {
      display: ${({ display }) => (display ? display : "none")};
    }

    .join-title {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
    }

    .join-text {
      width: ${({ width }) => (width ? width : "50%")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
      font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Light")};
    }

    .join-email {
      margin: ${({ margin }) => (margin ? margin : "10px 0 20px 0")};
    }

    .join-button {
      width: ${({ width }) => (width ? width : "70%")};
      height: ${({ height }) => (height ? height : "36px")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    }
  }

  // Desktop / Large Screen
  @media ${breakpointSizes.desktop} {
    .join-button {
      width: ${({ width }) => (width ? width : "30%")};
    }
  }
`;

export default StyledJoin;
