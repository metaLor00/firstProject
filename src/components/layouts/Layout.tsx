import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import { Container } from "reactstrap";
import Meta from "../Meta";
import MobileNavbar from "../MobileNavbar";
import FilterSection from "../FilterSection";
import Footer from "../Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
  <>
  <Meta/>
  <div className="layout">
          <Navbar/>
          <FilterSection/>
          <Container> 
            <main>{children}</main>
         </Container>
            <Footer/>
       <MobileNavbar/>
    </div>
  </>
  );
}
