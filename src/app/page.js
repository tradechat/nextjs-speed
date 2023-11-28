import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center w-full justify-center">
        <div className="container">
          <div className="z-10 m-2 flex flex-col items-center rounded-[20px] bg-white bg-clip-border p-0 sm:p-[18px] md:m-10 max-w-[1496px]">
            <div className="mt-3 h-full w-full grid-cols-12 gap-10 pt-6 xs:flex xs:flex-col sm:grid">
              <div className="col-span-12 h-full w-full min-w-[300px] xl:col-span-7">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="max-sm:hidden relative max-h-[550px] min-h-[300px] min-w-[300px] max-w-[550px] rounded-xl">
                    <img
                      id="currentImage"
                      src="https://ae01.alicdn.com/kf/Sc37056e8557244daada8876e584bbcd0y/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                      className="h-full w-full rounded-3xl object-cover object-center"
                      alt="product image"
                    />
                  </div>
                  {/* small images */}
                  <div className="flex w-full flex-row items-center gap-2 rounded-[20px] px-3 py-3">
                    <button
                      onclick="scrollSmallImagesLeft()"
                      id="smallImageLeftArrow"
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full p-2 hover:bg-gray-300/40"
                    >
                      <img
                        src="https://pagepilot.ai/images/arrowLeft.png"
                        className="h-[20px] w-[10px] rounded-xl"
                        alt="arrow left"
                      />
                    </button>
                    <div
                      id="smallImagesContainer"
                      className="flex w-[90%] flex-row items-center justify-center gap-2 overflow-x-scroll scroll-smooth rounded-[20px] px-3 py-3 scrollbar-hide hover:scroll-auto"
                    >
                      <div
                        onclick="setCurrentImage(this)"
                        className="small-image-container h-20 w-20 flex-[0_0_auto] rounded-3xl border-[3px] border-blueSecondary"
                      >
                        <img
                          id="smallImage0"
                          src="https://ae01.alicdn.com/kf/Sc37056e8557244daada8876e584bbcd0y/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                          className="h-full w-full rounded-[24px] border-[4px] border-white"
                          alt="product image"
                        />
                      </div>
                      <div
                        onclick="setCurrentImage(this)"
                        className="small-image-container h-20 w-20 flex-[0_0_auto] rounded-3xl border-[3px] border-none"
                      >
                        <img
                          id="smallImage1"
                          src="https://ae01.alicdn.com/kf/Sef32688d57a44905b6958460f7ebfc58J/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                          className="h-full w-full rounded-[24px] border-[4px] border-white"
                          alt="product image"
                        />
                      </div>
                      <div
                        onclick="setCurrentImage(this)"
                        className="small-image-container h-20 w-20 flex-[0_0_auto] rounded-3xl border-[3px] border-none"
                      >
                        <img
                          id="smallImage2"
                          src="https://ae01.alicdn.com/kf/Sc06257f3f94e4e1788f02453fe889dbdT/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                          className="h-full w-full rounded-[24px] border-[4px] border-white"
                          alt="product image"
                        />
                      </div>
                      <div
                        onclick="setCurrentImage(this)"
                        className="small-image-container h-20 w-20 flex-[0_0_auto] rounded-3xl border-[3px] border-none"
                      >
                        <img
                          id="smallImage3"
                          src="https://ae01.alicdn.com/kf/S3581b627208d4d89be97818e58ee6397Z/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                          className="h-full w-full rounded-[24px] border-[4px] border-white"
                          alt="product image"
                        />
                      </div>
                    </div>
                    <button
                      onclick="scrollSmallImagesRight()"
                      id="smallImageRightArrow"
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full p-2 hover:bg-gray-300/40"
                    >
                      <img
                        src="https://pagepilot.ai/images/arrowRight.png"
                        className="h-[20px] w-[10px]"
                        alt="arrow right"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Product Info */}
              <div className="col-span-12 w-full xl:col-span-5">
                <div className="w-full rounded-xl bg-white px-2 py-3 xl:pl-10 xl:pr-4">
                  <div className="flex w-full items-center justify-start gap-1">
                    <img
                      src="https://pagepilot.ai/images/star.svg"
                      alt="star"
                    />
                    <img
                      src="https://pagepilot.ai/images/star.svg"
                      alt="star"
                    />
                    <img
                      src="https://pagepilot.ai/images/star.svg"
                      alt="star"
                    />
                    <img
                      src="https://pagepilot.ai/images/star.svg"
                      alt="star"
                    />
                    <img
                      src="https://pagepilot.ai/images/star.svg"
                      alt="star"
                    />
                    <p className="pl-3 font-semibold">85 reviews</p>
                  </div>
                  <h1 className="pt-3 text-4xl font-bold">
                    Cloudwalk Summer Slides
                  </h1>
                  <p className="mb-2 py-4 font-semibold">
                    Experience ultimate comfort
                  </p>
                  <p className="text-md">☁️ Cloud-like comfort</p>
                  <p className="text-md py-2">🌊 Perfect for beach days</p>
                  <p className="text-md">🏠 Great indoor</p>
                  <p className="text-md py-2">🕶️ Trendy</p>
                </div>
                <button className="linear mb-6 mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                  👉🏻 Add To Cart
                </button>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/truckIcon.svg"
                      alt="shipping"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      Free tracked &amp; insured shipping
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/boxIcon.svg"
                      alt="box"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      Free Returns
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/guaranteeIcon.svg"
                      alt="guarantee"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      30 Days Money Back Guarantee
                    </p>
                  </div>
                </div>
                <div className="my-6 h-[1px] w-full bg-slate-100" />
                <div className="flex flex-col items-center gap-1 pb-10 text-center sm:flex-row sm:text-left">
                  <img
                    className="mr-0 h-[85px] w-[85px] rounded-full sm:mr-6"
                    src="https://pagepilot.ai/images/reviews/woman7.webp"
                    alt="person's review"
                  />
                  <div>
                    <div className="flex w-full items-center justify-center gap-0.5 sm:justify-start">
                      <img
                        className="max-w-[12px]"
                        src="https://pagepilot.ai/images/star.svg"
                        alt="star"
                      />
                      <img
                        className="max-w-[12px]"
                        src="https://pagepilot.ai/images/star.svg"
                        alt="star"
                      />
                      <img
                        className="max-w-[12px]"
                        src="https://pagepilot.ai/images/star.svg"
                        alt="star"
                      />
                      <img
                        className="max-w-[12px]"
                        src="https://pagepilot.ai/images/star.svg"
                        alt="star"
                      />
                      <img
                        className="max-w-[12px]"
                        src="https://pagepilot.ai/images/star.svg"
                        alt="star"
                      />
                    </div>
                    <p className="mb-2 mt-3 text-xs italic leading-5">
                      I bought these slides for my beach trip and couldn't be
                      happier. Super comfy and surprisingly lightweight. Can't
                      wait to get another pair!
                    </p>
                    <p className="relative text-xs font-bold leading-5">
                      <img
                        src="https://pagepilot.ai/images/checkmark.svg"
                        alt="checkmark icon"
                        className="absolute top-[3px] mr-2 inline-block max-w-[15px]"
                      />
                      <span className="pl-5">Lisa L.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Feature with img on left */}
            <div className="col-span-12 my-10 grid w-full grid-cols-12 items-center justify-between gap-3">
              <img
                className="col-span-12 mx-auto w-10/12 rounded-3xl lg:col-span-7 lg:max-w-md"
                src="https://ae01.alicdn.com/kf/Sef32688d57a44905b6958460f7ebfc58J/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                alt="product feature"
              />
              <div className="col-span-12 mx-auto w-10/12 lg:col-span-5 lg:max-w-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h2 className="mb-3 mt-[18px] self-start text-[18px] font-semibold text-bluePrimary md:text-3xl">
                    Kick Back and Relax in Style 😉
                  </h2>
                  <p className="text-md my-[10px] self-start leading-8">
                    Cloudwalk Summer Slides provide unmatched comfort and style,
                    making them the perfect staple for all your summertime
                    activities.
                  </p>
                  <button className="linear mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                    👉🏻 Get Mine Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product Feature with img on right */}
            <div className="col-span-12 my-10 grid w-full grid-cols-12 items-center justify-between gap-3">
              <div className="col-span-12 mx-auto w-10/12 lg:col-span-7 lg:max-w-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h2 className="mb-3 mt-[18px] self-start text-[18px] font-semibold text-bluePrimary md:text-3xl">
                    No More Sore Feet! 😣
                  </h2>
                  <p className="text-md my-[10px] self-start leading-8">
                    Cloudwalk Summer Slides' EVA soles cushion your feet for
                    hours on end, allowing you to enjoy your day without any
                    discomfort.
                  </p>
                  <button className="linear mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                    👉🏻 Get Mine Now
                  </button>
                </div>
              </div>
              <img
                className="col-span-12 mx-auto w-10/12 rounded-3xl lg:col-span-5 lg:max-w-md"
                src="https://ae01.alicdn.com/kf/Sc06257f3f94e4e1788f02453fe889dbdT/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                alt="product image"
              />
            </div>
            {/* Product Feature with img on left */}
            <div className="col-span-12 my-10 grid w-full grid-cols-12 items-center justify-between gap-3">
              <img
                className="col-span-12 mx-auto w-10/12 rounded-3xl lg:col-span-7 lg:max-w-md"
                src="https://ae01.alicdn.com/kf/S3581b627208d4d89be97818e58ee6397Z/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                alt="product image"
              />
              <div className="col-span-12 mx-auto w-10/12 lg:col-span-5 lg:max-w-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h2 className="mb-3 mt-[18px] self-start text-[18px] font-semibold text-bluePrimary md:text-3xl">
                    Messy Floors Begone! 🧹
                  </h2>
                  <p className="text-md my-[10px] self-start leading-8">
                    Drafts of dust and dirt invading your home? Wear these
                    sliders indoors to keep your feet clean and support
                    household cleanliness.
                  </p>
                  <button className="linear mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                    👉🏻 Get Mine Now
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center text-[35px] font-bold leading-[56px] tracking-tight">
              Real people, Real reviews
            </p>
            {/* Product Review */}
            <div className="ml-[133px] mr-[133px] mt-10 flex w-full flex-row items-center justify-center">
              <button
                onclick="scrollReviewsLeft()"
                className="left-0 mr-5 flex h-[40px] w-[22px] items-center justify-center rounded-full"
              >
                <img
                  src="https://pagepilot.ai/images/arrowLeft.png"
                  className="h-[30px] w-[20px] rounded-xl"
                  alt="arrow left"
                />
              </button>
              <div
                id="reviewsContainer"
                className="flex w-[90%] flex-row items-center gap-2 overflow-x-scroll scroll-smooth scrollbar-hide hover:scroll-auto"
              >
                <div className="flex h-[470px] w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]">
                  <img
                    className="h-[120px] w-[120px] rounded-3xl sm:h-[180px] sm:w-[180px]"
                    src="https://ae01.alicdn.com/kf/Sc37056e8557244daada8876e584bbcd0y/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                    alt="product"
                  />
                  <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                    I bought these slides for my beach trip and couldn't be
                    happier. Super comfy and surprisingly lightweight. Can't
                    wait to get another pair!
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:mt-2">
                    <img
                      className="mr-2 h-[36px] w-[36px] rounded-full"
                      src="https://pagepilot.ai/images/reviews/woman7.webp"
                      alt="reviewers face"
                    />
                    <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                      Lisa L.
                    </p>
                  </div>
                </div>
                <div className="flex h-[470px] w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]">
                  <img
                    className="h-[120px] w-[120px] rounded-3xl sm:h-[180px] sm:w-[180px]"
                    src="https://ae01.alicdn.com/kf/Sef32688d57a44905b6958460f7ebfc58J/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                    alt="product"
                  />
                  <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                    "Honestly, these are now my go-to house shoes. Perfect for
                    indoors, and I no longer track in the dirt! 👍"
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:mt-2">
                    <img
                      className="mr-2 h-[36px] w-[36px] rounded-full"
                      src="https://pagepilot.ai/images/reviews/woman9.webp"
                      alt="reviewers face"
                    />
                    <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                      Jennifer J.
                    </p>
                  </div>
                </div>
                <div className="flex h-[470px] w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]">
                  <img
                    className="h-[120px] w-[120px] rounded-3xl sm:h-[180px] sm:w-[180px]"
                    src="https://ae01.alicdn.com/kf/Sc06257f3f94e4e1788f02453fe889dbdT/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                    alt="product"
                  />
                  <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                    "Bought one for myself and hubby. Seriously comfortable, and
                    they go with almost everything. Love them!"
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:mt-2">
                    <img
                      className="mr-2 h-[36px] w-[36px] rounded-full"
                      src="https://pagepilot.ai/images/reviews/woman4.webp"
                      alt="reviewers face"
                    />
                    <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                      Kimberly K.
                    </p>
                  </div>
                </div>
                <div className="flex h-[470px] w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]">
                  <img
                    className="h-[120px] w-[120px] rounded-3xl sm:h-[180px] sm:w-[180px]"
                    src="https://ae01.alicdn.com/kf/S3581b627208d4d89be97818e58ee6397Z/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                    alt="product"
                  />
                  <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                    "Have worn these from the pool to the store and got so many
                    compliments - plus, no achy feet. Highly recommend!"
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:mt-2">
                    <img
                      className="mr-2 h-[36px] w-[36px] rounded-full"
                      src="https://pagepilot.ai/images/reviews/woman1.webp"
                      alt="reviewers face"
                    />
                    <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                      Betty B.
                    </p>
                  </div>
                </div>
                <div className="flex h-[470px] w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]">
                  <img
                    className="h-[120px] w-[120px] rounded-3xl sm:h-[180px] sm:w-[180px]"
                    src="https://ae01.alicdn.com/kf/Sc37056e8557244daada8876e584bbcd0y/M-nner-Trend-Neue-Sommer-Hausschuhe-EVA-Weichen-Boden-Wolke-Rutschen-Licht-Strand-Schuhe-M-nnlichen.jpg"
                    alt="product"
                  />
                  <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                    "Great alternative to traditional flip-flops. Tried them at
                    a friend's house and immediately ordered myself a pair. Very
                    happy with my purchase!"
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:mt-2">
                    <img
                      className="mr-2 h-[36px] w-[36px] rounded-full"
                      src="https://pagepilot.ai/images/reviews/woman10.webp"
                      alt="reviewers face"
                    />
                    <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                      Sandra S.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onclick="scrollReviewsRight()"
                className="right-0 ml-5 flex h-[40px] w-[22px] items-center justify-center rounded-full"
              >
                <img
                  src="https://pagepilot.ai/images/arrowRight.png"
                  className="h-[30px] w-[20px] rounded-xl"
                  alt="arrow right"
                />
              </button>
            </div>
            <div className="mt-20 flex max-w-[300px] flex-col items-center justify-center sm:max-w-[760px]">
              <p className="text-center text-[28px] font-bold leading-[40px] tracking-tight">
                Don't miss this opportunity to transform your summer footwear
                game! Experience the comfort and style of Cloudwalk Summer
                Slides while supplies last!
              </p>
              <p className="mt-6 text-center text-[14px] font-normal leading-[40px] tracking-tight sm:text-[18px]">
                We're sure you'll love your Cloudwalk Summer Slides, but if not,
                rest easy with our 30-day money-back guarantee. Give them a try
                today!
              </p>
              <button className="linear mb-6 mt-6 w-full max-w-[400px] rounded-xl bg-brand-900 bg-gradient-to-br from-brandLinear to-blueSecondary py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                👉🏻 Get Mine Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
