import MainSwiper from "../../customer/components/HomeCarosel/MainSwiper"
import HomeSectionCard from "../../customer/components/HomeSectionCard/HomeSectionCard";

const HomePage=()=>{
    return(
        <div className="bg-gray-100">
            <MainSwiper/>
         <div>
            <HomeSectionCard/>
         </div>
        </div>
    )
}
export default HomePage;