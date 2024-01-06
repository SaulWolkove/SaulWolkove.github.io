import gmapi from "../assets/images.jpg";
import DijkStra from "../assets/dijkstra.jpg";
import redCross from "../assets/download.png";
import scrape from "../assets/scrape.png";
import {useState} from "react";

export default function ProjectList(){
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(4, 40vh)',
        gridColumnGap: 'px',
        width: '100%',
        marginTop: '100px',
        marginBottom: '40px',
        gridGap:"20px",
        justifyContent: 'flex-end'

      };
      
      const [hoveredElem, setHoveredElem] = useState(null);

      const setHovered = (num) => {
        setHoveredElem(num);
      }

      const getElementStyle =(number)=> {
        return{
            fontSize: '.7em',
            fontFamily: 'Ubuntu',
            display: 'grid', // Use flex container
            gridTemplateColumns:"2fr 1fr", // Arrange child elements vertically
            borderRadius: "40px",
            padding: number === hoveredElem ? "3px" : "0",
            transition: "border .6s ease, padding .6s ease, background-color .6s ease, opacity .6s ease",
            alignItems: "center",
            backgroundColor: number === hoveredElem ? "#dadada" : "",
            opacity: number !== hoveredElem && hoveredElem !== null ? "0.3" : "1",
            color: number === hoveredElem ? "#f7362a" : "black",
        }
      };
      const getInverseElementStyle =(number)=> {
        return{
            fontSize: '.7em',
            fontFamily: 'Ubuntu',
            display: 'grid', // Use flex container
            gridTemplateColumns:"1fr 2fr", // Arrange child elements vertically
            borderRadius: "4px",
            padding: number === hoveredElem ? "3px" : "0",
            transition: "border .6s ease, padding .6s ease, background-color .6s ease, opacity .6s ease",
            alignItems: "center",
            backgroundColor: number === hoveredElem ? "#dadada" : "",
            opacity: number !== hoveredElem && hoveredElem !== null ? "0.3" : "1",
            textAlign:"right", 
            justifyContent: "right",
            color: number === hoveredElem ? "#f7362a" : "black",

        }
      };
      
      const getImage =(num)=> {
        return{
            width: '100%', // Ensure the image doesn't exceed its container width
            height: "fit-content",
            border: num === hoveredElem ? "4px solid #white": "#fffdfb",
            borderRadius: "8px",
            transition: "border .6s ease",
        }
      };
    
      const getBioStyle =(side)=> {
        return{
            fontSize: '.4em',
            width: '60%',
            display: 'flex', // Use flex container for the bio text
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: side === "rs" ? 'auto' : "",
        }
      };
    
    return(
        <div style={gridStyle}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu"></link>

            <div style={getElementStyle("1")} onMouseEnter={()=>{setHovered("1")}} onMouseLeave={()=>{setHovered(null)}}>
                <a href="https://github.com/SaulWolkove/Google-Maps-api-social-project/tree/main" target="_blank" rel="noreferrer">
                    <div>
                        Google Maps Travel Tracker
                        <div style={getBioStyle("ls")}>
                            Implemented Google's Mapping API service into a React framework to visualize the data, and created account tracking and user functionality by developing APIs using Mongoose to connect to MongoDB database functionality. Used React to generate interactive frontend, and packaged CSS into Tailwind.css.
                        </div>
                    </div>
                </a>
                <div>
                    <a href="https://github.com/SaulWolkove/Google-Maps-api-social-project/tree/main" target="_blank" rel="noreferrer">
                        <img src={gmapi} style = {getImage("1")}/>
                    </a>
                </div>
            </div>
            <div style={getInverseElementStyle("2")} onMouseEnter={()=>{setHovered("2")}} onMouseLeave={()=>{setHovered(null)}}> 
                <div>
                    <a href="https://queens-web-development-club.github.io/w23-red-cross/about" target="_blank" rel="noreferrer">
                        <img src={redCross} style = {getImage("2")}/>
                    </a>
                </div>
                <a href="https://queens-web-development-club.github.io/w23-red-cross/about" target="_blank" rel="noreferrer"> 
                    <div style={{position:"relative"}}>
                        Queen's Red Cross Website
                        <div style={getBioStyle("rs")}>
                        Worked within a team at Queen's Web Design Club to construct a platform for Queen's Red Cross to distribute information pertaining to their work. Used Next.js to construct an optimised framework for the site and Utilized Tailwind and React.js to support the construction of our front-end. 
                        </div>
                    </div>
                </a>
            </div>
            <div style={getElementStyle("3")} onMouseEnter={()=>{setHovered("3")}} onMouseLeave={()=>{setHovered(null)}}>
                <a href="https://github.com/SaulWolkove/PythonWikiscrapingGame" target="_blank">
                    <div>
                        Python Web Scraping Game 
                        <div style={getBioStyle("ls")}>
                            Utilised basic Python web functionality to gather HTML data from various Wikipedia pages and procedurally generate continuous questions based on Wikipedia pages chosen by the user. Used HTTP Library to access public Wikipedia data, and procedurally parsed the data using the Beautiful Soup Library in order to clean the data and convert it into user-readable text.           
                        </div>
                    </div>
                </a>
                <div>
                    <a href="https://github.com/SaulWolkove/PythonWikiscrapingGame" target="_blank">
                        <img src={scrape} style = {getImage("3")}/>
                    </a>
                </div>
            </div>
            <div style={{...getInverseElementStyle("4"), textAlign:"right", justifyContent: "right"}} onMouseEnter={()=>{setHovered("4")}} onMouseLeave={()=>{setHovered(null)}}>
                <div>
                    <a href="https://github.com/SaulWolkove/diskjstraCalculatorExample" target="_blank">
                        <img src={DijkStra} style = {getImage("4")}/>
                    </a>
                </div>
                <a href="https://github.com/SaulWolkove/diskjstraCalculatorExample" target="_blank">
                    <div style={{position:"relative"}}>
                        DijkStra's Algorithm Computer
                        <div style={getBioStyle("rs")}>
                            Problem Set Solution for Discrete Mathematics course. Utilises weighted graphing to calculate any given graph with said weight and vertices, and will calculate the shortest possible journey between any given two nodes. Created entirely in Python.
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
    
}