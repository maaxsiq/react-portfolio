/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './Framework.css';

import imgReact from '../../assets/reactjs.png';
import imgRN from '../../assets/reactnative.png';
import imgType from '../../assets/typescript.png';
import imgNode from '../../assets/nodejs.png';
import imgAWS from '../../assets/aws.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Framework = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const english = "English level: Intermediary";
  const aboutme = `I'm ${FirstName} ${LastName}, Full-stack JavaScript software developer, working for about 8 years with development. Technologies/Frameworks: ReactJS, ReactNative, TypeScript, NodeJS, AWS, Firebase, Jest, Cognito, Amplify, REST API, GraphQL, geographic information systems (Sig/Geo), relational databases (PostgreSQL, MySQL, etc), databases non-relational data (MongoDB, DynamoDB), Clean Architecture, SaaS, Styled Components, TDD, GitHub, GitLab, BitBucket, CI/CD Pipelines (Git Hub Actions, Jenkins, etc), knowledge of the scrum method and its ceremonies.`;

  return (
    <section id="framework">
      <Container component="main" className={classes.main}>
        <div className="framework" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div className="_content_wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '-100px'}}>
            <Typography component='h2' variant="h5" style={{ margin: '2rem' }}>
              <TextDecrypt text={`Frameworks/Technologies:`} />
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '50px'}}>
            <div>
              <img className="_new_image" src={imgReact} style={{ width: '9.375rem', height: '9.375rem' ,borderRadius: '50%', margin: '1rem'}}/>
            </div>
            <div>
              <img className="_new_image" src={imgRN} style={{ width: '9.375rem', height: '9.375rem' ,borderRadius: '50%', margin: '1rem'}}/>
            </div>
            <div>
              <img className="_new_image" src={imgType} style={{ width: '9.375rem', height: '9.375rem' ,borderRadius: '50%', margin: '1rem'}}/>
            </div>
            <div>
              <img className="_new_image" src={imgNode} style={{ width: '9.375rem', height: '9.375rem' ,borderRadius: '50%', margin: '1rem'}}/>
            </div>
            <div>
              <img className="_new_image" src={imgAWS} style={{ width: '9.375rem', height: '9.375rem' ,borderRadius: '50%', margin: '1rem'}}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
