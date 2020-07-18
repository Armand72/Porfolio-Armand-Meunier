import React, { Component } from "react";
import PartTitle from "../components/PartTitle";

const skillData = [
  {
    url: "./html-5.png",
    title: "HTML5",
  },
  {
    url: "./css.png",
    title: "CSS3",
  },

  {
    url: "./sass.png",
    title: "Sass",
  },
  {
    url: "./javascript.png",
    title: "Javascript",
  },
  {
    url: "./react.png",
    title: "React",
  },
  {
    url: "./vue.png",
    title: "Vue",
  },

  {
    url: "./mysql.png",
    title: "MySQL",
  },
  {
    url: "./nodejs.png",
    title: "Node Js",
  },

  {
    url: "./github.png",
    title: "Github",
  },
  {
    url: "./gitlab.png",
    title: "Gitlab",
  },
  {
    url: "./agile.png",
    title: "Scrum",
  },
  {
    url: "./jira.png",
    title: "Jira",
  },
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <PartTitle title="À propos" />
        <div className="container-about">
          <div className="container-about__paragraph">
            Je suis développeur junior fullstack depuis un an. J'ai terminé ma
            formation de développeur web dans une école de développement, la
            Wild Code School. Je cherche aujourd’hui la possibilité de
            progresser en javascript ainsi qu’en algorithmie. J’aime travailler
            sur plusieurs technologies à la fois car cela me permet d’apprendre
            plus vite les rouages du métier de développeur. Je suis motivé et
            disponible pour déménager dans toute la France ou à l’étranger. Je
            suis aussi disponible pour travailler bénévolement pour des
            associations ou des ONG à but non lucratives.
          </div>
          <div className="container-about__skills">
            {skillData.map((props, index) => (
              <>
                <div className="container-about__items" key={index}>
                  <div className="container-about__image">
                    <img src={props.url} alt={props.title} />
                  </div>
                  <div className="container-about__title">
                    <p>{props.title}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default About;
