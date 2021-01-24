import { Component } from "react";
import Product from "./Product";
import Acc1 from "./images/Acc1.jpg";
import Star from "./images/star.png";
import Sale from "./images/seo.png";
class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="container-fluid text-center">
          <div className="content-body">
            <div className="buttonn">
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">Tìm Theo Rank</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Rank Đồng</a>
                  <a className="dropdown-item" href="#">Rank Bạc</a>
                  <a className="dropdown-item" href="#">Rank Vàng</a>
                  <a className="dropdown-item" href="#">Rank Bạch Kim</a>
                  <a className="dropdown-item" href="#">Rank Kim Cương</a>
                  <a className="dropdown-item" href="#">Rank Tinh Anh</a>
                  <a className="dropdown-item" href="#">Rank Cao Thủ</a>
                </div>
              </div>
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                  Tìm Theo Giá Tiền
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">50k</a>
                  <a className="dropdown-item" href="#">Từ 50k - 70k</a>
                  <a className="dropdown-item" href="#">Từ 70k - 100k</a>
                  <a className="dropdown-item" href="#">Từ 100k - 500k</a>
                  <a className="dropdown-item" href="#">Từ 500k - 1tr</a>
                  <a className="dropdown-item" href="#">Từ 1tr - 1tr2</a>
                </div>
              </div>
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">Sắp Xếp Theo</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Tướng nhiều nhất</a>
                  <a className="dropdown-item" href="#">Trang phục nhiều nhất</a>
                  <a className="dropdown-item" href="#">Giá cao nhất</a>
                  <a className="dropdown-item" href="#">Rank cao nhất</a>
                  <a className="dropdown-item" href="#">Acc mới nhất</a>
                </div>
              </div>
              <button className="btn btn-warning"><b>Quay Lại Mặc Định</b></button>
            </div>
            <br />
            <br />
            <br />

            <Product/>
            <div className="page-next">
              <ul className="pagination justify-content-center">
                <a className="nav-link" href="#">Trang trước</a>
                <a className="nav-link active" href="#">1</a>
                <a className="nav-link" href="#">2</a>
                <a className="nav-link" href="#">3</a>
                <a className="nav-link" href="#">Trang cuối</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
