/**
 * iptController - Basic Playback Controller
 * Author: IlPlayerTop
 * License: Custom
 */

const iptController = {
    /**
     * Toggles play/pause for an audio or video element.
     * @param {string} elementId - The ID of the media element.
     */
    togglePlay(elementId) {
        const media = document.getElementById(elementId);
        if (!media || !(media instanceof HTMLMediaElement)) {
            console.error('[iptController] Invalid element.');
            return;
        }
        if (media.paused) {
            media.play().catch(err => console.error('[iptController] Playback error:', err));
        } else {
            media.pause();
        }
    }
};

// Example usage:
// iptController.togglePlay('myAudio');

module.exports = iptController;
