import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/img/Marketing.png";
import img2 from "../assets/img/con2.png";
import img3 from "../assets/img/con3.png";
import img4 from "../assets/img/con4.png";
import img5 from "../assets/img/CONTENT03.png";
import img6 from "../assets/img/MICE_02.png";
import img7 from "../assets/img/Mice22.png";
import { motion } from "framer-motion";

function About() {
    const settings = {
        infinite: true,
        speed: 8000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const slideDown = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div>
            <motion.div
                className="about-container"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div>ABOUT US</div>
                <p>GLAMN 507 meets the market fit using<br />
                    cutting-edge media technology.</p>
            </motion.div>

            <div className="bg-container">
                <img src={require('../assets/img/Rainbow Distortion Background 10.jpg')} alt="bg" className="bg-img" />

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideDown}
                >
                    신기술 개발과 창의적인 아이디어를 결합하여,
                </motion.p>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideDown}
                >
                    디지털 세상에 새로운 경험과 가치를 창출합니다.
                </motion.p>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideDown}
                >
                    최첨단 미디어 기술로 미래를 선도하는 GLAMN 507입니다.
                </motion.p>

            </div>

            <div className='com-container'>
                <motion.p
                    className='p1'
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    (주)글램앤507은 <span className="highlight">3D 기반 혁신 디지털 콘텐츠</span> 제작 전문 기업입니다.<br />
                    <span className="highlight">메타버스, VR, AR, XR</span> 등 첨단 기술로 몰입감 넘치는 가상 경험을 선사합니다.<br />
                    고품질 <span className="highlight">3D 애니메이션</span>과 <span className="highlight">인터랙티브 미디어</span>를 아우르는 다양한 콘텐츠를 제작합니다.
                </motion.p>

                <div className="p2-row">
                    <motion.p
                        className='p2'
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.6 }}
                    >
                        고객 맞춤형 솔루션과 끊임없는 연구개발로, 디지털 콘텐츠 산업의 새로운 패러다임을 만들어갑니다.
                    </motion.p>

                    <motion.p
                        className='p2'
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.8 }}
                    >
                        기술과 예술이 어우러진 차별화된 콘텐츠로, 사용자에게 깊은 감동과 혁신적 경험을 선사하는 것을 목표로 합니다.
                    </motion.p>
                </div>

                <div className="slider-wrapper">
                    <Slider {...settings}>
                        <div><img src={img1} alt="slide1" /></div>
                        <div><img src={img2} alt="slide2" /></div>
                        <div><img src={img3} alt="slide3" /></div>
                        <div><img src={img4} alt="slide4" /></div>
                        <div><img src={img5} alt="slide5" /></div>
                        <div><img src={img6} alt="slide6" /></div>
                        <div><img src={img7} alt="slide7" /></div>
                    </Slider>
                </div>

            </div>

            <motion.div
                className="honors-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
            >
                <div class="category-block">
                    <h3 class="category-title">회사 연혁</h3>
                    <div class="timeline-cards">
                        <div class="timeline-card">
                            <span class="year">2022</span>
                            <ul>
                                <li>법인 설립</li>
                            </ul>
                        </div>
                        <div class="timeline-card">
                            <span class="year">2023</span>
                            <ul>
                                <li>특허 등록 (전자 장치 및 방법)</li>
                                <li>메타버스 브랜드 “MUFA” 런칭</li>
                                <li>MUFA 기획전 <em>고향 가는 길</em> 온·오프라인 동시 개최</li>
                                <li>특허 출원 2건 (트래킹 시스템, 가상 전시회)</li>
                                <li>AR 카메라 시스템 개발 완료</li>
                                <li>3D 애니메이션 제작, 캐스터룸 구축</li>
                            </ul>
                        </div>
                        <div class="timeline-card">
                            <span class="year">2024</span>
                            <ul>
                                <li>청년창업사관학교 14기 선정</li>
                                <li>교육청 실감형 미디어아트 총괄</li>
                                <li>특허 출원 (인터랙티브 게임 시스템)</li>
                                <li>손선장 게임 · 뱅시 애니메이션 런칭</li>
                                <li>신안군 MOU, 디딤돌 R&D 선정</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="category-block">
                    <h3 class="category-title">보유 등록증 및 인증</h3>
                    <div class="badge-group">
                        <span class="badge">여성기업</span>
                        <span class="badge">직접생산확인증명</span>
                        <span class="badge">특허 등록 1건</span>
                        <span class="badge">디자인 등록 2건</span>
                        <span class="badge">상표 등록 2건</span>
                        <span class="badge">특허 출원 3건</span>
                    </div>
                </div>

                <div class="category-block">
                    <h3 class="category-title">지식재산권 현황</h3>
                    <div class="ip-grid">
                        <div class="ip-card">
                            <h4>특허</h4>
                            <p>전자 장치 및 방법 <span class="code">10-2405508</span></p>
                        </div>
                        <div class="ip-card">
                            <h4>상표 등록</h4>
                            <p>glamn507 <span class="code">40-2023-0167188</span></p>
                            <p>MUFA <span class="code">40-2023-0167189</span></p>
                        </div>
                        <div class="ip-card">
                            <h4>디자인 등록</h4>
                            <p>뱅시(Bang-C) <span class="code">C-2024-027713</span></p>
                            <p>라라(Lala) <span class="code">C-2024-027714</span></p>
                        </div>
                        <div class="ip-card">
                            <h4>특허 출원</h4>
                            <p>사용자 트래킹 시스템 <span class="code">10-2023-0113523</span></p>
                            <p>가상 전시회 방법 <span class="code">10-2023-0113523</span></p>
                            <p>인터랙티브 게임 시스템 <span class="code">10-2024-0169874</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>


        </div>
    )
};

export default About