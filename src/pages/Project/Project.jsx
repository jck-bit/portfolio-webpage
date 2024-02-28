import { useParams } from 'react-router-dom';
import dataportfolio from '../../data/dataportfolio';
import P from '../../components/paragraph';
import {  Badge, Link, List, ListItem } from '@chakra-ui/react';
import { Title,  Meta } from '../../components/work';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {  Image,Container } from 'react-bootstrap';
import Transition from '../../components/Transition';
import NotFound from '../NotFound/NotFound';

const Project = () => {
  const { projectId } = useParams();
  const project = dataportfolio.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <NotFound/>
  }

  return (
  <Transition direction="up" durationIn={0.8} durationOut={0.8}>
    <div style={{ margin: '0 auto', maxWidth: '70%' }}>
      <Container>
        <Title>
          {project.title} <Badge style={{marginLeft:"4px"}}>{project.year}</Badge>
        </Title>
        <P>{project.p_tag}</P>
        <br />
        <List style={{padding:"0" }}>
        <ListItem  display={'flex'} alignItems={'baseline'}>
            <Meta>Platform :</Meta>
            <span>{project.platform}</span>
          </ListItem>
          <ListItem display={'flex'} alignItems={'baseline'}>
            <Meta>Stack: </Meta>
            <span>{project.stack}</span>
          </ListItem>
          <ListItem display={'flex'} alignItems={'baseline'}>
            <Meta>Deployment: </Meta>
            <Link 
              href={project.deployment} 
              textDecoration={'none'} 
              color={'blue'}
              target='_blank'
              rel='noopener noreferrer'
              >
              {project.deployment}  <ExternalLinkIcon marginLeft={"10px"}/>
            </Link>
          </ListItem>
          <ListItem display={'flex'} alignItems={'baseline'}>
            <Meta>source Code: </Meta>
            <Link 
              href={project.source_code} 
              textDecoration={'none'} 
              color={'blue'}
              target='_blank'
              rel='noopener noreferrer'
              >
              {project.source_code} <ExternalLinkIcon marginLeft={"10px"}/>
            </Link>
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