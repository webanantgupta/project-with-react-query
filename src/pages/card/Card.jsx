import "./card.css"
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { CgEyeAlt } from "react-icons/cg";
import Pagination from "../../components/pagination/Pagination";
import Header from "../../components/header/Header";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Card = ({ posts, page, setPage }) => {
  // console.log(posts);
  useEffect(()=>{
toast.success("Welcome back!");

  },[]);
  return (
    <div>
      <Header />
 <div className="card">
      {
        posts.slice(page*10-10,page*10).map((pos) => {
          return <span className="card_container" key={pos.id}>
            <h2>{pos.title}</h2>
            <p>{pos.body}</p>
            <div className="card_view">
              <span><BiSolidDislike color="green" />{pos.reactions.likes}</span>
              <span><BiSolidLike color="red" />{pos.reactions.dislikes}</span>
              <span><CgEyeAlt color="#3F00FF" />{pos.views}</span>

            </div>
          </span>
        })
      }
 </div>
 
 <Pagination posts={posts} page={page} setPage={setPage}/>
    </div>
   

  )
}

export default Card
