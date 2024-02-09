import Aboutme from "./components/Aboutme"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
// import Experience from "./components/Experience"



export default function Home() {
  return (
   

    <main className = "w-full  bg-black text-gray-300 px-4">
     <div className="max-w-screen-xl mx-auto lg:pt-10"> 
      <Banner /> 
      < Aboutme />
      {/* < Experience /> */}
      < Skills />
      < Projects />
      < Contact />
      < Footer />
      
      </div> 
     

    </main>
  )
}