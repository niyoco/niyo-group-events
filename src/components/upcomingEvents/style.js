import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";

const StyledUpcoming = styled.div`
  @media ${breakpointSizes.mobile} {
    .upcoming-title {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "28px")};
      margin: ${({ margin }) => (margin ? margin : "10% 0 10% 0")};
    }

    .upcoming-title:after {
      display: ${({ display }) => (display ? display : "block")};
      width: ${({ width }) => (width ? width : "270px")};
      content: "";
      border-bottom: ${({ borderBottom }) =>
        borderBottom ? borderBottom : "1px solid #9c9c9c"};
      z-index: ${({ zIndex }) => (zIndex ? zIndex : "2")};
      font-family: ${({ fontFamily }) =>
        fontFamily ? fontFamily : "AtypDisplay-Bold"};
    }

    .card-container {
      flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "column"};

      .individual-card {
        width: ${({ width }) => (width ? width : "90%")};
        margin: ${({ margin }) => (margin ? margin : "10% 0 10% 0")};

        .card-title {
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "21px")};
          margin: ${({ margin }) => (margin ? margin : "2% 0 0 0")};
        }

        .card-text {
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
        }
      }
    }
  }
`;

export default StyledUpcoming;
