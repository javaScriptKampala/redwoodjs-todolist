import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import GetTodosCell from 'src/components/GetTodosCell/GetTodosCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

     <GetTodosCell/>
    </>
  )
}

export default HomePage
