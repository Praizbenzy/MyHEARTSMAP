import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import body1Img from './images/Parent_Illustrations-02.svg'
import body2Img from './images/Parent_Illustrations-03.svg'
import BodyPage from './components/BodyPage';
import img14 from './images/Parent_Illustrations-14.svg'
import img17 from './images/Parent_Illustrations-17.svg'
import ThirdPage from './components/ThirdPage';

function App() {
  const secondPage = [
    {
      id: '01',
      title:'Why was MyHEARTSMAP created?',
      imageUrl:`${body1Img}`,
      body:'When your child experiences difficult mental health symptoms, long wait times at the emergency department can be frustrating',
      imgUrl:`${body2Img}`,
      body1:'MyHEARTSMAP was created to assess your child’s mental health resource needs, and connect them with the appropriate supports.',

    },
    
  ]

  const bodyPage = [
    {
      id: '01',
      title: 'Can I fill this out for my child?',
      imageUrl: `${img14}`,
      body:'MyHEARTSMAP highly reliable when filled out by youth 10-17 on their own or by parents on behalf of their child aged 6-17.',
    },
    
    {
      id:'02',
      title:'What should I do with the results?',
      imgUrl:`${img17}`,
      body:'The results from the MyHEARTSMAP tool can be shared with healthcare providers or reserved for personal use.',
    }

  ]

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>

      <HomePage/>

      <SecondPage title={secondPage[0].title} imageUrl={secondPage[0].imageUrl} body={secondPage[0].body} imgUrl={secondPage[0].imgUrl} body1={secondPage[0].body1}/>
      {/* <SecondPage   body={secondPage[1].body} /> */}
      <ThirdPage/>
      <BodyPage title={bodyPage[0].title} imageUrl={bodyPage[0].imageUrl} body={bodyPage[0].body}/>
      <BodyPage title={bodyPage[1].title} imgUrl={bodyPage[1].imgUrl} body={bodyPage[1].body}/>
    </div>
  );
}

export default App;
