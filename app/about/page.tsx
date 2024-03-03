import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Page",
	description: "Who we are, What we do.",
};

export default function About() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				AboutPage
			</h1>
			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'>
				<h2 className='text-center text-3xl text-red-400 mt-10 mb-4 p-4'>
					We are <span className='font-bold text-red-500'> [ giposki ].</span>{" "}
					<br /> We build awesome websites.
				</h2>
				<p className='text-start w-3/4 mx-auto'>
					This is a boilerplate for my 3page websites. This could be customised
					to fit other clients&#39; requirements as all funtionalities work
					perfectly!
				</p>
				<br />
				<p className='text-center text-white bg-slate-500 p-4 w-3/4 mx-auto'>
					Each Paragraph is purposely styled differently! Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Harum sit expedita placeat
					distinctio enim excepturi amet! Nesciunt debitis dignissimos impedit
					quidem eos dolorem expedita iure, deleniti quia atque soluta. Quae.
				</p>
				<br />
				<p className='text-end font-mono w-3/4 mx-auto'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
					tenetur nulla dolor quas sunt dolore expedita magni asperiores
					quisquam dicta doloremque et impedit nesciunt enim, nostrum cumque
					soluta ratione.
				</p>
				<br />
				<span className='text-center text-3xl font-extralight text-teal-600'>
					GIPOSKI
				</span>
			</div>
		</main>
	);
}
