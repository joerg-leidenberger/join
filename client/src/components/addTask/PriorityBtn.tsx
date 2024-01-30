import { prioalta, priobaja, priomedia } from '../../assets/img/img';

type Props = {
  prio: 'Urgent' | 'Medium' | 'Low';
  active: boolean;
  onClick: () => void;
};

function PriorityBtn({ prio, active, onClick }: Props) {
  const activeButton = () => {
    return active ? 'active' : '';
  };

  const getImageForPriority = () => {
    switch (prio) {
      case 'Urgent':
        return prioalta;
      case 'Medium':
        return priomedia;
      case 'Low':
        return priobaja;
    }
  };

  return (
    <button
      className={`priorityBtn priorityBtn__hover-${prio.toLowerCase()} priorityBtn__${activeButton()}-${prio.toLowerCase()}`}
      type='button'
      name='priority'
      value={prio}
      onClick={onClick}
    >
      {prio} <img src={getImageForPriority()} alt={`${prio} icon`} />
    </button>
  );
}
export default PriorityBtn;
