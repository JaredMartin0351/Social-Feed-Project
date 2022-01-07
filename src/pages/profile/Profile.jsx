import "./profile.css";
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

export default function Profile() {
    return (
        <div>
            <>
                <Topbar/>
                <div className="profile">
                    <Sidebar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" 
                                    src="assets/post/headshot.jpg" 
                                    alt="Profile Cover Pic" 
                                />
                                <img className="profileUserImg" 
                                    src="assets/person/headshot.jpg" 
                                    alt="Profile User Pic" 
                                /> 
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Jared Martin</h4>
                                <span className="profileInfoDesc">Hello Friends</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed/>  
                            <RightBar/>
                        </div> 
                    </div>
                </div>
            </>
            
        </div>
    );
}
