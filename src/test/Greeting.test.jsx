import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Greeting from "../components/Greeting"
import "@testing-library/jest-dom/vitest"
describe("Greetings", () => {
    it("render a default greeting", () => {
        render(<Greeting />);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });
    // it("render greeting with name", () => {
    //     render(<Greeting name={"araf"} />);
    //     expect(screen.getByText("Hello araf!")).toBeInTheDocument();
    // });

})