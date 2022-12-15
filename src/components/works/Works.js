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
import SalesSense from '../../assets/recentprojects/salessense.png';
import Power2Go from '../../assets/recentprojects/power2go.png';
import Invillia from '../../assets/recentprojects/invillia.jpg';
import BBlend from '../../assets/recentprojects/bblend.png';
import Tazzi from '../../assets/recentprojects/tazzi.png';
import Siglo from '../../assets/recentprojects/siglo.png';
import Monkeys from '../../assets/recentprojects/monkeys.png';
import B2ML from '../../assets/recentprojects/b2ml.png';
import PDS from '../../assets/recentprojects/pdsolucoes.png';
import Ventrix from '../../assets/recentprojects/ventrix.png';

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
      title: 'Sales Sense - Product Manager / Senior Front-end ', 
      description: `Technical team management, repository management, scrum
      master and agile methodologies organizer (JIRA, Miro, Git, AWS),
      front-end development leader using (ReactJS, ReactNative,
      TypeScript) and product manager, assisting in decisions and
      improvements of the system.
      `,
      alter: 'SS Technologies',
      image: `${SalesSense}`,
    },
    { 
      id: 1,
      title: 'Power 2 Go - Tech Lead / Senior Front-end', 
      description: `Management of the development team and technical proposals,
      leading the agile architecture ceremonies, support for front-end
      development in ReactJS and ReactNative (TypeScript), function tests
      and direct follow-up with the client.`,
      alter: 'P2GO Technologies',
      image: `${Power2Go}`,
    },
    { 
      id: 1,
      title: 'Invillia - Mid Front-end Developer', 
      description: `Management of the development team and technical proposals,
      leading the agile architecture ceremonies, support for front-end
      development in ReactJS and ReactNative (TypeScript), function tests
      and direct follow-up with the client.
      `,
      alter: 'Invillia Technologies',
      image: `${Invillia}`,
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
      image: `${BBlend}`,
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
      image: `${Tazzi}`,
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
      image: `${Siglo}`,
    },
    { 
      id: 5,
      title: 'Monkeys -  Full-stack Developer', 
      description: `Development and maintenance of Mobile application using React
      Native technology and PostgreSQL database for audio book
      application, including screens and AWS server (Amazon).
      Development and maintenance of web and mobile application
      (ReactJS and React Native) to control and visit properties, with
      PostGreSQL database, managed by realtors in São Paulo.
      Company administrator Monkeys. Strength
      management of task, technical team and application time by
      functionality of each step projects, using Scrum as the main
      method.
      `,
      image: `${Monkeys}`,
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
      image: `${B2ML}`,
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
      image: `${PDS}`,
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
      image: `${Ventrix}`,
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
              <h6 className="description">
                { project.description }
              </h6>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
