import React, { useState } from "react";
import {
  LightningChargeFill,
  ShieldCheck,
  LightbulbFill,
  Search,
  GearFill,
  HouseGearFill,
  CheckCircleFill,
  TelephoneFill,
  ArrowRight,
  ChevronDown,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Emergency Electrical Repairs",
      img: "/Images/s1.png",
      icon: <LightningChargeFill />,
      desc: "24/7 rapid response for power cuts, sparking sockets, burning smells, or urgent electrical faults.",
      points: [
        "45-minute average response",
        "Fault finding & diagnostics",
        "Immediate safety isolation",
      ],
    },
    {
      title: "Fuse Box Replacement",
      img: "/Images/s2.png",
      icon: <ShieldCheck />,
      desc: "Upgrade your old fuse board to a modern 18th Edition compliant consumer unit with RCD protection.",
      points: [
        "Full testing & certification",
        "RCD / RCBO protection",
        "Surge protection available",
      ],
    },
    {
      title: "Lighting Installation & Repair",
      img: "/Images/s3.png",
      icon: <LightbulbFill />,
      desc: "From stylish indoor LED downlights to robust outdoor security lighting and smart lighting systems.",
      points: [
        "Smart lighting systems",
        "Energy-efficient LEDs",
        "Security & garden lighting",
      ],
    },
    {
      title: "Electrical Safety Inspections",
      img: "/Images/s4.png",
      icon: <Search />,
      desc: "Comprehensive EICR reports for homeowners, landlords, commercial properties and buyers.",
      points: [
        "Landlord safety certificates",
        "Pre-purchase inspections",
        "Remedial work quotes",
      ],
    },
    {
      title: "Appliance & Wiring Services",
      img: "/Images/s5.png",
      icon: <GearFill />,
      desc: "Electric cookers, showers, new sockets, partial rewiring and full property rewiring services.",
      points: [
        "New socket installation",
        "Electric shower circuits",
        "Full & partial rewires",
      ],
    },
    {
      title: "General Maintenance",
      img: "/Images/s6.png",
      icon: <HouseGearFill />,
      desc: "Routine checks and minor repairs to keep your electrical system safe, stable and future-ready.",
      points: [
        "Fault prevention",
        "System health checks",
        "Minor works & repairs",
      ],
    },
  ];

  const faqs = [
    {
      q: "How quickly can you respond to an emergency?",
      a: "Our average emergency response target is around 45 minutes across London, depending on traffic, location and job urgency.",
    },
    {
      q: "Are your electricians fully qualified?",
      a: "Yes. Our electricians are certified, insured and trained to handle residential and commercial electrical work safely.",
    },
    {
      q: "Do you provide landlord safety certificates?",
      a: "Yes. We provide EICR reports and landlord electrical safety certificates for rental and commercial properties.",
    },
    {
      q: "Is your work guaranteed?",
      a: "Yes. Our work comes with a 12-month workmanship guarantee for added peace of mind.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          min-height: 100vh;
          background: #f8fafc;
          color: #0f172a;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        .services-hero {
          position: relative;
          padding: 150px 0 90px;
          background:
            radial-gradient(circle at top left, rgba(37, 99, 235, 0.26), transparent 35%),
            radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.22), transparent 35%),
            linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%);
          color: white;
          overflow: hidden;
        }

        .services-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 45px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .services-hero h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 24px;
        }

        .services-hero h1 span {
          background: linear-gradient(90deg, #60a5fa, #22d3ee, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-hero p {
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
        }

        .hero-stats {
          margin-top: 35px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hero-stat {
          padding: 18px 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          min-width: 145px;
        }

        .hero-stat strong {
          display: block;
          font-size: 26px;
          font-weight: 950;
        }

        .hero-stat span {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 800;
        }

        .hero-visual-card {
          position: relative;
          padding: 26px;
          border-radius: 36px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(24px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.35);
        }

        .hero-visual-card img {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 26px;
        }

        .services-main {
          padding: 95px 0;
        }

        .section-title {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-title span {
          display: inline-block;
          color: #2563eb;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .section-title h2 {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
        }

        .section-title p {
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .crazy-service-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 22px 60px rgba(15,23,42,0.08);
          transition: 0.45s ease;
        }

        .crazy-service-card:hover {
          transform: translateY(-14px);
          box-shadow: 0 35px 90px rgba(37,99,235,0.22);
        }

        .service-img-wrap {
          height: 235px;
          overflow: hidden;
          position: relative;
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.65s ease;
        }

        .crazy-service-card:hover .service-img-wrap img {
          transform: scale(1.12);
        }

        .service-number {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(15,23,42,0.78);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
        }

        .service-body {
          padding: 28px;
        }

        .service-icon {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-top: -60px;
          margin-bottom: 22px;
          position: relative;
          z-index: 4;
        }

        .service-body h3 {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .service-body p {
          color: #64748b;
          line-height: 1.75;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-points li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #334155;
          font-size: 14px;
          font-weight: 700;
        }

        .service-points svg {
          color: #22c55e;
        }

        .book-btn {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 17px;
          background: #0f172a;
          color: white;
          font-weight: 950;
          transition: 0.35s ease;
        }

        .book-btn:hover {
          color: white;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
        }

        .faq-section {
          padding: 90px 0;
          background: #f8fafc;
        }

        .faq-box {
          max-width: 850px;
          margin: auto;
        }

        .faq-item {
          margin-bottom: 14px;
          border-radius: 22px;
          background: white;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          font-size: 17px;
          font-weight: 950;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: 0.35s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 160px;
        }

        .faq-answer p {
          padding: 0 24px 22px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .services-hero {
            padding: 120px 0 65px;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: 1fr;
          }

          .hero-visual-card img {
            height: 280px;
          }
        }
      `}</style>

      <main className="services-page">
        <section className="services-hero">
          <div className="services-container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  London Electrical Experts
                </div>

                <h1>
                  Crazy Fast <br />
                  <span>Electrical Services</span>
                </h1>

                <p>
                  We provide professional residential and commercial electrical
                  services across London with premium safety standards, fast
                  response, and certified workmanship.
                </p>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Emergency Callouts</span>
                  </div>

                  <div className="hero-stat">
                    <strong>45 min</strong>
                    <span>Average Response</span>
                  </div>

                  <div className="hero-stat">
                    <strong>12 mo</strong>
                    <span>Work Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual-card">
                <img
                  src="/Images/home.png"
                  alt="Emergency Electrical Repairs"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-main">
          <div className="services-container">
            <div className="section-title">
              <span>Our Services</span>
              <h2>Built for Homes, Landlords & UK Businesses</h2>
              <p>
                Professional electrical solutions with a premium service feel.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <div className="crazy-service-card" key={index}>
                  <div className="service-img-wrap">
                    <img src={service.img} alt={service.title} />

                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="service-body">
                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.desc}</p>

                    <ul className="service-points">
                      {service.points.map((point, i) => (
                        <li key={i}>
                          <CheckCircleFill />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="tel:+442012345678"
                      className="book-btn"
                    >
                      Book Service Now <ArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="services-container">
            <div className="section-title">
              <span>FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-box">
              {faqs.map((item, index) => (
                <div
                  className={`faq-item ${
                    activeFaq === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    {item.q}
                    <ChevronDown />
                  </button>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;