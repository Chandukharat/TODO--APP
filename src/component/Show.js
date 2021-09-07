import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { delll } from '../action/delll'


export const Show = () => {
  const first = useSelector(a => a.Update)

  const dispatch = useDispatch()
  let current_date = new Date();
  function formatDate() {

    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  console.log(currentDate);
  const st = currentDate.replace(/-/g, "");
  console.log(st);




  return (
    <div>
      {first.map((item, index) => {
        return <div  style={{ border: 'solid black 1px' }} id='show' > <p>{item.data}</p><p>{item.desc}</p><p>{item.dat}</p>
          {item.dat.replace(/-/g, "") === st ? (<p>DUE DATE IS TODAY</p>) : item.dat.replace(/-/g, "") <= st ? (<p style={{ color: "red" }} >DUE DATE PASSED{item.dat} </p>) : (<p>DUE DATE {item.dat}</p>)}
          <button class="bg-success p-2 text-dark bg-opacity-25" onClick={ () => (dispatch(delll({ ind: index })))}  ><img src='https://icons.veryicon.com/png/o/construction-tools/coca-design/delete-189.png'></img></button>
        </div>
      })}


    </div>
  )
}
