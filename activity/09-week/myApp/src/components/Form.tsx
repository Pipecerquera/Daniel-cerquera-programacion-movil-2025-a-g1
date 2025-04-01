import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

interface FormProps {
  extraFields?: { label: string; name: string }[];
}

const Form: React.FC<FormProps> = ({ extraFields = [] }) => {
  return (
    <>
      <IonItem>
        <IonLabel position="floating">Nombre</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Apellido</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Edad</IonLabel>
        <IonInput type="number" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Correo</IonLabel>
        <IonInput type="email" />
      </IonItem>
      {extraFields.map((field) => (
        <IonItem key={field.name}>
          <IonLabel position="floating">{field.label}</IonLabel>
          <IonInput />
        </IonItem>
      ))}
      <IonButton expand="full" color="primary">Agregar</IonButton>
      <IonButton expand="full" color="secondary">Modificar</IonButton>
      <IonButton expand="full" color="danger">Eliminar</IonButton>
      <IonButton expand="full" color="tertiary">Consultar</IonButton>
    </>
  );
};

export default Form;
