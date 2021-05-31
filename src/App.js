import logo from './logo.svg';
import './App.css';
import Card from './components/card'

function App() {
  
  let socialData = [
    { poster: "Adam Schachterle", cardtext: "Woah cool, look at this!", posttitle: "Computers are fun", posttitlesubtext: "Do you like computers, well how about them computers?", key: 1 },

    { poster: "Annmarie Scaglione", cardtext: "I like ponies!", posttitle: "Ponies are cool and I really like them!", posttitlesubtext: "Check out these purple people eating ponies", key: 2 },

    { poster: "Erik Schachterle", cardtext: "More Hotrods", posttitle: "Hotrods are super popular right now", posttitlesubtext: "Find out how to save money on hotrod parts", key: 3 }
  ]
  console.log(socialData[0].poster)

  let cardlist = []
  socialData.forEach((card ,index)=>{
    cardlist.push( <Card key={index} value={card}></Card>)
  })

  return (
    <div className="App">
      {cardlist}
    </div>
  );
}

export default App;
