import Link from "next/link";

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
        <div key={user.id}>
          <Link href={`users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
