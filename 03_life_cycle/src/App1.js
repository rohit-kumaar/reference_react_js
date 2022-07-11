import logo from './logo.svg';
import './App.css';

function App() {
  const title="Neosoft Technologies";
  const arr=["Angular","React","Vue","Node"];
  const empData=[
    {"id":1,"name":"A","age":23,"city":"noida"},
    {"id":2,"name":"B","age":33,"city":"delhi"},
    {"id":3,"name":"C","age":43,"city":"gurugram"},
    {"id":4,"name":"D","age":53,"city":"mumbai"}
  ]
  return (
    <div className="App">
     <h1> Welcome to {title}</h1>
     <ul>
         {arr?.map((val,ind)=>
           <li key={ind}> {val} </li>
         )}
     </ul>
     <hr/>
     <table border={1}>
        <thead>
          <tr>
            <th> S.no</th>
            <th> Name </th>
            <th> Age </th>
            <th> City</th>
          </tr>
        </thead>
        <tbody>
           {empData?.map((emp,ind)=>
           <tr key={emp.id}>
              <td>{ind+1}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
           </tr>)}
        </tbody>
     </table>
    </div>
  );
}

export default App;
