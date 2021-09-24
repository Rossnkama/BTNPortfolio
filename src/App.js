import './App.css';
import Banner from './Components/Banner';
import Card from './Components/Card';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import pastel from './resources/pastel.jpg';
import './Components/Parallax.css'

function AboutMeSection() {
  return (
    <div className="container-fluid about-me">
      <div className="row">
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} title="Something" />
        </div>
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} />
        </div>
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} />
        </div>
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} />
        </div>
        <div className="col-sm-4" align="center">
          <Card imageSrc={pastel} />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Banner title='About me' text='Just a little bit about me'/>
      <AboutMeSection />
      <Banner title='Contact me' text='myemail@myemail.com' />
    </div>
  );
}

export default App;
