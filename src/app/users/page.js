const userList = async () => {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
};

const Page = async () => {
  const data = await userList();
//   console.log(users);

  return (
    <div>
      <h1>User Name List..</h1>
      {
        data.map((item)=>(
            <div key={item.id}>
                <h2>FirstName : {item.firstName}</h2>
            </div>
        ))
      }
    </div>
  );
};

export default Page;
