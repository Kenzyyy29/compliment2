"use client";
// React
import {IoIosHeart} from "react-icons/io";
import {FaArrowRightLong} from "react-icons/fa6";
import {FaArrowLeftLong} from "react-icons/fa6";

import Link from "next/link";
import {useState} from "react";

const popupContent = [
 {
  title: "Awal Perjalanan",
  body:
   "Awal kita ketemu itu tanggal 4 Februari 2024, kita langsung ketemu di hotel Cordela loh! hahaha, siapa si yang first date nya langsung nginep berdua di hotel.",
 },
 {
  title: "Hubungan Kita",
  body:
   "Dari awal ketemu sampe sekarang, kita belum pernah tuh yang namanya tembak tembakan, hubungan kita ngalir gitu aja. Banyak hal yang udah kita lewatin bareng bareng.",
 },
 {
  title: "Planning",
  body:
   "Oh iya, hubungan kita udah berjalan 1 tahun lebih loh! Tujuan utama kita ya jelas buat hidup bareng, doain ya!",
 },
];

const Popup = ({content, onNext, onPrev, onClose}) => {
 return (
  <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
   <div className="flex flex-col justify-between w-[300px] h-[350px] overflow-y-auto bg-white rounded-lg p-3">
    <div className="flex flex-col items-start gap-2">
     <h1 className="text-2xl text-pink font-bold text-center">
      {content.title}
     </h1>
     <p>{content.body}</p>
    </div>
    <div className="flex flex-col gap-2">
     <div className="flex gap-2 justify-center items-center w-full">
      <button
       onClick={onPrev}
       className="flex justify-between items-center px-4 py-2 bg-pink text-white rounded-full w-full">
       <FaArrowLeftLong />
       Kembali
      </button>
      <button
       onClick={onNext}
       className="flex justify-between items-center px-4 py-2 bg-pink text-white rounded-full w-full">
       Lanjut
       <FaArrowRightLong />
      </button>
     </div>
     <button
      onClick={onClose}
      className="px-4 py-2 bg-pink text-white rounded-full w-full">
      Keluar
     </button>
    </div>
   </div>
  </div>
 );
};

const HomeUi = () => {
 const [openPopup, setOpenPopup] = useState(false);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [allPopupShown, setAllPopupShown] = useState(false);

 const handleOpen = () => {
  setOpenPopup(!openPopup);
  setCurrentIndex(0);
  setAllPopupShown(false);
 };

 const handleClose = () => {
  setOpenPopup(false);
  setAllPopupShown(true);
 };

 const handleNext = () => {
  if (currentIndex < popupContent.length - 1) {
   setCurrentIndex(currentIndex + 1);
  } else {
   handleClose();
  }
 };

 const handlePrev = () => {
  if (currentIndex > 0) {
   setCurrentIndex(currentIndex - 1);
  }
 };

 const isPrevDisabled = currentIndex === 0;
 const isNextDisabled = currentIndex === popupContent.length - 1;

 return (
  <div className="flex flex-col p-4 justify-between items-center h-screen">
   <div></div>
   <div className="flex flex-col gap-2 items-center justify-center">
    <IoIosHeart className="size-24 animate-bounce duration-700 fill-white" />
    <h1 className="text-2xl text-white font-bold text-center">
     Halo Bayi, ini khusus dibikin buat kamu loh!
    </h1>
    <button
     onClick={handleOpen}
     className="px-4 py-2 rounded-full bg-white text-pink font-semibold">
     Liat Perjalanan Kita Disini!
    </button>
    {openPopup && (
     <Popup
      content={popupContent[currentIndex]}
      onNext={handleNext}
      onPrev={handlePrev}
      onClose={handleClose}
      isPrevDisabled={isPrevDisabled}
      isNextDisabled={isNextDisabled}
     />
    )}
    <Link href="/gallery">
     <button className="flex underline text-white">Buka Galeri</button>
    </Link>
   </div>
   <div className="flex flex-col gap-1 items-center justify-end p-2">
    <Link href="/words">
     <button
      className={`mt-4 px-4 py-2 rounded ${
       allPopupShown
        ? " text-white hover:underline"
        : " text-white/50 cursor-not-allowed"
      }`}
      disabled={!allPopupShown}>
      Udah Selesai Baca? Klik ini!
     </button>
    </Link>
    <p className="text-white/60">Developed by @simp4iammm</p>
   </div>
  </div>
 );
};

export default HomeUi;
