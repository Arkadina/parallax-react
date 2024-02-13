import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".hidden");

      hiddenElements.forEach((el) => observer.observe(el));
    });
  }, []);

  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <section id="textblock">
            <div id="textblock-container">
              <h1 className="hidden" id="textblock-title">
                Lorem ipsum
              </h1>

              <p className="hidden" id="textblock-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil, tempora eligendi placeat repudiandae quo mollitia sequi
                sit fuga ipsa cumque possimus voluptate consequuntur impedit
                aut, itaque molestiae debitis quasi!
              </p>

              <div className="list">
                <div className="hidden"></div>
                <div className="hidden"></div>
                <div className="hidden"></div>
                <div className="hidden"></div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
