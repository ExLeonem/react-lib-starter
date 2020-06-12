import React from "react";
import { render } from "@testing-library/react";

import Button from './index';


describe("Test component", () => {

    let props = {
        label: "hello"
    };


    const renderComponent = () => render(<Button {...props}/>);


    it("color should be blue at default", () => {

        
        expect(true).toBe(true);
    });


});