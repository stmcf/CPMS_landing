import Contact from './Contact.js';
import Detail from './Detail.js';
import '../styles/main.css'

function Main() {
    return (
        <main className="content">
        <div>
           <Detail/>
           <Contact/>
        </div>
        </main>
    );
};

export default Main;
