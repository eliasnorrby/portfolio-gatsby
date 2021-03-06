import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { useMediaQuery } from "react-responsive";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <Layout>
      {isDesktopOrLaptop ? (
        <Parallax pages={5}>
          <Hero offset={0} />
          <Projects offset={1} />
          <About offset={3} />
          <Contact offset={4} />
        </Parallax>
      ) : (
        <Parallax pages={7}>
          <Hero offset={0} />
          <Projects offset={1} />
          <About offset={4} />
          <Contact offset={6} />
        </Parallax>
      )}
    </Layout>
  );
};

export default Cara;
