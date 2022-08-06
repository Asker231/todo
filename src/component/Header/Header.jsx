import React from 'react'
import { useDispatch } from 'react-redux';
import Style from './header.style.module.css';
import { addItem } from '../../store/todoSlice.js';
import { v4 } from 'uuid'

function Header() {
  const disp = useDispatch();

  const [value, setValue] = React.useState()
  const data = {
    id: v4(),
    text: value
  }

  return (
    <div className={Style.header}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => {
        disp(addItem(data))
        setValue('')

      }} >Add todo</button>
    </div>
  )
}

export default Header