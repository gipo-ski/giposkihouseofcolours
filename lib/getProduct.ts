
import getAllProducts from "./getAllProducts";
 

export default async function getProduct(productId: string) {
	const id = productId;
	 // Await the getAllProducts call to get the actual products array
	const products = await getAllProducts()

	// Find the product with the matching id
  const product = products.find((product: Product) => product.id === productId);

// If the product is found, return its details
  if (product) {
    const content = {
      id: product.id,
      title: product.title,
      date: product.date,
      description: product.description,
      thumbnailUrl: product.thumbnailUrl,
      photoUrl: product.photoUrl,
    };
    return content;
	}
	// If no product is found, return undefined or handle as needed
  return undefined;
	}

