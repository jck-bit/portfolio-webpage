import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation, Route, Routes
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import "./App.css";
import Project from '../pages/Project/Project';
import Navbar from "../components/navbar/Navbar";
import CollapsibleExample from "../components/navbar/Navbar";
import NavbarE from "../components/navbar/Navbar";

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
    <Router basename={process.env.PUBLIC_URL}>
      
      <ScrollToTop>
      <NavbarE/>
        {/* <Headermain /> */}
        
        <Routes>
      <Route path="/*" element={<AppRoutes />} />
      <Route path="/project/:projectId" element={<Project />} />
    </Routes>
      </ScrollToTop>
    </Router>
  );
}