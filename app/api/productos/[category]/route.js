import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
    const { category } = params;
    const productosRef = collection(db, "products");

    const q = category === 'all' ? productosRef : query(productosRef, where('category', '==', category));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => doc.data());

    return NextResponse.json(docs);
}
