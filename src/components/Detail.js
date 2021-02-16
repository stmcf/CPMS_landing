import '../styles/detail.css';
// import CPMLogo from '../../public/CPMLogo.png'

function Detail() {
    return (
        <>
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
