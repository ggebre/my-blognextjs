import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 10;
export default function Home() {
  return (
    <div className="mx-auto text-white">
      <MyProfilePic />
        <p className="mt-12 mb-12 text-sxl text-center text-white">
          Hello and Welcome &nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Getu</span>
          </span>
        </p>
        <Posts />
    </div>
  )
}
