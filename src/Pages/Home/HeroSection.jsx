import {Link} from 'react-router-dom';

function HeroSection() {
    return (
        <section className="heroSection">
            <div className="herSectionContainer">
                <div className="heroSectionContent">
                    <div className="heroText">
                        <h1>Delicious Recipes, Made Simple</h1>
                        <p>
                            Explore a wide range of mouth-watering recipes that bring flavor and
                            joy to your dining table. Cook like a chef and impress your family.
                        </p>
                       <Link to='/categories'><button className="cta-btn">Explore Categories</button></Link>
                    </div>
                    <div className="herovideo">
                        <video autoPlay loop muted playsInline>
                            <source src="/assets/large (1).mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;