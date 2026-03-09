import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const MyCourses = () => {
  const {currency, allCOurses} = useContext(AppContext);
  const [courses, setCourses] = useState(null)
  return (
    <div>
      <h1>My course</h1>
    </div>
  )
}

export default MyCourses
