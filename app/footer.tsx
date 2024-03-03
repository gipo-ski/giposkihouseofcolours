import Link from "next/link";

export default function Footer() {
	const today = new Date();
	return (
		<footer className='flex flex-col items-center justify-between bg-slate-400 px-10'>
			<h1 className='text-5xl font-extrabold text-center text-red-700 mb-5 p-4'>
				Footer
			</h1>
			<p className='text-2xl text-white mb-10'>
				Copyright &copy; {today.getFullYear()}
			</p>
		</footer>
	);
}
