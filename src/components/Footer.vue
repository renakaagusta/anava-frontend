<template>
  <!-- Footer Section Begin -->
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-left">
            <div class="footer-logo">
              <img
                src="@/assets/logo-white.png"
                style="height:80px; width:180px;"
              />
            </div>
            <ul>
              <li>ANAVA</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 text-left">
          <div class="footer-widget">
            <h5>Hubungi kami</h5>
            <ul>
              <li>
                <a target="blank" href="https://www.instagram.com/anavaugm/">
                  <i class="fab fa-instagram"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.facebook.com/anavaugm">
                  <i class="fab fa-facebook-f"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a target="blank" href="anava.mipa.ugm@gmail.com">
                  <i class="far fa-envelope"></i>
                  Email
                </a>
              </li>
              <li>
                <a target="blank" href="https://wa.me/6287777006263">
                  <i class="fab fa-whatsapp"></i>
                  Whatsapp<br/>
                  087777006263 (Nuni)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 text-left">
          <div class="footer-widget">
            <h5>Tentang Kami</h5>

            <ul>
              <li>
                HIMASTA FMIPA UGM Sekip Utara <br />(<a target="blank" href="https://himasta.ugm.ac.id"
                  >himasta.ugm.ac.id</a
                >)
              </li>
              <li>
                <br/>Alamat : <br />PO. BOX BLS-21 Bulaksumur, Caturtunggal, Depok,
                Sleman Yogyakarta 55281
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text">
              Copyright &copy; 2020 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer-section {
  background: #191919;
  padding-top: 75px;
}

.footer-left {
  margin-bottom: 30px;
}

.footer-left .footer-logo img {
  width: 100px;
  height: 100px !important;
}

.footer-left ul li {
  margin-left: -40px;
  margin-top: 10px;
  list-style: none;
  color: #b2b2b2;
  font-size: 16px;
  line-height: 30px;
}

.footer-widget {
  margin-bottom: 30px;
}

.footer-widget h5 {
  margin-left: 40px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 26px;
}

.footer-widget ul li {
  list-style: none;
  color: #b2b2b2;
}

.footer-widget ul li a {
  line-height: 36px;
  font-size: 16px;
  color: #b2b2b2;
}

.copyright-reserved {
  border-top: 1px solid #303030;
  padding: 15px 0;
  margin-top: 45px;
}

.copyright-reserved .copyright-text {
  float: center;
  font-size: 16px;
  color: #b2b2b2;
}
</style>
