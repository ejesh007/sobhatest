
console.clear();
gsap.registerPlugin(MotionPathPlugin) 

gsap.to("#div", {
  motionPath: {
    path: "#path-1",
    align:"#path-1",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    
  },
  transformOrigin: "50% 50%",
  duration: 10,
  ease: "power1.inOut",
  scale: 2.5,
});


 





 