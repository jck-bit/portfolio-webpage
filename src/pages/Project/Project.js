// pages/Project/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dataportfolio from '../../data/dataportfolio';
import P from '../../components/paragraph';
import {  Badge, Link, List, ListItem } from '@chakra-ui/react';
import { Title,  Meta } from '../../components/work';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {  Image,Container } from 'react-bootstrap';
import Transition from '../../components/Transition';

const Project = () => {
  const { projectId } = useParams();
  const project = dataportfolio.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
  <Transition direction="up" durationIn={0.8} durationOut={0.8}>
    <div style={{ margin: '0 auto', maxWidth: '70%' }}>
      <Container>
        <Title>
          {project.title} <Badge>{project.year}</Badge>
        </Title>
        <P>{project.p_tag}</P>
        <br />
        <List style={{padding:"0" }}>
          <ListItem style={{display:"flex", alignItems:"center"}}>
            <Meta>Link: </Meta>
            <Link href={project.link}>
              {project.link} <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem style={{display:"flex", alignItems:"center"}}>
            <Meta>Platform :</Meta>
            <span>{project.platform}</span>
          </ListItem>
          <ListItem style={{display:"flex", alignItems:"center"}}>
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
   </Transition>
  );
};

export default Project;