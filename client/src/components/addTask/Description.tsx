function Description() {
  return (
    <>
      <label>
        Description <span>(optional)</span> <br />
        <textarea
          className='formDescription'
          name='description'
          placeholder='Enter a Description'
        ></textarea>
      </label>
      <label>
        Due date <br />
        <input className='formDate' type='date' name='date' id='date' />
      </label>
    </>
  );
}
export default Description;
