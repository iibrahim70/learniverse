"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import mentorsData from "../public/mentors.json";
import "swiper/css";
import "swiper/css/pagination";
const Mentor = () => {
  return (
    <div className="my-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mentorsData.map((item) => (
          <SwiperSlide>
            <div className="rounded-xl space-y-2 p-5 text-center h-72 flex items-center justify-center flex-col shadow-xl mb-5">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={item.image} alt={`Photo of ${item.name}`} />
                </div>
              </div>
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p>{item.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mentor;
