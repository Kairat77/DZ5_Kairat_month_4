
import {useState} from 'react'
function Form(){
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState("");
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
    return(
    <div className='center'>
     <h1>Регистрация</h1>
     <form onSubmit={getFormData}>
       <input type="text" placeholder="имя" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>холост</option>
         <option>женат</option>
         <option>замужем</option>
       </select> <br /><br />
       <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Я согласен с определенным условием</span>
       <br /><br />
       <button type="submit">Отправить</button>
     </form>
     </div>
    )
}
export default Form