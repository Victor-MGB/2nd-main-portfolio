// import EmailIcon from "@mui/icons-material/Email";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import PersonIcon from "@mui/icons-material/Person";
// import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  // const [mailSent, setMailSent] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const { username, email, message } = e.target.elements;
  //   const { REACT_APP_SERVICEID, REACT_APP_TEMPLATE, REACT_APP_PUBLICKEY } =
  //     process.env;
  
  //   const templateParams = {
  //     username: username.value,
  //     email: email.value,
  //     message: message.value,
  //     recipient_email: "your@email.com", // Specify the recipient email address here
  //   };
  
  //   emailjs
  //     .send(
  //       REACT_APP_SERVICEID,
  //       REACT_APP_TEMPLATE,
  //       templateParams,
  //       REACT_APP_PUBLICKEY
  //     )
  //     .then(
  //       (response) => {
  //         // Handle success
  //         setMailSent(true);
  //         setLoading(false);
  //         toast.success("Message Sent Successfully!", {
  //           position: "bottom-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         // Handle error
  //         setLoading(false);
  //         toast.error("Error occurred!", {
  //           position: "bottom-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         console.log("FAILED...", err);
  //       }
  //     );
  // };
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6uheuk',
     'template_9df9scz',
      form.current, 'yUOB_COP3hwULj7Ou')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 my-10 min-h-screen ml-4 overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex-auto md:w-32 sm:pl-0 overflow-visible">
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          name="user_name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
          type="email"
          name="user_email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
          name="message"
          required
        />
      </div>
      <div className="text-center">
        <input
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          type="submit"
          value="Send"
        />
      </div>
    </form>
        </div>
        <div className="flex-auto w-full md:w-80  flex flex-col justify-center text-center items-center  gap-1">
          <div
            data-aos={"fade-left"}
            className="w-[180px]  md:w-[290px] lg:w-[350px] hidden md:block"
          >
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              // style={{ width: "80%" }}
            />
          </div>
          <div data-aos={"slide-up"} className="text-center mt-10">
            <div className="text-center  mt-2  text-3xl xs:text-xl md:text-2xl font-bold">
              Follow Me
            </div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                title="Github"
                onClick={() =>
                  window.open("https://github.com/Victor-MGB", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                title="Twitter"
                onClick={() =>
                  window.open(
                    "https://twitter.com/Victor01808002",
                    "_blank"
                  )
                }
              >
                {" "}
                <TwitterIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                title="Linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/victor-osondu-1985a7237/",
                    "_blank"
                  )
                }
              >
                {" "}
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2023 Mgbemena Victor O</span>
            </div>
          </div>
        </div>
        {/* <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
      </div>
    </div>
  );
}
