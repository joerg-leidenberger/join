import PriorityBtn from './PriorityBtn';

type PriorityProps = {
  priority: string;
  onChange: (value: string) => void;
};

function Priority({ priority, onChange }: PriorityProps) {
  return (
    <div>
      <div className='addTask__title'>Priority:</div>
      <div className='priority'>
        {['Urgent', 'Medium', 'Low'].map((prio) => (
          <PriorityBtn
            key={prio}
            prio={prio}
            active={priority === prio}
            onClick={() => onChange(prio)}
          />
        ))}
      </div>
    </div>
  );
}
export default Priority;
