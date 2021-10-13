import logo from '../imgs/get Tweets.png'
function App() {
  return (
    <div className="App">
        <img src={logo} Style="height:200px" alt="logo" />
        <input type="text" placeholder="@handle"/>
        <input type="button" value="Get" />
    </div>
  );
}
export default App;