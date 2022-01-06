import './topbar.css'
import { Search, Person, Chat } from "@mui/icons-material"

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Generic Social Media App</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder='Search for friend, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
