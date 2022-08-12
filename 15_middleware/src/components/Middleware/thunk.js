export default function fetchPosts() {
  return (dispatch) => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "postData", payload: data });
      })
      .catch((err) => console.log(err));
  };
}
