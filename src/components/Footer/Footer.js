import "./styles.css";
export default function Footer({ movieData,selectedId,time,weekday }) {

   
    

    return (
        <footer>
            <div className="thumbnail">
                <img src={movieData[selectedId-1].posterURL} alt="movie poster thumbnail"></img>
            </div>
            <div className="movieInfo">
                <p>{movieData[selectedId-1].title}</p>
                <p>{weekday} - {time}</p>
            </div>

        </footer>
    )
}