import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
          <div className=' p-3' id='supportWrapper'>
           <h4> Support portal</h4>
           <a href=''>Track Tickets</a>
          </div>

          <div className='row p-5 '>
          <div className='col-6 p-5 '>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg:how do i activate F&O,why is my order getting rejected.>'></input>
            <br></br>

            <a href=''>Track account opening</a>&nbsp; &nbsp;
            <a href=''>Track segment activation</a>&nbsp;&nbsp;
            <a href=''>Intraday margins</a><br></br>
            <a href=''>Kite user manual</a>
          </div>
          <div className='col-6 p-5'>
            <h1>Featured</h1>
            <p>Due to the settlement holiday on Monday, your account balance will not include the following credits on 16 September, 2024:</p>
           <ul>
            <li>Intraday profits made in the Equity segment on Sept 13, 2024.</li>
            <li>Credits from trades made in NFO, Currency, and Commodity derivatives on Sept 13, 2024. This will include options premium credits, futures M2M profits, etc. <a href=''>Read more</a>.</li>
           </ul>
          </div>
          </div>
        </section>
      );
}

export default Hero;