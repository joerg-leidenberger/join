import { addSVG, plusButtonSVG, searchSVG } from '../../assets/img/img';

function boardHead() {
  return (
    <div className='boardHead'>
      <div className='boardHead__container'>
        <div className='boardHead__search'>
          <input type='text' placeholder='Find Task' />
          <div className='boardHead__container-icon'>
            <div className='boardHead__line'></div>
            <div className='boardHead__icon'>{searchSVG()}</div>
          </div>
        </div>
        <button className='boardHead__addTask'>
          Add task <div className='boardHead__addTask__icon'>{addSVG()}</div>
        </button>
      </div>
      <div className='boardHead__columnTitle'>
        <div className='boardHead__columnTitle__container'>
          To do <div className='boardHead__plusButton'>{plusButtonSVG()}</div>
        </div>
        <div className='boardHead__columnTitle__container'>
          In progress{' '}
          <div className='boardHead__plusButton'>{plusButtonSVG()}</div>
        </div>
        <div className='boardHead__columnTitle__container'>
          Await feedback{' '}
          <div className='boardHead__plusButton'>{plusButtonSVG()}</div>
        </div>
        <div>Done</div>
      </div>
    </div>
  );
}
export default boardHead;
