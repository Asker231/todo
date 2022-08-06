import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Style from './bottom.style.module.css';
import { removeItem } from '../../store/todoSlice.js';


function Bottom({id}) {
  const selector = useSelector(state => state.myItem.arr)
  const disp = useDispatch();
  return (
    <div className={Style.bottom}>
      {
        selector.map((el) => {
          return <div className={Style.items}>{el.text}<button onClick={() => disp(removeItem(id))}>Delet</button></div>
        })
      }
    </div>
  )
}

export default Bottom