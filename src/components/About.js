import {useEffect, useState} from 'react';
//import Icon from '@mdi/react';
//import { mdiGuitarAcoustic, mdiShieldCrownOutline } from '@mdi/js';



const parentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridColumnGap: 'px',
  gridRowGap: '10px',
  width: '100%',
  height: 'calc(100vh - 45.2px)',
  backgroundColor: '#f0f0f0',
};

const div1Style = {
  gridArea: '1 / 1 / 2 / 2',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3%',
  fontFamily: 'Urbanist',
  fontSize: '3em',
  animation:"fadeIn 5s",
  width: "50%",
  position: 'relative',
  overflow: 'hidden',
};

const div2Style = {
  gridArea: '2 / 1 / 3 / 2',
  paddingRight: '20%',
  paddingLeft: '5%',
  fontFamily: 'Jura',
  color: '#48494B',
  fontSize: '1.3em',
  position: 'relative',
};

// const iconStyle = {
//   position: 'absolute',
//   top: '0',
//   right: '0',
//   color:"black",
//   marginRight:"20px",

// };

const div3Style = {
  gridArea: '3 / 1 / 4 / 2',
  textAlign: 'right',
  marginRight: '5%',
  marginLeft: '25%',
  fontFamily: 'Jura',
  color: '#48494B',
  fontSize: '1.3em',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '5%',
};



// ... (existing code)

// const imageStyle = {
//   position: 'absolute',
//   left: '0',
//   bottom: "0",
//   marginTop: 'auto',
//   marginBottom: "30px",
//   marginLeft: '20px',  // Adjusted to move the guitar icon to the left
//   color:"black"
// };


function About() {
  
  const [showSubStyle, setShowSubStyle] = useState(false);
    useEffect(() => {
  // Use useEffect to trigger the animation once the component is mounted
  setShowSubStyle(true);
    }, []);
  const subStyle = {
    paddingLeft:"50px",
    transform: showSubStyle ? 'translateY(0)' : 'translateX(15%)',
    opacity: showSubStyle ? "1":"0",
    transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
    zIndex: "1", // Adjust z-index to control the stacking order,
    color:"#e8473d"


  }
  return (
    <div style={parentStyle}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoMono"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Urbanist"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jura"></link>
      <div style={div1Style}>
        <div style={{borderRight:"5px solid black", borderRadius:"20px",    zIndex: "3"}}>
          Saul Wolkove 
        </div>
        <div style={subStyle}>
          Software Engineering Student
        </div>
      </div>
      <div style={div2Style}>
        <p>
          I'm an aspiring <span style={{color:"#e8473d"}}>Software Engineer</span> who fell in love with coding
          in my high school computer lab. Today, I have the privilege to attend{' '}
          <span style={{color:"#e8473d"}}>Queen's University</span>, where I study Computer Science with a{' '}
          <span style={{color:"#e8473d"}}>Software Design Specialization</span>. Here, I am in my second year of
          studies, and continue to push my understanding of fields such as Data Structures and Algorithms, Data and
          Statistical Analysis, and Discrete Mathematics. I am also a member of the{' '}
          <span style={{color:"#e8473d"}}>Queen's Web Development Club</span>, and you can catch me at{' '}
          <span style={{color:"#e8473d"}}>Queen's Annual Hackathon '24</span> on February 2nd.
        </p>
      </div>
      <div style={div3Style}>
        When not at the computer, I am an avid guitar player, and enjoy working out as well as watching movies. I
        love trying new things and going new places, especially with friends and family. This year I hope to travel
        to new places
        , and eat new foods.
      </div>
    </div>
  );
}

export default About;
