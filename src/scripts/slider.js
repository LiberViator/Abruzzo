import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla");
const options = {
	align: "start",
	breakpoints: {
		"(min-width: 1024px)": { active: false },
	},
};

const emblaApi = EmblaCarousel(emblaNode, options);

console.log(emblaApi.slideNodes()); // Access API
