var swiper = null
var swiper2 = null

// swiper lib
function swiperResponsive () {
    const sw_wrapper = document.getElementsByClassName("sw-wrapper")

    if (window.innerWidth <= 320) {     
        for (let i = 0;i < sw_wrapper.length;i++) {
            sw_wrapper[i].classList.add("swiper-wrapper")
        }

        if (!swiper || !swiper.initialized) {
            swiper = new Swiper(".swiper-box-1", {
                pagination: {
                    el: ".swiper-pagination"
                },
            });
        }

        if (!swiper2 || !swiper2.initialized) {
            swiper2 = new Swiper(".swiper-box-2", {
                pagination: {
                    el: ".swiper-pagination"
                },
            });
        }

    } else {
        if (swiper) {
            swiper.destroy(true, true)
        }

        if (swiper2) {
            swiper2.destroy(true, true)
        }
        
        for (let i = 0;i < sw_wrapper.length;i++) {
            sw_wrapper[i].classList.remove("swiper-wrapper")
        }

    }
}

swiperResponsive()
window.addEventListener("resize", swiperResponsive);