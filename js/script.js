window.addEventListener('scroll', () => {
	document.body.style.cssText = `--scrollWindow : ${this.scrollY}px`;
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.container'
})