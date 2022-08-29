import { Container } from "../global/style";
import { Title } from "../global/style";
import { Paragraph } from "../global/style";
import { Button } from "../global/style";

import { ourEvents } from "../../constants/data";
import StyledUpcoming from "./style";

const Upcoming = () => {
  return (
    <>
      <Container>
        <StyledUpcoming>
          <Title padding="0 160px" margin="30px 0 0 0" className="upcoming-title">
            Upcoming Events
          </Title>
          <Container
            flexDirection="row"
            flexWrap="wrap"
            width="100%"
            padding="0 150px 0 150px"
            margin="0 0 0% 0"
            className="card-container"
          >
            {ourEvents.map((event) => {
              return (
                <>
                  <Container
                    width="31%"
                    height="450px"
                    padding="0 0 20px 0"
                    margin="2% 1%"
                    borderRadius="10px"
                    bg="#141414"
                    className="individual-card"
                  >
                    <Container
                     img={event.image}
                      borderRadius="10px 10px 0 0"
                      bg="#FEF7DB"
                      height="200px" style={{backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat:"no-repeat"}}>

                        
                      </Container>
                    <Title
                      padding="6% 2% 2% 6%"
                      fontSize="20px"
                      lineHeight="30px"
                      className="card-title"
                    >
                      {event.name}
                    </Title>
                    <Paragraph
                      fontSize="14px"
                      padding="0 6%"
                      className="card-text"
                    >
                      {event.date} - {event.time}
                    </Paragraph>
                    <Button margin="0" bg="#141414" fontSize="12px">
                      Register Now
                    </Button>
                  </Container>
                </>
              );
            })}
          </Container>
        </StyledUpcoming>
      </Container>
    </>
  );
};

export default Upcoming;
