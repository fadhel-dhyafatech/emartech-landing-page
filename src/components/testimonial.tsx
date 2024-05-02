import { FC, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { StyledBox } from "./ourServices";
import { StyledBackgroundBox } from "./aboutUs";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StyledBackgroundBoxTestimonial = styled(StyledBackgroundBox)({
  ".swiper-wrapper": {
    ".swiper-slide.swiper-slide-active": {
      ".MuiContainer-root": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        ".MuiPaper-elevation": {
          maxWidth: "80%",
        },
      },
    },
  },
});

const SwiperButtonNext: FC<any> = ({ isEnd, isStart }) => {
  const swiper = useSwiper();
  return (
    <>
      <Button
        disabled={isStart}
        onClick={() => swiper.slidePrev()}
        // sx={{ width: "5%" }}
      >
        <ArrowBackIosIcon />
      </Button>
      <Button
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        // sx={{ width: "5%", marginLeft: 2 }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </>
  );
};

import "swiper/swiper-bundle.css";

export const Testimonial: FC = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSlideChange = (swiper: any) => {
    setIsEnd(swiper.isEnd);
    setIsStart(swiper.isBeginning);
  };

  return (
    <StyledBox>
      <StyledBackgroundBoxTestimonial
        sx={{ backgroundImage: "url('../../src/assets/Rectangle 1378.png')" }}
      >
        <Box className="content-box" sx={{ padding: "30px" }}>
          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            TESTIMONIAL
          </h4>
          <Box className="content-holder">
            <h1 className="heading-text">Build Everything You Needs</h1>
          </Box>
          <Box>
            <Swiper
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination, A11y]}
              onSlideChange={(swiper: any) => handleSlideChange(swiper)}
              pagination={windowWidth < 768 ? { clickable: true } : false}
            >
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                  <Container>
                    <Card
                      sx={{
                        marginTop: "30px",
                        maxWidth: 345,
                        position: "relative",
                        marginBottom: 2,
                        overflow: "visible",
                      }}
                    >
                      <img
                        src="../../src/assets/Rectangle 48.jpg"
                        alt="Lorem Ipsum"
                        style={{ position: "absolute", top: -30, right: 20 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {"Lorem Ipsum"}
                        </Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {`Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                </Box>
              </SwiperSlide>
              {windowWidth > 768 && (
                <SwiperButtonNext isEnd={isEnd} isStart={isStart} />
              )}
            </Swiper>
          </Box>
        </Box>
      </StyledBackgroundBoxTestimonial>
    </StyledBox>
  );
};
