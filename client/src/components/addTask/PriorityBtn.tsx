import { prioalta, priobaja, priomedia } from '../../assets/img/img';

type Props = {
  prio: 'Urgent' | 'Medium' | 'Low';
};

function PriorityBtn({ prio }: Props) {
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
      className={`priorityBtn priorityBtn__hover-${prio.toLowerCase()}`}
      type='button'
      name='priority'
      value={prio}
    >
      {prio} <img src={getImageForPriority()} alt={prio} />
    </button>
  );
}
export default PriorityBtn;
