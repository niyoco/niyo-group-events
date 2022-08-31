import styled from "styled-components";

export const Contain = styled.div`
  display: ${({ display }) => (display ? display : "flex")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};

  a {
    color: ${({ color }) => (color ? color : "#070909")};
    width: ${({ width }) => (width ? width : "45%")};
  }

  .each {
    width: ${({ width }) => (width ? width : "100%")};
    margin: ${({ margin }) => (margin ? margin : "10px 0 0 0")};
    display: ${({ display }) => (display ? display : "flex")};
    cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};

    .icon {
      margin: ${({ margin }) => (margin ? margin : "0 10px 0 0")};

      img {
        width: ${({ width }) => (width ? width : "40px")};
      }
    }

    .text {
      padding: ${({ padding }) => (padding ? padding : "6px 0 0 0")};
    }

    h2 {
      font-family: ${({ fontFamily }) =>
        fontFamily ? fontFamily : "semibold"};
      margin: ${({ margin }) => (margin ? margin : "0")};
      color: ${({ color }) => (color ? color : "#070909 important!")};
    }

    p {
      padding: ${({ padding }) => (padding ? padding : "2px 0 0 0")};
    }
  }
`;
