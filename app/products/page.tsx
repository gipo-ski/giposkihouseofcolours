import Link from "next/link";
import Image from "next/image";

import nobody from "@/public/images/mrNobody.png";
import getAllProducts from "@/lib/getAllProducts";

export default function Products() {
	const products = getAllProducts();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				My Products
			</h1>

			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'>
				<h2 className='text-4xl font-bold dark:text-white/90'>Artworks</h2>
				<div className='bg-slate-400 rounded mt-8'>
					<ul className='grid grid-cols-auto-fit-minmax-400 place-content-center'>
						{products.map((product: Product) => (
							<li
								key={product.id}
								className='bg-slate-300/90 p-4 m-4 grid'
							>
								<div className='relative w-[375px] h-[450px] object-contain bg-slate-800 m-auto p-4 mt-10'>
									<Image
										src={nobody}
										alt={product.title}
										width={0}
										height={0}
										// quality={100}
										className='rounded m-auto outline outline-2 outline-white'
									/>
								</div>
								<p className='text-sm font-light mb-2 text-center'>
									{product.date}
								</p>
								<Link
									href={`/products/${product.id}`}
									className='w-1/2 mx-auto text-2xl text-center font-bold px-8 py-2 mb-2 hover:bg-slate-300 bg-slate-800 text-white hover:text-slate-800 rounded'
								>
									{product.title}
								</Link>
								<p className='text-xl text-justify mt-4'>
									{product.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
