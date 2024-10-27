import React, { useState } from "react";
import {
  AddContainer,
  AddButton,
  GlobalStyles,
  ComponentContainer,
} from "./Add.style";
import { AddForm, AddFormDatePicker } from "./AddForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Panel } from "primereact/panel";

const Add = () => {
  const [ziCheckIn, setZiCheckIn] = useState(new Date());
  const [ziCheckOut, setZiCheckOut] = useState(new Date());
  const [inputObject, setInputObject] = useState({
    tara: "",
    oras: "",
    imagine_pachet: "",
    nr_zile_concediu: "",
    zi_check_in: null,
    zi_check_out: null,
    nr_pers: "",
    mod_transport: "",
    pret_sejur: "",
    moneda_sejur: "",
  });

  const [error, setError] = useState({
    tara: undefined,
    oras: undefined,
    imagine_pachet: undefined,
    nr_zile_concediu: undefined,
    zi_check_in: undefined,
    zi_check_out: undefined,
    nr_pers: undefined,
    mod_transport: undefined,
    pret_sejur: undefined,
    moneda_sejur: undefined,
  });

  const handleChange = (e, name) => {
    const capitalizedValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputObject({ ...inputObject, [name]: capitalizedValue });
    handleError(capitalizedValue, name);
  };

  const handleDateChange = (value, name) => {
    const formattedDate = value.toLocaleDateString("ro-RO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setInputObject({ ...inputObject, [name]: formattedDate });
    handleError(formattedDate, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "tara":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "The country name must be longer than 3 characters",
          });
        } else if (value === "tara") {
          setError({ ...error, [name]: "The country name is incorrect" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "oras":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "The city name must be longer than 3 characters",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "imagine_pachet":
        if (!value) {
          setError({
            ...error,
            [name]: "You must upload an image",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_zile_concediu":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The number of vacation days must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "zi_check_in":
      case "zi_check_out":
        if (!value) {
          setError({
            ...error,
            [name]: `You must select a day of ${
              name === "zi_check_in" ? "check-in" : "check-out"
            }`,
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_pers":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The number of people must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "mod_transport":
        if (!value) {
          setError({
            ...error,
            [name]: "You must specify a mode of transport",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "pret_sejur":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The price of the stay must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "moneda_sejur":
        if (!value) {
          setError({
            ...error,
            [name]: "You must select a currency for your stay",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };

  const hasErrors = (errors) => {
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== undefined
    );
    const allInputsEmpty = Object.values(inputObject).some(
      (value) => value === "" || value === 0 || value === null
    );
    return hasValidationErrors || allInputsEmpty;
  };

  const handleSubmit = () => {
    if (hasErrors(error)) {
      if (Object.values(error).some((error) => error !== undefined)) {
        toast.error(
          "You cannot submit the form until all errors are resolved!",
          { autoClose: 2500 }
        );
      } else {
        toast.error("All fields must be filled in!", { autoClose: 2500 });
      }
      return;
    }
    fetch(`https://apipachete.onrender.com/pachete`, {
      method: "POST",
      body: JSON.stringify({
        ...inputObject,
        este_rezervat: 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Your package has just been added!", {
            autoClose: 2500,
            onClose: () => {
              window.location.href = "/all-packages";
            },
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        toast.error("Error adding the package!");
      });
  };

  return (
    // <ComponentContainer>
    //   <AddContainer>
    //     <GlobalStyles />
    //     {Object.keys(inputObject).map((el, index) => {
    //       if (el === "zi_check_in" || el === "zi_check_out") {
    //         return (
    //           <AddFormDatePicker
    //             key={index}
    //             name={el}
    //             selected={el === "zi_check_in" ? ziCheckIn : ziCheckOut}
    //             handleChange={(date) => {
    //               if (el === "zi_check_in") {
    //                 setZiCheckIn(date);
    //               } else {
    //                 setZiCheckOut(date);
    //               }
    //               handleDateChange(date, el);
    //             }}
    //             error={
    //               error[el] ||
    //               (el === "zi_check_in" && !ziCheckIn) ||
    //               (el === "zi_check_out" && !ziCheckOut)
    //                 ? `You must select a day of ${
    //                     el === "zi_check_in" ? "check-in" : "check-out"
    //                   }`
    //                 : undefined
    //             }
    //           />
    //         );
    //       } else {
    //         return (
    //           <AddForm
    //             key={index}
    //             name={el}
    //             type={
    //               el === "nr_zile_concediu" ||
    //               el === "nr_pers" ||
    //               el === "pret_sejur"
    //                 ? "number"
    //                 : "text"
    //             }
    //             value={inputObject[el]}
    //             handleChange={handleChange}
    //             error={error[el]}
    //           />
    //         );
    //       }
    //     })}
    //     <AddButton onClick={handleSubmit}>Submit</AddButton>
    //     <ToastContainer />
    //   </AddContainer>
    // </ComponentContainer>
    <div className="p-4">
      <div className="font-bold text-xl mt-[100px]">
        Overview of the project
      </div>
      <div className="p-2">
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Project title"
          toggleable
        >
          <div className="font-bold">Journey Gem</div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Describe the problem that you have noticed"
          toggleable
        >
          <div className="font-bold">
            Problema pe care am observat-o este timpul pe care il ocupa
            organizarea de calatorii: in doua sau mai multe persoane. Cautarea
            biletelor de avion, costurile de a merge cu masina sau de a inchiria
            o rulota, chiar si cautarea cazarilor este foarte solicitanta mai
            ales cand doresti sa mergi cu un grup de prieteni, iar dorintele
            fiecaruia trebuie satisfacute.
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Your solution / value proposition"
          toggleable
        >
          <div className="font-bold">
            Cu totii stim ca suntem persoane diferite cu nevoi diferite, unora
            le place sa mearga cu avionul pentru a scurta timpul pana a ajunge
            la destinatie, iar altora le place sa mearga cu masina sau rulota.
            De aici am plecat cu ideea de a forma pachete speciale nevoilor tale
            sau chiar tu poti sa-ti personalizezi vacanta impreuna cu prietenii,
            familia sau partenerul de viata. Oferim solutii optime cu
            transparenta 100% pentru preturile de avion (cu bagaj de cala sau
            fara), in functie de perioada dorita; costurile de carburant daca
            doresti sa mergi cu masina personala sau daca doresti sa inchiriezi
            (inclusiv rulote). Cazarile vor fi puse la dispozitia dvs.
            diversificate, intr-un mediu usor de cautat in functie de dorintele
            clientilor.
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Customer segment/s"
          toggleable
        >
          <div className="font-bold">
            → Turisti independenti;
            <br />
            → Grupuri;
            <br />
            → Familii;
            <br />
            → Seniori (pensionari);
            <br />
            → Nomazi digitali;
            <br />→ Luxury travelers
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Competition"
          toggleable
        >
          <div className="font-bold">
            → Christian Tour (sau orice firma de pachete travel)
            <br />→ Tryp.com
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Your advantage over the competition"
          toggleable
        >
          <div className="font-bold">
            Dorim sa introducem toate elementele necesare (cazari, transport -
            avion, masina, rulota, croaziere, cu o singura destinatie, cu
            destinatii multiple, pet friendly, asigurare de calatorie sau pretul
            taxelor de calatorie) pentru fiecare nevoie in parte a
            utilizatorilor ce doresc sa colaboreze cu noi pentru o vacanta de
            vis.
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Key metrics"
          toggleable
        >
          <div className="font-bold">
            → Principalele metrici de performanță ale aplicației JourneyGem:
            <br />
            <br />- Numărul de utilizatori activi lunar (MAU): Monitorizarea
            utilizatorilor activi lunar pentru a evalua nivelul de retenție și
            satisfacția utilizatorilor.
            <br />
            <br />
            500 - 1.500 de utilizatori activi lunar în primele 3-6 luni.
            <br />
            <br />
            În primele luni, aplicația poate atrage câteva sute până la peste o
            mie de utilizatori activi, mai ales cu eforturi de marketing și prin
            crearea unui efect de „word-of-mouth” pozitiv.
            <br />
            <br />- Rata de conversie a utilizatorilor: Procentul utilizatorilor
            care finalizează o rezervare completă, fie că este vorba de cazare,
            zbor sau închiriere de vehicule.
            <br />
            <br />
            1% - 5% pentru primele luni
            <br />
            <br />
            Un inceput bun ar fi un procent de 2-3%, in primele luni.
            <br />
            <br />- Valoarea medie a rezervării: Suma medie cheltuită pe
            utilizator în cadrul rezervărilor efectuate prin platformă.
            <br />
            <br />
            Pentru început, este realista o valoare medie între 150 și 300 EUR
            per rezervare.
            <br />
            <br />- Rata de retenție: Procentul de utilizatori care revin pentru
            a planifica noi călătorii după o primă experiență.
            <br />
            <br />
            20% - 30% în primele 3 luni.
            <br />
            <br />
            Rata de retenție poate crește odată cu îmbunătățirea aplicației și
            cu dezvoltarea unei experiențe personalizate pentru utilizatori.
            <br />
            <br />- Feedback și scor de satisfacție al clienților: Calitatea
            experienței utilizatorilor măsurată prin feedback și rating-uri
            oferite de aceștia.
            <br />
            <br />- Numărul de pachete personalizate create și vândute:
            Urmărirea popularității funcției de personalizare a călătoriilor,
            precum și vânzarea acestor pachete.
            <br />
            <br />
            50 - 100 pachete în primele 6 luni.
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Cost structure"
          toggleable
        >
          <div className="font-bold">
            → Structura de costuri pentru JourneyGem include următoarele
            componente principale:
            <br />
            <br />- Dezvoltare software și mentenanță: Costuri pentru
            programatori (frontend și backend), design UI/UX, testare, hosting,
            licențe de software, actualizări și securitate.
            <br />
            <br />- Infrastructură și găzduire: Cheltuieli pentru servere, baze
            de date și managementul infrastructurii cloud necesare pentru
            funcționarea optimă a aplicației.
            <br />
            <br />
            16.000 - 30.000 EUR/an
            <br />
            <br />- Comisioane și parteneriate: Taxe și comisioane pentru
            parteneriatele cu furnizori de servicii de transport, cazări și
            platforme de închiriere de vehicule.
            <br />
            <br />
            10.000 - 25.000 EUR/an, în funcție de volumul tranzacțiilor și
            partenerii aleși.
          </div>
        </Panel>
        <Panel
          className="mt-4 shadow-lg border-2 border-[#8fbc8f] rounded-tl-[6px] rounded-tr-[6px]"
          header="Revenue streams"
          toggleable
        >
          <div className="font-bold">
            → Pentru a asigura profitabilitatea JourneyGem am prevazut
            urmatoarele surse de venituri:
            <br />
            <br />- Comisioane la rezervari: venituri generate de comisioane
            aplicate fiecarei rezervari, zbor sau inchiriere de vehicule
            realizate prin platforma.
            <br />
            <br />
            Se percepe un comision de 5% la fiecare rezervare pentru inceput.
            <br />
            <br />- Publicitate si promovare pe platforma: posibilitatea de a
            afisa anunturi sponsorizate de la parteneri.
            <br />
            <br />
            Publicitatea pe platformele de călătorii este de obicei tarifată la
            un CPC de 0,5 - 2 EUR/click sau un CPM de 10 - 15 EUR pentru
            afișările anunțurilor.
            <br />
            <br />
            -Pachete premium: posibilitatea de a oferi pachete premium pentru
            vacante ce includ optiuni speciale.
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Add;
