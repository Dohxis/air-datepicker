import { TestWindow } from '@stencil/core/dist/testing';

export const snapshot = (name, html, components) => {
	let element: HTMLElement;

	it(name, async () => {
		const window = new TestWindow();
		element = await window.load({
			components: [ ...components ],
			html
		});
		await window.flush();
		expect(element).toMatchSnapshot();
	});
};
