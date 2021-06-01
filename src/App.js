import logo from './logo.svg';
import './App.css';
import Card from './components/card'

function App() {
  
  let socialData = [
    { poster: "Adam Schachterle", cardtext: "Woah cool, look at this!", posttitle: "Computers are fun", posttitlesubtext: "Do you like computers, well how about them computers?", key: 1, img: 'url(https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xOTYwMDA3Ny9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NjEwODk4OH0.Ak820-nwF0IHPksLKc2pA3Bkby4Un2spz0PnZkzn_90/img.jpg?width=1245&quality=85&coordinates=0%2C460%2C0%2C165&height=700)' },

    { poster: "Annmarie Scaglione", cardtext: "I like ponies!", posttitle: "Ponies are cool and I really like them!", posttitlesubtext: "Check out these purple people eating ponies", key: 2, img: 'url(https://horse-canada.com/wp-content/uploads/2020/07/Shetland-Pony-web.jpg)'},

    { poster: "Erik Schachterle", cardtext: "More Hotrods", posttitle: "Hotrods are super popular right now", posttitlesubtext: "Find out how to save money on hotrod parts", key: 3, img: 'url(https://i2.wp.com/motoringartist.com/wp-content/uploads/2015/11/016-Saltflats-e1605627451459.jpg?fit=750%2C511)' }
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
