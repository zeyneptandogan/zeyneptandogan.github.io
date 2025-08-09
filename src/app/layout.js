import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: {
    default: 'Zeynep Tandogan',
    template: '%s | Zeynep Tandogan',
  },
  description: 'EPFL MSc — Data Science, ML, LLMs, scalable AI systems.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="#intro">Intro</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#publications">Publications</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {children}

        <footer className=" text-white text-center py-4" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
          <div className="container">
            <p className="mb-0">&copy; <span id="year"></span> Your Name</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
