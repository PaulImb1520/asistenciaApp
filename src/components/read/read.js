import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/index.php/3";

  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(aux + myip)
      .then((getData) => {
        console.log(getData.data);
        setApiData(getData.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            Hubo un error al mostrar los registros...
          </h2>
        </>
      ) : (
        <IonGrid>
          <IonRow>
            <IonCol push-sm="6">COD</IonCol>
            <IonCol push-sm="6">NOMBRES</IonCol>
            <IonCol push-sm="6">APELLIDOS</IonCol>
          </IonRow>
          {apiData.map((data) => {
            return (
              <IonRow key={data.record}>
                <IonCol push-sm="6">{data.record}</IonCol>
                <IonCol push-sm="6">{data.names}</IonCol>
                <IonCol push-sm="6">{data.lastnames}</IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      )}
    </div>
  );
}
