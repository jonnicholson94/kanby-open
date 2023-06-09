
import { useState } from 'react'
import Head from "next/head"
import { faPlus, faCalendar, faList, faComments, faCheck } from "@fortawesome/free-solid-svg-icons"

import { Auth } from '../types/auth'

import GlobalHeader from '../components/GlobalHeader'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

const HomePage = () => {

  const [active, setActive] = useState<Auth>('register')
  
    return (
      <>
        <Head>
          <title>
            Kanby | Manage all of your tasks, without the fuss
          </title>
        </Head>
  
        <GlobalHeader url="/dashboard" link="Dashboard" />
        <Hero active={active} setActive={setActive} />
        <InfoSection 
          iconBackground='var(--purple)'
          color="white"
          icon={faPlus}
          heading="Link all of your tasks"
          content="Give it a name, write a description, select its category and more. Track all of your tasks with Kanby, with less of the stress."
          img="/1.png" />
        <InfoSection
          iconBackground='var(--blue)'
          icon={faCalendar}
          heading="See everything on your dashboard"
          content="Track the status of all of your tasks on your dashboard. See where everything's at, and plan your days accordingly."
          img="/2.png" />
        <InfoSection
          iconBackground='var(--green)'
          icon={faList}
          heading="Choose a category"
          content="Choose from a variety of different categories so each task is easy to identify and separate. Manage your day more effectively by breaking everything down into the different parts of your life."
          img="/3.png" />
        <InfoSection
          iconBackground='var(--light-pink'
          icon={faComments}
          heading="Add comments"
          content="Post comments on each of your tasks allowing you to quickly and easily see the latest status on everything, at a glance. No more vague tasks."
          img="/4.png" />
        <InfoSection
          iconBackground='var(--grey)'
          color="white"
          icon={faCheck}
          heading="Add sub tasks"
          content="Got a bigger task? No problem! Add sub tasks to your big task so you know exactly what needs doing."
          img="/5.png" /> 
        <Footer />
      </>
    )
  }

export default HomePage