import React from 'react';
import './Home.scss'
import SideBar from "../../common/SideBar/SideBar";
import MainSection from "../../main-section/MainSection";

const Home = () => {
    return (
        <div className="todo-home-wrapper">
             <div className="tab-container">
                 Tab Container
             </div>
             <div className="main-container">
                 <SideBar/>
                 <MainSection/>
             </div>
        </div>
    );
};

export default Home;