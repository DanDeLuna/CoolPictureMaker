// Shapes in class constructor 
class Forma {
    constructor(letra, letraColor, formaColor, formaCode, textPositionX, textPositionY, fontSize) {
        this.letra = letra;
        this.letraColor = letraColor;
        this.formaColor = formaColor;
        this.formaCode = formaCode;
        this.textPositionX = textPositionX;
        this.textPositionY = textPositionY;
        this.fontSize = fontSize;
    }
// function to generate shape svg text    
    generateforma(){
        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <${this.formaCode} fill="${this.formaColor}" />

    <text x="${this.textPositionX}" y="${this.textPositionY}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
// Circle, Triangle and Square 
class Triangle extends Forma {
    constructor(letra, letraColor, formaColor) {
        super(letra, letraColor, formaColor, 'polygon points="150, 18 244, 182 56, 182"', 155, 142, 45);
    }
}
class Circle extends Forma {
    constructor(letra, letraColor, formaColor) {
        super(letra, letraColor, formaColor, 'circle cx="150" cy="100" r="80"', 155, 130, 65);
    }
}
class Square extends Forma {
    constructor(letra, letraColor, formaColor) {
        super(letra, letraColor, formaColor, 'rect x="50" y="20" width="150" height="150"', 130, 125, 65);
    }
}

module.exports = {
    Circle,
    Triangle,
    Square,
};