class icons extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src');
        if (!src) return;

        try {
            const response = await fetch(src);
            const svgText = await response.text();

            this.innerHTML = svgText;

            const svgElement = this.querySelector('svg');
            if (svgElement) {
                svgElement.style.display = 'block';
                svgElement.style.height = '100%';
                svgElement.style.width = 'auto';
            }
        } catch (error) {
            console.error('Failed to load SVG:', src, error);
        }
    }
}
customElements.define('vec-icon', icons);

class icon_button extends HTMLElement {
    connectedCallback() {
        const text = this.getAttribute('text');
        const src = this.getAttribute('src');
        this.innerHTML = `
        <vec-icon src="${src}"></vec-icon>
        <span>${text}</span>
        `
        this.style.display = 'flex';
        this.style.flexDirection = 'row';
        this.style.alignItems = 'center';
        this.style.overflow = 'hidden';
        this.querySelector('vec-icon').style.height = '100%';
        this.querySelector('span').style.fontSize = '1.3em';
    }
}

customElements.define('icon-button', icon_button);