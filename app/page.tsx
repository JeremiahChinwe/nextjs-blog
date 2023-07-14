import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 10

export default function Home() {
  return (
    <div className="my-12 mx-auto min-h-[100vh]">
      <MyProfilePic />
      <p
        className="text-3xl text-center dark:text-white"
      >
        Hello and Welcome 👋&nbsp;
        <span
          className="whitespace-nowrap"
        >
          I'm <span className="font-bold">Jerry</span>.
        </span>
      </p>
      <Posts />
    </div>
  )
} 
