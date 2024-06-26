
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import { Container } from "react-bootstrap"

export const Socialicons = () => {
  return (
    <Container>
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
    </Container>
  );
};
