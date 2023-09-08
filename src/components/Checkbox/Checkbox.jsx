import React from 'react';
import './Checkbox.css';

function FilterCheckbox({ isChecked, toggleCheckbox }) {
    return (
        <div className='checkbox__cover'>
            <label className='checkbox__switch'>
                <input
                    className='checkbox'
                    id='checkbox'
                    name='checkbox'
                    type='checkbox'
                    onChange={toggleCheckbox}
                    checked={isChecked}
                />
                <span className='checkbox__slider round' />
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>
    );
};

export default FilterCheckbox;