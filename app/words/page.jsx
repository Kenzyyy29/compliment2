import {IoIosHeart} from "react-icons/io";
import Link from "next/link";

const Words = () => {
 return (
  <div className="flex flex-col gap-4 justify-between h-screen p-4 w-full">
   <div className="flex items-center gap-1">
    <h1 className="text-white text-lg font-bold">Hai Cintaku</h1>
    <IoIosHeart className="fill-white size-5" />
   </div>
   <div className="flex flex-col gap-2">
    <p className="text-white">
     Aku Cuma mau bilang makasih banyak ya sayang, maaf kalo aku belum bisa jadi
     cowo yang ngertiin semua maksud kamu. Aku tuh sayang banget sama kamu, aku
     gamau bikin kamu sedih. Ohh iya maafin juga yaa, kalo aku banyak nuntut
     kamu ini itu, semoga kedepannya kita bisa saling ngertiin lagi ya bayiii.
    </p>
    <p className="text-white">
     Jaga kesehatan kamu disana. Aku disini selalu nungguin kabar kamu, semangat
     kejar cita citanya sayang. Maafin kalo aku marah marah terus ya bayii!
     hehe.
    </p>
    <p className="text-white">
     Mungkin cuma ini yang bisa aku kasih ke kamu, aku selalu berusaha kasih
     yang terbaik buat bayiii. I love u So Much Cintaku Sayangkuuuu, sehat sehat
     ya bayiii.
    </p>
   </div>
   <div className="flex flex-col gap-1 items-center justify-center">
    <Link href="/">
     <button className="text-white underline">Baca Lagi?</button>
    </Link>
    <p className="text-white/60">Developed by @simp4iammm</p>
   </div>
  </div>
 );
};

export default Words;
