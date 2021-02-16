import '../styles/detail.css';
// import CPMLogo from '../../public/CPMLogo.png'

function Detail() {
    return (
        <>
        <div className="header">
            <div id="cpm-logo">
                <img src='./CPMLogo.png' alt="CPM Software logo" className="cpm-logo"></img>
            </div>
            <div className="header-contact">
                <a className='email-us' href="mailto:info@cpm-software.co.uk">Contact us</a>
            </div>
        </div>
            <h1 className="name">
				<span>C</span>PM
			</h1>
            <h1 className="name">
				&nbsp;&nbsp;&nbsp;<span>S</span>oftware&nbsp;&nbsp;&nbsp;<span>L</span>imited
			</h1>
			<div className="role-container">
				<p className="blurb"><span className="blueText">Cost Management Software</span> <br/> for <span className="blueText">SME's</span> <br/> based in Stirling, Scotland.</p>
			</div>
            </>
    );
};

export default Detail;
