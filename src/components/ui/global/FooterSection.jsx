import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const FooterSection = () => {
    return (
        <div id="contact" className="bg-muted px-8 pt-12 pb-12">
            <h1 className="flex flex-col justify-center text-center text-3xl font-bold sm:text-5xl">Contact Me</h1>

            <div className="mt-12 flex flex-col items-center justify-center  md:flex-row md:justify-center md:gap-8 max-w-[900px] mx-auto">
                <div className="flex gap-2 text-lg font-medium hover:underline underline-offset-4">
                    <FaPhoneAlt size={24} />
                    <p>7202053100</p>
                </div>

                <div className="flex gap-2 text-lg font-medium hover:underline underline-offset-4">
                    <IoIosMail size={30} />
                    <a href="mailto:surajdudhatra02@gmail.com">surajdudhatra02@gmail.com</a>
                </div>

                <div className="flex gap-2 text-lg font-medium hover:underline underline-offset-4">
                    <FaLinkedin size={24} />
                    <a href="https://www.linkedin.com/in/suraj-dudhatra">LinkedIn</a>
                </div>

                <div className="flex gap-2 text-lg font-medium hover:underline underline-offset-4">
                    <FaGithub size={24} />
                    <span><a href="https://github.com/surajdudhatra02">GitHub</a></span>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
