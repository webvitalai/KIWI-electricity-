import React, { useState } from "react";
import {
    TelephoneFill,
    Whatsapp,
    EnvelopeFill,
    ClockFill,
    GeoAltFill,
    SendFill,
    LightningChargeFill,
    ShieldCheck,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            <style>{`
        .contact-page {
          background: #f8fafc;
          color: #0f172a;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .contact-hero {
          position: relative;
          padding: 145px 0 90px;
          background:
            radial-gradient(circle at top left, rgba(37,99,235,0.25), transparent 35%),
            radial-gradient(circle at bottom right, rgba(6,182,212,0.22), transparent 35%),
            linear-gradient(135deg, #020617 0%, #0f172a 55%, #111827 100%);
          color: white;
        }

        .contact-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 55px;
          align-items: center;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .contact-badge span {
          width: 9px;
          height: 9px;
          background: #22c55e;
          border-radius: 50%;
        }

        .contact-hero h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 24px;
        }

        .contact-hero h1 span {
          background: linear-gradient(90deg, #60a5fa, #22d3ee, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-hero p {
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
          max-width: 620px;
        }

        .contact-image-card {
          position: relative;
          padding: 14px;
          border-radius: 38px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(24px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.35);
        }

        .contact-image-card img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 28px;
        }

        .floating-contact-card {
          position: absolute;
          left: -25px;
          bottom: 35px;
          background: white;
          color: #0f172a;
          border-radius: 24px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 13px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
        }

        .floating-contact-card svg {
          color: #2563eb;
          font-size: 28px;
        }

        .contact-main {
          padding: 90px 0;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.4fr;
          gap: 30px;
        }

        .emergency-card {
          padding: 32px;
          border-radius: 32px;
          color: white;
          background:
            linear-gradient(135deg, rgba(15,23,42,0.96), rgba(37,99,235,0.92)),
            url("/Images/contact.png") center/cover;
          box-shadow: 0 28px 75px rgba(37,99,235,0.25);
          margin-bottom: 22px;
        }

        .emergency-card h3 {
          font-size: 28px;
          font-weight: 950;
          margin-bottom: 14px;
        }

        .emergency-card p {
          color: #dbeafe;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .emergency-card a {
          display: inline-flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: white;
          color: #0f172a;
          padding: 16px 20px;
          border-radius: 18px;
          font-weight: 950;
        }

        .info-card {
          display: flex;
          gap: 15px;
          padding: 22px;
          border-radius: 26px;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 50px rgba(15,23,42,0.06);
          margin-bottom: 16px;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          border-radius: 17px;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .info-card h4 {
          font-size: 17px;
          font-weight: 950;
          margin-bottom: 4px;
        }

        .info-card p,
        .info-card a {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          text-decoration: none;
        }

        .form-card {
          padding: 42px;
          border-radius: 34px;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 30px 85px rgba(15,23,42,0.09);
        }

        .form-card h3 {
          font-size: 32px;
          font-weight: 950;
          margin-bottom: 28px;
        }

        .contact-form {
          display: grid;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          border-radius: 18px;
          padding: 16px 18px;
          outline: none;
          font-size: 15px;
        }

        .form-group textarea {
          min-height: 150px;
          resize: none;
        }

        .send-btn {
          border: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 17px 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          color: white;
          font-weight: 950;
        }

        .success-msg {
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(34,197,94,0.12);
          color: #15803d;
          font-weight: 850;
        }

        .map-section {
          padding: 0 0 95px;
        }

        .crazy-map {
          border-radius: 36px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 28px 80px rgba(15,23,42,0.12);
          background: white;
        }

        .map-visual iframe {
          width: 100%;
          height: 450px;
          border: 0;
        }

        .map-footer {
          padding: 20px 24px;
          background: #0f172a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .map-footer div {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
        }

        .map-footer span {
          color: #cbd5e1;
          font-size: 14px;
        }

        @media (max-width: 991px) {
          .contact-grid,
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .contact-image-card img {
            height: 360px;
          }
        }

        @media (max-width: 576px) {
          .contact-hero {
            padding: 120px 0 65px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-card {
            padding: 28px 22px;
          }

          .floating-contact-card {
            position: static;
            margin-top: 14px;
          }

          .map-visual iframe {
            height: 320px;
          }
        }
      `}</style>

            <main className="contact-page">
                <section className="contact-hero">
                    <div className="contact-container">
                        <div className="contact-grid">
                            <div>
                                <div className="contact-badge">
                                    <span></span>
                                    Contact KIWI POWER
                                </div>

                                <h1>
                                    Get in <span>Touch</span>
                                </h1>

                                <p>
                                    Have an electrical issue or need a quote? Our certified London
                                    team is ready to help with emergency support, repairs and
                                    installations.
                                </p>
                            </div>

                            <div className="contact-image-card">
                                <img src="/Images/contact.png" alt="Contact Star Electric" />

                                <div className="floating-contact-card">
                                    <ShieldCheck />
                                    <div>
                                        <strong>24/7 Support</strong>
                                        <span> Emergency electrical help</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-main">
                    <div className="contact-container">
                        <div className="contact-layout">
                            <aside>
                                <div className="emergency-card">
                                    <h3>Emergency Support</h3>

                                    <p>
                                        For urgent electrical faults, power cuts or safety concerns,
                                        call our emergency line immediately.
                                    </p>

                                    <a href="tel:+442071831030">
                                        <TelephoneFill />
                                        +44 20 7183 1030
                                    </a>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <Whatsapp />
                                    </div>

                                    <div>
                                        <h4>WhatsApp Us</h4>

                                        <p>Quick chat for non-emergencies</p>

                                        <a
                                            href="https://wa.me/442071831030"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Start Chat
                                        </a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <EnvelopeFill />
                                    </div>

                                    <div>
                                        <h4>Email Us</h4>

                                        <a href="mailto:info@kiwipower.co.uk">
                                            info@kiwipower.co.uk
                                        </a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <ClockFill />
                                    </div>

                                    <div>
                                        <h4>Service Hours</h4>

                                        <p>Emergency: 24/7</p>
                                        <p>Office: Mon-Fri, 8am - 6pm</p>
                                    </div>
                                </div>
                            </aside>

                            <div className="form-card">
                                <h3>Send us a Message</h3>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>

                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Email Address</label>

                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Phone Number</label>

                                            <input
                                                type="text"
                                                placeholder="+44 2071 831030"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Service Required</label>

                                            <input
                                                type="text"
                                                placeholder="e.g. Fuse Box Upgrade"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Your Message</label>

                                        <textarea placeholder="Tell us about your electrical needs..." />
                                    </div>

                                    {sent && (
                                        <div className="success-msg">
                                            Message ready. Connect EmailJS/Formspree to send it live.
                                        </div>
                                    )}

                                    <button type="submit" className="send-btn">
                                        <SendFill />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map-section">
                    <div className="contact-container">
                        <div className="crazy-map">
                            <div className="map-visual">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7936455870968!2d-0.08848662315775237!3d51.5170017100016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cacf0104b63%3A0xd9245ee790631800!2sKiwi%20Power!5e0!3m2!1sen!2s!4v1778490604936!5m2!1sen!2s" allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>

                            <div className="map-footer">
                                <div>
                                    <GeoAltFill />

                                    <span>
                                        KIWI POWER Services, Central London, United Kingdom
                                    </span>
                                </div>

                                <div>
                                    <ClockFill />

                                    <span>24/7 Emergency Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;