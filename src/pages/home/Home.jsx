import React from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Form from '../../components.form/Form';
import "./home.css";



export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Form/>
                <Feed/>  
                <RightBar/> 
            </div>
        </>
    );
}
