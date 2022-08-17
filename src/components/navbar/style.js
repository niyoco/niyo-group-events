import styled from "styled-components";

export const NavContainer = styled.div`
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bg }) => (bg ? bg : "#070909")};
  height: ${({ height }) => (height ? height : "10%")};
  width: ${({ width }) => (width ? width : "100%")};
`;

export const NavLink = styled.a`
  color: ${({ color }) => (color ? color : "#fff")};
`;
