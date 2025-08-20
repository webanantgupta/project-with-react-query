import "./pagination.css"
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

const Pagination = ({ posts, page, setPage }) => {

    const selectPageHandler = (selectedPage) => {
        setPage(selectedPage);
    }


    return (
        <div className="pagination">
            <span
            className={page > 1 ? "" : "button_disable"}
                onClick={() => selectPageHandler(page - 1)}
            ><GiFastBackwardButton /></span>
            {
                [...Array(posts.length / 10)].map((_,i) => {
                    return <span
                        key={i}
                        className={page === i + 1 ? "clicked" : ""}
                        onClick={() => { selectPageHandler(i + 1) }}
                    >{i + 1}</span>
                })
            }
            <span
            className={page < Math.ceil(posts.length / 10) ? "" : "button_disable"}
                onClick={() => selectPageHandler(page + 1)}
            ><GiFastForwardButton /></span>
        </div>
    )
}

export default Pagination
