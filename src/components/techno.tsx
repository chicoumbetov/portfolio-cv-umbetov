import React from "react";

const Techno = () => {
    /**
     *

     document.querySelector('.menu').addEventListener('click', animateMenu);
     const controller = new ScrollMagic.Controller();
     const slides = document.querySelectorAll('.slide');
     const header = document.querySelector('.header');

     slides.forEach((slide, idx) => {
    const revealImg = slide.querySelector('.slide-img-reveal');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.slide-text-reveal');

    // gsap.to(revealImg, 1, { x: '100%', scale: 0.5})
    // https://greensock.com/docs/v2/Easing
    const options = { defaults: { duration: 1, ease: 'power2.inOut' } };
    const timeline = gsap.timeline(options);

    timeline.fromTo(revealImg, {x: '0%', scale: 2}, {x: '100%', scale: 1});
    timeline.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');

    timeline.fromTo(revealText, { x: '0%' }, { x: '-100%' }, '-=0.5');
    timeline.fromTo(header, { opacity: 0 }, { opacity: 1 });

    const scene = new ScrollMagic.Scene({
        triggerElement: slide,
        triggerHook: 0.2,
        reverse: false,
    })
        // .addIndicators()
        .setTween(timeline)
        .addTo(controller)
    console.log("scene", scene)

    const pageOptions = { defaults: { duration: 1, ease: 'power1.inOut' }};
    const pageTimeline = gsap.timeline(pageOptions);

    const next = slides.length - 1 === idx ? 'end' : slides[idx + 1];
    pageTimeline.fromTo(next, { y: '0%'}, { y: '50%' });
    pageTimeline.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTimeline.fromTo(next, { y: '50%' }, { y: '0%' });

    const pageScene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: '100%',
        triggerElement: slide,
    })
        // .addIndicators({ name: 'page ',})
        .setPin(slide, { pushFollowers: false })
        .setTween(pageTimeline)
        .addTo(controller)
    console.log("scene", pageScene)


})


     function animateMenu(event) {
    if(!event.target.classList.contains('active')) {
        event.target.classList.add('active')
        gsap.to('.line1', 0.5, { rotate: '45', y: 5, background: '#000'});
        gsap.to('.line2', 0.5, { rotate: '-45', y: -5, background: '#000'});
        gsap.to('.logo', 1, { color: '#000' });
        gsap.to('.navbar', 1, { clipPath: 'circle(2500px at 100% -10%)'})
        document.body.classList.add('no-scroll')
    } else {
        event.target.classList.remove('active')
        gsap.to('.line1', 0.5, { rotate: 0, y: 0, background: '#FFF'});
        gsap.to('.line2', 0.5, { rotate: 0, y: 0, background: '#FFF'});
        gsap.to('.logo', 1, { color: '#FFF' });
        gsap.to('.navbar', 1, { clipPath: 'circle(50px at 100% -10%)'})
        document.body.classList.remove('no-scroll')
    }

}


     *
     */
    return(
        <main>
            <section className="slide javascript">
                <div className="slide-desc">
                    <div className="slide-title">
                        <h2>JavaScript</h2>
                    </div>
                    <ul>
                        <li>Basics</li>
                        <li>DOM</li>
                        <li>Deep understanding of objects and functions</li>
                    </ul>
                    <div className="slide-text-reveal"></div>
                </div>
                <div className="slide-img">
                    <img src="../img/techno_logos/js.png" alt="js"/>
                    <div className="slide-img-reveal"></div>
                </div>
            </section>
            <section className="slide git">
                <div className="slide-desc">
                    <div className="slide-title">
                        <h2>Git</h2>
                    </div>
                    <ul>
                        <li>Git</li>
                        <li>Github, Gitlab, Heroku, Netlify, AWS deployement</li>
                        <li>Pull Request, Commit, Merge</li>
                    </ul>
                    <div className="slide-text-reveal"></div>
                </div>
                <div className="slide-img">
                    <img src="../img/techno_logos/git.png" alt="git"/>
                    <div className="slide-img-reveal"></div>
                </div>
            </section>
            <section className="slide react">
                <div className="slide-desc">
                    <div className="slide-title">
                        <h2>React</h2>
                    </div>
                    <ul>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>Components, Hooks, Data Fetching</li>
                    </ul>
                    <div className="slide-text-reveal"></div>
                </div>
                <div className="slide-img">
                    <img src="../img/techno_logos/react.png" alt="react"/>
                    <div className="slide-img-reveal"></div>
                </div>
            </section>
            <section className="slide node">
                <div className="slide-desc">
                    <div className="slide-title">
                        <h2>Node</h2>
                    </div>
                    <ul>
                        <li>Node JS competences</li>
                        <li>Express & MongoDB</li>
                        <li>REST API Backend</li>
                    </ul>
                    <div className="slide-text-reveal"></div>
                </div>
                <div className="slide-img">
                    <img src="../img/techno_logos/node.png" alt="node"/>
                    <div className="slide-img-reveal"></div>
                </div>
            </section>
            <section className="slide soft">
                <div className="slide-desc">
                    <div className="slide-title">
                        <h2>Soft</h2>
                    </div>
                    <ul>
                        <li>Job Market understanding</li>
                        <li>Cover letter & CV writing skills</li>
                        <li>Interview skills</li>
                    </ul>
                    <div className="slide-text-reveal"></div>
                </div>
                <div className="slide-img">
                    <img src="../img/techno_logos/soft.png" alt="soft"/>
                    <div className="slide-img-reveal"></div>
                </div>
            </section>
        </main>
    )
}

export default Techno;
