import Contact from './Contact.js';
import Detail from './Detail.js';
import Footer from './Footer.js';
import '../styles/main.css'
import Header from './Header.js';

function Main() {
    return (
        <main className="content">
        <div>
            <Header/>
            <Detail/>
            <Contact/>
            <Footer/>
        </div>
        </main>
    );
};

export default Main;
