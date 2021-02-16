import Contact from './Contact.js';
import Detail from './Detail.js';
import Footer from './Footer.js';
import '../styles/main.css'

function Main() {
    return (
        <main className="content">
        <div>
           <Detail/>
           <Contact/>
           <Footer/>
        </div>
        </main>
    );
};

export default Main;
