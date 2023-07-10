import React, { useState } from "react";
import Checkbox from "../Components/Checkbox";

import Inputcontainer from "../Components/Inputcontainer";
import Radioinput from "../Components/Radioinput";
import styles from "./Display.module.css";
import Results from "../Components/Results";
import Emailinput from "../Components/Emailinput";

function Display() {
  const [data, setData] = useState({
    email: "",
    name: "",
    country: "",
    adress: "",
    payment: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    country: "",
    adress: "",
  });
  const [terms, setTerms] = useState(false);
  const [displayResults, setDisplayResults] = useState(null);

  // errors.name
  // errors["name"]

  return (
    <div className={styles.container}>
      <div style={{ color: "darkgreen", fontWeight: "bold" }}>Plaćanje</div>
      <div> Kontakt</div>
      <Emailinput
        placeholder={"Email adresa..."}
        setValue={(value) => {
          setData({ ...data, email: value });
        }}
        setError={(value) => {
          setErrors({ ...errors, email: value });
        }}
        error={errors.email}
      />
      <div>Adresa</div>
      <Inputcontainer
        placeholder={"Ime:"}
        min={3}
        max={12}
        setValue={(value) => {
          setData({ ...data, name: value });
        }}
        setError={(value) => {
          setErrors({ ...errors, name: value });
        }}
        error={errors.name}
      />
      <Inputcontainer
        min={3}
        max={12}
        placeholder={"Država:"}
        setValue={(value) => {
          setData({ ...data, country: value });
        }}
        setError={(value) => {
          setErrors({ ...errors, country: value });
        }}
        error={errors.country}
      />
      <Inputcontainer
        min={3}
        max={12}
        placeholder={"Adresa:"}
        setValue={(value) => {
          setData({ ...data, adress: value });
        }}
        setError={(value) => {
          setErrors({ ...errors, adress: value });
        }}
        error={errors.adress}
      />
      <div>Način plaćanja:</div>
      <Radioinput
        data={["Pouzeće", "Kartica"]}
        setValue={(value) => {
          setData({ ...data, payment: value });
        }}
        value={data.payment}
      />
      <Checkbox checked={terms} handleChange={setTerms} />
      <div className={styles.btn_container}>
        <button
          className={styles.btn}
          onClick={() => {
            if (!terms) {
              alert(
                "Da biste potvrdili narudžbu morate prvo prihvatiti uvjete narudžbe!"
              );
            } else if (Object.keys(errors).some((item) => !!errors[item])) {
              alert("Morate ispraviti greške!");
            } else {
              setDisplayResults(data);
            }
          }}
        >
          Naruči
        </button>
      </div>
      {displayResults && <Results data={displayResults} />}
    </div>
  );
}

export default Display;
