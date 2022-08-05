import logo from './logo.svg';
import './App.css';
import Myclass from './components/Myclass';
import Mydata from './components/Mydata';

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
        <h2> Welcome to {title}</h2>
        <Mydata />
        {/* <Myclass myarr={arr} myempdata={empData}/> */}
    </div>
  );
}

export default App;
