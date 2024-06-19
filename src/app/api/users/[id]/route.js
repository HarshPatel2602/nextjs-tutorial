import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userDate = user.filter((item) => item.id == content.params.id);

  return NextResponse.json(userDate.length==0?{result:"No Data Found",success:false}:{result:userDate,success:true}, { status: 200 });
}
