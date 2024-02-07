import { useState } from 'react';
import { arrowDropDown } from '../../assets/img/img';

type CategoryProps = {
  category: string;
  onChange: (category: string) => void;
};

function Category({ category, onChange }: CategoryProps) {
  const [iconIsRotated, setIconIsRotated] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);

  const handleActiveCategory = (category: string) => {
    onChange(category);
    setShowCategoryList(false);
    setIconIsRotated(false);
  };

  const toggleCategoryList = () => {
    setShowCategoryList(!showCategoryList);
    setIconIsRotated(!iconIsRotated);
  };

  return (
    <div className='category'>
      <div className='addTask__title'>Category</div>
      <div className='category__borderBottom' onClick={toggleCategoryList}>
        <div className='category__inputContainer'>
          <input
            className='category__input'
            type='text'
            id='category'
            value={category}
            placeholder='Select task category'
            readOnly
          />
          <div className='category__icon'>
            <img
              src={arrowDropDown}
              alt='arrow icon'
              className={
                iconIsRotated
                  ? 'category__icon-rotateDown'
                  : 'category__icon-rotateUp'
              }
            />
          </div>
        </div>
      </div>
      {showCategoryList && (
        <div className='category__list'>
          <ul>
            <li onClick={() => handleActiveCategory('Technical Task')}>
              <div>Technical Task</div>
            </li>
            <li onClick={() => handleActiveCategory('User Story')}>
              <div>User Story</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Category;
