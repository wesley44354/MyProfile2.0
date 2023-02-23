import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}

export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40'>
      <Head>
        <title>{`${pageInfo?.name} Portfolio`} </title>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} /> 
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} /> 
      </section>

      <section id="project" className='snap-center'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-end'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer '>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 filter grayscale hover:grayscale-0'
              src="https://www.imagemhost.com.br/images/2022/12/15/Logo.png"
              alt=""
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },

    revalidate: 10
  }

}
