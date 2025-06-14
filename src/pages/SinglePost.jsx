import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



const SinglePost = () => {

    const { id } = useParams()

    const [SinglePost, setSinglePost] = useState(null);


    useEffect(() => {
        axios
            .get(
                `https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`
            )
            .then((resp) => {
                setSinglePost(resp.data);
            });
    }, []);

    return (
        <>
          <h1>Questo è il port {id}</h1>
        </>
    );
};

export default SinglePost;