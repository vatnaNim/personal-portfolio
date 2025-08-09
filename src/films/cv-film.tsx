import { 
    ProfileCv 
} from "../assets/images";
import { 
    QRCodeSVG 
} from 'qrcode.react';

const CvFilm = () => {
    return (
       <div className="space-y-2  ml-[1rem] mb-[1rem] mr-[0.8rem]">
        <article
            className="flex items-center justify-between gap-3">
            <div 
                className="w-[80%]">
                <h1
                    className="text-[35px] font-[550] text-gray-900 uppercase tracking-wide">
                    nim vatna
                </h1>
                <p
                    className="text-lg font-semibold capitalize text-yellow-600">
                    frontend developer
                </p>
                <ul
                    className="flex flex-wrap gap-x-2 gap-y-3 pt-2">
                    <li
                        className="flex items-center justify-center gap-x-2  text-[14px]">
                        <span
                            className="text-yellow-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                        </span>
                        <span
                            className="font-medium">
                            +(855) 95 872 770
                        </span>
                    </li>
                    <li
                        className="flex items-center justify-center text-[14px]">
                        <span
                            className="text-yellow-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"/></svg>
                        </span>
                        <span
                            className="font-medium">
                            vatnagz@gmail.com
                        </span>
                    </li>
                    <li
                        className="flex items-center justify-center text-[14px]">
                        <span
                            className="text-yellow-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.53 3.53a2.98 2.98 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l3.53-3.53a2.98 2.98 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"/></svg>
                        </span>
                        <span
                            className="font-medium">
                            https://vatnaportfolio.vercel.app
                        </span>
                    </li>
                    <li
                        className="flex items-center justify-center text-[14px]">
                        <span
                            className="text-yellow-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"/></svg>
                        </span>
                        <span
                            className="font-medium">
                            #17B St. 59BT Sangkat Boeung Tompun, Khan Meanchey, Phnom Penh
                        </span>
                    </li>
                </ul>
            </div>
            <div 
                className="w-[20%]">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                    <img 
                        src={ProfileCv} 
                        alt="profile picture"
                        className="w-full h-full object-fill"
                    />
                </div>
            </div>
        </article>
        <article
            className="space-y-1">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
                Summary
            </h2>
            <p
                className="text-gray-600 text-[14px] leading-5 tracking-wide px-2">
                Front-End Web Developer specializing in JavaScript frameworks, including Vue.js, Nuxt.js, React, and skilled in TypeScript, HTML5, CSS3, and Tailwind CSS. Proven ability to design and optimize high-impact, user-centric web applications with seamless API integrations. Adept at applying UI/UX best practices, utilizing Git for version control, and employing Vite/Webpack to maximize performance. Valued for problem-solving abilities, strong teamwork, and multilingual communication.
            </p>
        </article>
        <article
            className="space-y-2">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
               additional skills
            </h2>
            <ul
                className="flex flex-wrap gap-x-6 px-2">
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">HTML</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">CSS</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">javaScript</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Tailwind</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Bootstrap</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Nuxt.js</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Vue.js</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">React.js</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Git</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">GitHub</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">PHP(Intermediate)</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">Laravel(Intermediate)</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">MySQL(Intermediate)</li>
                <li className="border-b-2 border-gray-600 py-2  px-2  text-gray-600 font-[550] text-[14px] capitalize leading-8">C#(Intermediate)</li>
            </ul>
        </article>
        <article
            className="space-y-1">
            <h2
                className="text-[24px] font-[550] text-gray-900 uppercase tracking-wide">
                education
            </h2>
            <div 
                className="w-full space-y-2">
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%]">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            2022 - 2025
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                Bachelor of Science in Computer Science
                            </p>
                            <p className=" text-[14px] font-[550] text-yellow-600">
                                Royal University of Phnom Penh (RUPP)
                            </p>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%]">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            2019 - 2020
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                High School Diploma
                            </p>
                            <p className=" text-[14px] font-[550] text-yellow-600">
                                Toul Tumpong High School, Phnom Penh
                            </p>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%]">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            2017 - 2020
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                ESL Diploma
                            </p>
                            <p className=" text-[14px] font-[550] text-yellow-600">
                                BELTEI International School, Phnom Penh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article
            className="space-y-1 pb-[0.85rem]">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
                languages
            </h2>
            <ul
                className="flex w-[80%] gap-x-3">
                <li
                    className="w-[50%]">
                    <div className="text-gray-900 font-[400] text-[14px] flex  justify-between items-center">
                        <span
                            className="font-[550]">
                            Khmer
                        </span>
                        <span>
                            Native
                        </span>
                    </div>
                </li>
                <li
                    className="w-[50%]">
                    <div className="text-gray-900 font-[400] text-[14px] flex  justify-between items-center">
                        <span
                            className="font-[550]">
                            English
                        </span>
                        <span>
                            Advanced
                        </span>
                    </div>
                </li>
            </ul>
        </article>
        <article
            className="space-y-1">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
                Experience
            </h2>
            <div className="space-y-2">
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%] flex flex-col gap-y-2">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            05/2024 -05/2025
                        </p>
                        <p className="text-gray-600 font-[400] text-[14px]">
                            BKK, Phnom Penh
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                Frontend Developer
                            </p>
                            <p className=" text-[14px] font-[550] text-yellow-600">
                                GTech Cambodia
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-600 text-[15px] font-[350] space-y-0.5 leading-5 *:tracking-wide">
                                <li>
                                    Completed a 3-month internship and was promoted by the Senior Front-End Web Developer in recognition of strong performance and growth. Continued working in the role for one year.
                                </li>
                                <li>
                                    Developed responsive user interfaces using HTML, CSS(Tailwind), JavaScript, TypeScript and Nuxt.js to ensure smooth performance across desktop, tablet and mobile device.  
                                </li>
                                <li>
                                    Gained experience maintaining the company website, including updating the UI and integrating API data.
                                </li>
                                <li>
                                    Optimized website performance by implementing lazy loading, reducing asset sizes, and improving load times using tools like Vite and Webpack.
                                </li>
                                <li>
                                    Optimized website performance by implementing lazy loading, reducing asset sizes, and improving load times using tools like Vite and Webpack.
                                </li>
                                <li>
                                    Leveraged Nuxt UI components to build dynamic user interfaces, ensuring consistent design and smooth functionality across different device.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%] flex flex-col gap-y-2">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            02/2022 -07/2023
                        </p>
                        <p className="text-gray-600 font-[400] text-[14px]">
                            AEON Mall, Phnom Penh
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                Visual Merchandiser Assistant & Customer Service Exclusive
                            </p>
                            <p className="text-[14px] font-[550] text-yellow-600">
                               PEDRO
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-600 text-[15px] font-[350] space-y-0.5 leading-5 *:tracking-wide">
                                <li>
                                    Promoted to Visual Merchandiser Assistant after 6 months in Customer Service Exclusive by the  Sale Supervisor and Visual Merchandising Manager in recognition of exceptional performance and creativity.
                                </li>
                                <li>
                                    Assisted in planning and executing store displays in line with brand guidelines and seasonal or promotional campaigns.
                                </li>
                                <li>
                                    Maintained store visuals to attract customers and boost product visibility.
                                </li>
                                <li>
                                    Managed store props and generated monthly reports.
                                </li>
                                <li>
                                    Collaborated with the merchandising team to implement visual strategies based on sales data, customer feedback, and market trends.
                                </li>
                                <li>
                                    Delivered exceptional service in a fast-paced, customer-focused retail environment.
                                </li>
                                <li>
                                    Handled transactions, inquiries, and complaints with efficiency and professionalism.
                                </li>
                                <li>
                                    Built strong rapport with clients through product knowledge and personalized assistance.
                                </li>
                                <li>
                                    Consistently met sales and customer satisfaction targets.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex items-start">
                    <div 
                        className="w-[40%] flex flex-col gap-y-2">
                        <p  className="text-gray-900 font-[550] text-[14px] ">
                            01/2021 - 06/2021
                        </p>
                        <p className="text-gray-600 font-[400] text-[14px]">
                            SiSowath, Phnom Penh
                        </p>
                    </div>
                    <div className="w-[60%]">
                        <div>
                            <p className="text-gray-900 font-[400] text-[18px]">
                                Cashier
                            </p>
                            <p className=" text-[14px] font-[550] text-yellow-600">
                               Kiwi Mart
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-600 text-[15px] font-[350] space-y-0.5 leading-5 *:tracking-wide">
                                <li>
                                    Provided fast, accurate, and friendly checkout service while handling various payment methods in a high-volume retail environment, and Reported daily revenue and ensured accurate cash drawer reconciliation with attention to detail and accuracy. 
                                </li>
                                <li>
                                    Maintained a clean and organized checkout area, ensuring safety and neatness.
                                </li>
                                <li>
                                   Used POS systems to handle payments (Cash, Card or Vouchers) and checked receipts correctly.
                                </li>
                                <li>
                                    Helped train new staff members on the register and provided guidance on store procedures.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article className="space-y-1">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
                Projects Experience
            </h2>
            <ul
                className="space-y-2">
                <li>
                    <h3 className="text-gray-900 text-[20px] font-[450]">
                        Sophat Motorbike
                    </h3>
                    <p
                        className="text-gray-600 text-[14px]">
                        Developed the UI for a motorcycle POS system, including order management, real-time inventory, and sales reporting.
                    </p>
                </li>
                <li>
                    <h3 className="text-gray-900 text-[20px] font-[450]">
                        HR System Interface
                    </h3>
                    <p
                        className="text-gray-600 text-[14px]">
                        Built front-end modules for employee records, stuff salary, attendance, and stuff performance, integrated with backend APIs.
                    </p>
                </li>
                <li>
                    <h3 className="text-gray-900 text-[20px] font-[450]">
                        Sambot Digital
                    </h3>
                    <p
                        className="text-gray-600 text-[14px]">
                        Designed and developed custom web templates for events such as weddings and birthdays, featuring a user-friendly admin interface for managing invitations and RSVPs.
                    </p>
                </li>
                <li>
                    <h3 className="text-gray-900 text-[20px] font-[450]">
                        Admin & Manager – Sambot Digital POS System UI
                    </h3>
                    <p
                        className="text-gray-600 text-[14px]">
                        Developed an interface for admins and managers to manage client ceremonies and events, including features for tracking event details and profits.
                    </p>
                </li>
            </ul>
        </article>
        <article 
            className="space-y-1">
            <h2
                className="text-[20px] font-[550] text-gray-900 uppercase tracking-wide">
                Interests
            </h2>
            <ul
                className="flex justify-between gap-x-4">
                <li
                    className="w-[50%] space-y-1">
                    <h3
                        className="text-gray-900 text-[18px] font-[550]">
                        Web Development Innovations
                    </h3>
                    <p className="text-gray-600 text-[14px]">
                        UI/UX Design – Enjoy analyzing interfaces and experimenting with design systems to improve user experience.
                    </p>
                </li>
                <li
                    className="w-[50%] space-y-1">
                    <h3
                        className="text-gray-900 text-[18px] font-[550]">
                        Outdoor Activities
                    </h3>
                    <p className="text-gray-600 text-[14px]">
                        Enjoy hiking and outdoor adventures, watching movies, and playing soccer with teamwork or friends.
                    </p>
                </li>
            </ul>
        </article>
        <article
            className="flex justify-end items-end flex-col pt-6">
                <div className="flex flex-col items-center justify-center gap-y-1">
                    <QRCodeSVG 
                        value="https://vatnaportfolio.vercel.app" 
                        size={50} 
                        bgColor="#ffffff" 
                        fgColor="#000000" 
                        level="H" 
                    />
                    <p
                        className="text-gray-600 text-[14px] font-[450] ">
                        QR Code for my portfolio
                    </p>
                </div>
                
        </article>
    </div>
    )
};
export default CvFilm;