import Header from "./Components/Header";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ContactPage(){
    return(
        <div>
            <div className="divider">
                <Header/>
                <ContactUs />
                <Bottomend />
             </div>
        </div>
    )
}
export default ContactPage;