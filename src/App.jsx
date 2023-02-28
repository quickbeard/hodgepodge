import Header from './homepage/header';
import Body from './homepage/body';

function App() {
  const bgStyle={
    backgroundImage: "url(images/bg.jpg)",
    color: '#fff',
    width: '100vw',
    height: '100vh',
    marginTop:'-10px',
    marginLeft:'-5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };
  return (
    <div className="App" style={bgStyle}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
