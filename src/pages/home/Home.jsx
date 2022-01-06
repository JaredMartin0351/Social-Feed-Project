import React from 'react';
import Feed from '../../components/topbar/feed/Feed';
import RightBar from '../../components/topbar/rightbar/Rightbar';
import Sidebar from '../../components/topbar/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import "./home.css"


export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <RightBar/>
                <Feed/>  
            </div>
        </>
    );
}
