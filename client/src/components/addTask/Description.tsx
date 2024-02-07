type DescriptionProps = {
  description: string;
  onChange: (value: string) => void;
};

function Description({ description, onChange }: DescriptionProps) {
  return (
    <label>
      <div className='addTask__title'>
        Description <span>(optional)</span>
      </div>
      <textarea
        className='inputDescription'
        name='description'
        placeholder='Enter a Description'
        value={description}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </label>
  );
}
export default Description;
