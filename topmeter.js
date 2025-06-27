/**
 * topMeter - Simple Volume Meter Utility
 * Author: IlPlayerTop
 * License: Custom
 */

const topMeter = {
    /**
     * Returns a textual representation of volume level.
     * @param {number} volume - Volume between 0.0 and 1.0.
     * @returns {string}
     */
    getLevelDescription(volume) {
        if (typeof volume !== 'number' || volume < 0 || volume > 1) {
            return 'Invalid';
        }
        if (volume === 0) return 'Muted';
        if (volume <= 0.3) return 'Low';
        if (volume <= 0.7) return 'Medium';
        return 'High';
    }
};

// Example usage:
// console.log(topMeter.getLevelDescription(0.5)); // Output: Medium

module.exports = topMeter;
