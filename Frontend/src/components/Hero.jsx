import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Travel from "../assets/Travel.webp";
import Chair from "../assets/Chair.webp";
import Curtains from "../assets/Curtains.webp";
import Recliner from "../assets/Recliner.webp";
import Sofa from "../assets/Sofa.webp";

const WheelControls = (slider) => {
  let touchTimeout;
  let position = { x: 0, y: 0 };
  let wheelActive = false;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: { x: position.x, y: position.y },
      })
    );
  }

  function wheelStart(e) {
    position = { x: e.pageX, y: e.pageY };
    dispatch(e, "ksDragStart");
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);

      // **Check if at the last slide and move back to first**
      if (slider.track.details.rel === slider.track.details.slides.length - 1) {
        slider.moveToIdx(0, true); // Move to first slide smoothly
      }
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, { passive: false });
  });
};

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true, // **Enable infinite scrolling**
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider overflow-hidden" style={{ height: 600 }}>
        <div className="keen-slider__slide number-slide1">
          <img src={Travel} alt="Travel" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={Recliner} alt="Recliner" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={Sofa} alt="Sofa" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={Curtains} alt="Curtains" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={Chair} alt="Chair" />
        </div>
      </div>
    </>
  );
}
