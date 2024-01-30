import { useState } from 'react';
import { arrowDropDown } from '../../assets/img/img';

function Category() {
  const [iconIsRotated, setIconIsRotated] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Select task category');

  const handleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  const handleIconRotate = () => {
    setIconIsRotated(!iconIsRotated);
  };

  const toggleContactList = () => {
    setShowCategoryList(!showCategoryList);
  };

  return (
    <div className='category'>
      <div className='addTask__title'>Category</div>
      <div
        className='category__inputContainer'
        onClick={() => {
          toggleContactList();
          handleIconRotate();
        }}
      >
        <input
          className='category__input'
          type='text'
          id='category'
          value={activeCategory}
          readOnly
        ></input>
        <span className='category__arrowIcon'>
          <img
            src={arrowDropDown}
            alt='arrow icon'
            className={`${
              iconIsRotated
                ? 'category__arrowIcon-rotateDown'
                : 'category__arrowIcon-rotateUp'
            }`}
          />
        </span>
      </div>
      {showCategoryList && (
        <div className='category__list'>
          <div>
            <ul
              onClick={() => {
                handleIconRotate();
              }}
            >
              <li
                onClick={() => {
                  handleActiveCategory('Technical Task');
                  setShowCategoryList(false);
                }}
              >
                <div>Technical Task</div>
              </li>
              <li
                onClick={() => {
                  handleActiveCategory('User Story');
                  setShowCategoryList(false);
                }}
              >
                <div>User Story</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Category;
