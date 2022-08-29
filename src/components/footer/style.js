import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";

const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  background-color: ${({ bc }) => (bc ? bc : "#070909")};
  color: ${({ color }) => (color ? color : "#fff")};
  padding: ${({ padding }) => (padding ? padding : "80px 150px 30px 150px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Light")};

  p {
    a {
      color: ${({ color }) => (color ? color : "#fff")};
    }
  }

  .footer-links {
    display: ${({ display }) => (display ? display : "flex")};
    width: ${({ width }) => (width ? width : "100%")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    padding: ${({ padding }) => (padding ? padding : "0px 0px 30px 0px")};
  }

  .top-footer {
    width: ${({ width }) => (width ? width : "35%")};
    padding: ${({ padding }) => (padding ? padding : "0px 60px 0px 0px")};

    .top-text {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
      width: ${({ width }) => (width ? width : "90%")};
      margin: ${({ margin }) => (margin ? margin : "0 0 3% 0")};
    }
  }

  .legal,
  .company,
  .explore,
  .footer-contact {
    width: ${({ width }) => (width ? width : "17%")};
  }

  .niyo-logo {
    margin: ${({ margin }) => (margin ? margin : "0 0 3% 0")};
  }

  .footer-column {
    .footer-column-title {
      margin: ${({ margin }) => (margin ? margin : "0 0 6% 0")};
      color: ${({ color }) => (color ? color : "#afafaf")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
    font-family:semibold;
    }

    .footer-column-text {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
      margin: ${({ margin }) => (margin ? margin : "0 0 3% 0")};
      width: ${({ width }) => (width ? width : "auto")};
    }
  }

  .socials-icons-container {
    .socials-icon {
      height: ${({ height }) => (height ? height : "30px")};
      margin: ${({ margin }) => (margin ? margin : "6% 4% 0 0")};
    }
  }

  .contact-icon {
    margin: ${({ margin }) => (margin ? margin : "0 2% 0 0")};
    width: ${({ width }) => (width ? width : "10px")};
  }

  .footer-no-icon {
    padding: ${({ padding }) => (padding ? padding : "0 0 0 8%")};
  }

  .footer-niyo-registration {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    display: ${({ display }) => (display ? display : "flex")};

    .company-registration {
      padding: 20px 0 0px 0vw;
      margin: 0;
      color:#fff;
      border-top: 1px solid #afafaf;
      width: ${({ width }) => (width ? width : "100%")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
      align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "center")};
    }
  }

  ////////////////////////////
  ////////////////////////////

  @media ${breakpointSizes.mobile} {
    padding: 30px 6%;

    p {
      a {
        height: ${({ height }) => (height ? height : "auto")};
        width: ${({ width }) => (width ? width : "100%")};
        padding: ${({ padding }) =>
          padding ? padding : "50px 20px 20px 20px"};
      }
    }

    .footer-links {
      flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "column"};

      .footer-column {
        width: ${({ width }) => (width ? width : "100%")};

        .footer-column-title {
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
          margin: ${({ margin }) => (margin ? margin : "0")};
          margin: ${({ margin }) => (margin ? margin : "0")};
          padding: ${({ padding }) => (padding ? padding : "0px 0px 11px 0px")};
        }

        .footer-column-text {
          padding: ${({ padding }) => (padding ? padding : "0px 0px 10px 0px")};

          a {
            text-decoration: ${({ textDecoration }) =>
              textDecoration ? textDecoration : "none"};
            padding: ${({ padding }) => (padding ? padding : "0")};
          }
        }
      }

      .footer-column:not(.top-footer) {
        width: ${({ width }) => (width ? width : "100%")};
        padding: ${({ padding }) => (padding ? padding : "0px 0px 20px 0px")};
      }

      .top-footer {
        width: ${({ width }) => (width ? width : "100%")};
        padding: ${({ padding }) => (padding ? padding : "0 0% 0 0")};
      

        .top-text {
          padding: ${({ padding }) => (padding ? padding : "20px 0")};
          margin: ${({ margin }) => (margin ? margin : "0")};
        }
      }
    }

    .legal,
    .company,
    .explore,
    .footer-contact {
      order: ${({ order }) => (order ? order : "1")};
      width: ${({ width }) => (width ? width : "100%")};
    }

    .niyo-logo {
      height: ${({ height }) => (height ? height : "30px")};
      margin: ${({ margin }) => (margin ? margin : "0")};
    }

    .socials-icons-container {
      width: ${({ width }) => (width ? width : "100%")};
      padding: ${({ padding }) => (padding ? padding : "0px 0px 40px 0px")};

      .socials-icon {
        margin: ${({ margin }) => (margin ? margin : "0 10px 0 0")};
      }
    }

    .footer-no-icon {
      padding: ${({ padding }) => (padding ? padding : "0 0 0 4%")};
    }

    .footer-niyo-registration {
      padding: ${({ padding }) => (padding ? padding : "0 0 12% 0")};

      .company-registration {
        border-top: ${({ borderTop }) =>
          borderTop ? borderTop : "2px solid #afafaf"};
        width: ${({ width }) => (width ? width : "80%")};
        padding: ${({ padding }) => (padding ? padding : "20px 0 00px 0")};
        font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
      }
    }
  }

  @media ${breakpointSizes.desktop} {
      padding: 80px 300px 30px 300px
  }
`;

export default StyledFooter;
