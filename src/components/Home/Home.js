import React from "react";
import classes from "./Home.module.css";

import fittingPiecesImg from "../../assets/images/home-img.svg";
import resume from "../../assets/files/resume.pdf";
import decorationImage from "../../assets/images/separator.png";

function Home() {
  return (
    <React.Fragment>
      <div className={classes.Home}>
        <div className={classes.HomeContent}>
          <div className={classes.HomeHero}>
            <div className={classes.HomeTitleText}>
              <h1>Hi, my name is Claudia.</h1>
              <h2>I'm a junior web developer.</h2>
              <h3 className={classes.Buzzwords}>
                & a mom, engineer, minimalist, creative.
              </h3>
              <a
                href={resume}
                download
                className={classes.ResumeLinkLargeScreen}
              >
                Get Resume
              </a>
            </div>

            <img
              src={fittingPiecesImg}
              alt="fitting pieces"
              className={classes.FittingPiecesImg}
            />
          </div>

          <br />
          <a href={resume} download className={classes.ResumeLinkSmallScreen}>
            Get Resume
          </a>
          <p className={classes.HomeParagraph}>
            My current obsessions are UX design, Shopify & React. I learn and
            create everyday while raising my son. Now he is off to preschool and
            I am looking for my first professional developer role and available
            for freelance work with small businesses.
          </p>
          <br />
          <p className={classes.HomeParagraph2}>
            Besides designing, developing & creating, my life is fulfilled by
            family, nature, yoga, deep conversation & efforts to make a positive
            impact in the world.
          </p>
          <img
            src={decorationImage}
            alt="project separator"
            className={classes.Separator}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
