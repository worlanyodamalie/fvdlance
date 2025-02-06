// import Image from "next/image";

export default function Home() {
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

  return (
    <div className="body__wrapper">
       <header></header>
       <section className="flex justify-center overflow-hidden p-[30vh_0_25vh]">
          <div className="relative block--title-xl">
            <blockquote className="block-quote-medium-text text-left b-quote-section relative z-[1]">
              <span className="flex relative justify-center items-center ">
                <span className="block-quote-medium-text font-bebas">Neque porro quisquam est </span>
              </span>
              <span className="flex relative justify-center items-center ">
                <span className="block-quote-medium-text font-bebas">ipsum quia dolor sit amet, consectetur, </span>
              </span>
              <span className="flex relative justify-center items-center ">
                <span className="block-quote-medium-text font-bebas">Neque porro quisquam est</span>
              </span>
              <span className="flex relative justify-center items-center ">
                <span className="block-quote-medium-text font-bebas">ipsum quia dolor sit amet, consectetur, </span>
              </span>
            </blockquote>
          </div>
       </section>
       <section className="mt-[150px] mb-[100px]">
           <div>
            <div>
                <h2 className="block-title--l services__title mb-[70px] text-center font-bebas">OUR SERVICES</h2>
                <div className="services--items ">
                    <div className="relative overflow-hidden bg-[#8F13AE] z-[3] mb-[25px]">
                        <div className="service--item">
                          <div className="service--item-count">1</div>
                          <div className="xl:p-0 services-top is-inview  flex flex-col xl:flex-row justify-between items-center gap-[50px]">
                            <h3 className="is-inview block-title services__item-name font-bebas">
                               Strategy & <br className="hidden xl:block"/> Creative
                            </h3>
                            <p className="font-inter text-xl leading-[145%] font-medium">Pellentesque dignissim eu lacus vel porta. Donec enim lacus, suscipit eu felis ac, molestie lacinia erat. Duis mollis sapien quis purus vulputate, vitae commodo nulla placerat. Aliquam elementum, arcu sit amet commodo euismod, leo augue accumsan odio, vitae lacinia mi lorem facilisis purus.</p>
                          
                          </div>
                          <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                              <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentLeft?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              <div className="w-full lg:w-[33%] services__item-center services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentCenter?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              <div className="w-full lg:w-[33%] services__item-right services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentRight?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-[#A1B1FD] text-[#020202] z-[2] mb-[25px]">
                        <div className="service--item">
                          <div className="service--item-count">2</div>
                          <div className="services-top is-inview  flex flex-col justify-between items-center gap-[50px]">
                            <h3 className="is-inview block-title services__item-name font-bebas">
                               DESIGN & <br className="hidden"/> MOTION
                            </h3>
                            <p className="font-inter text-xl leading-[145%] font-medium">Pellentesque dignissim eu lacus vel porta. Donec enim lacus, suscipit eu felis ac, molestie lacinia erat. Duis mollis sapien quis purus vulputate, vitae commodo nulla placerat. Aliquam elementum, arcu sit amet commodo euismod, leo augue accumsan odio, vitae lacinia mi lorem facilisis purus.</p>
                          </div>
                          <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                              <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentLeft?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              <div className="w-full lg:w-[33%] services__item-center services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentRight?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-[#2913AE] z-[1] mb-[25px]">
                        <div className="service--item">
                          <div className="service--item-count">3</div>
                          <div className="services-top is-inview  flex flex-col justify-between items-center gap-[50px]">
                            <h3 className="is-inview block-title services__item-name font-bebas">
                               Production & <br className="hidden"/> Capture
                            </h3>
                            <p className="font-inter text-xl leading-[145%] font-medium">Pellentesque dignissim eu lacus vel porta. Donec enim lacus, suscipit eu felis ac, molestie lacinia erat. Duis mollis sapien quis purus vulputate, vitae commodo nulla placerat. Aliquam elementum, arcu sit amet commodo euismod, leo augue accumsan odio, vitae lacinia mi lorem facilisis purus.</p>
                          </div>
                          <div className="services__item-content flex flex-row lg:flex-nowrap flex-wrap gap-[10px] mt-5 ">
                              <div className="w-full lg:w-[33%] services__item-content_left services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentLeft?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              <div className="w-full lg:w-[33%] services__item-center services__items_list">
                                   <ul className="flex flex-col justify-start mb-[0.05em]">
                                    {
                                      servicesContentRight?.map((item,idx) => {
                                        return (
                                          <li key={"servicesleft--" + idx} className="font-inter opacity-[0.8] font-normal mb-[0.5em]">{item}</li>
                                        )
                                      })
                                    }
                                     
                                   </ul>
                              </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
       </section>
    </div>
  );
}