import Image from "next/image";
import heroImg from "../../public/heroImage.png";
import GridDistortion from "./ui/Distortion";
import CreativeDeveloper from "./CreativeDeveloper";
import TextAnimation from "./ui/TextAnimation";


const PixelatedImage = () => {
  return (
    <div className="min-h-[120dvh] xl:grid grid-cols-12 gap-4 pt-20 xl:pt-32 bg-black px-4 xl:px-0">
      <div className="w-full h-[80vh] xl:h-full col-span-12 xl:col-span-5">
        <GridDistortion
          imageSrc={heroImg.src}
          grid={15}
          mouse={0.5}
          strength={0.15}
          relaxation={0.9}
          className="object-center rounded-2xl xl:rounded-none xl:rounded-r-2xl"
        />
      </div>
      <div className="col-span-7 xl:col-span-7">
        <div className="flex justify-between flex-col sm:flex-row items-center sm:items-start gap-5 px-4 py-8 w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="overflow-x-clip">
              <div className="flex items-center w-[250px]">
                <div className="flex flex-none gap-1 animate-moveLeft">
                  {[
                    ...new Array(2).fill(0).map((_, i) => (
                      <div key={i}>
                        <svg
                          // width=""
                          // height="29"
                          viewBox="0 0 157 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full transition-all"
                        >
                          <path
                            fill="#b7ab98"
                            d="M0 29V0.679998H4.32V29H0ZM7.2 29V0.679998H8.64V29H7.2ZM10.08 29V0.679998H12.96V29H10.08ZM15.8438 29V0.679998H18.7238V29H15.8438ZM20.1638 29V0.679998H24.4838V29H20.1638ZM27.3638 29V0.679998H28.8038V29H27.3638ZM31.6875 29V0.679998H36.0075V29H31.6875ZM37.4475 29V0.679998H38.8875V29H37.4475ZM41.7675 29V0.679998H44.6475V29H41.7675ZM47.5312 29V0.679998H51.8513V29H47.5312ZM53.2913 29V0.679998H56.1713V29H53.2913ZM57.6113 29V0.679998H61.9313V29H57.6113ZM63.375 29V0.679998H66.255V29H63.375ZM69.135 29V0.679998H73.455V29H69.135ZM74.895 29V0.679998H76.335V29H74.895ZM79.2188 29V0.679998H83.5388V29H79.2188ZM86.4188 29V0.679998H87.8588V29H86.4188ZM89.2988 29V0.679998H92.1788V29H89.2988ZM95.0625 29V0.679998H97.9425V29H95.0625ZM100.823 29V0.679998H105.143V29H100.823ZM106.583 29V0.679998H108.023V29H106.583ZM110.906 29V0.679998H112.346V29H110.906ZM115.226 29V0.679998H119.546V29H115.226ZM122.426 29V0.679998H125.306V29H122.426ZM126.75 29V0.679998H129.63V29H126.75ZM132.51 29V0.679998H133.95V29H132.51ZM135.39 29V0.679998H139.71V29H135.39ZM142.594 29V0.679998H145.474V29H142.594ZM148.354 29V0.679998H149.794V29H148.354ZM152.674 29V0.679998H156.994V29H152.674Z"
                          />
                        </svg>
                      </div>
                    )),
                  ]}
                </div>
              </div>
            </div>
            <p className="text-[#EB5B00]">manieshsanwal.dev@gmail.com</p>
          </div>
          <div className="text-[#b7ab98]">
            <p>Skilled in Both.//</p>
            <p>Design and Development.//</p>
          </div>
        </div>

        <CreativeDeveloper/>

        <TextAnimation/>
      </div>
    </div>
  );
};

export default PixelatedImage;
