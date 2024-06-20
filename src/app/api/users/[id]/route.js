import { user } from "@/util/db";
import { NextResponse } from "next/server";

export const GET = (request, content) => {
  const userDate = user.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    userDate.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userDate[0], success: true },
    { status: 200 }
  );
};

export const PUT = async (request, content) => {
  const payload = await request.json();
  payload.id = content.params.id;
  if (
    !payload.id ||
    !payload.name ||
    !payload.age ||
    !payload.email ||
    !payload.city
  ) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
};
