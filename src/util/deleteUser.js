"use client";

const DeleteUser = (props) => {
    const userId = props.id;
    console.log(userId);

    const deleteuser = async () => {
        let data = await fetch("http://localhost:3000/api/users/" + userId, {
            method: "DELETE",
        });
        data = await data.json();
        console.log(data);
        if (data.success) {
            alert("true");
        }
    };

    return (
        <div>
            <button onClick={deleteuser}>Delete</button>
        </div>
    );
};

export default DeleteUser;
