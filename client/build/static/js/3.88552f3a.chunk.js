(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(5),i=a(4),o=a(0),l=a.n(o),c=a(1),u=a(12),p=a(24);function d(){var e=Object(p.a)(["\n  @media (max-width: 576px) {\n    height: 400px;\n    border-radius: 25px;\n  }\n  background: url(",") no-repeat;\n\n  margin: auto;\n  background-size: cover;\n  height: 500px;\n  border-radius: 50px;\n  background-position: 50% 50%;\n"]);return d=function(){return e},e}var m=a(30).a.div(d(),function(e){return e.img}),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).isHovered=function(){r.setState({hovered:!r.state.hovered})},r.state={hovered:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.img,n=t.title,r=t.text,s=t.summary,i=t.github,o=t.website,u=t.skills,p=t.category,d=t.large;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b.div,{id:"card",className:"slide-carousel__card",onMouseEnter:this.isHovered,onMouseLeave:this.isHovered,initial:{scale:0},animate:{scale:1}},l.a.createElement(m,{img:a},l.a.createElement(c.b.div,{initial:{opacity:0},animate:this.state.hovered?{opacity:1}:{opacity:0},className:"slide-carousel__card--info"},l.a.createElement("h2",null,n),l.a.createElement("p",null,s),l.a.createElement("p",null,"Technologies: ",u),l.a.createElement("div",null,l.a.createElement(c.b.button,{whileHover:{backgroundColor:"#2d7562"},onClick:function(){return e.props.switchModal({title:n},{img:a},{text:r},{github:i},{website:o},{category:p},{skills:u},{large:d})}},"En savoir plus"))))))}}]),a}(o.Component),v=[{title:"EdocGroup",img:"/edocPersoLarge.webp",large:"/edocPersoLarge.webp",text:"Stage au cours de ma formation de <span>d\xe9veloppeur web</span>. J'ai pu travailler sur Vue js en tant que d\xe9veloppeur <span>front-end</span>. J'ai eu l'occasion d'\xeatre entour\xe9 des collaborateurs aux <span>comp\xe9tences</span> diverses (ux designer, back-end, dev ops, QA engineer), le tout dans une optique de management de projet <span>Scrum</span>. J'ai eu l'opportunit\xe9 de travailler sur une librairie comme <span>Storybook</span> et de travailler avec <span>Gitlab et Jira</span> afin de d'aider dans l'\xe9laboration de leur solution logicielle.",summary:"Exemple de ce que j'ai pu r\xe9alis\xe9 \xe0 partir du site pr\xe9existant lors de mon stage de 5 mois.",github:"",website:"https://edocperso.fr/",skills:"Vue / Sass / Gitlab / Scrum",category:"dev"},{title:"En voyage vers soi",img:"/envoyageverssoiLarge.webp",large:"/envoyageverssoiLarge.webp",text:"<span>Projet client</span> r\xe9alis\xe9 \xe0 l'\xe9cole en React et node. <span>En \xe9quipe</span>, nous nous sommes occup\xe9s de chaque aspect du projet.(maquettes, d\xe9veloppement, relation avec le client, d\xe9ploiement du site web). Ce site permet au client de pr\xe9senter ses prestations et d'\xeatre contact\xe9 par <span>un formulaire de contact</span>. Le site est s\xe9curis\xe9 par un syst\xe8me de <span>tokens</span>. Une page administrateur a \xe9t\xe9 r\xe9alis\xe9e \xe0 la demande du client utilisant <span>une architecture API rest</span>. Le SGBD utilis\xe9 est <span>MySql</span>.",summary:"Projet client r\xe9alis\xe9 au cours de ma formation.",github:"",website:"http://envoyageverssoi.fr/",skills:"React / Node Js / Express / Github / Scrum",category:"dev"},{title:"Babysteps",img:"/babystepsLarge.webp",large:"/babystepsLarge.webp",text:"Projet r\xe9alis\xe9 dans le cadre du passage du titre <span>RNCP  'd\xe9veloppeur web et mobile'</span>. D\xe9velopp\xe9 avec React et Node js, le projet a pour but de centraliser des informations personnelles sur un enfant afin de les partager aux personnes qui s'en occupent pour cerner leurs besoins. Cette application comporte une s\xe9curisation avec <span>les tokens</span>, une architecture <span>API rest</span>, un syst\xe8me de messagerie avec <span>socket.io</span> de m\xeame qu'une internationalisation avec <span>react-intl</span>. Le SGBD utilis\xe9 est <span>MySql</span>.",summary:"Projet r\xe9alis\xe9 pour le passage du titre RNCP.",github:"",website:"",skills:"React / Node Js / Express / socket.io / Sass",category:"personal"},{title:"Timeline DND",img:"/timelineLarge.webp",large:"/timelineLarge.webp",text:"Projet personnel pour s'entra\xeener sur le <span>Drag and Drop</span> et sur <span>les hooks</span> avec react. Le but \xe9tant de pouvoir r\xe9aliser <span>une timeline personnalis\xe9e</span>. Projet utilisant React et <span>react-beautiful-dnd</span>.",summary:"Projet personnel afin de tester les hooks dans react et le Drag and drop.",github:"https://github.com/Armand72/timelineHook",website:"https://timelinedraganddrop.netlify.app/",skills:"React / hooks / Sass / react-beautiful-dnd",category:"personal"},{title:"Portfolio",img:"/portfolioMobile.webp",large:"/portfolioLarge.webp",text:"Ce projet a \xe9t\xe9 r\xe9alis\xe9 afin de pr\xe9senter de mani\xe8re pr\xe9cise et concise mon profil \xe0 travers <span>une UX</span> permettant \xe0 l'utilisateur d'avoir acc\xe8s directement aux <span>informations pertinentes</span> (boutons call to action, slider, position des diff\xe9rentes cat\xe9gories). React a \xe9t\xe9 utilis\xe9 pour ce projet ainsi que <span>node et nodemailer</span> pour <span>le formulaire de contact</span>. Les animations ont \xe9t\xe9 r\xe9alis\xe9s avec <span>framer-motion</span>.",summary:"Le portfolio ici pr\xe9sent.",github:"",website:"",skills:"React / Node Js / Sass / framer-motion",category:"personal"}],b=function(){return-(document.getElementById("slider").clientWidth-1.1*document.getElementById("card").clientWidth)},h=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).sortWork=function(e){r.setState({category:e})},r.reset=function(){r.setState({reset:!0},function(){r.resetFalse()})},r.resetFalse=function(){r.setState({reset:!1})},r.filterWork=function(e){return"all"===r.state.category||("dev"===r.state.category&&"dev"===e.category||("personal"===r.state.category&&"personal"===e.category||void 0))},r.state={leftConstraint:void 0,category:"all",reset:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=b();this.setState({leftConstraint:e})}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(t.category!==this.state.category){var r=b();this.setState({leftConstraint:r}),this.setState({leftConstraint:r},function(){n.reset()})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.leftConstraint,n=t.category;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-work",name:"Portfolio"},l.a.createElement(u.a,{title:"Portfolio"}),l.a.createElement("div",{className:"container-work__main"},l.a.createElement("div",{className:"selector-container"},l.a.createElement("div",{onClick:function(){return e.sortWork("all")},className:"all"===n?"selector-container__item selector-container__item--highlight":"selector-container__item"},l.a.createElement("p",null,"Tous")),l.a.createElement("div",{onClick:function(){return e.sortWork("dev")},className:"dev"===n?"selector-container__item selector-container__item--highlight":"selector-container__item"},l.a.createElement("p",null,"D\xe9veloppement")),l.a.createElement("div",{onClick:function(){return e.sortWork("personal")},className:"personal"===n?" selector-container__item selector-container__item--highlight":"selector-container__item"},l.a.createElement("p",null,"Personnels"))),!this.state.reset&&l.a.createElement(c.b.div,{drag:"x",id:"draggable",dragConstraints:{left:a,right:0},className:this.state.reset?"initial":""},l.a.createElement("div",{id:"slider",className:"slide-carousel"},v.filter(this.filterWork).map(function(t,a){return l.a.createElement(g,{switchModal:e.props.switchModal,img:t.img,title:t.title,text:t.text,summary:t.summary,github:t.github,website:t.website,skills:t.skills,category:t.category,large:t.large,key:a})}))))))}}]),a}(o.Component);t.default=h}}]);
//# sourceMappingURL=3.88552f3a.chunk.js.map