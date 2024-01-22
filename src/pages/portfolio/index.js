import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import dataportfolio from "../../data/dataportfolio";
import { Link } from "react-router-dom";
import { WorkGridItem, GridItemStyle } from "../../components/grid-item";
import {  Image } from 'react-bootstrap';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <div style={{marginLeft:"50px"}}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My Projects
        </Heading>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          {dataportfolio.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div>
              <Image src={project.image2} alt={project.title} fluid style={{borderRadius:"5px"}}/>
              <WorkGridItem
                id={project.id}
                title={project.title}
                
              />
              </div>
            </Link>
          ))}
        </SimpleGrid>
        <GridItemStyle />
      </Container>
      </div>
    </HelmetProvider>
  );
};