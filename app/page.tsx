import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center pt-8 w-full">
      <div className="w-full font-sans font-[500] text-[9px] flex items-center mx-[20px] max-w-[1140px]" >
        <span>
          <Link href=''>
            BECOME A MEMBER
          </Link>
        </span>
        <div className="flex gap-3 ml-auto">
          <span className="border-b border-b-black ease-linear duration-200 hover:border-opacity-0">
            <Link href=''>
              LOG IN
            </Link>
          </span>
          <span className="border-b border-b-black ease-linear duration-200 hover:border-opacity-0">
            <Link href=''>
              SUBMIT
            </Link>
          </span>
        </div>
      </div >
    </main >
  );
}
