interface SubtitleProps {
  title: string;
}

export default function SlideTitle({ title }: SubtitleProps) {
  return (
    <div className="title color-primary" data-swiper-parallax="-300">
      {title}
    </div>
  );
}
