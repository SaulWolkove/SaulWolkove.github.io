import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "./../assets/github.png";
import linkedin from "./../assets/linkedin.png";
//import mail from "./../assets/mail.png";
//import CopyEmail from "./CopyEmail";

export default function Banner() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("about");
  const [isHovered, setIsHovered] = useState(null);

  const routeAbout = () => {
    navigate("/about");
    setSelectedButton("about");
  };
  const routeExperience = () => {
    navigate("/experience");
    setSelectedButton("experience");
  };
  const routeProjects = () => {
    navigate("/projects");
    setSelectedButton("projects");
  };
  // const routeContact = () => {
  //   navigate("/contact");
  //   setSelectedButton("contact");
  // };
  const openPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfUrl = "../public/newYearResume.pdf";
    window.open(pdfUrl, "_blank");
  };

  const getButtonStyle = (buttonName) => {
    return {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: isHovered === buttonName ? "1.4em" : "1.3em",
      color: selectedButton === buttonName ? "#e8473d" : (isHovered === buttonName ? "#e8473d" : "black"),
      textDecoration: selectedButton === buttonName ? "underline" : "none",
      transition: "color 2s ease, font-size .7s ease", 
    };
  };

  const bannerStyle = (buttonName) => {
    return {
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      paddingRight: "20px",
      backgroundColor: "#f0f0f0",
      paddingTop: "20px",
      position: isHovered === buttonName ? "absolute" : "relative",
      fontFamily:"Tektur"
    }
  }

  const getResumeStyle = () => {
    return{
      border:"2px solid black",
      fontSize:"1.3em",
      paddingRight:"5px",
      paddingLeft:"5px",
      color: isHovered === "resume" ? "#fffdfb" : "black",
      borderRadius: isHovered === "resume" ? "12px" : "4px",
      backgroundColor: isHovered === "resume" ? "#e8473d" : "transparent",
      transition:"color .23s ease, border-radius .23s ease, background-color .23s ease",
    }
  }

  const icon = {
    width:"1.5em",
    margin:"5px"
  }
  function copyTextToClipboard(text) {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
  
    // Set the value of the textarea to the specified text
    textArea.value = text;
  
    // Append the textarea to the document
    document.body.appendChild(textArea);
  
    // Select the text in the textarea
    textArea.select();
  
    try {
      // Use the Clipboard API to copy the text to the clipboard
      document.execCommand('copy');
      console.log('Text copied to clipboard:', text);
      window.alert('Text copied to clipboard!');

    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }
  
    // Remove the temporary textarea
    document.body.removeChild(textArea);
  }
  const handleCopyToClipboard = () => {
    copyTextToClipboard('saul.wolkove@gmail.com');
  };

  const [emailHover, setEmailHover] = useState();
  const handleEmailCover = () =>{
    if (emailHover){
      setEmailHover(false);
    }else{
      setEmailHover(true);
    }
  }

  
  return (
    <div style={bannerStyle()}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tektur"></link>

      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"10px"}}>
        <a href="https://github.com/SaulWolkove" target="_blank">
          <img src={github} style = {icon} alt="github"/>
        </a>
        <a href="https://linkedin.com/in/saulwolkove" target="_blank" >
          <img src={linkedin} style = {icon} alt="linkedin"/>
        </a>
        {/* 
        <a href={"mailto:saul.wolkove@gmail.com"} target="_blank">
          <img src={mail} style = {icon}/>
        </a>
        */}
        <div onClick={handleCopyToClipboard} style={{cursor:"pointer", color: emailHover ? "red":"black"}} onMouseEnter={handleEmailCover} onMouseLeave={handleEmailCover}>
          saul.wolkove@gmail.com
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <button
            style={getButtonStyle("about")}
            onClick={routeAbout}
            onMouseEnter={() => setIsHovered("about")}
            onMouseLeave={() => setIsHovered(null)}
          >
            About
          </button>
        </li>

        <li style={{ marginRight: "10px" }}>
          <button
            style={getButtonStyle("experience")}
            onClick={routeExperience}
            onMouseEnter={() => setIsHovered("experience")}
            onMouseLeave={() => setIsHovered(null)}
          >
            Experience
          </button>
        </li>

        <li style={{ marginRight: "10px" }}>
          <button
            style={getButtonStyle("projects")}
            onClick={routeProjects}
            onMouseEnter={() => setIsHovered("projects")}
            onMouseLeave={() => setIsHovered(null)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            style={getResumeStyle()}
            onClick={openPdf}
            onMouseEnter={() => setIsHovered("resume")}
            onMouseLeave={() => setIsHovered(null)}
          >
            Resume
          </button>
        </li>
      </ul>
      </div>
    </div>
  );
}
