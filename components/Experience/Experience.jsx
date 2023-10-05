import {BsArrowRightShort} from "react-icons/bs";
import Experiences from "@/DB/Experiences";
import {ExperienceCard} from "@/components";

const Experience = () => {
    return (
        <div data-section className='w-full pt-[25px]  lg:pt-[35px]' id='exp'>
            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>
            <ol className="group/list">
                {Experiences.map(experience => <ExperienceCard key={experience.id} experience={experience}/>)}
            </ol>
            <div>
                <a download href={"https://otgegesmjkdjmcppbsbl.supabase.co/storage/v1/object/public/projects/aungpyaephyo.pdf"} className='text-slate-200 hover:underline group'>
                    view my abilities
                    <BsArrowRightShort className=' opacity-0 transition duration-500 ml-1 inline-flex group-hover:opacity-100'/>
                </a>
            </div>
        </div>
    )
}
export default Experience