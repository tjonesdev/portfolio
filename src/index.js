import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import {MenuBtn} from "./components/MenuBtn";
import {Nav} from "./components/Nav";
import {Overlay} from "./components/Overlay";
import {AboutBtn} from "./components/AboutBtn";
import {About} from "./components/About";
import {ContactRibbon} from "./components/ContactRibbon";
import {LandingPage} from "./components/LandingPage";
import {Background} from "./components/Background";
import {Skills} from "./components/Skills";
import {Project, Projects} from "./components/Project";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

const greetingsArr = [
  "Hello",
  "Hola",
  "Bonjour",
  "Guten Tag",
  "Salve",
  "Hallo",
  "Shalom"
];
const github = "https://tjonesdev.github.io/";
export const links = {
  email: "tracey.l.jones@outlook.com",
  github: "https://github.com/tjonesdev",
  linkedin: "https://www.linkedin.com/in/traceylynjones/",
  codepen: "https://codepen.io/justkeepprogramming/",
  projects: [
    {
      title: "Calculator",
      link: github + "calculator_react",
      img: ""
    },
    {
      title: "Pomodoro Clock",
      link: github + "pomodoro-clock_react",
      img: ""
    },
    {
      title: "Drum Machine",
      link: github + "drum-machine_react",
      img: ""
    },
    {
      title: "Markdown Previewer",
      link: github + "markdown-previewer_react",
      img: ""
    },
    {
      title: "Random Quote Machine",
      link: github + "random-quote-machine_react_alt",
      img: ""
    },
    {
      title: "Technical Documentation Page",
      link: github + "technical-documentation-page_htmlcss",
      img: ""
    },
    {
      title: "Bookshelf",
      link: github + "bookshelf_vanillajs",
      img: ""
    },
    {
      title: "Slackers CDs & Games",
      link: "https://tjonesdev-work.github.io/slackers_v4_vanillajs_sass/",
      img: ""
    }
  ]
};
let greetingId;
let timerId;
let opacity = 0;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowSize: 0,
      isOverlay: false,
      overlayType: "",
      isRibbon: false,
      greeting: "Hello"
    };
  }

  componentDidMount = () => {
    // Get window size on first load and update if window resized
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    // Close contact ribbon on scroll
    this.handleScroll();
    // Cycle greetings on load
    this.getGreeting();
    //document.querySelector('.menu-btn').focus();
    this.handleRipple();
    window.addEventListener("load", () => {
      opacity = 1;
    });
  };
  componentDidUnmount = () => {
    clearInterval(greetingId);
    greetingId = null;
  };

  // Get window size and close nav overlay if resized to desktop
  handleResize = () => {
    this.setState(
      {
        windowSize: window.innerWidth
      },
      () => {
        if (this.state.windowSize > 600 && this.state.overlayType === "nav") {
          this.setState(
            {
              isOverlay: false,
              overlayType: ""
            },
            () => {
              document.body.classList.remove("noscroll");
            }
          );
        }
      }
    );
  };

  handleScroll = () => {
    // Close contact ribbon on scroll
    document.addEventListener("scroll", e => {
      this.setState({
        isRibbon: false
      });
    });
  };

  // Determine if overlay open or closed & determine type of overlay
  toggleOverlay = e => {
    // variables
    const cl = e.currentTarget.classList,
      body = document.body,
      overlayContent = document.querySelector(".overlay-content"),
      overlayAnimate = document.querySelector(".overlay-animate"),
      aboutBarRight = document.querySelector(".about-bar--right"),
      aboutBarLeft = document.querySelector(".about-bar--left"),
      menuBarTop = document.querySelector(".menu-bar--top"),
      menuBarMiddle = document.querySelector(".menu-bar--middle"),
      menuBarBottom = document.querySelector(".menu-bar--bottom"),
      pageContainer = document.querySelector(".page-container");
    // Switch
    switch (true) {
      case cl.contains("menu-btn--open"):
        this.setState(
          {
            isOverlay: true,
            overlayType: "nav"
          },
          () => {
            body.classList.add("noscroll");
            pageContainer.classList.add("invisible");
            overlayContent.classList.add("fade-in");
            overlayAnimate.classList.add("menu-animate--expand");
            menuBarTop.classList.add("animate--top");
            menuBarMiddle.classList.add("animate--middle");
            menuBarBottom.classList.add("animate--bottom");
            document.querySelector(".menu-items > li > a").focus();
            this.handleRipple();
          }
        );
        break;

      case cl.contains("menu-btn--close"):
        overlayAnimate.classList.add("menu-animate--collapse");
        overlayContent.classList.add("fade-out");
        body.classList.remove("noscroll");
        menuBarTop.classList.remove("animate--top");
        menuBarMiddle.classList.remove("animate--middle");
        menuBarBottom.classList.remove("animate--bottom");
        pageContainer.classList.remove("invisible");
        pageContainer.classList.add("visible");
        setTimeout(() => {
          this.setState(
            {
              isOverlay: false,
              overlayType: ""
            },
            () => {
              overlayContent.classList.remove("fade-in");
              overlayContent.classList.remove("fade-out");
              overlayAnimate.classList.remove("menu-animate--expand");
              overlayAnimate.classList.remove("menu-animate--collapse");
              this.handleRipple();
            }
          );
        }, 500);
        break;

      case cl.contains("about-btn--open"):
        overlayContent.classList.remove("fade-in");
        this.setState(
          {
            isOverlay: true,
            overlayType: "about"
          },
          () => {
            body.classList.add("noscroll");
            pageContainer.classList.add("invisible");
            overlayContent.classList.add("fade-in");
            overlayAnimate.classList.add("about-animate--expand");
            document.querySelector(".about-btn--close").focus();
            this.handleRipple();
          }
        );
        break;

      case cl.contains("about-btn--close"):
        aboutBarRight.classList.add("x-spin-right");
        aboutBarLeft.classList.add("x-spin-left");
        body.classList.remove("noscroll");
        pageContainer.classList.remove("invisible");
        pageContainer.classList.add("visible");
        this.handleRipple();
        setTimeout(() => {
          overlayAnimate.classList.add("about-animate--collapse");
          overlayContent.classList.add("fade-out");
        }, 500);
        setTimeout(
          () =>
            this.setState(
              {
                isOverlay: false,
                overlayType: ""
              },
              () => {
                pageContainer.classList.remove("invisible");
                pageContainer.classList.remove("visible");
                overlayContent.classList.remove("fade-in");
                overlayContent.classList.remove("fade-out");
                overlayAnimate.classList.remove("about-animate--expand");
                overlayAnimate.classList.remove("about-animate--collapse");
                this.handleRipple();
              }
            ),
          1300
        );
        break;

      case cl.contains("nav-link"):
      default:
        this.setState(
          {
            isOverlay: false,
            overlayType: ""
          },
          () => {
            body.classList.remove("noscroll");
            pageContainer.classList.remove("invisible");
            pageContainer.classList.remove("visible");
            overlayContent.classList.remove("fade-in");
            overlayContent.classList.remove("fade-out");
            this.handleRipple();
          }
        );
    }
  };

  // Determine if contact ribbon open or closed
  toggleRibbon = () => {
    this.setState(
      {
        isRibbon: !this.state.isRibbon
      },
      () => {
        this.state.isRibbon
          ? document.querySelector(".contact-ribbon-items > li > a").focus()
          : document.querySelector(".contact-ribbon-items > li > a").blur();
      }
    );
  };

  // Cycle through greetings array
  getGreeting = () => {
    let i = 0;

    greetingId = setInterval(() => {
      this.setState({
        greeting: greetingsArr[i++ % greetingsArr.length]
      });
    }, 3000);
  };

  /* Modified and borrowed from https://codepen.io/ainalem/pen/LqvBWO?editors=1000 */
  handleRipple = () => {
    const btns = Array.from(document.querySelectorAll(".btn-ripple"));
    btns.forEach(btn => {
      const eventStart = e => {
        clearTimeout(timerId);
        const ripple = e.currentTarget.querySelector(".ripple");
        const size = btn.offsetWidth;
        const pos = btn.getBoundingClientRect();
        const x = e.clientX - pos.left - size;
        const y = e.clientY - pos.top - size;
        ripple.style =
          "top:" +
          y +
          "px; left:" +
          x +
          "px; width: " +
          size * 2 +
          "px; height: " +
          size * 2 +
          "px;";
        ripple.classList.remove("active");
        ripple.classList.remove("start");
        setTimeout(() => {
          ripple.classList.add("start");
          setTimeout(() => {
            ripple.classList.add("active");
          });
        });
      };
      const eventEnd = e => {
        const ripple = e.currentTarget.querySelector(".ripple");
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          ripple.classList.remove("active");
          ripple.classList.remove("start");
        }, 500);
      };
      btn.addEventListener("mousedown", eventStart);
      btn.addEventListener("mousemove", eventEnd);
      btn.addEventListener("click", eventEnd);
      btn.addEventListener("mouseup", eventEnd);

      // Bind touch to mouse events: https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx

      const touch2Mouse = e => {
        const theTouch = e.changedTouches[0];
        let mouseEv;

        switch (e.type) {
          case "touchstart":
            mouseEv = "mousedown";
            break;
          case "touchend":
            mouseEv = "mouseup";
            break;
          case "touchmove":
            mouseEv = "mousemove";
            break;
          default:
            return;
        }

        const mouseEvent = document.createEvent("MouseEvent");
        mouseEvent.initMouseEvent(
          mouseEv,
          true,
          true,
          window,
          1,
          theTouch.screenX,
          theTouch.screenY,
          theTouch.clientX,
          theTouch.clientY,
          false,
          false,
          false,
          false,
          0,
          null
        );
        theTouch.target.dispatchEvent(mouseEvent);
      };
      btn.addEventListener("touchstart", touch2Mouse);
      btn.addEventListener("touchmove", touch2Mouse);
      btn.addEventListener("touchend", touch2Mouse);
    });
  };

  render() {
    const proj = links.projects.map(obj => {
      return (
        <Project
          opacity={opacity}
          title={obj.title}
          link={obj.link}
          img={obj.img}
        />
      );
    });

    return (
      <div className='container' aria-label=' Website Container'>
        <Overlay
          isOverlay={this.state.isOverlay}
          overlayType={this.state.overlayType}
          toggleOverlay={this.toggleOverlay}>
          {this.state.overlayType === "about"
            ? [
                <AboutBtn
                  toggleOverlay={this.toggleOverlay}
                  isOverlay={this.state.isOverlay}
                />,
                <About overlayType={this.state.overlayType} />
              ]
            : this.state.overlayType === "nav"
            ? [
                <Nav
                  toggleOverlay={this.toggleOverlay}
                  overlayType={this.state.overlayType}
                  windowSize={this.state.windowSize}
                />
              ]
            : ""}
        </Overlay>
        {this.state.windowSize < 600 && this.state.overlayType !== "about" ? (
          <MenuBtn
            toggleOverlay={this.toggleOverlay}
            overlayType={this.state.overlayType}
          />
        ) : this.state.windowSize > 600 &&
          this.state.overlayType !== "about" ? (
          <Nav
            toggleOverlay={this.toggleOverlay}
            overlayType={this.state.overlayType}
            windowSize={this.state.windowSize}
          />
        ) : (
          ""
        )}
        <div
          className='page-container'
          aria-label='Main Content Container'
          aria-hidden={this.state.isOverlay ? "true" : "false"}>
          {this.state.windowSize < 600 && this.state.overlayType === "about" ? (
            <MenuBtn
              toggleOverlay={this.toggleOverlay}
              overlayType={this.state.overlayType}
            />
          ) : this.state.windowSize > 600 &&
            this.state.overlayType === "about" ? (
            <Nav
              toggleOverlay={this.toggleOverlay}
              overlayType={this.state.overlayType}
              windowSize={this.state.windowSize}
            />
          ) : (
            ""
          )}
          <ContactRibbon
            toggleRibbon={this.toggleRibbon}
            isRibbon={this.state.isRibbon}
          />
          <LandingPage greeting={this.state.greeting}>
            <Background isOverlay={this.state.isOverlay} />
          </LandingPage>
          <Skills />
          <Projects isOverlay={this.state.isOverlay}>{proj}</Projects>
          <Contact isOverlay={this.state.isOverlay} />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));
