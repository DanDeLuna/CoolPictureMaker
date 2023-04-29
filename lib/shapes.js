// Shapes in class constructor 
class Shape {
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

    <${this.shapeCode} fill="${this.shapeColor}" />

    <text x="${this.textPositionX}" y="${this.textPositionY}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
