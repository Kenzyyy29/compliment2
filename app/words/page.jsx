import {IoIosHeart} from "react-icons/io";
import Link from "next/link";

const Words = () => {
 return (
  <div className="flex flex-col gap-4 justify-between h-screen p-4 w-full">
   <div></div>
   <div className="flex flex-col gap-2">
    <div className="flex gap-1 items-center">
     <h1 className="text-white text-lg font-bold">Hi Sweet Heart</h1>
     <IoIosHeart className="fill-white size-5" />
    </div>
    <div className="flex flex-col gap-2">
     <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus sed
      aliquid ipsam tempora. Laudantium saepe dolorum accusamus, sequi ex non,
      laboriosam ea alias aliquid similique ipsum asperiores et soluta.
     </p>
     <p className="text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed
      sequi quas sint, velit aliquam sunt reprehenderit autem ea perspiciatis
      facilis odit harum vitae voluptatum, dolorem quos beatae eveniet nihil.
     </p>
     <p className="text-white">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci!
     </p>
    </div>
   </div>

   <div className="flex flex-col gap-1 items-center justify-center">
    <Link href="/">
     <button className="text-white underline">Read Our Journey Again?</button>
    </Link>
    <p className="text-white/60">Developed by @simp4iammm</p>
   </div>
  </div>
 );
};

export default Words;
