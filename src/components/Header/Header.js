import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <div1>
      <link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </link>
    </div1>
    <div2>
      <li>
        <link href="#projects">
          <Navlink>Projects</Navlink>
        </link>
      </li>
      <li>
        <link href="#Tech">
          <Navlink>Tech</Navlink>
        </link>
      </li>
      <li>
        <link href="#about">
          <Navlink>About</Navlink>
        </link>
      </li>
    </div2>
  </Container>
);

export default Header;
