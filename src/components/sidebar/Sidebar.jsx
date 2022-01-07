import "./sidebar.css"
import { RssFeed, School, EmojiEvents } from "@mui/icons-material"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Work History</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiEvents className="sidebarIcon"/>
                        <span className="sidebarListItemText">Cool things I am doing</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Classes</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/headshot.jpg" alt="Friend Profile Pic"/>
                        <span className="sidebarFriendName">Friend Img Placeholder</span>
                    </li>   
                </ul>
            </div>
        </div>
    )
}
