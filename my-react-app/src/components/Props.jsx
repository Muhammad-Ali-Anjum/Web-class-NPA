// import React from 'react'

// function Props(props) {
//     console.log(props);
    
//   return (
//     <div>
//         <h1>Username : {props.username}</h1>
//         <h1>Password : {props.password}</h1>
//     </div>
//   )
// }

// export default Props

import React from 'react'

function Props({username,password}) {
  return (
    <div>
        <h1>Username : {username}</h1>
        <h1>Password : {password}</h1>
    </div>
  )
}

export default Props