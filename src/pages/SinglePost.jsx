import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const SinglePost = () => {

    const [SinglePost, setSinglePost] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/SinglePost"
            )
            .then((resp) => {
                setSinglePost(resp.data);
            });
    }, []);

    return (
        <>
            {SinglePost && (
                <main>
                    <div className="container">
                        <h1>Vedi tutti i iticket</h1>
                        <div className="row row-cols-2 g-3">
                            {SinglePost.map((curPost) => (
                                <div key={curPost.id} className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>
                                                {curPost.id} - {curPost.name}
                                            </h4>
                                            <p>{curPost.description}</p>
                                            {/* <Link to={`/tickets/${curTicket.id}`}>Vedi dettagli</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            )
            }
        </>
    );
};

export default SinglePost;