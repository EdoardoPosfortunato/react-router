import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const New = () => {

    // const [Posts, setPosts] = useState(null);
    // useEffect(() => {
    //     axios
    //         .get(
    //             "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
    //         )
    //         .then((resp) => {
    //             setPosts(resp.data);
    //         });
    // }, []);

    return (
        <>
            <h1>Scrivi qui il nuovo post</h1>
        </>
    );
};

export default New;