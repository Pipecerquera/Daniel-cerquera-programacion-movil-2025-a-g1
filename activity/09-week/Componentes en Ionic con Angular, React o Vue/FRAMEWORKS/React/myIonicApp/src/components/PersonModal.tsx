import { IonModal, IonButton } from '@ionic/react';

const PersonModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <p>Detalles de la persona</p>
      <IonButton onClick={onClose}>Cerrar</IonButton>
    </IonModal>
  );
};

export default PersonModal;
