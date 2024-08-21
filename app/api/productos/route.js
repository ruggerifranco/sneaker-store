import mockData from "@/app/data/mockData";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer)
    })
}

export async function GET(request) {
    await sleep(1000)
    return NextResponse.json(mockData)

}