import fs from "fs";
import path from "path";

export default function getAllProducts() {
	const productsDirectory = path.join(process.cwd(), "productsdata");
	// console.log(productsDirectory);

	// Assuming the JSON file is named "products.json"
	const filePath = path.join(productsDirectory, "products.json");

	const rawData = fs.readFileSync(filePath, "utf8");
	const productsData = JSON.parse(rawData);

	// Now you have access to the array of objects within "productsData"
	// console.log(productsData);

	return productsData;
}
