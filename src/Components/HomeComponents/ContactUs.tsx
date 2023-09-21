// import { Resend } from 'resend';
// const resend = new Resend('re_JSU93F4e_Q3UVJZJsB2zDZU1Rvk1tTngJ');



function ContactUs(){
    // re_JSU93F4e_Q3UVJZJsB2zDZU1Rvk1tTngJ
    
    // const sendemail = () => {
    //     resend.emails.send({
    //         from: 'Acme <bodo010501@gmail.com>',
    //         to: ['bodo010501@gmail.com'],
    //         subject: 'Hello World',
    //         html: '<strong>It works!</strong>',
    //     });
    // }
    
    return(

        

        <div className="contactContainer">
            
            <h1 className="visith1">BOOK YOUR FIRST FREE VISIT</h1>
            {/* <p className="contacth1">&#9742; 657-705-1291  &emsp;  &#9993;a.dalia.bahy@gmail.com &emsp; &#9751; 3257 bbbb crest</p> */}
           <div className="contactleft">
            
            <input type="text" className="inputtxt"  name="fname" placeholder="Name"/>
            <input type="text" className="inputtxt"   name="fname" placeholder="Phone"/>
            <input type="text" className="inputtxt"   name="fname" placeholder="Project Address"/>
            <input type="text" className="inputtxt"   name="fname" placeholder="Email"/>
            </div> 
            
            <div className="contactleft">

            <select className="inputdrp" name="projtype">
                <option value="Project Type">Project Type</option>
                <option value="Custom Home">Custom Home</option>
                <option value="Basement Home">Basement Home</option>
                <option value="Home Additions">Home Additions</option>
                <option value="MultiFamily Dwellings">MultiFamily Dwellings</option>
            </select>

            <textarea  className="inputtxt"  id="projdetail" name="fname" placeholder="Project details"/>
            </div>
            
            
            <div className="contactcenter">
            <button className="buttoncontact" > SEND</button>
            </div>




        </div>

    )

}

export default ContactUs