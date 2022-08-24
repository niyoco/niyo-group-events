import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
        height: 100vh;
        width:  100vw;
        margin: 0;
        overflow-x: hidden;
    }

    .html {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }
`;

export const Container = styled.div`
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  background-color: ${({ bg }) => (bg ? bg : "#070909")};
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  margin: ${({ margin }) => (margin ? margin : "0 0 0 0")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
`;

export const Title = styled.h1`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "56px")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "AtypDisplay-Bold"};
  margin: ${({ margin }) => (margin ? margin : "0")};

  @media ${breakpointSizes.mobile} {
    text-align: left;
    padding: 0 4%;
    margin: 0;
  }

  @media ${breakpointSizes.desktop} {
  }

  span {
    color: #fbaf00;
  }
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
  margin: ${({ margin }) => (margin ? margin : "1% 0")};

  @media ${breakpointSizes.mobile} {
    text-align: left;
    padding: 2% 4% 0 4%;
    margin: 0;
  }
`;

export const Button = styled.button`
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bg }) => (bg ? bg : "#070909")};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "15px"};
  border: ${({ border }) => (border ? border : "1px solid #fff")};
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  margin: ${({ margin }) => (margin ? margin : "0 0")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};

  :hover {
    background-color: #fbaf00;
    color: #fff;
  }
`;
