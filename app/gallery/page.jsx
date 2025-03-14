import Link from "next/link";

const imageContent = [
 {
  title: "04/02/2024",
  image: "/1.jpeg",
 },
 {
  title: "04/02/2024",
  image: "/2.jpeg",
 },
 {
  title: "04/02/2024",
  image: "/3.jpeg",
 },
 {
  title: "04/02/2024",
  image: "/4.jpeg",
 },
];

const Gallery = () => {
 return (
  <div className="flex flex-col items-center gap-4 p-4 h-full">
   <h1 className="text-white text-center font-bold text-2xl">
    Liat Memori Kita Selama Setahun Terakhir!
   </h1>
   <div className="grid grid-cols-1 lg:grid-cols-3 shadow-md bg-white overflow-y-auto h-auto w-full rounded-lg p-3">
    {imageContent.map((item, index) => (
     <div
      key={index}
      className="flex flex-col gap-3 items-center">
      {item.image && (
       <div className="flex flex-col items-center gap-2 p-3">
        <img
         src={item.image}
         className="mt-4 w-[300px] h-auto rounded-lg"
        />
        <p className="text-pink font-bold text-xl">{item.title}</p>
       </div>
      )}
     </div>
    ))}
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

export default Gallery;
