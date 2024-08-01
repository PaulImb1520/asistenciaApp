import React, {useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard,  IonCardHeader, 
  IonCardTitle, IonCardContent,
  IonList, IonItem, IonInput,
  IonButton, IonIcon,
  IonModal, IonButtons} from '@ionic/react';


import { save } from 'ionicons/icons';

import { loadingController } from "@ionic/core";
import { ChangeEvent, useState } from "react";
import Create from './../components/create/create';

const Tab2: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
            <IonTitle>CHRONOS</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <center>
              <IonCardTitle>Alta de Usuario</IonCardTitle>
            </center>
          </IonCardHeader>
          <IonCardContent>        
            <Create />
          </IonCardContent>
        </IonCard>
      
          
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
