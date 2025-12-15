
import AboutUs from "@/Components/AboutUs";
import ClinicalServices from "@/Components/ClinicalServices";
import ImageGallery from "@/Components/ImageGallery";
import Slider from "@/Components/Slider";
import AboutCam from "@/Components/AboutCam";
const Homepage = () => {
  
  return (
    <div className="">
      <Slider/>
      <div>
        <AboutUs />
      </div>
      <div>
        <AboutCam />
      </div>
      <div>
        <ClinicalServices />
      </div>
      <div>
        <ImageGallery />
      </div>
      
    </div>
  )
}
export default Homepage