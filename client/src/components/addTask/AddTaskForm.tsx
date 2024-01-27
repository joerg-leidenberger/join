function addTaskForm() {
  return (
    <div className='addTaskForm'>
      <form>
        <label>
          <input
            className='addTaskForm__title'
            type='text'
            name='title'
            placeholder='Enter a title'
          />
        </label>
        <label>
          Description <span>(optional)</span> <br />
          <textarea
            className='addTaskForm__description'
            name='description'
            placeholder='Enter a Description'
          ></textarea>
        </label>
        <label>
          Due date <br />
          <input
            className='addTaskForm__date'
            type='date'
            name='date'
            id='date'
          />
        </label>
        <label>
          Priority: <br />
          <div>
            <button type='button' name='priority' value='wichtig'>
              Wichtig
            </button>
            <button type='button' name='priority' value='normal'>
              Normal
            </button>
            <button type='button' name='priority' value='unwichtig'>
              Unwichtig
            </button>
          </div>
        </label>
      </form>
    </div>
  );
}
export default addTaskForm;
