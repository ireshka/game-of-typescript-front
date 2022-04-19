import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" textAlign="center">
        Game of Typescript Life
      </Typography>
      <Box sx={{ width: "100%" }}></Box>
    </Container>
  );
};

export default Home;
