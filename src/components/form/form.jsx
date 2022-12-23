
import React from 'react';


// function Form() {
//   const [name,setName]=useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   function getFormData(e)
//   {
//     alert(isChecked, name)
//     e.preventDefault()
//   }

//   return (
//     <div className='box'>
//       <form onSubmit={getFormData}>
//         <input disabled={isChecked} type="text" placeholder="имя" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
//           <select disabled={isChecked} onChange={(e)=>setInterest(e.target.value)}>
//             <option>холост</option>
//             <option>женат</option>
//             <option>замужем</option>
//           </select>
//         <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
//         <button disabled={!isChecked}>Нажмите меня</button>
//       </form>
//     </div>
//   );
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isChecked: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    alert(this.state.isChecked, this.state.name);
    e.preventDefault();
  }

  render() {
    const { name, isChecked } = this.state;

    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit}>
          <input disabled={isChecked} type="text" placeholder="имя" value={name} name="name" onChange={this.handleChange} /> <br /><br />
            <select disabled={isChecked} name="interest" onChange={this.handleChange}>
              <option>холост</option>
              <option>женат</option>
              <option>замужем</option>
            </select>
          <input type="checkbox" checked={isChecked} onChange={() => this.setState({ isChecked: !isChecked })} />
          <button disabled={!isChecked}>Нажмите меня</button>
        </form>
      </div>
    );
  }
}


export default Form
