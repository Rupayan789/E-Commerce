import { render, screen } from "@testing-library/react";
import CustomButton from "../custombutton.component";

describe('custom button tests', () => {
    test('should render base button when nothing is passed', () => {
        render(<CustomButton>Test</CustomButton>);
        const customButtonElement = screen.getByRole('button');
        expect(customButtonElement).toHaveStyle('background-color:black')
    })


    test('should render google button when passed google button type', () => {
        render(<CustomButton isGoogleSignIn={true}>Google Sign In</CustomButton>)
        const googleButtonElement = screen.getByRole('button')
        expect(googleButtonElement).toHaveStyle('background-color:#4285f4')
    })


    test('should render inverted button when passed inverted button type', () => {
        render(<CustomButton inverted={true}>Inverted Button</CustomButton>)
        const invertedButtonElement = screen.getByRole('button')
        expect(invertedButtonElement).toHaveStyle('background-color: white')
    })

})

