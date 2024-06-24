import { NextResponse } from "next/server";

export const GET = async (request, content) => {
  const studentDetails = content.params.student;
  console.log(studentDetails);
  return NextResponse.json(
    { result: studentDetails, success: true },
    { status: 200 }
  );
};
