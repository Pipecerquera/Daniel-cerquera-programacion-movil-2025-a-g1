import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
} from "@ionic/react";
import { trash, personCircle, create, arrowBack } from "ionicons/icons";
import { useState } from "react";
import "./PersonList.css";
import { useHistory } from "react-router-dom";

const PersonList = () => {
    const [persons, setPersons] = useState<{ id: number; name: string; email: string }[]>([]);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [editingPerson, setEditingPerson] = useState<{ id: number; name: string; email: string } | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();

    // Agregar persona
    const addPerson = () => {
        if (newName.trim() === "" || newEmail.trim() === "") return;
        const newPerson = { id: Date.now(), name: newName, email: newEmail };
        setPersons([...persons, newPerson]);
        setNewName("");
        setNewEmail("");
    };

    // Eliminar persona
    const deletePerson = (id: number) => {
        setPersons(persons.filter((person) => person.id !== id));
    };

    // Abrir modal para editar
    const openEditModal = (person: { id: number; name: string; email: string }) => {
        setEditingPerson(person);
        setNewName(person.name);
        setNewEmail(person.email);
        setIsEditing(true);
    };

    // Guardar edición
    const saveEdit = () => {
        if (!editingPerson) return;
        setPersons(
            persons.map((p) =>
                p.id === editingPerson.id ? { ...p, name: newName, email: newEmail } : p
            )
        );
        setIsEditing(false);
        setEditingPerson(null);
        setNewName("");
        setNewEmail("");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButton slot="start" fill="clear" onClick={() => history.goBack()}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                    <IonTitle>📋 Gestión de Personas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding custom-background">
                {/* FORMULARIO PARA AGREGAR */}
                <div className="form-container">
                    <IonItem>
                        <IonLabel position="floating">Nombre</IonLabel>
                        <IonInput value={newName} onIonChange={(e) => setNewName(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Correo</IonLabel>
                        <IonInput value={newEmail} onIonChange={(e) => setNewEmail(e.detail.value!)} />
                    </IonItem>
                    <IonButton expand="full" color="success" onClick={addPerson}>
                        Agregar Persona
                    </IonButton>
                </div>

                {/* LISTA DE PERSONAS */}
                <IonList className="person-list">
                    {persons.length > 0 ? (
                        persons.map((person) => (
                            <IonCard key={person.id} className="person-card">
                                <IonCardHeader>
                                    <IonCardTitle>
                                        <IonIcon icon={personCircle} className="person-icon" />
                                        {person.name}
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p className="dark-text">📧 {person.email}</p>
                                    <IonButton color="warning" onClick={() => openEditModal(person)}>
                                        <IonIcon icon={create} /> Editar
                                    </IonButton>
                                    <IonButton color="danger" onClick={() => deletePerson(person.id)}>
                                        <IonIcon icon={trash} /> Eliminar
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        ))
                    ) : (
                        <p className="empty-message dark-text">🚀 No hay usuarios registrados</p>
                    )}
                </IonList>

                {/* MODAL PARA EDITAR */}
                <IonModal isOpen={isEditing} onDidDismiss={() => setIsEditing(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Editar Persona</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonItem>
                            <IonLabel position="floating">Nombre</IonLabel>
                            <IonInput value={newName} onIonChange={(e) => setNewName(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Correo</IonLabel>
                            <IonInput value={newEmail} onIonChange={(e) => setNewEmail(e.detail.value!)} />
                        </IonItem>
                        <IonButton expand="full" color="primary" onClick={saveEdit}>
                            Guardar Cambios
                        </IonButton>
                        <IonButton expand="full" color="light" onClick={() => setIsEditing(false)}>
                            Cancelar
                        </IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default PersonList;
