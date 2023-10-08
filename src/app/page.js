import Sidebar from "./layout/sidebar"
import Body from './layout/body'

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Body />
    </main>
  )
}
