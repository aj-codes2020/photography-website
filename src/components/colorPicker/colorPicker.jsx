import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './colorPicker.scss';

const colorOptions = [
  { id: 1, colors: ['#f5f5dc', '#efefef', '#243407', '#243407', '#b2ac88'] },
  { id: 2, colors: ['#ffe5eb', '#efefef', '#ca3e41', '#ca3e41', '#f9d5de'] },
  { id: 3, colors: ['#c0c0c0', '#fff', '#000000', '#000000', '#808080'] }
];

const ColorPicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const activeColors = colorOptions[activeIndex].colors;
    root.style.setProperty('--background', activeColors[0]);
    root.style.setProperty('--middleground', activeColors[1]);
    root.style.setProperty('--foreground', activeColors[2]);
    root.style.setProperty('--text-color', activeColors[3]);
    root.style.setProperty('--active-hover-color', activeColors[4]);
  }, [activeIndex]);

  const handleOptionClick = (index) => {
    setActiveIndex(index);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className='color-picker-wrapper'>
      {colorOptions.map((optionSet, index) => (
        <div
          key={optionSet.id}
          className={`color-picker-option ${visible ? 'visible' : ''} ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleOptionClick(index)}
        >
          {optionSet.colors.map((color, colorIndex) => (
            <div 
              key={colorIndex} 
              className="color-picker-color" 
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
      <button className='color-picker-button' onClick={toggleVisibility}><FontAwesomeIcon icon={faPalette} title='Pick Color' size='xl'/></button>
    </div>
  );
};

export default ColorPicker;
