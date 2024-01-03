// Home.js
import React from 'react';

function Home() {
  const tourDates = [
    { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION', imageUrl: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D' },
    // Add more tour dates as needed
  ];

  return (
    <div>
      <h2 className="text-center mt-4 mb-4">TOURS</h2>
      <div className="container">
        <div className="row">
          {tourDates.map((tour, index) => (
            <div key={index} className="col-md-3">
              <div className="card mb-4">
                <img src={tour.imageUrl} className="card-img-top" alt={`Tour Image for ${tour.location}`} />
                <div className="card-body">
                  <h5 className="card-title">{tour.date}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{tour.location}</h6>
                  <p className="card-text">{tour.venue}</p>
                  <a href="#" className="btn btn-primary">BUY TICKETS</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
