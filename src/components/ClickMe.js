// import React, { useState } from 'react'

// const ClickMe = () => {
//    const [clickForm, setClickForm] = useState("")
//    const [count, setCount] = useState(0)
 
//    const handleChange = (e) => {
//        setClickForm(e.target.value)
//    }

//    const handleSubmit = (e) => {
//        e.preventDefault()
//        setClickForm("")
//        setCount(count + clickForm.length)
//    }


//   return (
//     <div>
//        <form onSubmit={handleSubmit}>
//          <input type="text"
//          value={clickForm}
//          onChange={handleChange}
//          />
//          <button>Click Me!</button>
//          <p>{count}</p>
//        </form>
//     </div>
//   )
// }

// export default ClickMe



// // -Add a controlled form that includes:
// //     A text input
// //     A button with the text of “Click Me!”
// //     A paragraph that has a counter that starts at 0
// // -When they input text in the text field, the text input should reset and based on word length, the counter should increment.
// // -The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.


// //control
// //button click me
// // p counter 
