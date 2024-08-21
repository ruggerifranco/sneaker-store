import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request) {
    const productosRef = collection(db, "products")

    const querySnapshot = await getDocs(productosRef)
    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

}