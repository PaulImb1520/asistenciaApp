import React, { useEffect, useState } from 'react';


import 'semantic-ui-css/semantic.min.css';  
import {IonGrid, IonRow, IonCol} from '@ionic/react';
import axios from 'axios';

export default function Report(){
    const [apiData, setApiData] = useState([]);
    const [record, setRecord] = useState('');

    const aux  = 'https://cors-anywhere.herokuapp.com/';
    const myip = 'http://40.75.120.104/apiweb/index.php/2';

    console.log("record "+record);
    useEffect(() => {
        
        setRecord(localStorage.getItem('RECORD'));
        axios.get(aux+myip, {
            params: {
              record: record
            }
          })
          .then(function (getData) {
            console.log("informacion "+getData);
            setApiData(getData.data);
          })
          .catch(function (error) {
            console.log(error);
          })          

    }, [])


    return(
        <div>
            <br/>
            <center>
                <h2>Registro de Asistencia</h2>
            </center>
            <IonGrid>
                <IonRow>
                    <IonCol push-sm="6">FECHA</IonCol>
                    <IonCol push-sm="6">HORA</IonCol>
                </IonRow>
            {apiData.map((data) => {
                return (
                    <IonRow key={data.record}>
                        <IonCol push-sm="6">{data.date}</IonCol>
                        <IonCol push-sm="6">{data.time}</IonCol>
                    </IonRow>
                )
            })}
            </IonGrid>
        </div>
    )
}


