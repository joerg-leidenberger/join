type DueDateProps = {
  dueDate: string;
  onChange: (value: string) => void;
};

function DueDate({ dueDate, onChange }: DueDateProps) {
  return (
    <label>
      <div className='addTask__title'>Due date</div>
      <input
        className='inputDueDate'
        type='date'
        name='dueDate'
        id='dueDate'
        value={dueDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
export default DueDate;
