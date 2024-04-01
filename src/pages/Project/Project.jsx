import { useParams } from 'react-router-dom';
import dataportfolio from '../../data/dataportfolio';
import P from '../../components/paragraph';
import {  Badge, List, ListItem } from '@chakra-ui/react';
import { Title,  Meta } from '../../components/work';
import {  Image,Container, Button } from 'react-bootstrap';
import Transition from '../../components/Transition';
import NotFound from '../NotFound/NotFound';
import { MdPreview } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";

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
        </List>
        <div className="d-flex justify-content-start align-items-center">
          <div className="preview">
            <Button variant="secondary" href={project.deployment} target="_blank" rel="noopener noreferrer" className=''>
              <div className="d-flex justify-content-center align-items-center">
                <MdPreview color='rgb(255, 0, 255)' size={17}/>
                <span>Preview</span>
              </div>
            </Button>
          </div>
          <div className="code">
          <Button variant="primary" href={project.source_code} target="_blank" rel="noopener noreferrer">
            <div className="d-flex justify-content-center align-items-center">
              <FaGithubAlt size={17} color='rgb(255, 255, 0)'/> 
              <span>Source code</span>
            </div>
          </Button>
          </div>
        </div>
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