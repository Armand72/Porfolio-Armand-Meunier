import React, { Component } from "react";
import PartTitle from "../components/PartTitle";

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phonenumber: "",
      email: "",
      message: "",
      fullnameError: false,
      emailError: false,
      messageError: false,

      sending: false,
    };
  }

  updateData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { fullname, email, phonenumber, message } = this.state;

    if (fullname === "") {
      this.setState({ fullnameError: true });
    } else {
      this.setState({ fullnameError: false });
    }

    if (email === "") {
      this.setState({ emailError: true });
    } else {
      this.setState({ emailError: false });
    }

    if (message === "") {
      this.setState({ messageError: true });
    } else {
      this.setState({ messageError: false });
    }

    if (fullname !== "" && email !== "" && message !== "") {
      this.setState({ sending: true });
      fetch(SERVER_ADDRESS + "/sendmail", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          fullname,
          email,
          phonenumber,
          message,
        }),
      }).then((res) => {
        this.setState({ sending: false });
        if (res.ok) {
          this.props.errorMessage("Message envoyé!");
        } else {
          this.props.errorMessage("Erreur lors de l'envoi!");
        }
      });
    } else {
      this.props.errorMessage("Veuillez remplir tous les champs!");
    }
  };

  render() {
    const {
      fullname,
      message,
      email,
      fullnameError,
      emailError,
      messageError,
    } = this.state;
    return (
      <>
        <PartTitle title="Contact" />

        <form className="contact-container" onSubmit={this.submitForm}>
          <div className="contact-container__top">
            <div className="contact-container__items">
              <p className="contact-container__title">Nom *</p>
              <input
                onChange={this.updateData}
                className={
                  fullnameError
                    ? "contact-container__input contact-container__input--red"
                    : "contact-container__input"
                }
                name="fullname"
              />
            </div>
            <div className="contact-container__items">
              <p className="contact-container__title">Numéro de téléphone</p>
              <input
                onChange={this.updateData}
                className="contact-container__input"
                name="phonenumber"
              />
            </div>
            <div className="contact-container__items">
              <p className="contact-container__title">Email *</p>
              <input
                onChange={this.updateData}
                className={
                  emailError
                    ? "contact-container__input contact-container__input--red"
                    : "contact-container__input"
                }
                name="email"
              />
            </div>
          </div>
          <div className="contact-container__bottom">
            <p className="contact-container__title">Message *</p>
            <textarea
              spellCheck="false"
              onChange={this.updateData}
              className={
                messageError
                  ? "contact-container__textarea contact-container__textarea--red"
                  : "contact-container__textarea"
              }
              name="message"
            ></textarea>
            <div>
              <button
                className={
                  fullname === "" || message === "" || email === ""
                    ? "contact-container__button contact-container__button--disable"
                    : "contact-container__button "
                }
                type="submit"
              >
                {this.state.sending ? (
                  <div className="sentIcon">
                    <svg
                      width="50"
                      height="30"
                      viewBox="0 0 511 207"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="sent">
                        <g id="firetwo">
                          <path
                            id="Vector"
                            d="M93.8211 15.9253C93.9731 24.1018 100.645 30.6212 108.786 30.6212H125.35V0.675781H108.513C100.243 0.827848 93.6651 7.65524 93.8211 15.9253Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g id="fireone">
                          <path
                            id="Vector_2"
                            d="M19.9012 30.6251H62.702C70.9721 30.6251 77.6747 23.9185 77.6747 15.6485C77.6747 7.37839 70.9721 0.671875 62.702 0.671875H19.9012C11.6311 0.671875 4.92847 7.37839 4.92847 15.6485C4.92847 23.9185 11.6311 30.6251 19.9012 30.6251Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g id="firefour">
                          <path
                            id="Vector_3"
                            d="M102.208 96.4776H125.252V66.5283H102.208C93.938 66.5283 87.2314 73.2348 87.2314 81.5049C87.2314 89.775 93.938 96.4776 102.208 96.4776Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g id="fireseven">
                          <path
                            id="Vector_4"
                            d="M102.208 176.504C93.938 176.504 87.2314 183.21 87.2314 191.48C87.2314 199.75 93.938 206.453 102.208 206.453H125.287C125.268 206.004 125.252 176.504 125.252 176.504H102.208Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g id="firesix">
                          <path
                            id="Vector_5"
                            d="M54.2681 176.504H13.9783C5.70823 176.504 -0.998291 183.21 -0.998291 191.48C-0.998291 199.75 5.70823 206.453 13.9783 206.453H54.2681C62.5382 206.453 69.2447 199.75 69.2447 191.48C69.2447 183.21 62.5382 176.504 54.2681 176.504Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g id="firefive">
                          <path
                            id="Vector_6"
                            d="M125.252 113.946H83.1841C74.914 113.946 68.2075 120.648 68.2075 128.918C68.2075 137.189 74.914 143.895 83.1841 143.895H125.252V113.946Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          id="firethree"
                          d="M30.6004 66.5283C22.3303 66.5283 15.6277 73.2348 15.6277 81.5049C15.6277 89.775 22.3303 96.4776 30.6004 96.4776H41.2996C49.5697 96.4776 56.2762 89.775 56.2762 81.5049C56.2762 73.2348 49.5697 66.5283 41.2996 66.5283H30.6004Z"
                          fill="#FFFFFF"
                        />
                        <path
                          id="Vector_7"
                          d="M155.201 19.9453V183.499L253.28 81.5595L155.201 19.9453Z"
                          fill="#FFFFFF"
                        />
                        <path
                          id="Vector_8"
                          d="M341.147 128.107C338.714 129.636 335.95 130.404 333.181 130.404C330.417 130.404 327.652 129.636 325.215 128.107L279.186 99.1914L175.984 206.453H489.108L386.385 99.6905L341.147 128.107Z"
                          fill="#FFFFFF"
                        />
                        <path
                          id="Vector_9"
                          d="M482.331 0.671875H184.035L333.181 94.3682L482.331 0.671875Z"
                          fill="#FFFFFF"
                        />
                        <path
                          id="Vector_10"
                          d="M412.287 82.0586L510.07 183.686V20.6355L412.287 82.0586Z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>
                  </div>
                ) : (
                  "Envoyer"
                )}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Contact;
