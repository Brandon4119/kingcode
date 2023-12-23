import "./home.css";

function Home() {
    return (
        <div>
            <div className="hero">
                <h1 className="hero-text">RPKeys</h1>
                <img src="/img/hero-img.png" alt="" />
                <button className="btn btn-primary abs">PLAY NOW</button>
            </div>

            <div className="goal-section">
                <h2>Goal and Aim of RPKeys</h2>
                <p>The primary goal of the RPKeys is to provide an engaging and effective platform for users to master the art of playing the piano. Through a combination of instructional videos and gamification elements, the aim is to make the learning process enjoyable, motivating, and conducive to sustained progress. The ultimate goal of RPKeys is to transform the process of acquiring musical proficiency into an enjoyable and rewarding experience, motivating users to embrace the art of piano playing with enthusiasm and dedication.</p>
            </div>

            <div className="levels-section">
                <h2>Levels</h2>
                <div className="center card-space">
                    <div className="levels-card">
                        <h3>Starting Level</h3>
                        <p>The initial levels of our piano learning game are strategically designed to provide a solid foundation for beginners, ensuring a smooth and encouraging entry into the world of piano playing. The primary goal at this stage is to acquaint users with fundamental concepts, such as hand positioning, basic note reading, and introductory finger exercises. Through a series of engaging video tutorials, learners will develop a rudimentary understanding of musical notation and gain confidence in navigating the piano keyboard.</p>
                        <img src="../img/tiny-city.png" alt="" />
                    </div>
                    <div className="levels-card">
                        <h3>Intermediate Level</h3>
                        <p>As users advance through the intermediate levels of RPKeys, the overarching goal shifts towards refining and expanding their musical abilities. Building upon the foundational skills acquired in the starting levels, the intermediate stages aim to deepen users' understanding of music theory, enhance their technical proficiency, and introduce them to a broader repertoire of musical genres.</p>
                        <img src="../img/tiny-battle.png" alt="" />
                    </div>
                    <div className="levels-card">
                        <h3>Starting Level</h3>
                        <p>The advanced levels aim to challenge users with intricate compositions, demanding techniques, and nuanced interpretations. Through sophisticated video tutorials and exercises, learners will explore complex harmonies, advanced chord progressions, and the subtleties of tempo and phrasing. The goal is not merely to play notes accurately but to imbue each performance with a profound level of artistry, allowing users to communicate their unique musical voice.</p>
                        <img src="../img/tiny-final.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;