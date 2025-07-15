import Customers from "./Customers";
import Designing from "./Designing";
import Dream from "./Dream";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Subscribe from "./Subscribe";

function HomePage() {
    return (
        <>
            <Home />
            <Services />
            <Dream />
            <Designing />
            <Customers />
            <Subscribe />
            <Footer />
        </>
    )
}

export default HomePage