import { db } from "@/firebase/config";
import { getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET(_, { params }) {
    const { id } = params;
    const docRef = (db, "products", parseInt(id))   
    const docSnapshot = await getDoc(docRef);
    return NextResponse.json(docSnapshot.data())
}