// pages/Project/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dataportfolio from '../../data/dataportfolio';
import Layout from '../../components/layouts/article';
import P from '../../components/paragraph';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {  Image } from 'react-bootstrap';

const Project = () => {
  const { projectId } = useParams();
  const project = dataportfolio.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '70%' }}>
      <Container>
        <Title>
          {project.title} <Badge>{project.year}</Badge>
        </Title>
        <P>{project.p_tag}</P>
        <br />
        <List style={{padding:"0"}}>
          <ListItem>
            <Meta>Link: </Meta>
            <Link href={project.link}>
              {project.link} <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform :</Meta>
            <span>{project.platform}</span>
          </ListItem>
          <ListItem>
            <Meta>Stack: </Meta>
            <span>{project.stack}</span>
          </ListItem>
        </List>
        <br />
        <div>
          <Image src={project.image2} alt={project.title} fluid style={{borderRadius:"5px"}}/>
        </div>
      </Container>
    </div>
  );
};

export default Project;
