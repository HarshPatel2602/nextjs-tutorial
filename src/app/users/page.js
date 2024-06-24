import Link from "next/link";
import "./../style.css";
import DeleteUser from "@/util/deleteUser";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
};

const Page = async () => {
  const users = await getUsers();
  //   console.log(users);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <span>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </span>

          <span>
            <Link href={`users/${user.id}/update`}>Edit</Link>
          </span>

          <span>
            <DeleteUser id={user.id} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Page;
