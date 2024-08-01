import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent, IonButton,
  IonGrid, IonRow, IonCol, 
  IonInput, IonIcon, IonAvatar, IonLabel } from '@ionic/react';
import { person, lockClosed, star, logIn, personAdd } from 'ionicons/icons';

import Attendant from './../components/register/attendant'

const Tab4: React.FC = () => {
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
          
          <IonCardContent>
            
           
            
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
