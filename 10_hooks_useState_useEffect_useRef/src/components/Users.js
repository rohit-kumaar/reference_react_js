import useFetchData from "../hook/useFetchData";
export default function () {
  const API = "https://jsonplaceholder.typicode.com/users";
  const userData = useFetchData(API);
  return (
    <div>
      <h2> Users Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th> S.no</th>
            <th> Name </th>
            <th> Email</th>
            <th> Phone </th>
            <th> Website</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, ind) => (
            <tr key={user.id}>
              <td>{ind + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
