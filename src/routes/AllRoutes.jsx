import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dynamically import components using React.lazy()
const LeadPage = React.lazy(() => import("../component/leadPage"));
const Process = React.lazy(() => import("../component/aboutUs/process"));
const Teams = React.lazy(() => import("../component/aboutUs/teams"));
const EssentialProducts = React.lazy(() => import("../component/products/essentialProducts"));
const PremiumProducts = React.lazy(() => import("../component/products/premiumProducts"));
const LuxuryProducts = React.lazy(() => import("../component/products/luxuryProducts"));
const GridEssential = React.lazy(() => import("../component/products/essentialProducts/GridEssential"));
const LineEssential = React.lazy(() => import("../component/products/essentialProducts/LineEssential"));
const ListingEssential = React.lazy(() => import("../component/products/essentialProducts/ListingEssential"));
const GridPremium = React.lazy(() => import("../component/products/premiumProducts/GridPremium"));
const LinePremium = React.lazy(() => import("../component/products/premiumProducts/LinePremium"));
const ListingPremium = React.lazy(() => import("../component/products/premiumProducts/ListingPremium"));
const GridLuxury = React.lazy(() => import("../component/products/luxuryProducts/GridLuxury"));
const LineLuxury = React.lazy(() => import("../component/products/luxuryProducts/LineLuxury"));
const ListingLuxury = React.lazy(() => import("../component/products/luxuryProducts/ListingLuxury"));
const Finishes = React.lazy(() => import("../component/finishes"));
const WoodFinishes = React.lazy(() => import("../component/finishes/WoodFinishes"));
const ServicePage = React.lazy(() => import("../component/servicesPage"));
const BlogOne = React.lazy(() => import("../component/blog/BlogOne"));
const BlogTwo = React.lazy(() => import("../component/blog/BlogTwo"));
const BlogThree = React.lazy(() => import("../component/blog/BlogThree"));
const BlogFour = React.lazy(() => import("../component/blog/BlogFour"));
const BlogFive = React.lazy(() => import("../component/blog/BlogFive"));
const BlogSix = React.lazy(() => import("../component/blog/BlogSix"));
const WardrobeInterior = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior"));
const WardrobePage1 = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior/PriceEstimationWardrobeForm/WardrobePage1"));
const WardrobePage2 = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior/PriceEstimationWardrobeForm/WordrobePage2"));
const WardrobePage3 = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior/PriceEstimationWardrobeForm/WordrobePage3"));
const WardrobePage4 = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior/PriceEstimationWardrobeForm/WordrobePage4"));
const WardrobeFinalPage = React.lazy(() => import("../component/Price-Calculator/WardrobeInterior/PriceEstimationWardrobeForm/WardrobeFinalPage"));
const ModularJourney = React.lazy(() => import("../component/modularJourney"));
const HowItWorks = React.lazy(() => import("../component/howItWorks"));
const AllProjects = React.lazy(() => import("../component/portfolio/AllProjects"));
const ContactUs = React.lazy(() => import("../component/leadPage/ContactUs"));

// Add Suspense wrapper to handle loading state
const AllRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LeadPage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/essentialProducts" element={<EssentialProducts />} />
        <Route path="/premiumProducts" element={<PremiumProducts />} />
        <Route path="/luxuryProducts" element={<LuxuryProducts />} />
        {/* essential */}
        <Route path="/gridEssential" element={<GridEssential />} />
        <Route path="/lineEssential" element={<LineEssential />} />
        <Route path="/listEssential" element={<ListingEssential />} />
        {/* premium */}
        <Route path="/gridPremium" element={<GridPremium />} />
        <Route path="/linePremium" element={<LinePremium />} />
        <Route path="/listPremium" element={<ListingPremium />} />
        {/* luxury */}
        <Route path="/gridLuxury" element={<GridLuxury />} />
        <Route path="/lineLuxury" element={<LineLuxury />} />
        <Route path="/listLuxury" element={<ListingLuxury />} />

        <Route path="/finishes" element={<Finishes />} />
        <Route path="/woodFinishes" element={<WoodFinishes />} />

        <Route path="/servicesPage" element={<ServicePage />} />

        <Route path="/blogOne" element={<BlogOne />} />
        <Route path="/blogTwo" element={<BlogTwo />} />
        <Route path="/blogThree" element={<BlogThree />} />
        <Route path="/blogFour" element={<BlogFour />} />
        <Route path="/blogFive" element={<BlogFive />} />
        <Route path="/blogSix" element={<BlogSix />} />

        <Route path="/wardrobeinterior" element={<WardrobeInterior />} />
        <Route path="/wardrobe-height" element={<WardrobePage1 />} />
        <Route path="/wardrobe-height/wardrobe-type" element={<WardrobePage2 />} />
        <Route path="/wardrobe-height/wardrobe-type/material" element={<WardrobePage3 />} />
        <Route path="/wardrobe-height/wardrobe-type/material/accessories" element={<WardrobePage4 />} />
        <Route path="/wardrobe-height/wardrobe-type/material/accessories/estimate-form" element={<WardrobeFinalPage />} />

        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/allProjects" element={<AllProjects />} />

        <Route path="/modularJourney" element={<ModularJourney />} />
        <Route path="/howItWorks" element={<HowItWorks />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
