// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract UrlShortener {
    // Maps a short code (e.g. "abc123") to a full URL
    mapping(string => string) private shortToLong;

    event URLShortened(string indexed shortCode, string longUrl);

    /**
     * @notice Create a shortened URL by mapping a short code to a long URL.
     * @param shortCode The short code (unique identifier)
     * @param longUrl The long URL to map to
     */
    function setURL(string calldata shortCode, string calldata longUrl) external {
        require(bytes(shortCode).length > 0, "Short code cannot be empty");
        require(bytes(longUrl).length > 0, "Long URL cannot be empty");
        // In a production scenario, you'd probably want some uniqueness checks,
        // or handle collisions differently. For now we allow overwriting.

        shortToLong[shortCode] = longUrl;
        emit URLShortened(shortCode, longUrl);
    }

    /**
     * @notice Retrieve the long URL for a given short code.
     * @param shortCode The short code to look up
     * @return longUrl The long URL that the short code points to
     */
    function getURL(string calldata shortCode) external view returns (string memory) {
        return shortToLong[shortCode];
    }
}
