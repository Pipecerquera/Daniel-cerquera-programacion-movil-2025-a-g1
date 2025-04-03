import {
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  } from "@ionic/react";
  import { useState } from "react";
  import "./PersonForm.css";
  
  interface PersonFormProps {
    onAddPerson: (name: string, email: string) => void;
  }
  
  const PersonForm: React.FC<PersonFormProps> = ({ onAddPerson }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = () => {
      if (name.trim() !== "" && email.trim() !== "") {
        onAddPerson(name, email);
        setName("");
        setEmail("");
      }
    };
  
    return (
      <div className="person-form">
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Correo</IonLabel>
          <IonInput value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" color="success" onClick={handleSubmit}>
          Agregar Persona
        </IonButton>
      </div>
    );
  };
  
  export default PersonForm;
  