import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET() {
    try {
        const productosRef = collection(db, "products");
        const querySnapshot = await getDocs(productosRef);
        const docs = querySnapshot.docs.map(doc => doc.data());

        return NextResponse.json(docs);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
    }
}
