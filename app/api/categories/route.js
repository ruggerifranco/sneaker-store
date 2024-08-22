import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const getUniqueCategories = (products) => {
    const categories = products.map(item => item.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));
};

export async function GET() {
    try {
        const productosRef = collection(db, "products");
        const querySnapshot = await getDocs(productosRef);
        const products = querySnapshot.docs.map(doc => doc.data());

        const uniqueCategories = getUniqueCategories(products);
        
        return NextResponse.json(uniqueCategories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.error();
    }
}
