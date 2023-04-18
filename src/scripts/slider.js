import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla");
const options = {
	align: "center",
	breakpoints: {
		"(min-width: 768px)": { active: false },
	},
};

const emblaApi = EmblaCarousel(emblaNode, options);

console.log(emblaApi.slideNodes()); // Access API
