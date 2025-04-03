import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>🏠 Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-container">
        <h2 className="home-title">Bienvenido a la Gestión de Personas</h2>
        <IonButton expand="full" color="secondary" onClick={() => history.push("/persons")}>
          Ver Personas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
