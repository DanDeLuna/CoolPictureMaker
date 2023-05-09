const shapes = require('../lib/shapes.js')

describe('Triangle', () => {
    describe('generateforma', () => {
        
        it('should generate a triangle svg', () => {
            const shape = new shapes.Triangle('SVG', 'white', 'black');
            expect(shape.enerateforma()).toEqual(`<svg version=\"1.1\"
  height=\"250\"   width=\"350\"
    xmlns=\"http://www.w3.org/2000/svg\">

 <text x=\"150" y=\"138\" font-size=\"40\" text-anchor=\"middle\" fill=\"white\">SVG</text>    
<polygon points=\"150, 18 244, 182 56, 182\" fill=\"black\" />   
</svg>`);
        });
    });
});

describe('Circle', () => {
    describe('enerateforma', () => {
        // A test is created to check that circle svg text is generated
        it('should generate a circle svg', () => {
            const shape = new shapes.Circle('SVG', 'white', 'black');
            expect(shape.enerateforma()).toEqual(`<svg version=\"1.1\"
    width=\"300\" height=\"200\"
    xmlns=\"http://www.w3.org/2000/svg\">
 <text x=\"150" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"white\">SVG</text >
    <circle cx="150" cy="100" r="80" fill=\"black\" />
</svg>`);
        });
    });
});
describe('Square', () => {
    describe('enerateforma', () => {
        // A test is created to check that square svg text is generated
        it('should generate a square svg', () => {
            const shape = new shapes.Square('SVG', 'white', 'black');
            expect(shape.enerateforma()).toEqual(`<svg version=\"1.1\"
    width=\"350\" height=\"250\"
    xmlns=\"http://www.w3.org/2000/svg\">
 <text x=\"125" y=\"120\" font-size=\"60\" text-anchor=\"middle\" fill=\"white\">SVG</text>
    <rect x="50" y="20" width="150" height="150" fill=\"black\" />
</svg>`);
        });
    });
});
