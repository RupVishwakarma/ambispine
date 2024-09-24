import './headermain.css';
export default function Who(){
        return(
         <div className='container-fluid  p-4  '>
     <div className='d-flex  justify-content-around px-5 '>
    <div>
    <a href='#' className="text-white link">About Us</a>
    </div>
    <div>
    <a href='#' className="text-white link">Overview</a>
    </div>
    <div className="ms-3" >
    <p><a href='#' className="text-white link  ">Our Product And Services</a></p>
    <p><a href='#' className="text-white link">Spreads <sup>TM</sup></a></p>
    <p><a href='#' className="text-white link">Spreads Web Solution <sup>TM</sup></a></p>
    </div>
        </div>
        <div className="over-view text-white p-4 ">
        <h5>We're in it for good, driving positive change for the benefit of all. Our expert. committed team put our shared beliefs into action - </h5>
        <p>every day. Together, we combine innovation and collective knowledge to create the extracordinary</p>
        <div className= 'top-text'>
        <button className=" mt-1 mt-lg-3 fs-5 px-3 pb-1  text-white border-3  rounded-2 " style={{width:"200px", height:"45px"}}>Collaborate Now</button>
        </div>
        <div>
        
        </div>
        </div>
       
         </div>

        )
      }
