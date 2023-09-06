import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import tanuImg from './assets/Tanu_photo.jpg';
import reportWebVitals from './reportWebVitals';

const skills =[
{
  skill: "HTML+CSS",
  level:"advanced",
  color:"#2662EA"
},
{
  skill:"JavaScript",
  level:"advanced",
  color:"#EFD81D"
},
{
  skill:"Web design",
  level:"advanced",
  color:"#C3DCAF"
},
{
  skill:"Git and GitHub",
  level:"intermediate",
  color:"#E84F33"
},
{
  skill:"React",
  level:"advanced",
  color:"#60DAFB"
},
{
  skill:"Svelte",
  level:"beginner",
  color:"#FF3B00"
}
];

function App(){
  return (
    <div className='card'>
     <Avatar/>
     <div className='data'>
       <Intro/>
       <SkillList/>
     </div>
    </div>

  );
}

function Avatar(){
  return <img className= "imgName" src={tanuImg} width="200px" height="200px" />
}

function Intro(){
  return(
    <div>
      <h1>Tanu Singh</h1>
      <pre> 
      {`
  As a Frontend developer working 
  on an Amazon project,
  I am currently focused on 
  developing frontend features for 
  the Amazon website and working 
  on code refactoring,improvement
  of code quality in ReactJS for Frontend.`} 
      </pre>
    </div>
  );
}

function SkillList(){
  return (
    <div className='skill-list'>
     {/* <Skill skill="React" emoji="💪" color="blue"/>
     <Skill skill="HTML+CSS" emoji="💪" color="orange"/>
     <Skill skill="JavaScript" emoji="💪" color="yellow"/>
     <Skill skill="Svelte" emoji="😊" color="orangered"/> */}

     {skills.map(skill=> <Skill skill={skill.skill} color={skill.color} emoji={skill.level}/> )}
    </div>
  );
}

function Skill(props){
  return (
  <div className='skill' style={{backgroundColor:props.color}}>
  <span> {props.skill}</span>
   &nbsp;
  <span> {props.emoji}</span>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
