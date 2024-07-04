import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productID = content.params.productid;
  const filter = { _id: productID };
  const payload = await request.json();
  
  await mongoose.connect(connectionStr);
  const result = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}
