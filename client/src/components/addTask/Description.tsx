function Description() {
  return (
    <label>
      <div className='addTask__title'>
        Description <span>(optional)</span>
      </div>
      <textarea
        className='inputDescription'
        name='description'
        placeholder='Enter a Description'
      ></textarea>
    </label>
  );
}
export default Description;
