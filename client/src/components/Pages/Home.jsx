import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  TelephoneFill,
  Whatsapp,
  ShieldCheck,
  LightningChargeFill,
  ClockFill,
  StarFill,
  ArrowRight,
  CheckCircleFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const services = [
    "Emergency Repairs",
    "Fuse Box Upgrades",
    "EICR Certificates",
    "Full Rewiring",
    "EV Charger Installations",
    "Smart Home Electrical",
  ];

  return (
    <>
      <style>{`
        .uk-electric-page {
          font-family: "Inter", sans-serif;
          color: #0f172a;
          background: #f8fafc;
          overflow: hidden;
        }

        .uk-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 110px 0 80px;
          background:
            radial-gradient(circle at top left, rgba(37, 99, 235, 0.16), transparent 35%),
            linear-gradient(135deg, #f8fbff 0%, #ffffff 45%, #eef6ff 100%);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          animation: floatGlow 6s infinite alternate ease-in-out;
        }

        .hero-glow-1 {
          width: 260px;
          height: 260px;
          background: rgba(37, 99, 235, 0.22);
          top: 12%;
          left: 5%;
        }

        .hero-glow-2 {
          width: 320px;
          height: 320px;
          background: rgba(14, 165, 233, 0.18);
          bottom: 5%;
          right: 8%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: fadeUp 0.9s ease both;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 16px;
          border-radius: 50px;
          background: rgba(37, 99, 235, 0.1);
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 22px;
        }

        .hero-badge span {
          width: 9px;
          height: 9px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 7px rgba(34, 197, 94, 0.18);
        }

        .hero-content h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.05em;
          margin-bottom: 24px;
        }

        .hero-content h1 span {
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          max-width: 560px;
          color: #475569;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 34px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }

        .btn-main,
        .btn-outline,
        .cta-call {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          border-radius: 16px;
          font-weight: 800;
          transition: 0.35s ease;
        }

        .btn-main {
          background: linear-gradient(135deg, #2563eb, #0891b2);
          color: white;
          padding: 16px 26px;
          box-shadow: 0 20px 45px rgba(37, 99, 235, 0.3);
        }

        .btn-main:hover {
          color: white;
          transform: translateY(-4px);
        }

        .btn-outline {
          background: white;
          color: #2563eb;
          padding: 16px 26px;
          border: 1px solid rgba(37, 99, 235, 0.18);
        }

        .btn-outline:hover {
          background: #eff6ff;
          color: #1d4ed8;
          transform: translateY(-4px);
        }

        .hero-trust {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }

        .hero-trust strong {
          display: block;
          font-size: 22px;
          font-weight: 900;
        }

        .hero-trust span {
          color: #64748b;
          font-size: 13px;
        }

        .hero-visual {
          position: relative;
          animation: fadeScale 1s ease both;
        }

        .image-card {
          position: relative;
          border-radius: 34px;
          padding: 12px;
          background: white;
          box-shadow: 0 35px 80px rgba(15, 23, 42, 0.16);
          transform: rotate(2deg);
          transition: 0.4s ease;
        }

        .image-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .image-card img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 26px;
        }

        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.14);
          border-radius: 20px;
          padding: 16px 18px;
          animation: floatCard 4s infinite ease-in-out;
        }

        .floating-card svg {
          font-size: 28px;
          color: #2563eb;
        }

        .floating-card h5 {
          font-size: 15px;
          margin: 0;
          font-weight: 900;
        }

        .floating-card p {
          margin: 0;
          font-size: 12px;
          color: #64748b;
        }

        .card-top {
          top: 35px;
          left: -25px;
        }

        .card-bottom {
          bottom: 45px;
          right: -25px;
          animation-delay: 1.2s;
        }

        .feature-strip {
          padding: 45px 0;
          background: white;
        }

        .feature-box {
          height: 100%;
          padding: 28px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
          transition: 0.35s ease;
        }

        .feature-box:hover {
          transform: translateY(-8px);
          border-color: #2563eb;
        }

        .feature-box svg {
          color: #2563eb;
          font-size: 32px;
          margin-bottom: 16px;
        }

        .feature-box h4 {
          font-weight: 900;
          margin-bottom: 10px;
        }

        .feature-box p {
          color: #64748b;
          margin: 0;
        }

        .services-section {
          padding: 95px 0;
          background: #f8fafc;
        }

        .section-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 55px;
        }

        .section-heading span,
        .why-content span,
        .cta-box span {
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 13px;
          font-weight: 900;
        }

        .section-heading h2,
        .why-content h2,
        .cta-box h2 {
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 14px 0;
        }

        .section-heading p {
          color: #64748b;
          font-size: 17px;
        }

        .service-card {
          position: relative;
          height: 100%;
          padding: 34px;
          border-radius: 28px;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 55px rgba(15, 23, 42, 0.07);
          overflow: hidden;
          transition: 0.4s ease;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 5px;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 28px;
          margin-bottom: 22px;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .service-card p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .service-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 900;
        }

        .premium-cta {
          padding: 80px 0;
          background: white;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          padding: 55px;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 64, 175, 0.95)),
            url("/home.png") center/cover;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .cta-box span {
          color: #93c5fd;
        }

        .cta-box p {
          color: rgba(255, 255, 255, 0.78);
          max-width: 620px;
          margin: 0;
        }

        .cta-call {
          background: white;
          color: #1d4ed8;
          padding: 18px 28px;
          white-space: nowrap;
        }

        .cta-call:hover {
          color: #1d4ed8;
          transform: translateY(-4px);
        }

        .why-section {
          padding: 95px 0;
          background: #f8fafc;
        }

        .why-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 34px;
          box-shadow: 0 25px 65px rgba(15, 23, 42, 0.16);
        }

        .why-point {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .why-point svg {
          color: #22c55e;
          font-size: 22px;
        }

        .why-point p {
          margin: 0;
          font-weight: 700;
          color: #334155;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes floatGlow {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(35px);
          }
        }

        @media (max-width: 991px) {
          .uk-hero {
            padding-top: 90px;
          }

          .image-card img {
            height: 440px;
          }

          .cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 576px) {
          .uk-hero {
            padding: 80px 0 55px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn-main,
          .btn-outline,
          .cta-call {
            width: 100%;
            justify-content: center;
          }

          .hero-trust {
            gap: 18px;
          }

          .image-card img,
          .why-image img {
            height: 360px;
          }

          .card-top {
            left: 10px;
          }

          .card-bottom {
            right: 10px;
          }

          .cta-box {
            padding: 32px 24px;
            border-radius: 26px;
          }
        }
      `}</style>

      <main className="uk-electric-page">
        <section className="uk-hero">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>

          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <div className="hero-content">
                  <div className="hero-badge">
                    <span></span>
                    24/7 Emergency Electricians in London
                  </div>

                  <h1>
                    Premium Electrical Services for{" "}
                    <span>Homes & Businesses</span>
                  </h1>

                  <p>
                    Certified London electricians delivering fast response,
                    transparent pricing, and safe electrical solutions across
                    the UK.
                  </p>

                  <div className="hero-actions">
                    <a href="tel:+442012345678" className="btn-main">
                      <TelephoneFill /> Call Now
                    </a>

                    <a
                      href="https://wa.me/442012345678"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      <Whatsapp /> WhatsApp
                    </a>
                  </div>

                  <div className="hero-trust">
                    <div>
                      <strong>45 min</strong>
                      <span>Avg Response</span>
                    </div>
                    <div>
                      <strong>12 Month</strong>
                      <span>Work Guarantee</span>
                    </div>
                    <div>
                      <strong>NICEIC</strong>
                      <span>Approved</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="hero-visual">
                  <div className="image-card">
                    <img src="/Images/home.png" alt="Professional UK electrician" />
                  </div>

                  <div className="floating-card card-top">
                    <ShieldCheck />
                    <div>
                      <h5>NICEIC Approved</h5>
                      <p>Certified & Insured</p>
                    </div>
                  </div>

                  <div className="floating-card card-bottom">
                    <StarFill />
                    <div>
                      <h5>4.9 Rated Service</h5>
                      <p>Trusted London Experts</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;