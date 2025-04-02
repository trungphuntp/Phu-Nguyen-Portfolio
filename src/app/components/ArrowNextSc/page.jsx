"use client";
import { useLenis } from "@/app/context/LenisScroll/page";
import Image from "next/image";
const ArrowNextSc = ({ className, linkNextSc, ...rest }) => {
  const { lenisScroll } = useLenis();

  const onClickNextSc = (e) => {
    e?.preventDefault();
    const targetElement = document.querySelector(`#${linkNextSc}`);
    if (targetElement) {
      lenisScroll.scrollTo(`#${linkNextSc}`, {
        duration: 0.7, // thời gian cuộn (tính bằng giây)
        offset: 0, // có thể thêm offset nếu cần
        easing: (t) => t, // hàm easing nếu muốn custom
      });
    }
  };

  return (
    <button
      onClick={(e) => {
        onClickNextSc(e);
      }}
      className={`arrow-down absolute bottom-[5%] right-[5%] cursor-pointer ${className} max-lg:hidden`}
      {...rest}
    >
      <Image src="/arrow-down.png" alt="arrow down" height={32} width={32} />
    </button>
  );
};

export default ArrowNextSc;
