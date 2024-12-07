
import 'animate.css';
const Footer = () => {
    return (
        <div className="text-white animate__animated animate__backInLeft animate__delay-10s">
            <h1><footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-[#c6064f]  hover:  hover:link">Dipto Bokshi</span></p>
  </aside>
</footer></h1>
        </div>
    );
};

export default Footer;