import { EmailIcon, InstaIcon, XIcon } from "../../assets/Image";
import { Headline } from "../headline/Headline";

export const MainFooterSection = () => {
  return (
    <section className="bg-gray-100 w-[948px] h-[483px] rounded-tr-[50px] rounded-br-[50px] relative ">
      {/* <div className="bg-gray-100 w-[948px] h-[483px] absolute left-[-204px] bottom-3 -z-10"></div> */}
      <div className="flex ml-[204px] mt-[40px]">
        <div className="grid w-[399px] h-[202px]">
          <Headline title="Mega News" />

          <p className="mt-3 ml-[10px] w-[350px] h-[159px] text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            laudantium hic accusantium nulla consectetur at cumque quo
            voluptatem! Quia, architecto exercitationem eos, ad velit ex
            incidunt fuga, eveniet magnam mollitia perferendis non ut ipsum
            corporis officiis porro necessitatibus dolore ab.
          </p>
          <div className="w-[399px] h-[91px]">
            <Headline title="Newsletter" />

            <div className="mt-3 flex bg-white rounded-[12px] h-[48px] w-[399px] items-center justify-evenly">
              <input
                className="w-[343px] h-[14px]"
                type="text"
                placeholder="Write Your Email .."
              />
              <EmailIcon />
            </div>
          </div>
        </div>
        <div className="ml-28">
          <div className="w-[383px] h-[108px]">
            <Headline title="Categories" />

            <ol className="mt-3 text-[10px] text-[#3E3232]">
              <li className="mb-2 text-[#3E3232]">Culture</li>
              <li className="mb-2">Fashion</li>
              <li className="mb-2">Featured</li>
              <li className="mb-2">Food</li>
              <li className="mb-2">Healthy Living</li>
              <li className="mb-2">Technology</li>
            </ol>
          </div>
          <div className="h-[83px] w-[183px] flex flex-col mt-26">
            <Headline title="Social Network" />

            <div className="mt-3 flex gap-3">
              <a
                className="w-[128px] h-[40px] gap-2 bg-gradient-to-r from-[#FF7563] to-[#F45C9F] text-white flex items-center justify-center rounded-[12px]"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="mt-0.5">
                  <InstaIcon />
                </span>
                Instagram
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              {/* <a
                className="w-[128px] h-[40px] gap-2 bg-gradient-to-r from-[#FF7563] to-[#F45C9F] text-white flex items-center justify-center  rounded-[12px]"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <div className="mt-0.5">
                  <InstaIcon />
                </div>{" "}
                Instagram
              </a>
              <a href="https://x.com/" target="_blank">
                <XIcon />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: vollflächig von links nach rechts, weniger Wrapper */}
      <div className="absolute bottom-8 left-0 right-0 w-[908px] h-[48px] bg-gray-200 rounded-tr-[12px] rounded-br-[12px] flex items-center justify-between pl-[204px] pr-5">
        <nav className="flex items-center gap-1 text-[12px] text-[#3E3232]">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>
          <span aria-hidden="true">|</span>
          <a className="hover:underline" href="#">
            Terms &amp; Conditions
          </a>
        </nav>
        <p className="text-[12px] text-[#3E3232]">
          All Copyright (C) 2022 Reserved
        </p>
      </div>

      {/* <div className="flex w-[908px] h-[48px] bg-gray-200 justify-between items-center rounded-tr-[12px] rounded-br-[12px] absolute bottom-8 left-0">
        <div className="flex gap-1 ml-[204px]">
          <a className="text-[12px] text-[#3E3232]" href="#">
            Privacy Policy
          </a>
          <p className="text-[12px] text-[#3E3232]">|</p>
          <a className="text-[12px] text-[#3E3232]" href="#">
            Terms & Conditions
          </a>
        </div>
        <div className="mr-5">
          <p className="text-[12px] text-[#3E3232]">
            All Copyright (C) 2022 Reserved
          </p>
        </div> 
      </div>*/}
    </section>
  );
};
