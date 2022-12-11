window.addEventListener('scroll', () => {
	document.documentElement.style.setProperty('--scrollWindow', `${this.scrollY}px`) 
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.container'
})