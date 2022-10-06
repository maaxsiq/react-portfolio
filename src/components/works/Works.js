/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Invillia - Mid Front-end Developer', 
      description: `Frontend Developer TypeScript + ReactJS, using the technologies: GraphQL, Rollbar, Rest API, DataDog, Firebase, Twilio, GitHub Actions, CI/CD, TDD, Unit Tests, Design Pattern, CleanCode Archtechture, Styled Components, AWS systems..`,
      alter: 'Invillia Technologies',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'B.blend - Mobile Developer (Freelancer)', 
      description: `Development and maintenance of mobile application for partner
      company Brastemp, development of screens with UX,
      communications with APIs and creation/control of system logic,
      using the technologies: Rest API, Firebase, Design Pattern,
      CleanCode Archtechture, Styled Components.
      `,
      alter: 'B.blend Technologies',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Tazzi - Technical lead and Full-stack Developer', 
      description: `Development of web and mobile application with React Native for
      fleet management (Uber clone), admin panel with ReactJS +
      TypeScript, maintenance of technologies and databases with
      MongoDB and PostgreSQL.
      `,
      alter: 'Tazzi Technologies',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Siglo - Information System Manager', 
      description: `Development of geographic information systems software, using
      PostgreSQL databases, LeaftLet, React Native, ReactJS and NodeJS.
      Management and analysis of data received from city halls, creation
      of databases relational/geographic, creating and maintaining AWS
      servers, and managing task force.
      `,
      alter: 'Siglo Technologies',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Monkeys -  Full-stack Developer', 
      description: `Development and maintenance of Mobile application using React
      Native technology and PostgreSQL database for audio book
      application, including screens and AWS server (Amazon).
      `,
      image: `${Lacalle}`,
    },
    { 
      id: 6,
      title: 'Monkeys -  Full-stack Developer', 
      description: `Development and maintenance of web and mobile application
      (ReactJS and React Native) to control and visit properties, with
      PostGreSQL database, managed by realtors in São Paulo.
      `,
      image: `${Lacalle}`,
    },
    { 
      id: 7,
      title: 'B2ML - Front-end Developer', 
      description: `Development of local software for Petrobras subdivisions in Java for
      electronic fuel pump control. Development of web application for
      Petrobras subdivisions in JavaScript for user administration,
      payments and supplies. Web application development for
      subdivisions from Petrobras in JavaScript for financial control of
      supplies and generation of electronic invoices.
      `,
      image: `${Lacalle}`,
    },
    { 
      id: 8,
      title: 'Monkeys -  CEO', 
      description: `Company administrator Monkeys. Strength
      management of task, technical team and application time by
      functionality of each step projects, using Scrum as the main
      method.
      `,
      image: `${Lacalle}`,
    },
    { 
      id: 9,
      title: 'PD Soluções -  IOT and Front-end Developer', 
      description: `Embedded software development for electronic devices such as
      luminaires via Bluetooth, printers and turnstiles with biometric
      reader. Development of Android applications to control electronic
      devices and information, such as gates via sms and luminaires via
      Bluetooth.
      `,
      image: `${Lacalle}`,
    },
    { 
      id: 10,
      title: 'Ventrix -  Electronics Technician', 
      description: `Maintenance of digital electrocardiographs, development of test
      gimbals for cables, management of the technical assistance
      environment, direct customer support via Skype and/or e-mail,
      stock control, shipping, implementation of new software (Microsiga
      – TOTVS), receiving and producing the devices.
      `,
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
