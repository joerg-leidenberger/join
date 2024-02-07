type EnterTitleProps = {
  title: string;
  onChange: (value: string) => void;
};

function EnterTitle({ title, onChange }: EnterTitleProps) {
  return (
    <label>
      <input
        className='inputTitle'
        type='text'
        name='title'
        placeholder='Enter a title'
        value={title}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
export default EnterTitle;
