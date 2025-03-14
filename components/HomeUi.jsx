"use client";
import {useState} from "react";
import Link from "next/link";

import {IoIosHeart} from "react-icons/io";

const popupContent = [
 {
  title: "Our Meet!",
  body:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum.",
 },
 {
  title: "The Relationship",
  body:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum.",
 },
 {
  title: "Our Future Plan!",
  body:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum.",
 },
];

const Popup = ({content, onNext, onPrev, onClose}) => {
 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="bg-white w-[300px] flex flex-col gap-2 rounded-lg">
    {/*Header*/}
    <div className="flex flex-col gap-2">
     <h1 className="text-2xl text-pink font-bold p-2">{content.title}</h1>
     <hr className="w-full border border-pink" />
    </div>

    {/*Content*/}
    <div className="flex flex-col gap-2 p-2">
     <p>{content.body}</p>
    </div>

    {/*Footer*/}
    <div className="flex flex-col gap-3 p-3 w-full">
     <div className="flex gap-2">
      <button
       onClick={onPrev}
       className="w-full px-4 py-2 bg-pink text-white rounded-full">
       Previous
      </button>
      <button
       onClick={onNext}
       className="w-full px-4 py-2 bg-pink text-white rounded-full">
       Next
      </button>
     </div>
     <button
      onClick={onClose}
      className="w-full px-4 py-2 bg-pink text-white rounded-full">
      Exit
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

 const toggleOpen = () => {
  setOpenPopup(!openPopup);
  setCurrentIndex(0);
  setAllPopupShown(false);
 };

 const toggleClose = () => {
  setOpenPopup(false);
  setAllPopupShown(true);
 };

 const toggleNext = () => {
  if (currentIndex < popupContent.length - 1) {
   setCurrentIndex(currentIndex + 1);
  }
 };

 const togglePrev = () => {
  if (currentIndex > 0) {
   setCurrentIndex(currentIndex - 1);
  }
 };

 const isPrevDisabled = currentIndex === 0;
 const isNextDisabled = currentIndex === popupContent.length - 1;

 return (
  <div className="flex flex-col justify-between p-3 h-screen">
   <div></div>
   <div className="flex flex-col gap-1 items-center">
    <IoIosHeart className="fill-white size-[80px] animate-bounce duration-700" />
    <h1 className="text-2xl text-white font-bold">Hi, This is For You!</h1>
    <button
     onClick={toggleOpen}
     className="px-4 py-2 rounded-full bg-white text-pink font-semibold">
     Our Journey
    </button>
    {openPopup && (
     <Popup
      onNext={toggleNext}
      onPrev={togglePrev}
      content={popupContent[currentIndex]}
      onClose={toggleOpen}
      isPrevDisabled={isPrevDisabled}
      isNextDisabled={isNextDisabled}
     />
    )}
    <Link href="/gallery">
     <button className="text-white underline font-semibold">
      Check Our Gallery
     </button>
    </Link>
   </div>
   <div className="flex flex-col gap-2 items-center">
    <Link href="/words">
     <button className="text-white animate-pulse">
      Done Reading? Read This Also!
     </button>
    </Link>
    <p className="text-black/50">Developed by @simp4iammm</p>
   </div>
  </div>
 );
};

export default HomeUi;
