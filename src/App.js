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
import Header from './components/Header';
import ThirdPage from './components/ThirdPage';
import img04 from './images/Parent_Illustrations-04.svg'
import img05 from './images/Parent_Illustrations-05.svg'
import img06 from './images/Parent_Illustrations-06.svg'
import img07 from './images/Parent_Illustrations-07.svg'
import img08 from './images/Parent_Illustrations-08.svg'
import img09 from './images/Parent_Illustrations-09.svg'
import img10 from './images/Parent_Illustrations-10.svg'
import img11 from './images/Parent_Illustrations-11.svg'
import img12 from './images/Parent_Illustrations-12.svg'
import img13 from './images/Parent_Illustrations-13.svg'


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

  const thirdPage = [
    {
      id:'01',
      letterHeader:'H',
      imageUrl:`${img04}`,
      body:'Home: Assesses you childs home life and home resources',
      
    },

    {
      id:'02',
      letterHeader:'E',
      imageUrl:`${img05}`,
      body:'Education & Activities: Assesses your child’s school, work, and hobbies',
      
    },

    {
      id:'03',
      letterHeader:'A',
      imageUrl:`${img06}`,
      body:'Alcohol & Drugs: Assesses your child’s alcohol and drug use',
      
    },

    {
      id:'04',
      letterHeader:'R',
      imageUrl:`${img07}`,
      body:'Relationships & Bullying: Assesses your child’s friendships and support',
      
    },

    {
      id:'05',
      letterHeader:'T',
      imageUrl:`${img08}`,
      body:'Thoughts and Anxiety: Assesses your child’s feelings of stress',
      
    },
    {
      id:'06',
      letterHeader:'S',
      imageUrl:`${img09}`,
      body:'Safety: Assesses your child’s physical safety and the safety of those around them',
      
    },

    {
      id:'07',
      letterHeader:'S',
      imageUrl:`${img10}`,
      body:'Sexual Health:Assesses your childs sexual health practices and related knowledge',
      
    },
    {
      id:'08',
      letterHeader:'M',
      imageUrl:`${img11}`,
      body:'Mood: Assesses your child’s mood and behaviours',
      
    },
    {
      id:'09',
      letterHeader:'A',
      imageUrl:`${img12}`,
      body:'Abuse: Assesses present and past experiences of abuse your child may have had',
      
    },
    {
      id:'10',
      letterHeader:'P',
      imageUrl:`${img13}`,
      body:'Professionals and Resources: Assesses the resources your child currently uses and ones they may be interested in',
      
    },
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

      <SecondPage title={secondPage[0].title} imageUrl={secondPage[0].imageUrl} 
      body={secondPage[0].body} imgUrl={secondPage[0].imgUrl} body1={secondPage[0].body1}/>
      {/* <SecondPage   body={secondPage[1].body} /> */}

      <Header/>
      <ThirdPage letterHeader={thirdPage[0].letterHeader} imageUrl={thirdPage[0].imageUrl} body={thirdPage[0].body}/>
      <ThirdPage letterHeader={thirdPage[1].letterHeader} imageUrl={thirdPage[1].imageUrl} body={thirdPage[1].body}/>
      <ThirdPage letterHeader={thirdPage[2].letterHeader} imageUrl={thirdPage[2].imageUrl} body={thirdPage[2].body}/>
      <ThirdPage letterHeader={thirdPage[3].letterHeader} imageUrl={thirdPage[3].imageUrl} body={thirdPage[3].body}/>
      <ThirdPage letterHeader={thirdPage[4].letterHeader} imageUrl={thirdPage[4].imageUrl} body={thirdPage[4].body}/>
      <ThirdPage letterHeader={thirdPage[5].letterHeader} imageUrl={thirdPage[5].imageUrl} body={thirdPage[5].body}/>
      <ThirdPage letterHeader={thirdPage[6].letterHeader} imageUrl={thirdPage[6].imageUrl} body={thirdPage[6].body}/>
      <ThirdPage letterHeader={thirdPage[7].letterHeader} imageUrl={thirdPage[7].imageUrl} body={thirdPage[7].body}/>
      <ThirdPage letterHeader={thirdPage[8].letterHeader} imageUrl={thirdPage[8].imageUrl} body={thirdPage[8].body}/>
      <ThirdPage letterHeader={thirdPage[9].letterHeader} imageUrl={thirdPage[9].imageUrl} body={thirdPage[9].body}/>


      <BodyPage title={bodyPage[0].title} imageUrl={bodyPage[0].imageUrl} body={bodyPage[0].body}/>
      <BodyPage title={bodyPage[1].title} imgUrl={bodyPage[1].imgUrl} body={bodyPage[1].body}/>
    </div>
  );
}

export default App;
