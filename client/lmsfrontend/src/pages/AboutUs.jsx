import HomeLayout from "../layout/HomeLayout";
import aboutMainImage from "../assets/images/aboutMainImage.png"
import stevejobs from '../assets/images/steveJobs.png'
import apj from '../assets/images/apj.png'
import billGates from '../assets/images/billGates.png'
import eisten from '../assets/images/einstein.png'
import nelsonmandela from '../assets/images/nelsonMandela.png'
function AboutUs(){
return (
    <HomeLayout>
        <div className="flex flex-col text-white pl-20 pt-20" >
            <div className="flex  items-center gap-5 mx-10 ">
                <section className="w-1/2 space-y-10">
                    <h1 className="text-5xl text-yellow-500 font-semibold">Afforable and quality education</h1>
                    <p className="text-xl text-gray-200">
                    Our goal is to provide the affordable and quality education to the world. 
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                    </p>

                </section>
                <div className="w-1/2">
                    <img src={aboutMainImage} className="drop-shadow-2xl  "
                    alt="about main page" id="test1 " />
                </div>
                

            </div>
                      <div className="carousel w-1/2 my-10 mx-auto">
            <div id="slide1" className="carousel-item relative w-full ">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={stevejobs} className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">“Innovation distinguishes between a leader and a follower.”</p>
              <h3 className="text-2xl font-semibold">Stevejobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={apj} className="w-40 rounded-full border-2 border-gray-400"  />
              <p className="text-xl text-gray-200">“Dream is not that which you see while sleeping it is something that does not let you sleep.”</p>
              <h3 className="text-2xl font-semibold">Dr APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={billGates} className="w-40 rounded-full border-2 border-gray-400"  />
              <p className="text-xl text-gray-200">“Patience is a key element of success.”</p>
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={eisten} className="w-40 rounded-full border-2 border-gray-400" />
              <p className="text-xl text-gray-200">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” </p>
              <h3 className="text-2xl font-semibold">Albert Einstein</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={nelsonmandela} className="w-40 rounded-full border-2 border-gray-400"  />
              <p className="text-xl text-gray-200">"Do not judge me by my successes, judge me by how many times I fell down and got back up again."</p>
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
            </div>
</div>
        </div>
    </HomeLayout>
)
}
export default AboutUs;