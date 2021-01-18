import React, { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [step, setStep] = useState(1);
  const [eyePass, setEyePass] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const handleSubmit = (event) => {
    // console.log(event);
    // alert("Coucou");
    event.preventDefault(); // Empêche le rafraichissement de la page lors de la soumission du formulaire
    if (password !== passwordCheck) {
      setErrorMessage(true);
      // alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setErrorMessage(false);
      // console.log(props.username, props.password, props.passwordCheck);
      // on passe à l'étape suivante
      setStep(2);
    }
  };

  return (
    <div>
      <div>
        {step === 1 ? (
          <Form
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordCheck={passwordCheck}
            setPasswordCheck={setPasswordCheck}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setStep={setStep}
            eyePass={eyePass}
            setEyePass={setEyePass}
            eyeConfirm={eyeConfirm}
            setEyeConfirm={setEyeConfirm}
          />
        ) : (
          <StepTwo
            username={username}
            email={email}
            password={password}
            step={step}
            setStep={setStep}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
