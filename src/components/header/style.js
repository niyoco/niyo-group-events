import styled from "styled-components";
import breakpointSizes from "../../constants/breakPointSizes";


export const HeroSection = styled.div`
     @media ${breakpointSizes.mobile} {
        .hero-section{
            padding:15%  6%;
            p, h1{
                padding:0; ;
            }
        }
    }

        @media ${breakpointSizes.desktop} {
        .hero-section{
            padding:15%  300px;
           
        }

     }
`