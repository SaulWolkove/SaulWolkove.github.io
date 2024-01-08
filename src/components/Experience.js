
const parentStyle = {
    backgroundColor: '#f0f0f0',
    height: 'calc(100vh - 58.67px)',
    overflowY: 'scroll',
    fontFamily: 'Kanit',
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 60vh)',
    gridColumnGap: 'px',
    width: '100%',
    marginTop: "50px",
    marginBottom: "40px"
    
  };
  
  const divStyle = {
    alignItems: 'center',
    paddingLeft: '3%',
    fontSize: '3em',
    color: 'grey',
    paddingTop: "20px",
    marginBottom: "30px",
    display:"grid",
    gridTemplateColumns:"1fr 1fr"

  };
  
  const title = {
    fontSize: '1em',
    color:"rgb(25, 25, 25)",
    fontFamily:"Urbanist"

  }
  const date = {
    fontSize: '.4em',
    color:"grey",
    fontFamily:"Jura"

  }
  const company = {
    color:"rgb(57, 54, 70)",
    fontSize: '.5em',

  }
  const description = {
    fontSize: '.4em',
    color:"grey",
    width:"100%",
    fontFamily:"Oxanium"
  }
  const skillList = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: 'flex',
    justifyContent: 'flex-end', // Align the list to the right
    flexDirection: 'column',
    alignItems: "flex-end", // Align list items to the right
    marginRight: "20px",

  }
  
  const skillItem = {
    width: "",
    border: "3px solid black",
    marginBottom: "5px", 
    fontSize: ".3em",
    fontFamily:"Oxanium",
    padding:"8px",
    borderRadius: "12px",
    backgroundColor: "rgb(82, 92, 235)",
    color: "white",
    textAlign:"center",
    margin: "5px",
    flex: 1,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }

  function Experience() {
    return (
      <div style={parentStyle}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jura"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Urbanist"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oxanium"></link>


        <div style={gridStyle}>
          <div style={divStyle}>
            <div>
              <div style={date}>
                  May 2023 - August 2023
              </div>
              <div style={title}>
              Merchandising Representative
              </div>
              <div style={company}>
              Custom Merchandising Solutions
              </div>
              <div style={description}>
                Oversaw and managed biweekly product deliveries that arrived on location, as well as merchandised deliveries for public viewing and sale, according to standard industry practises. Worked with CMS’s many distribution partners such as Home Depot to ensure the product met CMS’s standards ofquality
              </div>
            </div>
            <div>
              <ul style = {skillList}>
                  <li style = {skillItem}>Coordination</li>
                  <li style = {skillItem}>Resource Optimization</li>
                  <li style = {skillItem}>Quality Assurance</li>
                  <li style = {skillItem}>Adaptibility/Flexibility</li>
                  <li style = {skillItem}>Team Management</li>
              </ul>
            </div>
          </div>
          <div style={divStyle}>
            <div>
              <div style={date}>
                  October 2022 - Present
              </div>
              <div style={title}>
              Web Dev - Backend Specialist
              </div>
              <div style={company}>
              Queen's Web Development Club
              </div>
              <div style={description}>
              Overseeing team backend development, as well as being involved in both team and client meetings to establish
  client goals, project milestones, as well as team morale and work split.
  Worked with Next.js tooling to construct admin support for the client to dynamically change the website content
              </div>
            </div>
            <ul style = {skillList}>
                <li style = {skillItem}>React.js</li>
                <li style = {skillItem}>Next.js</li>
                <li style = {skillItem}>Tailwind.css</li>
                <li style = {skillItem}>Node.js</li>
                <li style = {skillItem}>Team Planning</li>

            </ul>
          </div>
          <div style={divStyle}>
            <div>
              <div style={date}>
                  June 2022 - August 2022
              </div>
              <div style={title}>
              Camp Counsellor
              </div>
              <div style={company}>
              Camp Gesher, Habonim Dror
              </div>
              <div style={description}>
              Took care of the safety of 8-12 youth for the duration of the summer, planning activities and ensuring hygenic standards were met. Additionally oversaw the safety and standards of both waterfront and kitchen environments.
              </div>
            </div>
            <ul style = {skillList}>
                <li style = {skillItem}>Communication</li>
                <li style = {skillItem}>Conflict Resolution</li>
                <li style = {skillItem}>Standard Safety Practises</li>
                <li style = {skillItem}>Adaptibility/Flexibility</li>
                <li style = {skillItem}>Team Management</li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Experience;
  