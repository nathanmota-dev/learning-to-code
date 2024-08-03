import { render, screen } from '@testing-library/react';
import App from './App';

const sum = (x: number, y: number) => {
    return x + y;
}

describe("App Component", () => {
    it("should sum correctly", () => {
        expect(sum(4, 4)).toBe(8);
    });

    it("shoud render with hello message", () => {
        render(<App />);

        screen.getByText("Hello world!");
    });
});

export default {};