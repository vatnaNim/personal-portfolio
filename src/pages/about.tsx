import { 
    Rupp,
    Beltei,
    NoImage,
    Portfofio,
    Ownership,
    Feedback,
    UiDesign,
    CreativeThinking,
    ProblemSolving,
    Interpersonal
} from "../assets/images";
import { 
    CssIcon, 
    HtmlIcon, 
    JavaScriptIcon,
    NpmIcon,
    NuxtIcon,
    ReactIcon,
    TypeScriptIcon,
    VueIcon,
    GitHubIcon,
    GitHubNon,
    TailwindIcon,
    BootstrapIcon,
    SqlIcon,
    PhpIcon,
    LaravelIcon
} from "../assets/icons";
import { 
    useState 
} from "react";
import { 
    SkillDetails 
} from "../components/modals";
import { 
    Helmet 
} from "react-helmet-async";

/* 
Start:Delare interface
*/
interface iAboutProps {
    activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
    activeGradient?: string;
    darkMode?: boolean;
}
/* 
End:Delare interface
*/
const About = ({ darkMode, activeColor, activeBorder, activeShadow }: iAboutProps) => {
    /*
    Start:Delare hook  
    */
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    /*
    End:Delare hook 
    */

    /* 
    Start:Delare funtion
    */
    const toggleDetail = (): void => {
        setIsOpenDetail(prev => !prev);
    }
    /* 
    End:Delare funtion
    */
    /* 
    Start:Delare data value
    */
    const educationDb = [
        {
            id: 1, 
            SchoolName: "Royal University of Phnom Penh",
            Degree: "Bachelor of Information Technology",
            Year: "Graduated 2022 – 2025",
            Logo: Rupp,
        },
         {
            id: 2, 
            SchoolName: "Toul Tumpong High School, Phnom Penh",
            Degree: "Bac ll",
            Year: "Graduated 2019 – 2020",
            Logo: '',
        },
         {
            id: 3, 
            SchoolName: "Beltei International School, Phnom Penh",
            Degree: "General English (ESL 12)",
            Year: "Graduated 2017 – 2020",
            Logo: Beltei,
        },
    ]

    const personalSkills = [
        {
            id: 1, 
            skillName: "html",
            logo: HtmlIcon,
            class: "hover:text-orange-500",
            perfomance: 90,
        },
        {
            id: 2, 
            skillName: "css",
            logo: CssIcon,
            class: "hover:text-sky-500",
            perfomance: 90,
        },
        {
            id: 3, 
            skillName: "javeScript",
            logo: JavaScriptIcon,
            class: "hover:text-yellow-500",
            perfomance: 75,
        },
        {
            id: 4, 
            skillName: "typeScript",
            logo: TypeScriptIcon,
            class: "hover:text-blue-500",
            perfomance: 80,
        },
        {
            id: 5, 
            skillName: "Tailwind",
            logo: TailwindIcon,
            class: "hover:text-blue-300",
            perfomance: 80,
        },
        {
            id: 6, 
            skillName: "bootstrap",
            logo: BootstrapIcon,
            class: "hover:text-purple-400",
            perfomance: 80,
        },
        {
            id: 7, 
            skillName: "Nuxt",
            logo: NuxtIcon,
            class: "hover:text-green-500",
            perfomance: 80,
        },
        {
            id: 8, 
            skillName: "vue",
            logo: VueIcon,
            class: "hover:text-green-600",
            perfomance: 80,
        },
        {
            id: 9, 
            skillName: "React",
            logo: ReactIcon,
            class: "hover:text-sky-400",
            perfomance: 80,
        },
        {
            id: 10, 
            skillName: "npm",
            logo: NpmIcon,
            class: "hover:text-red-500",
            perfomance: 70,
        },
        {
            id: 11, 
            skillName: "github",
            logo: darkMode? GitHubNon : GitHubIcon,
            class: `${darkMode? 'text-gray-500' : 'text-gray-600'} `,
            perfomance: 80,
        },
        {
            id: 12, 
            skillName: "mysql",
            logo: SqlIcon,
            class: `hover:text-orange-500 ${darkMode? 'text-white' : ''}`,
            perfomance: 80,
        },
        {
            id: 13, 
            skillName: "php",
            logo: PhpIcon,
            class: `hover:text-orange-500 ${darkMode? 'text-white' : ''}`,
            perfomance: 80,
        },
        {
            id: 14, 
            skillName: "laravel",
            logo: LaravelIcon,
            class: `hover:text-orange-500 ${darkMode? 'text-white' : ''}`,
            perfomance: 80,
        },
    ]

    const softSkillsDb = [
        {
            id:1,
            skillName: "Interpersonal",
            image: Interpersonal,
        },
        {
            id:2,
            skillName: "Problem-solving mindset",
            image: ProblemSolving,
        },
        {
            id:3,
            skillName: "Creative thinking",
            image: CreativeThinking,
        },
        {
            id:4,
            skillName: "Attention to detail in UI design and responsive ",
            image: UiDesign,
        },
        {
            id:5,
            skillName: "Open to feedback and continuous improvement",
            image: Feedback,
        },
        {
            id:6,
            skillName: "Accountability and ownership of tasks from start to finish",
            image: Ownership,
        },
    ]
    /* 
    End:Delare data value
    */
    return (
        <>
            <Helmet>
				<title>VATNA - Front-end Developer</title>
				<meta name="description" content="Personal portfolio of VATNA" />
				<meta property="og:title" content="VATNA - Front-end Developer" />
				<meta property="og:description" content="Personal portfolio of VATNA" />
				<meta property="og:image" content={Portfofio} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yourdomain.com/about" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="VATNA - Front-end Developer" />
				<meta name="twitter:description" content="Personal portfolio of VATNA" />
				<meta name="twitter:image" content={Portfofio} />
			</Helmet>

            <div 
                className="min-h-screen w-full px-6 md:px-8">
                <div 
                    className="flex flex-col px-4 py-4 gap-y-4  text-black">
                    <div 
                        className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
                        style={{ animationDuration: '1s' }}>
                        <span
                            className={`${activeColor} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                            Education
                        </span>
                        <span className={`${activeBorder} border flex-1`}/>
                    </div>
                    <div 
                        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-3 " >
                        {
                            educationDb.map((education) => (
                                <div 
                                    style={{ animationDuration: '1s' }}
                                    className={` bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm shadow-lg p-6 animate__lightSpeedInRight  flex flex-1 flex-col sm:flex-row items-center gap-x-3 lg:gap-x-4 py-2 lg:py-3 px-3 lg:px-4 rounded-lg border ${activeBorder} shadow-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer ${activeShadow}`}
                                    key={education.id}>
                                    <div 
                                        className="w-16 h-16 lg:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={education.Logo || NoImage}
                                            alt={education.SchoolName}
                                            className="w-full h-full object-scale-down"
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`fs-6 font-semibold ${activeColor}`}>
                                            {education.SchoolName}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                            {education.Degree}
                                        </p>
                                        <p className="text-sm text-gray-400 dark:text-gray-300 italic">
                                            {education.Year}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div 
                        className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
                        style={{ animationDuration: '1s' }}>
                        <span
                            className={`${activeColor} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                            soft skill
                        </span>
                        <span className={`${activeBorder} border flex-1`}/>
                    </div>
                    <div 
                        className="overflow-x-auto whitespace-nowrap py-4 px-0 sm:px-2">
                        <div 
                            className="flex gap-3">
                            {
                                softSkillsDb.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{ animationDuration: '0.5s' }}
                                        className={`animate__lightSpeedInRight relative inline-block flex-shrink-0 w-64 h-36 rounded-2xl
                                            overflow-hidden shadow-lg
                                            bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm
                                            border ${activeBorder}
                                            transition-transform duration-300 ease-in-out transform
                                            hover:scale-105 hover:shadow-2xl cursor-pointer
                                        `}>
                                        <img
                                            src={item.image}
                                            alt={item.skillName}
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                        />
                                        <div
                                            className="absolute bottom-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md
                                            text-center py-2
                                            border-t border-white/30 dark:border-white/20">
                                            <h5 
                                                className=" text-wrap font-semibold text-xs tracking-wider px-2 text-gray-600 dark:text-gray-200">
                                                {item.skillName}
                                            </h5>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div 
                        className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
                        style={{ animationDuration: '1s' }}>
                        <span
                            className={`${activeColor} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                            hard skill
                        </span>
                        <span className={`${activeBorder} border flex-1`}/>
                    </div>
                    <div 
                        className={`border backdrop-blur-sm bg-gray-500/20 dark:bg-gray-700/20 px-4 py-6 rounded-2xl flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8 shadow-sm ${activeShadow} ${activeBorder} animate__bounceInUp 
                        }`}
                        style={{ animationDuration: '1s' }}>
                        {
                        personalSkills.map((skill) => (
                            <div 
                                key={skill.id}
                                className={`${skill.class} w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] flex flex-col items-center gap-y-2 transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                                <skill.logo 
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-colors duration-300"
                                />
                                <p 
                                    className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center text-xs md:text-sm  font-[500] uppercase`}>
                                    {skill.skillName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <SkillDetails
                        isDarkMode={darkMode}
                        open={isOpenDetail}
                        onClose={toggleDetail}
                        title="More Details"
                        activeBorder={activeBorder}
                        activeShadow={activeShadow}
                        activeColor={activeColor}
                    />
                </div>
            </div>
        </>
    )
}

export default About;