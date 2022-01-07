import "./sidebar.css";
import { RssFeed, School, EmojiEvents } from "@mui/icons-material";
import CloseFriend from "../closeFriend/CloseFriend";


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
                </ul>
            </div>
        </div>
    )
}
