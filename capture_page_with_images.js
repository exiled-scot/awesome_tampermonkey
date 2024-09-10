// ==UserScript==
// @name         Capture Page with Images
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Capture page content and images every 10 seconds
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        const getTimestamp = () => {
            const now = new Date();
            return now.toISOString().replace(/[:.]/g, '-');
        };

        const getImageDataURL = async (url) => {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const reader = new FileReader();
                return new Promise((resolve) => {
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
            } catch (error) {
                console.error('Error fetching image:', error);
                return url;
            }
        };

        const processImages = async (html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const images = Array.from(doc.querySelectorAll('img'));
            const imagePromises = images.map(async (img) => {
                const dataURL = await getImageDataURL(img.src);
                img.src = dataURL;
            });

            await Promise.all(imagePromises);
            return doc.documentElement.outerHTML;
        };

        const downloadHTML = (htmlContent) => {
            const timestamp = getTimestamp();
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `page-${timestamp}.html`;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
        };

        const capturePageWithImages = async () => {
            console.log('Starting capture...');
            const htmlContent = document.documentElement.outerHTML;
            const updatedHtmlContent = await processImages(htmlContent);
            downloadHTML(updatedHtmlContent);
            console.log('Capture complete.');
        };

        setInterval(capturePageWithImages, 10000);
    };
})();
