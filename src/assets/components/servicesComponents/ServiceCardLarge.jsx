import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  Button,
  Icon,
  IconButton,
  ListItemButton,
  Card,
  CardContent,
  CardMedia,
  ListItemText,
  ListItem,
} from "@mui/material";
import { MENU_PRODUCTS, WEB_PRICES } from "../../../constants";
import FlexCenter from "../FlexCenter";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import question from "../../../img/icons/question36.png";
import Title from "../Title";

const ServiceCardLarge = () => {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isActive, setIsActive] = useState(1);

  const handleClick = (index) => {
    setIsActive(index);

    //console.log(isActive)
  };

  return (
    <>
      <Title
        title={"PRECIOS WEBS"}
        subtitle={"PRECIOS DE NUESTRAS PAGINAS WEBS"}
      />

      <Box
        display={"grid"}
        gridTemplateColumns={w <= 900 ? "repeat(2,1fr)" : "repeat(6,1fr)"}
        gridAutoRows="auto"
        gap={"20px"}
        mb="5rem"
      >
        {WEB_PRICES.map((service, index) => {
          return (
            <Box
              key={index}
              onClick={() => handleClick(index)}
              component={"div"}
              gridColumn="span 3"
              gridRow="span 1"
              flexDirection="column"
              justifyContent="start"
              flex="1 1 100%"
              sx={{ width: "90%", height: "auto", borderRadius: 6 }}
            >
              <Card>
                <CardMedia
                  image={service.image}
                  sx={{ height: 250, width: "100%" }}
                ></CardMedia>
                <CardContent>
                  <List>
                    {service.description1.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}

                    {service.description2.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}

                    {service.description3.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}
                  </List>
                  <FlexCenter flexDirection={'column'} margin={'auto'} textAlign={'center'}
                         width={'90%'} gap={'1rem'}>                             
                        <Typography>
                        {service.informacion}
                        </Typography>
                 
                            <Button   variant="a" href='https://www.instagram.com/visibilidadweb/' target='_blank' sx={{ backgroundColor:'#0ED8DD', 
                            color:'black',
                            p:'0.7rem', m:'1rem'}} >
                              MAS INFORMACION
                            </Button>
                        </FlexCenter>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>

      <Title
        title={"PRECIOS MENUS"}
        subtitle={"PRECIOS DE NUESTRAS MENUS INTERACTIVOS"}
      />

      <Box
        display={"grid"}
        gridTemplateColumns={w <= 900 ? "repeat(2,1fr)" : "repeat(6,1fr)"}
        gridAutoRows="auto"
        gap={"20px"}
        mb="5rem"
      >
        {MENU_PRODUCTS.map((service, index) => {
          return (
            <Box
              key={index}
              onClick={() => handleClick(index)}
              component={"div"}
              gridColumn="span 3"
              gridRow="span 1"
              flexDirection="column"
              justifyContent="start"
              flex="1 1 100%"
              sx={{ width: "90%", height: "auto", borderRadius: 6 }}
            >
              <Card>
                <CardMedia
                  image={service.image}
                  sx={{ height: 250, width: "100%" }}
                ></CardMedia>
                <CardContent>
                  <List>
                    {service.description1.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}

                    {service.description2.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}

                    {service.description3.map((text) => {
                      return <ListItemText>- {text.d}</ListItemText>;
                    })}
                  </List>
                  <FlexCenter
                    flexDirection={"column"}
                    margin={"auto"}
                    textAlign={"center"}
                    width={"90%"}
                    gap={"1rem"}
                  >
                    <Typography>{service.informacion}</Typography>
                    <Typography>{service.informacion2}</Typography>
                    <Button
                      variant="a"
                      href="https://www.instagram.com/visibilidadweb/"
                      target="_blank"
                      sx={{
                        backgroundColor: "#0ED8DD",
                        color: "black",
                        p: "0.7rem",
                        m: "1rem",
                      }}
                    >
                      MAS INFORMACION
                    </Button>
                  </FlexCenter>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ServiceCardLarge;
