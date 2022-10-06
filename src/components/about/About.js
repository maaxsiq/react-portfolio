/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/ms.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const english = "English level: Intermediary";
  const aboutme = `I'm ${FirstName} ${LastName}, Full-stack JavaScript software developer, working for about 8 years with development. Technologies/Frameworks: ReactJS, ReactNative, TypeScript, NodeJS, AWS, Firebase, Jest, Cognito, Amplify, REST API, GraphQL, geographic information systems (Sig/Geo), relational databases (PostgreSQL, MySQL, etc), databases non-relational data (MongoDB, DynamoDB), Clean Architecture, SaaS, Styled Components, TDD, GitHub, GitLab, BitBucket, CI/CD Pipelines (Git Hub Actions, Jenkins, etc), knowledge of the scrum method and its ceremonies.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <TextDecrypt text={`${english}`} />
          </div>
        </div>
      </Container>
    </section>
  );
};
