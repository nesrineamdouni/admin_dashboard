import React from "react";
import Nav from "./Nav";
import Badge from "react-bootstrap/Badge";

function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">250</h3>
                <p className="fs-5">Products</p>
              </div>
              <i
                className="bi bi-cart-plus p-3 fs-1"
                style={{ color: "#9c27b0" }}
              ></i>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2540</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i
                className="bi bi-currency-dollar p-3 fs-1"
                style={{ color: "#FFB400" }}
              ></i>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2335</h3>
                <p className="fs-5">Delivery</p>
              </div>
              <i
                className="bi bi-truck p-3 fs-1"
                style={{ color: "#FF4C51" }}
              ></i>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">30%</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i
                className="bi bi-graph-up-arrow p-3 fs-1"
                style={{ color: "#56CA00" }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table caption-top bg-white rounded mt-2">
          <caption className="text-black fs-4">Employees Stats</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">DATE</th>
              <th scope="col">SALARY</th>
              <th scope="col">AGE</th>
              <th scope="col">Statut</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Jenny Wilson</td>
              <td>jennywilson@gmail.com</td>
              <td>09/23/2023</td>
              <td>$23896.35</td>
              <td>25</td>
              <td>
                <Badge bg="success">Professional</Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kathryn Murphy</td>
              <td>kathrynmurphy@gmail.com</td>
              <td>10/15/2013</td>
              <td>$18991.67 </td>
              <td>27</td>
              <td>
                <Badge bg="danger">Rejected</Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Robert Fox</td>
              <td>robertfox@gmail.com</td>
              <td>06/12/2018 </td>
              <td>$19252.12 </td>
              <td>29</td>
              <td>
                <Badge bg="primary">Current</Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jesse Thomas </td>
              <td>jessethomas@gmail.com</td>
              <td>03/24/2018 </td>
              <td>$10909.52 </td>
              <td>42</td>
              <td>
                <Badge bg="warning" text="dark">
                  Resigned
                </Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Ralph Leonard</td>
              <td>ralphleonard@gmail.com</td>
              <td>06/01/2017 </td>
              <td>$17803.80 </td>
              <td>23</td>
              <td>
                <Badge bg="info">Applied</Badge>
              </td>
            </tr>

            <tr>
              <th scope="row">6</th>
              <td>Margaret Bowers</td>
              <td>margaretbowers@gmail.com</td>
              <td>09/07/2016 </td>
              <td>$12336.17 </td>
              <td>37</td>
              <td>
                <Badge bg="success">Professional</Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Minnie Roy</td>
              <td>minnieroy@gmail.com</td>
              <td>11/12/2019 </td>
              <td>$10909.52 </td>
              <td>59</td>
              <td>
                <Badge bg="warning" text="dark">
                  Resigned
                </Badge>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Annie Martin</td>
              <td>anniemartin@gmail.com</td>
              <td>10/08/2022 </td>
              <td>$18124.24 </td>
              <td>44</td>
              <td>
                <Badge bg="danger">Rejected</Badge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
