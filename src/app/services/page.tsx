"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'


export default function Home() {
  const featureCards = [
    {
      src: "https://picsum.photos/id/100/280",
      title: "We lead with personality"
    },
    {
      src: "https://picsum.photos/id/14/280",
      title: "We lead with personality"
    },
    {
      src: "https://picsum.photos/id/50/280",
      title: "We lead with personality"
    },
    {
      src: "https://picsum.photos/id/130/280",
      title: "We lead with personality"
    },
    {
      src: "https://picsum.photos/id/30/280",
      title: "We lead with personality"
    },
  ]

  const servicesContentLeft = [
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    "ipsum quia dolor sit amet, consectetur, adipisci",
    "Pellentesque ut iaculis enim. Aliquam scelerisque augue sit amet leo vehicula",
    "Aliquam scelerisque augue sit amet leo"
  ]

  const servicesContentCenter = [
    "Contrary to popular belief, Lorem Ipsum is not simply random text, consectetur, adipisci velit.",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure",
    "Pellentesque ut iaculis enim. Aliquam scelerisque augue sit amet leo vehicula",
    "Aliquam scelerisque augue sit amet leo"
  ]

  const servicesContentRight = [
    "Neque porro quisquam est ",
    "ipsum quia dolor sit amet",
    "Pellentesque ut iaculis enim. Aliquam",
    "Aliquam scelerisque augue sit amet leo"
  ]

  const partners = [
    {
      src: "/epic.png"
    },
    {
      src: "/sega.png"
    },
    {
      src: "/activision.png"
    },
    {
      src: "/tripwire.png"
    },
    {
      src: "/prime.png"
    },
    {
      src: "/bytedance.png"
    },
    {
      src: "/netflix.png"
    },
    {
      src: "/marvel.png"
    },
  ]
  
  const caseStudies = [
     {
       src: "https://picsum.photos/id/125/900/500",
       title: "Lorem ipsum pativa"
     },
     {
      src: "https://picsum.photos/id/89/900/500",
      title: "Lorem ipsum pativa"
    },
    {
      src: "https://picsum.photos/id/50/900/500",
      title: "Lorem ipsum pativa"
    },
    {
      src: "https://picsum.photos/id/345/850/400",
      title: "Lorem ipsum pativa"
    },
    {
      src: "https://picsum.photos/id/499/960/640",
      title: "Lorem ipsum pativa"
    },
  ]
  
  const [isVisibleNav,setisVisibleNav] = useState(false)

  const pathname = usePathname()

  const getLinkClassName = (path: string) => {
    return `relative ${
      pathname === path 
        ? 'text-[#A1B1FD]' 
        : 'text-[#8BF645] hover:text-[#A1B1FD] transition-colors duration-300'
    }`
  }

  const getUnderlineClassName = (path: string) => {
    return pathname === path 
      ? ''
      : "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-current before:transition-transform before:duration-500 before:ease-in-out"
  }

  return (
    <div className="body__wrapper">
      <section className="block-hero relative h-screen pb-16">
        <header className="header">
          <div className="header__inner relative flex justify-between items-start w-full">
            <Link href="/"></Link>
            <div className="header__btns">
              <button
                className="header__btn cursor-pointer h-[40px] w-[40px]"
                type="button"
                onClick={() => setisVisibleNav(true)}
              >
                <span className="header__btn-inner">
                  <svg className="header__btn-icon" viewBox="0 0 1024 1024">
                    <g className="header__btn-line top">
                      <g className="header__btn-line-inner header__btn-top left">
                        <path d="M0 253.972h256v56.889h-256v-56.889z"></path>
                      </g>
                      <g className="header__btn-line-inner header__btn-top center">
                        <path d="M256 225.528h56.889v56.889h-56.889v-56.889z"></path>
                      </g>
                      <g className="header__btn-line-inner header__btn-top right">
                        <path d="M312.889 253.972h711.111v56.889h-711.111v-56.889z"></path>
                      </g>
                    </g>
                    <g className="header__btn-line center">
                      <g className="header__btn-line-inner header__btn-center left">
                        <path d="M0 481.528h853.333v56.889h-853.333v-56.889z"></path>
                      </g>
                      <g className="header__btn-line-inner header__btn-center right">
                        <path d="M853.333 424.639v56.889h170.667v-56.889h-170.667z"></path>
                      </g>
                    </g>
                    <g className="header__btn-line bottom">
                      <g className="header__btn-line-inner header__btn-bottom left">
                        <path d="M0 741.584h85.333v56.889h-85.333v-56.889z"></path>
                      </g>
                      <g className="header__btn-line-inner header__btn-bottom center">
                        <path d="M85.333 684.696h369.778v56.889h-369.778v-56.889z"></path>
                      </g>
                      <g className="header__btn-line-inner header__btn-bottom right">
                        <path d="M1024 741.57h-568.889v56.889h568.889v-56.889z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div className={`header-main ${isVisibleNav ? "visible-nav" : ""}`}>
              <div
                className={`absolute top-[101px] w-[50px] h-[101px] right-[70px] ${
                  isVisibleNav ? "z-[1]" : ""
                }`}
              >
                <button
                  className="header__btn-close "
                  type="button"
                  onClick={() => setisVisibleNav(false)}
                >
                  <svg className="header__btn-close-icon cursor-pointer">
                    <use xlinkHref="#icon-close">
                      <symbol id="icon-close" viewBox="0 0 32 32">
                        <path d="M1.403 30.506l23.472-23.472-1.494-1.494 5.54-5.54 1.494 1.494-5.54 5.54 1.494 1.494-23.472 23.472-1.494-1.494z"></path>
                        <path d="M19.955 21.842l-18.679-18.679 1.494-1.494 18.679 18.679-1.494 1.494z"></path>
                        <path d="M29.23 31.116l-7.781-7.781 1.494-1.494 7.781 7.781-1.494 1.494z"></path>
                        <path d="M20.702 24.083l-1.494-1.494 1.494-1.494 1.494 1.494-1.494 1.494z"></path>
                      </symbol>
                    </use>
                  </svg>
                </button>
              </div>
              <div className="header-main--inner">
                <div className="header-main__nav block-title-m font-bebas w-full">
                  <p className="leading-none">
                    Welcome to FVDLance <br /> You can checkout{" "}
                    <Link
                      className={`${getLinkClassName(
                        "/services"
                      )} ${getUnderlineClassName("/services")}`}
                      href="/services"
                    >
                      our services
                    </Link>
                    ,{" "}
                    <Link
                      href="/work"
                      className={`${getLinkClassName(
                        "/work"
                      )} ${getUnderlineClassName("/work")}`}
                    >
                      our work
                    </Link>
                    ,<br />
                    <Link
                      href="/jobs"
                      className={`${getLinkClassName(
                        "/jobs"
                      )} ${getUnderlineClassName("/jobs")}`}
                    >
                      our job openings
                    </Link>{" "}
                    <span className="leading-[1.4]">or feel free to reach out</span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="block-hero__inner w-full h-full flex justify-between items-end overflow-hidden ">
          <h1 className="block-title block-hero--title font-bebas">
            <span className="mb-[0.12em]">
              Nullam port <span className="text-[#8BF645]">entesque</span>{" "}
              ultricies
            </span>
            <br />
            <span className="mb-[0.12em]">tempus lacus metus sit amet</span>
          </h1>
          <div className="block-hero_img_wrap absolute inset-0 w-full h-full">
            <Image
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
              src={"/background.png"}
              alt={"hero image"}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center overflow-hidden p-[30vh_0_25vh]">
        <div className="relative block--title-xl">
          <blockquote className="block-quote-medium-text text-left b-quote-section relative z-[1]">
            <span className="flex relative justify-center items-center ">
              <span className="block-quote-medium-text font-bebas">
                Neque porro quisquam est{" "}
              </span>
            </span>
            <span className="flex relative justify-center items-center ">
              <span className="block-quote-medium-text font-bebas">
                ipsum quia dolor sit amet, consectetur,{" "}
              </span>
            </span>
            <span className="flex relative justify-center items-center ">
              <span className="block-quote-medium-text font-bebas">
                Neque porro quisquam est
              </span>
            </span>
            <span className="flex relative justify-center items-center ">
              <span className="block-quote-medium-text font-bebas">
                ipsum quia dolor sit amet, consectetur,{" "}
              </span>
            </span>
          </blockquote>
        </div>
      </section>
      <section className="mt-[150px] mb-[100px] fvd--services">
        <div>
          <div>
            <h2 className="block-title--l services__title mb-[70px] text-center font-bebas">
              OUR SERVICES
            </h2>
            <div className="services--items ">
              <div className="relative overflow-hidden bg-[#8F13AE] z-[3] mb-[25px]">
                <div className="service--item">
                  <div className="service--item-count">1</div>
                  <div className="xl:p-0 services-top is-inview  flex flex-col xl:flex-row justify-between items-center gap-[50px]">
                    <h3 className="is-inview block-title services__item-name font-bebas">
                      Strategy & <br className="hidden xl:block" /> Creative
                    </h3>
                    <p className="font-inter text-xl leading-[145%] font-medium lg:w-[55%]">
                      Pellentesque dignissim eu lacus vel porta. Donec enim
                      lacus, suscipit eu felis ac, molestie lacinia erat. Duis
                      mollis sapien quis purus vulputate, vitae commodo nulla
                      placerat. Aliquam elementum, arcu sit amet commodo
                      euismod, leo augue accumsan odio, vitae lacinia mi lorem
                      facilisis purus.
                    </p>
                  </div>
                  <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                    <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentLeft?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="w-full lg:w-[33%] services__item-center services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentCenter?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="w-full lg:w-[33%] services__item-right services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentRight?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#A1B1FD] text-[#020202] z-[2] mb-[25px]">
                <div className="service--item">
                  <div className="service--item-count">2</div>
                  <div className="xl:p-0  services-top is-inview  flex flex-col xl:flex-row justify-between items-center gap-[50px]">
                    <h3 className="is-inview block-title services__item-name font-bebas">
                      DESIGN & <br className="hidden xl:block" /> MOTION
                    </h3>
                    <p className="font-inter text-xl leading-[145%] font-medium lg:w-[55%]">
                      Pellentesque dignissim eu lacus vel porta. Donec enim
                      lacus, suscipit eu felis ac, molestie lacinia erat. Duis
                      mollis sapien quis purus vulputate, vitae commodo nulla
                      placerat. Aliquam elementum, arcu sit amet commodo
                      euismod, leo augue accumsan odio, vitae lacinia mi lorem
                      facilisis purus.
                    </p>
                  </div>
                  <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                    <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentLeft?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="w-full lg:w-[33%] services__item-center services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentRight?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#2913AE] z-[1] mb-[25px]">
                <div className="service--item">
                  <div className="service--item-count">3</div>
                  <div className="xl:p-0 services-top is-inview  flex flex-col xl:flex-row justify-between items-center gap-[50px]">
                    <h3 className="is-inview block-title services__item-name font-bebas">
                      Production & <br className="hidden xl:block" /> Capture
                    </h3>
                    <p className="font-inter text-xl leading-[145%] font-medium lg:w-[55%]">
                      Pellentesque dignissim eu lacus vel porta. Donec enim
                      lacus, suscipit eu felis ac, molestie lacinia erat. Duis
                      mollis sapien quis purus vulputate, vitae commodo nulla
                      placerat. Aliquam elementum, arcu sit amet commodo
                      euismod, leo augue accumsan odio, vitae lacinia mi lorem
                      facilisis purus.
                    </p>
                  </div>
                  <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                    <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentLeft?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="w-full lg:w-[33%] services__item-center services__items_list">
                      <ul className="flex flex-col justify-start mb-[0.05em]">
                        {servicesContentRight?.map((item, idx) => {
                          return (
                            <li
                              key={"servicesleft--" + idx}
                              className="font-inter opacity-[0.8] font-normal mb-[0.5em]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fvd--clients mt-[100px] mb-[100px]">
        <div className="w-full">
          <div className="services--clients is-inview">
            <h2 className="block-header-text block-title-m font-bebas">
              Clients
            </h2>
          </div>
          <div className="my-[6rem]">
            <AnimatedPartnersGrid partners={partners} />
          </div>
        </div>
      </section>
      <section className="services--features my-50">
        <div className="services--fetures--inner">
          <div>
            <h2 className="block-title-m text-white font-bebas ">
              <span className="text-[#a1b1fd]">Why FVDLANCE tho?</span> <br />
              Glad you asked! Because…
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8">
            {featureCards?.map((item, index) => {
              return (
                <div
                  className="relative flex flex-col space-y-4"
                  key={`feature--${index}`}
                >
                  <div className="feature-count font-inter w-[5rem]">
                    {index + 1}
                  </div>
                  <div className="relative w-full aspect-[1/1]  overflow-hidden">
                    <Image
                      fill
                      className="object-contain"
                      src={item?.src}
                      alt={""}
                    />
                  </div>
                  <h3 className="body-font--l font-normal font-inter">
                    {item?.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="w-full">
          <div className="services--clients is-inview">
            <h2 className="block-header-text block-title-m font-bebas">
              Case Studies
            </h2>
          </div>
          <div className="my-[3rem]">
            <AnimatedCaseStudies cases={caseStudies} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const AnimatedPartnersGrid = ({ partners }: {partners: {src: string}[]}) => {
  // Duplicate partners to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  const getRowAnimation = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? "animate-continuousLeft" : "animate-continuousRight";
  };

  // Group partners into rows
  const rows = [0, 1,2].map((rowIndex) => {
    const startIdx = rowIndex * 4;
    const rowPartners = duplicatedPartners.slice(startIdx, startIdx + 8); // Use 8 items per row for seamless loop
    return { partners: rowPartners, animation: getRowAnimation(rowIndex) };
  });

  return (
    <div className="w-full overflow-hidden">
      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-continuousLeft {
          animation: slideLeft 20s linear infinite;
        }

        .animate-continuousRight {
          animation: slideRight 20s linear infinite;
        }

        .partner-row:hover .partner-icon {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-12">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="partner-row relative">
            <div className={`flex ${row.animation} whitespace-nowrap`}>
              {row.partners.map((partner, index) => (
                <div
                  key={`${partner.src}-${index}`}
                  className="partner-icon relative w-[200px] aspect-[3/2] flex-shrink-0 mx-4"
                >
                  <div className="absolute inset-0 rounded-lg">
                    <div className="relative h-full w-full flex items-center justify-center p-6">
                      <Image
                        src={partner.src}
                        alt={`${partner.src}`}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedCaseStudies = ({ cases }: { cases: { src: string; title: string }[] }) => {
  // Duplicate images for seamless scrolling
  const duplicatedCases = [...cases, ...cases];

  const getRowAnimation = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? "animate-continuousLeft" : "animate-continuousRight";
  };

  // Only using a single row, adjust slice if more rows needed
  const rows = [0].map((rowIndex) => {
    const rowCases = duplicatedCases.slice(0, cases.length * 2);
    return { cases: rowCases, animation: getRowAnimation(rowIndex) };
  });

  return (
    <div className="w-full overflow-hidden">
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-continuousLeft {
          animation: slideLeft 20s linear infinite;
        }

        .animate-continuousRight {
          animation: slideRight 20s linear infinite;
        }

        .partner-row:hover .partner-icon {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-12">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="partner-row relative overflow-hidden">
            <div className={`flex ${row.animation}  whitespace-nowrap`}>
              {row.cases.map((item, index) => (
                <div key={`${item.src}-${index}`} className="partner-icon relative w-[450px] cursor-pointer  flex-shrink-0 mx-4 aspect-[4/3] flex flex-col-reverse ">
                  <div className="absolute inset-0  w-full rounded-lg">
                    <div className="relative w-full h-full flex items-center justify-center p-6">
                      <Image src={item.src} alt={item.title} fill className="object-contain" />
                    </div>
                  </div>
                  <h3 className="font-normal font-inter uppercase text-2xl mt-[20rem]">{item?.title}</h3>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="footer__inner space-y-12 h-screen">
        <div className="flex flex-row flex-wrap w-full justify-between">
           <div className="order-2 md:order-1 w-full lg:w-[55%]">
             <p className="block-title-m font-bebas footer__title">
               All this talking and name dropping got you curious?
               <a className="text-[#8BF645] cursor-pointer underline relative inline-flex overflow-hidden ">Let us show you how we back it up.</a>
             </p>
           </div>
           <div className="order-1 flex w-full lg:w-[32.15%] mb-8">
             <a>
               <p className="font-bebas text-3xl">FVDLANCE <br/> CREATIVE</p>
             </a>
           </div>
        </div>
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="w-full lg:w-[55%] ">
               <ul className="footer--nav font-inter">
                 <li>
                   <a>The Work</a>
                 </li>
                 <li>
                   <a>Join our team</a>
                 </li>
               </ul>
          </div>
          <div className="flex flex-col w-full lg:w-[32.15%] font-inter">
             <div className="my-4">
                <h4 className="block--title-xs mb-2">New Business:</h4>
                <p className="body-font--l underline">info@fvdlance.com</p>
             </div>
             <div className="my-4">
                <h4 className="block--title-xs mb-2">Contact us:</h4>
                <address className="address-text uppercase ">
                  <p >No 10 independence drive <br/>1st Banana Street</p>
                </address>
                
             </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="order-2 md:order-1 w-full lg:w-[55%] ">
             <span className="block--title-xs mb-2">©2025</span>
          </div>
          <div className="order-1 flex flex-col w-full lg:w-[32.15%] font-inter">
             <a className="footer__links underline cursor-pointer mb-2">Privacy Policy</a>
             
          </div>
        </div>
      </div>
    </footer>
  )
}