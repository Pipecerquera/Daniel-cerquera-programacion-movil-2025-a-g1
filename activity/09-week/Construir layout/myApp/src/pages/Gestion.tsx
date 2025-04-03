import React, { useState } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonInput } from '@ionic/react';
import Card from '../components/Card';

const opciones = [
  { tipo: 'profesor', label: 'Profesor', extraFields: [{ label: 'Título', name: 'titulo' }, { label: 'Experiencia', name: 'experiencia' }] },
  { tipo: 'estudiante', label: 'Estudiante', extraFields: [{ label: 'Carrera', name: 'carrera' }, { label: 'Semestre', name: 'semestre' }] },
  { tipo: 'proveedor', label: 'Proveedor', extraFields: [{ label: 'Empresa', name: 'empresa' }, { label: 'Teléfono', name: 'telefono' }] },
  { tipo: 'cliente', label: 'Cliente', extraFields: [{ label: 'Dirección', name: 'direccion' }, { label: 'Teléfono', name: 'telefono' }] }
];

const Gestion: React.FC = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>('profesor');
  const camposExtras = opciones.find(op => op.tipo === tipoSeleccionado)?.extraFields || [];

  return (
    <IonPage>
      <IonContent>
        <Card title="Gestión General">
          <IonItem>
            <IonLabel>Seleccionar Tipo</IonLabel>
            <IonSelect value={tipoSeleccionado} onIonChange={(e) => setTipoSeleccionado(e.detail.value)}>
              {opciones.map(op => (
                <IonSelectOption key={op.tipo} value={op.tipo}>{op.label}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

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

          {camposExtras.map(field => (
            <IonItem key={field.name}>
              <IonLabel position="floating">{field.label}</IonLabel>
              <IonInput />
            </IonItem>
          ))}

          <IonButton expand="full" color="primary">Agregar</IonButton>
          <IonButton expand="full" color="secondary">Modificar</IonButton>
          <IonButton expand="full" color="danger">Eliminar</IonButton>
          <IonButton expand="full" color="tertiary">Consultar</IonButton>
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default Gestion;
