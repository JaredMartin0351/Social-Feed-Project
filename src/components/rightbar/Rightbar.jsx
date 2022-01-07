import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/birthdayImg.jpg" alt="alt BD pic"/>
                    <span className="birthdayText"> 
                        <b>Dwight</b> and <b>2 others from the office have a birthday today!</b>
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="other things" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online 
                            key={u.id} 
                            user={u}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
