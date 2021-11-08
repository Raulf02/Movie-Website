import React from "react";

const MoveInfo = (props) => {
    return (
        <div className="container" >
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go Back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    { 
                        props.currentMovie.poster_path == null ? <img src={"https://www.kenyons.com/wp-content/uploads/2017/04/default-image.jpg"} alt="Card image" style={{ width: "100%", height: 350}} /> :
                        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%", height: 350}} /> 
                    }
                </div>
                <div className="col s12 m8">
                    <div className="info-container">
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date}</p>
                        <p>{props.currentMovie.overview}</p>
                        <p>Rating {props.currentMovie.vote_average} </p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MoveInfo;