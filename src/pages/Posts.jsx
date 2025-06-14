import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Posts = () => {

    const [Posts, setPosts] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
            )
            .then((resp) => {
                setPosts(resp.data);
            });
    }, []);

    return (
        <>
            {Posts && (

                <div className="container">
                    <div className="d-flex flex-wrap gap-3 my-5 justify-content-center">
                        {Posts.map((curPost, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{`${curPost.id}) ${curPost.title}`}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Autore</h6>
                                        <p className="card-text">Testo</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to = {`/Posts/${curPost.id}`}>
                                        <small className="text-muted">Apri Dettagli</small>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            )
            }
        </>
    );
};

export default Posts;