import { SwiperSlide } from "swiper/react";
import SlideTitle from "./components/SlideTitle";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <SwiperSlide className="top-wrapper">
        <div className="title">
          <span className="greeting-1 color-primary">Hello,</span>
          <br />
          <span className="greeting-2">I am Ran!</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SlideTitle title="slide1" />
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SlideTitle title="slide2" />
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SlideTitle title="slide3" />
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
    </AppLayout>
  );
}

export default App;
