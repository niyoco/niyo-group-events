import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";

const NavContainer = styled.div`
  .nav {
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "91px")};
    display: ${({ display }) => (display ? display : "flex")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "space-between"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
    background-color: ${({ bg }) => (bg ? bg : "#070909")};
    color: ${({ color }) => (color ? color : "#fff")};
    padding: ${({ padding }) => (padding ? padding : "0")};

    .nav-logo-container {
      width: ${({ width }) => (width ? width : "20%")};

      .nav-logo {
        height: ${({ height }) => (height ? height : "40px")};
      }
    }

    .nav-menu {
      background-color: ${({ bg }) => (bg ? bg : "#000")};
      width: ${({ width }) => (width ? width : "100%")};
      height: ${({ height }) => (height ? height : "100%")};
      padding: ${({ padding }) => (padding ? padding : "30px 0 0 0")};
      z-index: ${({ zIndex }) => (zIndex ? zIndex : "9999")};
      position: ${({ position }) => (position ? position : "fixed")};
      top: ${({ top }) => (top ? top : "0")};
      left: ${({ left }) => (left ? left : "-100%")};
      text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
      transition: ${({ transition }) => (transition ? transition : "850ms")};

      .cancel {
        float: ${({ float }) => (float ? float : "right")};
        margin: ${({ margin }) => (margin ? margin : "-20px 30px 0 0")};
      }

      a {
        color: ${({ color }) => (color ? color : "#fff")};
        text-decoration: ${({ textDecoration }) =>
          textDecoration ? textDecoration : "none"};
        display: ${({ display }) => (display ? display : "block")};
        font-family: ${({ fontFamily }) =>
          fontFamily ? fontFamily : "regular"};
        font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
        text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
        width: ${({ width }) => (width ? width : "100%")};
        margin: ${({ margin }) => (margin ? margin : "30px 0 0 30px")};

        img {
          width: ${({ width }) => (width ? width : "20px")};
          margin: ${({ margin }) => (margin ? margin : "0 10px -5px 0")};
        }

        span {
          margin: ${({ margin }) => (margin ? margin : "-3px 0 0 0")};
        }
      }

      button {
        height: ${({ height }) => (height ? height : "40px")};
        border-radius: ${({ borderRadius }) =>
          borderRadius ? borderRadius : "20px"};
        width: ${({ width }) => (width ? width : "145px")};
        font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
        margin: ${({ margin }) => (margin ? margin : "35px 0 0 0")};
      }
    }

    .nav-menu.active {
      left: ${({ left }) => (left ? left : "0")};
      transition: ${({ transition }) => (transition ? transition : "350ms")};
    }

    .nav-link-container {
      display: ${({ display }) => (display ? display : "flex")};
      flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "row"};
      justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : "space-between"};
      align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
      width: ${({ width }) => (width ? width : "70%")};
    }

    .nav-link {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
      text-decoration: ${({ textDecoration }) =>
        textDecoration ? textDecoration : "none"};
      color: ${({ color }) => (color ? color : "#fff")};
      transition: ${({ transition }) => (transition ? transition : "ease-in")};
    }

    .nav-link:hover {
      background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .nav-button {
      background-color: ${({ bg }) => (bg ? bg : "#fff")};
      color: ${({ color }) => (color ? color : "#070909")};
      height: ${({ height }) => (height ? height : "50px")};
      border-radius: ${({ borderRadius }) =>
        borderRadius ? borderRadius : "20px"};
      width: ${({ width }) => (width ? width : "164px")};
      font-family: ${({ fontFamily }) =>
        fontFamily ? fontFamily : "semibold"};
    }

    .nav-button:hover {
      background-color: ${({ bg }) => (bg ? bg : "#fbaf00")};
      color: ${({ color }) => (color ? color : "#fff")};
    }

    .nav-brands {
      margin: 0;
    }

    .active {
      position: ${({ position }) => (position ? position : "fixed")};
      top: ${({ top }) => (top ? top : "0")};
      z-index: ${({ zIndex }) => (zIndex ? zIndex : "99")};
    }

    @media ${breakpointSizes.mobile} {
      .nav {
        height: ${({ height }) => (height ? height : "10%")};
        width: ${({ width }) => (width ? width : "100%")};

        .nav-logo-container {
          display: ${({ display }) => (display ? display : "flex")};
          width: ${({ width }) => (width ? width : "100%")};

          .nav-logo {
            height: ${({ height }) => (height ? height : "30px")};
          }
        }

        .nav-link-container {
          display: ${({ display }) => (display ? display : "none")};
        }
      }
    }

    @media ${breakpointSizes.desktop} {
      height: ${({ height }) => (height ? height : "10%")};
      padding: ${({ padding }) => (padding ? padding : "0 250px")};
    }
  }
`;

export default NavContainer;
