import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';


import { User } from './../models/user.model' ;
import UserItem from './../components/userItem'; 
import axios from 'axios';
import Read from './../components/read/read';

const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
            <IonTitle>CHRONOS</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br/>
        <center>
          <h3>Lista de Usuarios</h3>
        </center>
        <br/>
        <Read/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
