"use client";

export default function page() {
    return (
      <div className="container" style={{paddingTop:200}}>
        <div className="card px-2 py-2 rounded-5 shadow back">
          <div className="row">
            <div className="card-body col-md-4">
              <img
                src="img/kagami.png"
                className="img-fluid card-img rounded-circle"
              />
            </div>
            <div className="col-md-8">
              <div className="mx-4 my-4">
                <div className="row">
                  <div className="col-md-5">
                    <h1>Ahmad Hawari</h1>
                  </div>
                  <p>
                    Hello my name is Ahmad Hawari, i'm from Yogyakarta and
                    currently studying at Universitas Amikom Yogyakarta. I love
                    everything related to computer and games, my dream is to
                    become DevOps/Backend Developer
                  </p>
                  <p>You can contact me at</p>
                  <p>Discord @yukidream</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

