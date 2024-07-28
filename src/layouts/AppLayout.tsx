import { PropsWithChildren } from "react";
import { Mousewheel, Pagination, Parallax, Keyboard } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default function App({ children }: PropsWithChildren) {
  return (
    <Swiper
      speed={600}
      parallax={true}
      slidesPerView={1}
      mousewheel={true}
      keyboard={true}
      pagination={{
        clickable: true,
      }}
      direction={"vertical"}
      modules={[Mousewheel, Parallax, Pagination, Keyboard]}
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </Swiper>
  );
}
