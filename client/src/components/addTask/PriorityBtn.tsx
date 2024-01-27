type Props = {
  prio: string;
};

function PriorityBtn({ prio }: Props) {
  return (
    <button
      className='formPriorityBtn'
      type='button'
      name='priority'
      value='wichtig'
    >
      {prio}
    </button>
  );
}
export default PriorityBtn;
