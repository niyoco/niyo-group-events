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
          <Title padding="0 11%" margin="2% 0" className="upcoming-title">
            Upcoming Events
          </Title>
          <Container
            flexDirection="row"
            flexWrap="wrap"
            width="90%"
            padding="0 0 0 10%"
            margin="0 0 4% 0"
            className="card-container"
          >
            {ourEvents.map((event) => {
              return (
                <>
                  <Container
                    width="26%"
                    height="340px"
                    margin="2% 1%"
                    borderRadius="10px"
                    bg="#141414"
                    className="individual-card"
                  >
                    <Container
                      img={event.image}
                      borderRadius="10px 10px 0 0"
                      height="170px"
                    />
                    <Title
                      padding="0 2% 2% 6%"
                      fontSize="20px"
                      lineHeight="30px"
                      className="card-title"
                    >
                      {event.name}
                    </Title>
                    <Paragraph
                      fontSize="11px"
                      padding="0 6%"
                      className="card-text"
                    >
                      {event.date} - {event.time}
                    </Paragraph>
                    <Button margin="6% 0 0 5%" bg="#141414" fontSize="12px">
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
