import styled from "styled-components";

export const Container = styled.div`
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  background-color: ${({ bg }) => (bg ? bg : "#070909")};
  border: ${({ border }) => (border ? border : "1px yellow solid")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  background-image: ${({ bgImage }) => (bgImage ? bgImage : "url()")};
`;

export const Title = styled.h1`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;

export const Button = styled.button`
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bg }) => (bg ? bg : "#070909")};
`;
