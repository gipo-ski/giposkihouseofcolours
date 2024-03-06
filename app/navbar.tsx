import Link from "next/link";
import Image from "next/image";

// import Search from "./search";
import logo from "../public/giposkilogoSMALL.png";

export default function NavBar() {
	return (
		<nav className='flex h-20 items-center justify-between bg-slate-400/95 px-10 sticky top-0 z-50'>
			<div className='flex gap-2 items-center'>
				<Link href={"/"}>
					<Image
						alt='logo'
						src={logo}
						width={0}
						height={0}
						priority={true}
						className='w-28 h-auto'
					/>
				</Link>

				{/* <h2 className='text-3xl'>[Logo]</h2> */}
			</div>

			<div className='flex items-center'>
				<ul className='flex flex-row gap-1 mx-1'>
					<li className='px-3 py-1 text-xl text-white bg-slate-700 rounded'>
						<Link href='/'>Home</Link>
					</li>
					<li className='px-3 py-1 text-xl text-white bg-slate-700 rounded'>
						<Link href='/products'>Products</Link>
					</li>
					<li className='px-3 py-1 text-xl text-white bg-slate-700 rounded'>
						<Link href='/about'>About</Link>
					</li>
				</ul>
				{/* <Search /> */}
			</div>
		</nav>
	);
}
