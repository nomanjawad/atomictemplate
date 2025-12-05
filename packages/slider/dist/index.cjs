"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BREAKPOINTS: () => BREAKPOINTS,
  DEFAULT_OPTIONS: () => DEFAULT_OPTIONS,
  Slider: () => Slider,
  default: () => Slider_default
});
module.exports = __toCommonJS(index_exports);

// src/Slider.tsx
var import_react = __toESM(require("react"), 1);
var import_gsap = require("gsap");

// src/slider.types.ts
var DEFAULT_OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  gap: 16,
  stretch: true,
  centerMode: false,
  centerPadding: "50px",
  pagination: "both",
  arrows: {
    enabled: true,
    position: "inside",
    showOnHover: false
  },
  dots: {
    enabled: true,
    clickable: true
  },
  autoplay: {
    enabled: false,
    delay: 3e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    stopOnInteraction: false,
    stopOnLastSlide: false
  },
  marquee: {
    enabled: false,
    speed: 50,
    pauseOnHover: true,
    direction: "left"
  },
  loop: true,
  speed: 500,
  direction: "ltr",
  reverse: false,
  draggable: true,
  freeMode: false,
  transition: "slide",
  lazyLoad: {
    enabled: false,
    rootMargin: "200px",
    threshold: 0
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false
  },
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    firstSlideMessage: "This is the first slide",
    lastSlideMessage: "This is the last slide",
    paginationBulletMessage: "Go to slide {{index}}",
    slideRole: "group",
    containerRole: "region",
    containerRoleDescription: "carousel",
    itemRoleDescription: "slide",
    liveRegion: true,
    liveRegionPoliteness: "polite"
  },
  responsive: {},
  onSlideChange: () => {
  },
  onSlideClick: () => {
  },
  onInit: () => {
  },
  onDestroy: () => {
  },
  onReachStart: () => {
  },
  onReachEnd: () => {
  }
};
var BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};

// src/slider.module.css
var slider_default = {};

// src/Slider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function getCurrentBreakpoint(width) {
  if (width >= BREAKPOINTS["2xl"]) return "2xl";
  if (width >= BREAKPOINTS.xl) return "xl";
  if (width >= BREAKPOINTS.lg) return "lg";
  if (width >= BREAKPOINTS.md) return "md";
  if (width >= BREAKPOINTS.sm) return "sm";
  return null;
}
function getResponsiveValue(key, options, windowWidth) {
  if (!options.responsive) return void 0;
  const breakpoint = getCurrentBreakpoint(windowWidth);
  if (!breakpoint) return void 0;
  const config = options.responsive[breakpoint];
  return config?.[key];
}
var ChevronLeftIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "15 18 9 12 15 6" })
  }
);
var ChevronRightIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" })
  }
);
function useLazyLoad(options, slideIndex, currentSlide, slidesToShow) {
  const [isLoaded, setIsLoaded] = (0, import_react.useState)(!options?.enabled);
  const [isError, setIsError] = (0, import_react.useState)(false);
  const containerRef = (0, import_react.useRef)(null);
  const observerRef = (0, import_react.useRef)(null);
  const handleError = (0, import_react.useCallback)(
    (error) => {
      setIsError(true);
      options?.onError?.(slideIndex, error);
    },
    [options, slideIndex]
  );
  (0, import_react.useEffect)(() => {
    if (!options?.enabled) {
      setIsLoaded(true);
      return;
    }
    const visibleStart = currentSlide;
    const visibleEnd = currentSlide + slidesToShow;
    const shouldPreload = slideIndex >= visibleStart - 1 && slideIndex <= visibleEnd + 1;
    if (shouldPreload) {
      setIsLoaded(true);
      return;
    }
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsLoaded(true);
      return;
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            options.onLoad?.(slideIndex);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: options.rootMargin ?? "200px",
        threshold: options.threshold ?? 0
      }
    );
    observerRef.current.observe(element);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [options, slideIndex, currentSlide, slidesToShow]);
  return { isLoaded, isError, containerRef, handleError };
}
var MediaRenderer = ({
  media,
  isLoaded,
  className,
  renderImage
}) => {
  if (!isLoaded) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: slider_default.placeholder, "aria-hidden": "true" });
  }
  switch (media.type) {
    case "image":
      if (renderImage) {
        return renderImage({
          src: media.src,
          alt: media.alt ?? "",
          width: media.width,
          height: media.height,
          loading: "lazy",
          className: `${slider_default.slideMedia} ${className ?? ""}`
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: media.src,
          alt: media.alt ?? "",
          className: `${slider_default.slideMedia} ${className ?? ""}`,
          loading: "lazy"
        }
      );
    case "video":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "video",
        {
          src: media.src,
          poster: media.poster,
          autoPlay: media.autoPlay ?? false,
          muted: media.muted ?? true,
          loop: media.loop ?? true,
          className: `${slider_default.slideVideo} ${className ?? ""}`
        }
      );
    case "gif":
      if (renderImage) {
        return renderImage({
          src: media.src,
          alt: media.alt ?? "",
          className: `${slider_default.slideMedia} ${className ?? ""}`
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: media.src,
          alt: media.alt ?? "",
          className: `${slider_default.slideMedia} ${className ?? ""}`
        }
      );
    case "lottie":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `${slider_default.slideLottie} ${className ?? ""}`,
          "data-lottie-src": media.src,
          "data-lottie-loop": media.loop ?? true,
          "data-lottie-autoplay": media.autoPlay ?? true,
          "aria-label": media.alt
        }
      );
    default:
      return null;
  }
};
var SlideComponent = ({
  item,
  index,
  currentSlide,
  slidesToShow,
  slideWidth,
  gap,
  lazyLoad,
  a11y,
  renderSlide,
  renderImage,
  transition,
  totalSlides
}) => {
  const { isLoaded, containerRef } = useLazyLoad(
    lazyLoad,
    index,
    currentSlide,
    slidesToShow
  );
  const isActive = index >= currentSlide && index < currentSlide + slidesToShow;
  const slideStyle = {
    width: slideWidth,
    marginRight: typeof gap === "number" ? `${gap}px` : gap
  };
  const slideClasses = [
    slider_default.slide,
    transition === "fade" && isActive ? slider_default.active : "",
    !isLoaded ? slider_default.loading : ""
  ].filter(Boolean).join(" ");
  const ariaAttrs = a11y?.enabled ? {
    role: a11y.slideRole ?? "group",
    "aria-roledescription": a11y.itemRoleDescription ?? "slide",
    "aria-label": `Slide ${index + 1} of ${totalSlides}`,
    "aria-hidden": transition === "fade" && !isActive,
    tabIndex: isActive ? 0 : -1
  } : {};
  const isSlideItem = (val) => {
    return typeof val === "object" && val !== null && !import_react.default.isValidElement(val);
  };
  if (renderSlide && isSlideItem(item)) {
    const renderProps = {
      item,
      index,
      isActive,
      isLoaded,
      isVisible: isLoaded && isActive
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref: containerRef,
        className: slideClasses,
        style: slideStyle,
        ...ariaAttrs,
        children: renderSlide(renderProps)
      }
    );
  }
  let content;
  if (import_react.default.isValidElement(item)) {
    content = item;
  } else if (isSlideItem(item)) {
    if (item.media) {
      content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MediaRenderer,
        {
          media: item.media,
          isLoaded,
          renderImage
        }
      );
    } else if (item.content) {
      content = item.content;
    } else {
      content = null;
    }
  } else {
    content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: String(item) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: containerRef,
      className: slideClasses,
      style: slideStyle,
      onClick: isSlideItem(item) ? item.onClick : void 0,
      ...ariaAttrs,
      children: content
    }
  );
};
function SliderInner(props, ref) {
  const {
    items = [],
    children,
    options = {},
    className,
    style,
    renderSlide,
    renderImage,
    renderArrow,
    renderDot,
    initialSlide = 0,
    id
  } = props;
  const mergedOptions = (0, import_react.useMemo)(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
      arrows: { ...DEFAULT_OPTIONS.arrows, ...options.arrows },
      dots: { ...DEFAULT_OPTIONS.dots, ...options.dots },
      autoplay: { ...DEFAULT_OPTIONS.autoplay, ...options.autoplay },
      marquee: { ...DEFAULT_OPTIONS.marquee, ...options.marquee },
      lazyLoad: { ...DEFAULT_OPTIONS.lazyLoad, ...options.lazyLoad },
      a11y: { ...DEFAULT_OPTIONS.a11y, ...options.a11y },
      keyboard: { ...DEFAULT_OPTIONS.keyboard, ...options.keyboard }
    }),
    [options]
  );
  const [currentSlide, setCurrentSlide] = (0, import_react.useState)(initialSlide);
  const [isAutoplayActive, setIsAutoplayActive] = (0, import_react.useState)(
    mergedOptions.autoplay?.enabled ?? false
  );
  const [windowWidth, setWindowWidth] = (0, import_react.useState)(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sliderRef = (0, import_react.useRef)(null);
  const trackRef = (0, import_react.useRef)(null);
  const autoplayRef = (0, import_react.useRef)(null);
  const touchStartRef = (0, import_react.useRef)(0);
  const touchDeltaRef = (0, import_react.useRef)(0);
  const slideItems = (0, import_react.useMemo)(() => {
    if (children) {
      return import_react.default.Children.toArray(children);
    }
    return items;
  }, [children, items]);
  const totalSlides = slideItems.length;
  const slidesToShow = getResponsiveValue("slidesToShow", mergedOptions, windowWidth) ?? mergedOptions.slidesToShow ?? 1;
  const slidesToScroll = getResponsiveValue("slidesToScroll", mergedOptions, windowWidth) ?? mergedOptions.slidesToScroll ?? 1;
  const gap = getResponsiveValue("gap", mergedOptions, windowWidth) ?? mergedOptions.gap ?? 16;
  const loop = getResponsiveValue("loop", mergedOptions, windowWidth) ?? mergedOptions.loop ?? true;
  const centerMode = getResponsiveValue("centerMode", mergedOptions, windowWidth) ?? mergedOptions.centerMode ?? false;
  const showArrows = mergedOptions.pagination === "arrows" || mergedOptions.pagination === "both";
  const showDots = mergedOptions.pagination === "dots" || mergedOptions.pagination === "both";
  const arrowsEnabled = mergedOptions.arrows?.enabled ?? true;
  const dotsEnabled = mergedOptions.dots?.enabled ?? true;
  const transition = mergedOptions.transition ?? "slide";
  const speed = mergedOptions.speed ?? 500;
  const isMarquee = mergedOptions.marquee?.enabled ?? false;
  const maxSlide = Math.max(0, totalSlides - slidesToShow);
  const numericGap = typeof gap === "number" ? gap : parseInt(String(gap), 10) || 0;
  const slideWidth = `calc((100% - ${numericGap * (slidesToShow - 1)}px) / ${slidesToShow})`;
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  (0, import_react.useEffect)(() => {
    mergedOptions.onInit?.();
    return () => {
      mergedOptions.onDestroy?.();
    };
  }, [mergedOptions]);
  const goToSlide = (0, import_react.useCallback)(
    (index) => {
      const prevSlide2 = currentSlide;
      let newIndex = index;
      if (loop) {
        if (newIndex < 0) newIndex = maxSlide;
        if (newIndex > maxSlide) newIndex = 0;
      } else {
        newIndex = clamp(newIndex, 0, maxSlide);
      }
      setCurrentSlide(newIndex);
      mergedOptions.onSlideChange?.(newIndex, prevSlide2);
      if (newIndex === 0) mergedOptions.onReachStart?.();
      if (newIndex === maxSlide) mergedOptions.onReachEnd?.();
      if (trackRef.current && transition === "slide") {
        const offset = -(newIndex * (100 / slidesToShow));
        import_gsap.gsap.to(trackRef.current, {
          xPercent: offset,
          duration: speed / 1e3,
          ease: "power2.out"
        });
      }
    },
    [
      currentSlide,
      loop,
      maxSlide,
      slidesToShow,
      transition,
      speed,
      mergedOptions
    ]
  );
  const nextSlide = (0, import_react.useCallback)(() => {
    goToSlide(currentSlide + slidesToScroll);
  }, [currentSlide, slidesToScroll, goToSlide]);
  const prevSlide = (0, import_react.useCallback)(() => {
    goToSlide(currentSlide - slidesToScroll);
  }, [currentSlide, slidesToScroll, goToSlide]);
  const startAutoplay = (0, import_react.useCallback)(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    const delay = mergedOptions.autoplay?.delay ?? 3e3;
    autoplayRef.current = setInterval(() => {
      if (mergedOptions.autoplay?.stopOnLastSlide && currentSlide >= maxSlide) {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        setIsAutoplayActive(false);
        return;
      }
      nextSlide();
    }, delay);
    setIsAutoplayActive(true);
  }, [mergedOptions.autoplay, currentSlide, maxSlide, nextSlide]);
  const stopAutoplay = (0, import_react.useCallback)(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    setIsAutoplayActive(false);
  }, []);
  (0, import_react.useEffect)(() => {
    if (mergedOptions.autoplay?.enabled && !isMarquee) {
      startAutoplay();
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [mergedOptions.autoplay?.enabled, isMarquee, startAutoplay]);
  (0, import_react.useEffect)(() => {
    if (!isMarquee || !trackRef.current) return;
    const marqueeOptions = mergedOptions.marquee;
    const speed2 = marqueeOptions.speed ?? 50;
    const direction = marqueeOptions.direction === "right" ? 1 : -1;
    const track = trackRef.current;
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;
    const animation = import_gsap.gsap.to(track, {
      xPercent: direction * -50,
      duration: totalSlides * 100 / speed2,
      ease: "none",
      repeat: -1
    });
    const handleHover = () => {
      if (marqueeOptions.pauseOnHover) animation.pause();
    };
    const handleLeave = () => {
      if (marqueeOptions.pauseOnHover) animation.resume();
    };
    track.addEventListener("mouseenter", handleHover);
    track.addEventListener("mouseleave", handleLeave);
    return () => {
      animation.kill();
      track.innerHTML = clone;
      track.removeEventListener("mouseenter", handleHover);
      track.removeEventListener("mouseleave", handleLeave);
    };
  }, [isMarquee, mergedOptions.marquee, totalSlides]);
  const handleKeyDown = (0, import_react.useCallback)(
    (e) => {
      if (!mergedOptions.keyboard?.enabled) return;
      const key = e.key;
      switch (key) {
        case "ArrowLeft":
          e.preventDefault();
          prevSlide();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextSlide();
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(maxSlide);
          break;
        case "PageUp":
          if (mergedOptions.keyboard.pageUpDown) {
            e.preventDefault();
            goToSlide(currentSlide - slidesToShow);
          }
          break;
        case "PageDown":
          if (mergedOptions.keyboard.pageUpDown) {
            e.preventDefault();
            goToSlide(currentSlide + slidesToShow);
          }
          break;
      }
    },
    [
      mergedOptions.keyboard,
      prevSlide,
      nextSlide,
      goToSlide,
      maxSlide,
      currentSlide,
      slidesToShow
    ]
  );
  const handleTouchStart = (0, import_react.useCallback)(
    (e) => {
      if (!mergedOptions.draggable) return;
      touchStartRef.current = e.touches[0].clientX;
      touchDeltaRef.current = 0;
    },
    [mergedOptions.draggable]
  );
  const handleTouchMove = (0, import_react.useCallback)(
    (e) => {
      if (!mergedOptions.draggable) return;
      touchDeltaRef.current = e.touches[0].clientX - touchStartRef.current;
    },
    [mergedOptions.draggable]
  );
  const handleTouchEnd = (0, import_react.useCallback)(() => {
    if (!mergedOptions.draggable) return;
    const delta = touchDeltaRef.current;
    const threshold = 50;
    if (Math.abs(delta) > threshold) {
      if (mergedOptions.autoplay?.stopOnInteraction) {
        stopAutoplay();
      }
      if (delta > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    touchStartRef.current = 0;
    touchDeltaRef.current = 0;
  }, [
    mergedOptions.draggable,
    mergedOptions.autoplay,
    stopAutoplay,
    nextSlide,
    prevSlide
  ]);
  const handleMouseEnter = (0, import_react.useCallback)(() => {
    if (mergedOptions.autoplay?.pauseOnHover && isAutoplayActive) {
      stopAutoplay();
    }
  }, [mergedOptions.autoplay, isAutoplayActive, stopAutoplay]);
  const handleMouseLeave = (0, import_react.useCallback)(() => {
    if (mergedOptions.autoplay?.pauseOnHover && mergedOptions.autoplay.enabled && !isAutoplayActive) {
      startAutoplay();
    }
  }, [mergedOptions.autoplay, isAutoplayActive, startAutoplay]);
  const update = (0, import_react.useCallback)(() => {
    if (trackRef.current && transition === "slide") {
      const offset = -(currentSlide * (100 / slidesToShow));
      import_gsap.gsap.set(trackRef.current, { xPercent: offset });
    }
  }, [currentSlide, slidesToShow, transition]);
  const destroy = (0, import_react.useCallback)(() => {
    stopAutoplay();
    if (trackRef.current) {
      import_gsap.gsap.killTweensOf(trackRef.current);
    }
  }, [stopAutoplay]);
  (0, import_react.useImperativeHandle)(
    ref,
    () => ({
      goToSlide,
      nextSlide,
      prevSlide,
      getCurrentIndex: () => currentSlide,
      getTotalSlides: () => totalSlides,
      startAutoplay,
      stopAutoplay,
      isAutoplayRunning: () => isAutoplayActive,
      update,
      destroy
    }),
    [
      goToSlide,
      nextSlide,
      prevSlide,
      currentSlide,
      totalSlides,
      startAutoplay,
      stopAutoplay,
      isAutoplayActive,
      update,
      destroy
    ]
  );
  const canGoPrev = loop || currentSlide > 0;
  const canGoNext = loop || currentSlide < maxSlide;
  const trackClasses = [
    slider_default.sliderTrack,
    transition === "fade" ? slider_default.fade : "",
    isMarquee ? slider_default.marquee : "",
    mergedOptions.stretch ? slider_default.stretch : "",
    centerMode ? slider_default.centerMode : ""
  ].filter(Boolean).join(" ");
  const getArrowClasses = (direction) => {
    const baseClass = slider_default.arrow;
    const directionClass = direction === "prev" ? slider_default.arrowPrev : slider_default.arrowNext;
    const position = mergedOptions.arrows?.position ?? "inside";
    const positionClass = position === "inside" ? slider_default.arrowInside : position === "outside" ? slider_default.arrowOutside : slider_default.arrowBottom;
    const hoverClass = mergedOptions.arrows?.showOnHover ? slider_default.arrowShowOnHover : "";
    return [baseClass, directionClass, positionClass, hoverClass].filter(Boolean).join(" ");
  };
  const a11yOptions = mergedOptions.a11y;
  const sliderAriaAttrs = a11yOptions?.enabled ? {
    role: a11yOptions.containerRole ?? "region",
    "aria-roledescription": a11yOptions.containerRoleDescription ?? "carousel",
    "aria-label": "Slider"
  } : {};
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: sliderRef,
      id,
      className: `${slider_default.slider} ${className ?? ""}`,
      style,
      onKeyDown: handleKeyDown,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      tabIndex: mergedOptions.keyboard?.enabled ? 0 : void 0,
      ...sliderAriaAttrs,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: slider_default.sliderViewport, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: trackRef, className: trackClasses, children: slideItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SlideComponent,
          {
            item,
            index,
            currentSlide,
            slidesToShow,
            slideWidth,
            gap,
            lazyLoad: mergedOptions.lazyLoad,
            a11y: mergedOptions.a11y,
            renderSlide,
            renderImage,
            transition,
            totalSlides
          },
          index
        )) }) }),
        showArrows && arrowsEnabled && !isMarquee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          renderArrow ? renderArrow("prev", prevSlide, !canGoPrev) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              className: getArrowClasses("prev"),
              onClick: prevSlide,
              disabled: !canGoPrev,
              "aria-label": a11yOptions?.prevSlideMessage ?? "Previous slide",
              children: mergedOptions.arrows?.icons?.prev ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeftIcon, {})
            }
          ),
          renderArrow ? renderArrow("next", nextSlide, !canGoNext) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              className: getArrowClasses("next"),
              onClick: nextSlide,
              disabled: !canGoNext,
              "aria-label": a11yOptions?.nextSlideMessage ?? "Next slide",
              children: mergedOptions.arrows?.icons?.next ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, {})
            }
          )
        ] }),
        showDots && dotsEnabled && !isMarquee && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: slider_default.dots,
            role: "tablist",
            "aria-label": "Slide navigation",
            children: Array.from({ length: maxSlide + 1 }).map((_, index) => {
              const isActive = index === currentSlide;
              if (renderDot) {
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default.Fragment, { children: renderDot(index, isActive, () => goToSlide(index)) }, index);
              }
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  className: `${slider_default.dot} ${isActive ? slider_default.dotActive : ""} ${mergedOptions.dots?.className ?? ""} ${isActive ? mergedOptions.dots?.activeClassName ?? "" : ""}`,
                  onClick: mergedOptions.dots?.clickable !== false ? () => goToSlide(index) : void 0,
                  role: "tab",
                  "aria-selected": isActive,
                  "aria-label": a11yOptions?.paginationBulletMessage?.replace(
                    "{{index}}",
                    String(index + 1)
                  ) ?? `Go to slide ${index + 1}`
                },
                index
              );
            })
          }
        ),
        a11yOptions?.enabled && a11yOptions?.liveRegion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: slider_default.liveRegion,
            role: "status",
            "aria-live": a11yOptions.liveRegionPoliteness ?? "polite",
            "aria-atomic": "true",
            children: [
              "Slide ",
              currentSlide + 1,
              " of ",
              totalSlides
            ]
          }
        )
      ]
    }
  );
}
var Slider = (0, import_react.forwardRef)(SliderInner);
Slider.displayName = "Slider";
var Slider_default = Slider;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BREAKPOINTS,
  DEFAULT_OPTIONS,
  Slider
});
//# sourceMappingURL=index.cjs.map