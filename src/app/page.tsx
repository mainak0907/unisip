import { Hero, Gallerycarousel,GetInTouchBlock, Testimonials, Footer} from "../components";
import FAQ from "../components/FAQ";
import Whyhmt from "../components/Whyhmt";
export default function Home() {
  return (
    <div className="bg-blue-50">
    <Hero/>
    <Whyhmt/>
    <GetInTouchBlock/>
    <Gallerycarousel/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </div>
  )
}
