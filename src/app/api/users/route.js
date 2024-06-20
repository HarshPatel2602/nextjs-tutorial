import { user } from "@/util/db";
import { NextResponse } from "next/server";

export const GET = () => {
  const data = user;
  return NextResponse.json(data, { status: 200 });
};

export const POST = async (request) => {
  const payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email || !payload.city) {
    return NextResponse.json(
      { result: "Required field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 201 }
  );
};
