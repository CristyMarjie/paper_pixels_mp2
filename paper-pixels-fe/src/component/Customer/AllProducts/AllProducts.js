import React from "react";
import ProductCards from './ProductCards';
import MainCarouselMobile from '../MainPage/MainCarouselMobile';
import MainCarouselWide from '../MainPage/MainCarouselWide';



const AllProducts = () => {
    
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
                    <h2 class="display-6 text-blue"><b>ALL PRODUCTS</b></h2>
                    </div>
                </div>
                <ProductCards />
            </section>
        </>
      );
}

export default AllProducts;
