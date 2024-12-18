// Developer: Roderick Bernardo
// Purpose: React useEffect demo

import { useState, useEffect } from "react";

function Static() {
  const divStyle = `gap-4 p-4 d-flex flex-column flex-md-row py-md-5 align-items-center justify-content-center`;
  const REST_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(REST_URL);
        const responseJson = await response.json();
        setPosts(responseJson);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []); // The effect runs only once after the component mounts because the array is empty.

  if (loading) {
    return (
      <div className={divStyle}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={divStyle}>
        <h1>An error has occurred, please try again...</h1>
      </div>
    );
  }

  return (
    <div className={divStyle}>
      <div className="list-group">
        {posts.map((post) => (
          <a
            href="#"
            className="gap-3 py-3 list-group-item list-group-item-action d-flex"
            aria-current="true"
            key={post.id}
          >
            <div className="gap-2 d-flex w-100 justify-content-between">
              <div>
                <p className="mb-0 opacity-75">
                  <b>User id:</b> {post.userId}
                </p>
                <p className="mb-0 opacity-75">
                  <b>Title:</b> {post.title}
                </p>
                <p className="mb-0 opacity-75">
                  <b>Id:</b> {post.id}
                </p>
                <p className="mb-0 opacity-75">
                  <b>Body:</b> {post.body}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Static;
