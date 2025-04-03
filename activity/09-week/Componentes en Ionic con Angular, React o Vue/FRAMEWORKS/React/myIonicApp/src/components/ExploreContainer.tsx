import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Edita <code>src/pages/{name}.tsx</code> y guarda para actualizar.</p>
    </div>
  );
};

export default ExploreContainer;
