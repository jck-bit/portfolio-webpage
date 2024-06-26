import { Route, Routes, } from "react-router-dom";
import withRouter from "./hooks/withRouter";
import { Home } from "./pages/home/index";
import { Portfolio } from "./pages/portfolio";
import { ContactUs } from "./pages/contact";
import { About } from "./pages/about";
import { Socialicons } from "./components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./pages/Project/Project"
import dataportfolio from "./data/dataportfolio"; // Import your project data
import NotFound from "./pages/NotFound/NotFound";
import { Container } from "react-bootstrap";

const AnimatedRoutes = withRouter(({ location }) => (
  <Container>
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
       <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Portfolio />} /> 
        
        {dataportfolio.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={<Project project={project} />}
          />
        ))}

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
  </Container>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
