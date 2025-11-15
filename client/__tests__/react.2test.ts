import '@testing-library/jest-dom';
import { describe, it, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home.tsx";
import AnimatedCard from "../src/components/AnimatedCard.tsx";
import { BrowserRouter } from "react-router-dom";


 const fnMock2 = vi.fn()
//  const testProps = {
//         step : 2,
//         title:"string title",
//         options:[ {label: "test1val", value:"test2val"}],
//         onSelect: fnMock2,
//     };  
describe ('Home.tsx', () => {
    it('Renders home page buttons', () => {
        render (
            <BrowserRouter>  <Home /> </BrowserRouter>
        )
        const moodButton = screen.getByRole('button', {name:/mood/i})  //regex (not case-senstitive)
        // const charButton = screen.getByRole('button', {name:/character/i})
        // const randButton = screen.getByRole('button', {name:/Random/})

        expect (moodButton).toBeInTheDocument();
        //  expect (charButton).toBeInTheDocument();
        //   expect (randButton).toBeInTheDocument();

        // expect(moodButton).toHaveAttribute('aria-selected', 'true')
        // expect(moodButton).toHaveAttribute('aria-pressed', 'true')

    });

});


describe.skip ('Animated.tsx', () => {
    it('render animate card\'s props', () => {
       render( <AnimatedCard {...testProps} />)
    });
})
// Type '{ step: number; title: string; options: Mock<Procedure>; onSelect: Mock<Procedure>; }' is not assignable to type 'AnimatedCardProps'.
//   Types of property 'options' are incompatible.
//     Type 'Mock<Procedure>' is missing the following properties from type 'AnimatedOption[]': pop, push, concat, join, and 34 more.ts(2322)

/*
tests??? 
-quiz tests
-index test
-test for each compoennt- renders, props 
test three main buttons
/presentation saturday!

*/