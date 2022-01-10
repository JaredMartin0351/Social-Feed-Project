import React from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Comments from '../../components/comments/Comments';
import "./home.css";




export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                
                <Sidebar/>
                <Comments commentsUrl="http://localhost:3004/comments"
            currentUserId="1"/>
                <Feed/>  
                <RightBar/> 
            </div>
        </>
    );
}
