import React from "react";

export default function BootStrapExample() {
  return (
    <>
      {/* --------------------------------------------- navbar here------------------------------------------   */}

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Ujjwal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      ClassRoom Training
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Online Training
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Online Training
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Corporate Training
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* --------------------------------------------- carousel here------------------------------------------   */}

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="10"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/img1.jpg" className="d-block w-100" height="500px" alt="Source not found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img2.jpg" className="d-block w-100" height="500px" alt="Source not found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img3.jpg" className="d-block w-100" height="500px" alt="Source not found" />
          </div>
          <div className="carousel-item active">
            <img src="/img/img4.jpg" className="d-block w-100" height="500px" alt="Source not found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img5.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img6.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
          <div className="carousel-item active">
            <img src="/img/img7.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img8.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img9.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
          <div className="carousel-item">
            <img src="/img/img10.jpg" className="d-block w-100" height="500px" alt="Source Not Found" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h5>Latest Products</h5>
       
    </>
  );
}
