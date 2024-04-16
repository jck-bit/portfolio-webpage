import  { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useLocation, Route, Routes
} from "react-router-dom";
import withRouter from "./hooks/withRouter";
import AppRoutes from "./routes";
import "./App.css";
import Project from './pages/Project/Project';
import NavbarE from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Container>
        <ScrollToTop>
        <NavbarE/>
          <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
        </ScrollToTop>
    </Container>
  );
}