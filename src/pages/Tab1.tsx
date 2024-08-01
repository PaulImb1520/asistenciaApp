import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent, IonButton,
  IonGrid, IonRow, IonCol, 
  IonInput, IonIcon, IonAvatar, IonLabel } from '@ionic/react';
import { person, lockClosed, star, logIn, personAdd } from 'ionicons/icons';
import Login from './../components/login/login';


const Tab1: React.FC = () => {
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
          <br/>
          <center>  
          <IonAvatar> 
              <img alt="Imagen" src="/assets/images/login2.jpg"/>
          </IonAvatar>
          </center>
          <br/>
          <IonCardContent>
            <center>
              <h1>Bienvenido</h1>
            </center>
            <br/>
            <Login/>
            
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
