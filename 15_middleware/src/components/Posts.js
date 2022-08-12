import { useSelector } from "react-redux";

export default function Posts() {
  const state = useSelector((state) => state);
  console.log(state.postdata);
  return (
    <div>
      <h2> Latest Posts</h2>
      {state.postdata?.map((post) => (
        <div key={post.id}>
          <h4> {post.title}</h4>
          <p> {post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
