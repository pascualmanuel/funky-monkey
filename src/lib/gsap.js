// GSAP configuration and utility functions
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Common animation presets
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  },

  // Fade in from left
  fadeInLeft: {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: "power2.out",
  },

  // Fade in from right
  fadeInRight: {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: "power2.out",
  },

  // Scale in
  scaleIn: {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: "back.out(1.7)",
  },

  // Slide down
  slideDown: {
    height: 0,
    duration: 0.5,
    ease: "power2.out",
  },
};

// Animation functions
export function animateOnScroll(element, animation, trigger = "top 80%") {
  if (typeof window === "undefined") return;

  return gsap.fromTo(element, animation, {
    ...animation,
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    scrollTrigger: {
      trigger: element,
      start: trigger,
      toggleActions: "play none none reverse",
    },
  });
}

export function staggerAnimation(elements, animation, stagger = 0.2) {
  if (typeof window === "undefined") return;

  return gsap.fromTo(elements, animation, {
    ...animation,
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    stagger: stagger,
    duration: animation.duration || 0.8,
  });
}

export function hoverAnimation(element, hoverProps, normalProps) {
  if (typeof window === "undefined") return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, hoverProps);
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, normalProps);
  });
}

// Page transition animations
export function pageTransitionIn(element) {
  if (typeof window === "undefined") return;

  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );
}

export function pageTransitionOut(element) {
  if (typeof window === "undefined") return;

  return gsap.to(element, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power2.in",
  });
}

// Navbar scroll animation
export function animateNavbarOnScroll(navbar) {
  if (typeof window === "undefined") return;

  ScrollTrigger.create({
    start: "top -100",
    end: 99999,
    toggleClass: { className: "scrolled", targets: navbar },
  });
}

// Parallax effect
export function createParallax(element, speed = 0.5) {
  if (typeof window === "undefined") return;

  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export default gsap;
