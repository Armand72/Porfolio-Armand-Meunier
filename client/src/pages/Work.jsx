import React, { Component } from "react";
import { motion } from "framer-motion";

import PartTitle from "../components/PartTitle";
import Cards from "../components/Cards";

const imageData = [
  {
    title: "EdocGroup",
    img: "/edocPersoLarge.webp",
    large: "/edocPersoLarge.webp",
    text:
      "Stage au cours de ma formation de <span>développeur web</span>. J'ai pu travailler sur Vue js en tant que développeur <span>front-end</span>. J'ai eu l'occasion d'être entouré des collaborateurs aux <span>compétences</span> diverses (ux designer, back-end, dev ops, QA engineer), le tout dans une optique de management de projet <span>Scrum</span>. J'ai eu l'opportunité de travailler sur une librairie comme <span>Storybook</span> et de travailler avec <span>Gitlab et Jira</span> afin de d'aider dans l'élaboration de leur solution logicielle.",
    summary:
      "Exemple de ce que j'ai pu réalisé à partir du site préexistant lors de mon stage de 5 mois.",
    github: "",
    website: "https://edocperso.fr/",
    skills: "Vue / Sass / Gitlab / Scrum",
    category: "dev",
  },
  {
    title: "En voyage vers soi",
    img: "/envoyageverssoiLarge.webp",
    large: "/envoyageverssoiLarge.webp",
    text:
      "<span>Projet client</span> réalisé à l'école en React et node. <span>En équipe</span>, nous nous sommes occupés de chaque aspect du projet.(maquettes, développement, relation avec le client, déploiement du site web). Ce site permet au client de présenter ses prestations et d'être contacté par <span>un formulaire de contact</span>. Le site est sécurisé par un système de <span>tokens</span>. Une page administrateur a été réalisée à la demande du client utilisant <span>une architecture API rest</span>. Le SGBD utilisé est <span>MySql</span>.",
    summary: "Projet client réalisé au cours de ma formation.",
    github: "",
    website: "http://envoyageverssoi.fr/",
    skills: "React / Node Js / Express / Github / Scrum",
    category: "dev",
  },

  {
    title: "Babysteps",
    img: "/babystepsLarge.webp",
    large: "/babystepsLarge.webp",
    text:
      "Projet réalisé dans le cadre du passage du titre <span>RNCP  'développeur web et mobile'</span>. Développé avec React et Node js, le projet a pour but de centraliser des informations personnelles sur un enfant afin de les partager aux personnes qui s'en occupent pour cerner leurs besoins. Cette application comporte une sécurisation avec <span>les tokens</span>, une architecture <span>API rest</span>, un système de messagerie avec <span>socket.io</span> de même qu'une internationalisation avec <span>react-intl</span>. Le SGBD utilisé est <span>MySql</span>.",
    summary: "Projet réalisé pour le passage du titre RNCP.",
    github: "",
    website: "",
    skills: "React / Node Js / Express / socket.io / Sass",
    category: "personal",
  },
  {
    title: "Timeline DND",
    img: "/timelineLarge.webp",
    large: "/timelineLarge.webp",
    text:
      "Projet personnel pour s'entraîner sur le <span>Drag and Drop</span> et sur <span>les hooks</span> avec react. Le but étant de pouvoir réaliser <span>une timeline personnalisée</span>. Projet utilisant React et <span>react-beautiful-dnd</span>.",
    summary:
      "Projet personnel afin de tester les hooks dans react et le Drag and drop.",
    github: "https://github.com/Armand72/timelineHook",
    website: "https://timelinedraganddrop.netlify.app/",
    skills: "React / hooks / Sass / react-beautiful-dnd",
    category: "personal",
  },
  {
    title: "Portfolio",
    img: "/portfolioMobile.webp",
    large: "/portfolioLarge.webp",
    text:
      "Ce projet a été réalisé afin de présenter de manière précise et concise mon profil à travers <span>une UX</span> permettant à l'utilisateur d'avoir accès directement aux <span>informations pertinentes</span> (boutons call to action, slider, position des différentes catégories). React a été utilisé pour ce projet ainsi que <span>node et nodemailer</span> pour <span>le formulaire de contact</span>. Les animations ont été réalisés avec <span>framer-motion</span>.",
    summary: "Le portfolio ici présent.",
    github: "",
    website: "",
    skills: "React / Node Js / Sass / framer-motion",
    category: "personal",
  },
];

// function filterWork(obj) {
//   if (obj.category )
// }

const checkWidth = () => {
  const widthContainer = document.getElementById("slider").clientWidth;
  const widthCard = document.getElementById("card").clientWidth;

  const leftConstraint = -(widthContainer - widthCard * 1.1);
  return leftConstraint;
};

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { leftConstraint: undefined, category: "all", reset: false };
  }

  componentDidMount() {
    const width = checkWidth();

    this.setState({ leftConstraint: width });
  }

  sortWork = (category) => {
    this.setState({ category });
  };

  // updatewidth = (leftConstraint) => {
  //   this.setState({ leftConstraint });
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.category !== this.state.category) {
      const width = checkWidth();
      this.setState({ leftConstraint: width });
      this.setState({ leftConstraint: width }, () => {
        this.reset();
      });

      // var div = document.getElementById("draggable");
      // div.style.transform = "translateX(0px)";
    }
  }

  reset = () => {
    this.setState({ reset: true }, () => {
      this.resetFalse();
    });
  };

  resetFalse = () => {
    this.setState({ reset: false });
  };

  filterWork = (obj) => {
    if (this.state.category === "all") {
      return true;
    } else if (this.state.category === "dev" && obj.category === "dev") {
      return true;
    } else if (
      this.state.category === "personal" &&
      obj.category === "personal"
    ) {
      return true;
    }
  };

  render() {
    const { leftConstraint, category } = this.state;

    return (
      <>
        <div className="container-work">
          <PartTitle title="Portfolio" />
          <div className="container-work__main">
            <div className="selector-container">
              <div
                onClick={() => this.sortWork("all")}
                className={
                  category === "all"
                    ? "selector-container__item selector-container__item--highlight"
                    : "selector-container__item"
                }
              >
                <p>Tous</p>
              </div>
              <div
                onClick={() => this.sortWork("dev")}
                className={
                  category === "dev"
                    ? "selector-container__item selector-container__item--highlight"
                    : "selector-container__item"
                }
              >
                <p>Développement</p>
              </div>
              <div
                onClick={() => this.sortWork("personal")}
                className={
                  category === "personal"
                    ? " selector-container__item selector-container__item--highlight"
                    : "selector-container__item"
                }
              >
                <p>Personnels</p>
              </div>
            </div>
            {!this.state.reset && (
              <motion.div
                drag="x"
                id="draggable"
                dragConstraints={{
                  left: leftConstraint,
                  right: 0,
                }}
                className={this.state.reset ? "initial" : ""}
              >
                <div id="slider" className="slide-carousel">
                  {imageData.filter(this.filterWork).map((props, id) => (
                    <Cards
                      switchModal={this.props.switchModal}
                      img={props.img}
                      title={props.title}
                      text={props.text}
                      summary={props.summary}
                      github={props.github}
                      website={props.website}
                      skills={props.skills}
                      category={props.category}
                      large={props.large}
                      key={id}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Work;
