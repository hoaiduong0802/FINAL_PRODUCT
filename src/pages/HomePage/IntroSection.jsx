import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import owlCarousels from "../../utils/owlCarousels";

const IntroSection = ({ introProducts }) => {
  console.log("introProducts", introProducts);
  useEffect(() => {
    owlCarousels();
  }, []);

  return (
    <div className="intro-section pt-3 pb-3 mb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Banner code - để mặc định, không cần xử lý vì chưa có data động từ API */}
          </div>
          <div className="col-lg-4">
            <div className="intro-banners">
              {introProducts?.map((product) => {
                const { name, images, slug, id } = product || {};
                const productPath = PATHS.PRODUCTS + `/${slug}`;
                return (
                  <div key={id || ""} className="banner mb-lg-1 mb-xl-2">
                    <Link to={productPath}>
                      <img
                        src={images?.[0] || ""}
                        alt="Banner"
                        // Xử lý thêm style để ảnh hiển thị bên phải khung
                        style={{
                          height: 119,
                          objectFit: "contain",
                          objectPosition: "center right",
                        }}
                      />
                    </Link>
                    <div className="banner-content">
                      <h3 className="banner-title">
                        <Link to={productPath}>{name}</Link>
                      </h3>
                      <Link to={productPath} className="banner-link">
                        Shop Now <i className="icon-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
