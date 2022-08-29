import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";

const StyledUpcoming = styled.div`
padding-bottom:50px; ;
.individual-card{
  position:relative ;
  button{
          position:absolute ;
          bottom:20px ;
          left:25px ;
        }
}
  @media ${breakpointSizes.mobile} {
    .upcoming-title {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "25px")};
      margin: ${({ margin }) => (margin ? margin : "10% 0 5% 20px")};
    }

    

    .card-container {
      flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "column"};


      .individual-card {
        width: ${({ width }) => (width ? width : "100%")};
        margin: ${({ margin }) => (margin ? margin : "0 0 30px 0")};
        position:relative ;

        .card-title {
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "21px")};
          margin: ${({ margin }) => (margin ? margin : "15px 0 0 0")};
        }

        .card-text {
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
        }
        button{
          
          left:10px ;
        }
      
      }
    }
  }

  @media ${breakpointSizes.desktop} {
    .upcoming-title{
      padding:0 320px;
      font-size:40px;
    }
    .card-container {
        padding:0 300px;

    }

  }
`;

export default StyledUpcoming;
