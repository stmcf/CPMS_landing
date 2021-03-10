import '../styles/header.css';

function Header() {
    return (
        <div className="header">
            {/* <div id="cpm-logo"> */}
                <img src='./CPMLogo.png' alt="CPM Software logo" className="cpm-logo"></img>
            {/* </div> */}
            <div className="header-contact">
                <a className='header-email-us' href="mailto:info@cpm-software.co.uk">Contact us</a>
            </div>
        </div>
    );
};

export default Header;
