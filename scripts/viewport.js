'use strict';
window.addEventListener("load", AddOrRemoveSelectorFromElementInViewport);
window.addEventListener("scroll", AddOrRemoveSelectorFromElementInViewport);

/**
 * Checks if element is in Viewport.
 *
 * @param element Selector
 * @returns {boolean} true if element is in Viewport
 */
function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) ||
        rect.top <= 0 &&
        rect.left >= 0 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Adds or removes Elements from Viewport.
 */
function AddOrRemoveSelectorFromElementInViewport() {
    let elements = document.querySelectorAll(".main__article");

    for (let i = 0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add("main__article_visible");
        } else {
            // elements[i].classList.remove("main__articlce_visible");
        }
    }
}