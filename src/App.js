import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './components/SideBarData';
import {IconContext} from 'react-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'

import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import nine from './images/9.jpg'
import ten from './images/10.jpg'
import leven from './images/11.jpg'
import twelve from './images/12.jpg'
import iit from './images/iit.jpg'
import neet from './images/neet.jpg'
import icse from './images/icse.jpg'
import govt from './images/govt.jpg'
import engg from './images/engg.jpg'

function App() {
  const [sidebar, setSidebar]= useState(false);
  const showSidebar=()=>setSidebar(!sidebar)
  return (
    <div>
      <IconContext.Provider value={{color:'#fff'}}>
    <div className="navbar">
      <FaIcons.FaBars onClick={showSidebar}/>
      <AiIcons.AiFillBook style={{fontSize:"50px", marginLeft:"45%"}}/>
      <AiIcons.AiOutlineShoppingCart style={{fontSize:"30px", marginLeft:"40%"}}/>
    </div>
    <nav className={sidebar?"nav-menu active":"nav-menu"} style={{zIndex:"10"}}>
    <ul className="nav-menu-items" onClick={showSidebar}>
      <li className="navbar-toggle">
        <AiIcons.AiOutlineClose/>
      </li>
      {
        SideBarData.map((item, index)=>{
          return(
          <li key={index} className={item.cName}>
            {item.icon}
            <span>{item.title}</span>
          </li>
          )
        })
      }
    </ul>
    </nav>
    </IconContext.Provider><br/>
    <div>
      <input type="text" style={{marginLeft:"35%", borderRadius:"20px", height:"25px", width:"300px"}} placeholder="Search Products"></input>
    </div><br/>
    <Carousel autoPlay={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={80} >
                <div>
                    <img src={img1} height="400px" width="500px"/>
                </div>
                <div>
                    <img src={img2} height="400px" width="80%"/>
                </div>
                <div>
                    <img src={img3} height="400px" width="80%"/>
                </div>
                <div>
                    <img src={img4} height="400px" width="80%"/>
                </div>                
      </Carousel><br/>
      <div className="classCourseParent" >
      <div className="classCourseChild"><img className="classDetails" src={nine} height="70px" width="70px"/><br/><span>Class IX</span></div>
      <div className="classCourseChild"><img className="classDetails" src={ten} height="70px" width="70px"/><br/><span>Class X</span></div>
      <div className="classCourseChild"><img className="classDetails" src={leven} height="70px" width="70px"/><br/><span>Class XI</span></div>
      <div className="classCourseChild"><img className="classDetails" src={twelve} height="70px" width="70px"/><br/><span>Class XII</span></div>
      <div className="classCourseChild"><img className="classDetails" src={nine} height="70px" width="70px"/><br/><span>Class 1-8</span></div>
      <div className="classCourseChild"><img className="classDetails" src={iit} height="70px" width="70px"/><br/><span>IIT JEE</span></div>
      <div className="classCourseChild"><img className="classDetails" src={neet} height="70px" width="70px"/><br/><span>NEET</span></div>
      <div className="classCourseChild"><img className="classDetails" src={icse} height="70px" width="70px"/><br/><span>ICSE</span></div>
      <div className="classCourseChild"><img className="classDetails" src={govt} height="70px" width="70px"/><br/><span>GOVT</span></div>
      <div className="classCourseChild"><img className="classDetails" src={engg} height="70px" width="70px"/><br/><span>ENGG</span></div>
      </div><br/>
      <h2>Novels for you</h2><br/>
      <div className="novels">
      <div className="novelsChild"><img className="novel" src={process.env.PUBLIC_URL+"/images/n1.jpg"}/></div>
      <div className="novelsChild"><img className="novel" src={process.env.PUBLIC_URL+"/images/n2.jpg"}/></div>
      <div className="novelsChild"><img className="novel" src={process.env.PUBLIC_URL+"/images/n3.jpg"}/></div>
      <div className="novelsChild"><img className="novel" src={process.env.PUBLIC_URL+"/images/n4.jpg"}/></div>
      <div className="novelsChild"><img className="novel" src={process.env.PUBLIC_URL+"/images/n5.jpeg"}/></div>
      </div><br/>
      <h2>Featured Novels</h2>
      <div className="novels">
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn1.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn2.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn3.jpeg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn4.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn5.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/fn6.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      </div><br/>
      <h2>Term 1 Exams 2021</h2>
      <div className="novels">
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t1.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t2.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t3.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t4.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t5.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/t6.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      </div><br/>
      <h2>ISC Board Best Picks</h2>
      <div className="novels">
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/is1.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/is2.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/is3.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/is4.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      <div className="novelsChild"><img className="fnovel" src={process.env.PUBLIC_URL+"/images/is5.jpg"}/><spn>description</spn>
      <br/><span className="price">price</span><br/><span className="offer">offer</span></div>
      </div><br/>
    </div>
  );
}

export default App;
