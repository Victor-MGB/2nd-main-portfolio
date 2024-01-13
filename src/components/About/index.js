import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import mgb2 from '../../assets/images/mgb2.jpg'
// import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  // const getDate = () => {
  //   var dob = new Date("01/21/2003");
  //   var month_diff = Date.now() - dob.getTime();
  //   var age_dt = new Date(month_diff);
  //   var year = age_dt.getUTCFullYear();
  //   var age = Math.abs(year - 1970);
  //   return age;
  // };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-600">Mgbemena Victor,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
           A results-driven MERN Stack Developer specializing in building high-performance web applications. 
            With hands-on experience in MongoDB, Express.js, React.js, and Node.js, I bring a proven track record of developing scalable solutions.
          </p>
          <div class="mt-4">
  <p class="mt-2">
    - Full-stack development with expertise in MERN stack, complemented by proficiency in Tailwind CSS for efficient and responsive front-end design.
  </p>
  <p>
    - API development, third-party service integration, and database management.
  </p>
  <p>
    - Proficient in Git, and collaborative tools.
  </p>
  <p>
    - Commitment to continuous learning and staying updated on industry trends.
  </p>
</div>

          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for jobs. Explore my portfolio for a glimpse into projects showcasing my commitment to user-centric design and seamless functionality.
            I am eager to bring my skills and enthusiasm to your team. 
            Connect with me for a discussion on how I can contribute to your projects and help achieve your goal
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          <img
            src={mgb2}
            alt="Learning Code"
            className="motion-safe:animate-zoomy mt-[8rem] rounded-lg shadow-sm"
          />
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>

         <div className='mt-[2.5rem]'>
         <a
            href={require("../../assets/files/Daniel Resume.pdf")}
            download={"victors Resume"}
            target="_blank"
            rel="noreferrer"
            className="py-1 md:py-2 lg:py-3 lg:mt-5 text-white mx-auto px-4 mt-[6rem]  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
          >
            Download CV
            <DownloadIcon />
          </a>
         </div>
        </div>
      </div>
    </div>
  );
}
