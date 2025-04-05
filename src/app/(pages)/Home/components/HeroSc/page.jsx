import ArrowNextSc from "@/app/components/ArrowNextSc/page";
import HeroAction from "./component/HeroAction/page";

const HeroSc = () => {
  return (
    <section
      id="herosc"
      className="herosc min-h-[calc(100vh-var(--header-height))] relative flex justify-center items-center pt-[100px]"
    >
      <div className="container flex-1">
        <div className="herosc__content mx-auto max-w-[800px] w-full flex items-center gap-8 justify-between max-lg:flex-col max-lg:justify-center ">
          {/* avatar */}
          <div className="herosc__content-avatar  max-w-[400px] w-full  aspect-[400/400] rounded-full overflow-hidden">
            <img
              className="h-auto w-full object-cover object-top"
              src="/my-avatar.png"
              srcSet="/my-avatar.png 2x"
              width={400}
              height={400}
              alt="My avatar"
            />
          </div>
          {/* infor */}
          <div className="herosc__content-infor text-center max-w-[300px]">
            <p className="MyGreeting capitalize font-semibold">Hello, I'm</p>
            <h2 className="Myname capitalize text-[var(--text-color-body-2)] h2-heading font-semibold">
              Phu Nguyen
            </h2>
            <p className="Myjob capitalize font-semibold text-[2.8rem] max-sm:text-[2.2rem]">
              Frontend Developer
            </p>
            <HeroAction />
          </div>
        </div>
      </div>
      <ArrowNextSc linkNextSc={"AboutSc"} />
    </section>
  );
};

export default HeroSc;
