import React from "react";
import HomeCards from './HomeCards';
import MainCarouselWide from './MainCarouselWide';
import MainCarouselMobile from './MainCarouselMobile';



const MainPage = () => {
    
    return (

        <>
            <section className="container-fluid d-none d-sm-block">
                <MainCarouselWide />
            </section>
        
            <section className="container-fluid d-block d-sm-none">
                <MainCarouselMobile />
            </section>
            <section id="service" className="container-fluid" >
                <div class="row py-3">
                    <div class="col-12 text-center">
                    <h2 class="display-6 text-blue"><b>TOP PRINT PRODUCTS</b></h2>
                    </div>
                </div>
                <HomeCards />
            </section>
        </>
      );
}

export default MainPage;
