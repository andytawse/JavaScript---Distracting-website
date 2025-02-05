/**
 * Show distracting modals.
 */

/**
 * A modal consists of its container (where is visible content is), its backdrop, and its close button.
 *
 * Passing this structure to showModal or closeModal allows any number of modal's to be dealt with in a standard way.
 *
 * @type {{container: Element, backdrop: Element, close: Element}}
 */
const cookieModal = {
    container: document.querySelector('#modal'),
    backdrop: document.querySelector('#modal-backdrop'),
    close: document.querySelector('#modal-close'),
}

/**
 * Start the first modal sequence - the cookie popup.
 */
function init() {
    setTimeout(showModal, 500, cookieModal);
}

/**
 * Show modal plus background.
 *
 * @param modalElements
 *   Object containing necessary elements for modal to function e.g.
 *   { backdrop: Element, container: Element, close: Element }
 */
function showModal(modalElements) {
    modalElements.backdrop.style.visibility = 'visible';
    modalElements.container.style.visibility = 'visible';
    modalElements.close.addEventListener('click', () => {
        closeModal(modalElements)
    });
}

function closeModal(modalElements) {
    modalElements.backdrop.style.visibility = 'hidden';
    modalElements.container.style.visibility = 'hidden';
    modalElements.close.removeEventListener('click', () => {
        closeModal(modalElements)
    });
}

/**
 * Only exporting one function, so use default. 
 * 
 * That means there is no need to alias the function when importing.
 */
export default init;