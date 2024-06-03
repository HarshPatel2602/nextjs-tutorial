import Link from "next/link";

const students = ["Harsh", "Het", "Chirag", "Siddharth"];

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link href={`/studentList/${student.toLowerCase()}`}>
              {student}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




// import Link from "next/link";

// export default function StudentList() {
//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         <li>
//           <Link href="/studentlist/harsh">Harsh</Link>
//         </li>
//         <li>
//           <Link href="/studentlist/het">Het</Link>
//         </li>
//         <li>
//           <Link href="/studentlist/chirag">Chirag</Link>
//         </li>
//         <li>
//           <Link href="/studentlist/siddharth">Siddharth</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
