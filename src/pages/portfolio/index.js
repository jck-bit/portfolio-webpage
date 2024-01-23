import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import dataportfolio from "../../data/dataportfolio";
import { Link } from "react-router-dom";
import { WorkGridItem, GridItemStyle } from "../../components/grid-item";
import { Image, Container } from 'react-bootstrap';
import Transition from "../../components/Transition"

export const Portfolio = () => {
  return (
    <Container>
      <HelmetProvider>
        <div style={{ marginLeft: "50px" }}>
          <Container>
            <Heading as="h3" fontSize={20} mb={4}>
              My Projects
            </Heading>
            <Divider my={6} />
            <SimpleGrid columns={[1, 1, 3]} gap={6}>
              {dataportfolio.map((project) => (
                <Transition key={project.id} direction="up" durationIn={2} durationOut={8}>
                  <Link to={`/project/${project.id}`}>
                    <div>
                      <Image src={project.image2} alt={project.title} fluid style={{ borderRadius: "5px" }} />
                      <WorkGridItem
                        id={project.id}
                        title={project.title}
                      />
                    </div>
                  </Link>
                </Transition>
              ))}
            </SimpleGrid>
            <GridItemStyle />
          </Container>
        </div>
      </HelmetProvider>
    </Container>
  );
};
