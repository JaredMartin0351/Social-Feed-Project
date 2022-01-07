import "./post.css";
import {MoreVert} from "@mui/icons-material";
import { Users} from "../../dummyData";

export default function Post({ post }) {

    const user = Users.filter(u => u.id===1)

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg" 
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
                            alt="Post Profile Pic"
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="Your Post Here" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/Thumb-Up.jpg" alt="Thumbs Up" />
                        <img className="likeIcon" src="assets/Thumb-Down.jpg" alt="Thumbs Down" />
                        <span className="postLikeCounter">{post.like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
