import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({profile}) {

    const HomeRightBar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/birthdayImg.jpg" alt="alt BD pic"/>
                    <span className="birthdayText"> 
                        <b>Dwight</b> and <b>2 others from the office have a birthday today!</b>
                    </span>
                </div>
                <img className="rightbarAd" 
                    src="assets/ad.jpg" 
                    alt="other things" 
                />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online 
                            key={u.id} 
                            user={u}
                        />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightBarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoKey">Des Moines:</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">from:</span>
                        <span className="rightbarInfoKey">United States:</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoKey">Engaged:</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/headshot.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jared Martin</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { profile ? <ProfileRightBar/> : <HomeRightBar/> }
            </div>
        </div>
    );
}
