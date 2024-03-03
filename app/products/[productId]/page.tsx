import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import getAllProducts from "@/lib/getAllProducts";

export function generateMetadata({
	params,
}: {
	params: { productId: string };
}) {
	const products = getAllProducts();
	const { productId } = params;

	const product = products.find(
		(product: { id: string }) => product.id === productId
	);

	if (!product) {
		return {
			title: "Product Not Found!",
		};
	}

	return {
		title: product.title,
		description: `This is the page of ${product.title}`,
	};
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const products = await getAllProducts();
	const { productId } = params;

	const product = products.find(
		(product: { id: string }) => product.id === productId
	);

	if (!products.find((product: { id: string }) => product.id === productId))
		notFound();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-400'>
				<p className='text-xl px-4 py-2 mx-10'>{product.id}</p>
				<h2 className='text-3xl px-8 py-4 mx-10 bg-slate-800 text-white font-bold rounded'>
					{product.title.toUpperCase()}
				</h2>

				<br />
				<div className='bg-slate-800 w-[390px] h-[460px] m-auto p-4 mb-10'>
					<Image
						src={product.photoUrl.toString()}
						alt='product image'
						width={375}
						height={450}
						className='mx-auto outline outline-2 outline-white rounded'
					/>
				</div>
				<p className='text-2xl px-4 py-2 mx-10 mb-10 bg-slate-200 rounded'>
					{product.description}
				</p>
				<Link
					href={"/products"}
					className='px-4 py-2 mx-auto bg-slate-800 text-white text-xl font-bold w-10/12 rounded mb-10'
				>
					Back to Products
				</Link>
			</div>
			On ProductPage
		</main>
	);
}
