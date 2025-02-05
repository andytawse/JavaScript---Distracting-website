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
    close: document.querySelector('#modal .modal-close'),
}

const newsletterModal = {
    container: document.querySelector('#newsletter-modal'),
    backdrop: document.querySelector('#modal-backdrop'),
    close: document.querySelector('#newsletter-modal .modal-close'),
}

/**
 * Start the first modal sequence - the cookie popup.
 */
function init() {
    // Stop any forms in modals from submitting.
    // Form submission functionality would be dealt with separately.
    document.querySelector('#modal-backdrop form').addEventListener(
        'submit',
        (event) => { return event.preventDefault(); }
    );

    // Open the first modal.
    setTimeout(
        showModal,
        500,
        cookieModal,
        onCookieModalClose // Once the first modal closes, open the second.
    );
}

/**
 * Show modal plus background.
 *
 * @param modalElements
 *   Object containing necessary elements for modal to function e.g.
 *   { backdrop: Element, container: Element, close: Element }
 *  @param onClose
 *   Function to call when the modal is closed.
 */
function showModal(modalElements, onClose = null) {
    modalElements.backdrop.style.visibility = 'visible';
    modalElements.container.style.visibility = 'visible';
    modalElements.close.addEventListener('click', () => {
        closeModal(modalElements, onClose)
    });
}

/**
 * Complements showModal().
 *
 * @param modalElements
 *   See showModal().
 * @param onClose
 *   Function to call when the modal is closed.
 */
function closeModal(modalElements, onClose = null) {
    modalElements.backdrop.style.visibility = 'hidden';
    modalElements.container.style.visibility = 'hidden';
    modalElements.close.removeEventListener('click', () => {
        closeModal(modalElements)
    });
    if (onClose) {
        onClose();
    }
}

/**
 * Callback for when cookie modal closes.
 *
 * Shows the newsletter modal.
 */
function onCookieModalClose() {
    setTimeout(
        showModal,
        1000,
        newsletterModal
    );
}

/**
 * Only exporting one function, so use default. 
 * 
 * That means there is no need to alias the function when importing.
 */
export default init;