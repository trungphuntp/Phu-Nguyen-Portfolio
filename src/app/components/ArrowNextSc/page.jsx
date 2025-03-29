"use client";
import Image from "next/image";
const ArrowNextSc = ({ linkNextSc }) => {
  const onClickNextSc = (e) => {
    e?.preventDefault();
    const targetElement = document.querySelector(`#${linkNextSc}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={(e) => {
        onClickNextSc(e);
      }}
      className="arrow-down absolute bottom-[5%] right-[5%] cursor-pointer"
    >
      <Image src="/arrow-down.png" alt="arrow down" height={32} width={32} />
    </button>
  );
};

export default ArrowNextSc;
