import { NextResponse } from "next/server"

export function GET(request){
    return NextResponse.json({name: "Harsh", age: "22", city:"Gujarat"}, {status:200})
}