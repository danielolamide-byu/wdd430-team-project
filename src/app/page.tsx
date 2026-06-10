import Image from "next/image";
import { instrument_serif } from '@/app/fonts'


export default function Home() {
  return (
    <>
      <div >
        <main>
          
          <nav className="bg-purple-700 p-10 flex justify-between items-center text-white">
            <div>Handcrafter Haven</div>
            <div className="flex gap-4 lg:gap-16 sm:gap-4 items-center">
            <a href="" >Products</a>
            <a href="">Collections</a>
            {/* <a href="" >Here</a> */}
            </div>
            <div className="flex">
              <form action="" className="bg-purple-400">Login</form>
              {/* <a className="mb-2">Login</a> */}
            </div>
          </nav>
          <div className="min-[1200px]:flex max-[850px]:h-100">
            <div className="bg-blue-500 max-w-380">
              <h1>For The Love of Art</h1>
              <h1 className={`${instrument_serif.className} text-9xl text-center`}>HandCrafted Haven</h1>
        {/* <h1 className={`${lusitana.className} text-6xl`}>Invoices</h1> */}

              <button>Shop Now</button>
            </div>
        <div>
             <Image
          className="dark"
          src="/macrame-arrangement.avif"
          alt="Next.js logo"
          width={1800}
          height={600}
          
        />
            </div>
            </div>
            <h1>Nice</h1>
            
            </main>
            </div>
         </>
          )}