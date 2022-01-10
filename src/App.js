import Home from "./pages/home/Home";
import Comments from "./comments/Comments";


function App() {
  return <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"/>
}

export default App;
