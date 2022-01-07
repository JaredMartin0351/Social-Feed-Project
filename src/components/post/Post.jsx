import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/headshot1.jpg" alt="Post Profile Pic" />
                        <span className="postUsername">Jared Martin</span>
                        <span className="postDate">A Few Mins Ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">

                </div>
                <div className="postBottom">

                </div>
            </div>
        </div>
    )
}
