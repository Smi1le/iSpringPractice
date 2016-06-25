/**
 * Created by Тима on 24.06.2016.
 */
//Базовый класс Shape
function Shape(size, canvas, colorNumber)
{
    var CHANGE_TIMER = 2000;
    this._ctx = canvas;
    this._colorNumber = colorNumber;
    this._rectangleSize = size;
    this._colorArray = ['yellow', 'blue', 'green', '#10FF01', '#FF0000'];
    var _timerId = 0;
    var _self = this;

    this.Draw = function () {} //Аналог виртуальной функции из c++

    //Функция для смены цвета
    this._ChangeColor = function()
    {
        if(++_self._colorNumber === this._colorArray.length)
        {
            _self._colorNumber = 0;
        }
    }

    this.Run = function()
    {
        _self.Draw();
        this._timerId = setTimeout(function Go() {
            _self.Draw();
            _timerId = setTimeout(Go, CHANGE_TIMER);
        }, CHANGE_TIMER);
    }

    this.Stop = function()
    {
        clearInterval(_timerId);
    }

    this.GetColor = function()
    {
        return _self._colorArray[_self._colorNumber];
    }
}



//Класс Rectangle
function Rectangle(size, canvas, colorNumber)
{
    Shape.apply(this, arguments);
    this.Draw = function()
    {
        this._ChangeColor();
        this._ctx.fillStyle = this._colorArray[this._colorNumber];
        this._ctx.fillRect(this._rectangleSize[0], this._rectangleSize[1], this._rectangleSize[2], this._rectangleSize[3]);

    }
}


function Outline(size, canvas, colorNumber)
{
    Shape.apply(this, arguments);
    //var _parentMethodDraw = this.Draw;
    this.Draw = function()
    {
        this._ctx.strokeStyle = this._colorArray[this._colorNumber];
        this._ctx.strokeRect(this._rectangleSize[0], this._rectangleSize[1], this._rectangleSize[2], this._rectangleSize[3]);
        this._ChangeColor();
    }
}

function Triangle(size, canvas, colorNumber)
{
    Shape.apply(this, arguments);
    this.Draw = function()
    {
        this._ctx.fillStyle = this._colorArray[this._colorNumber];
        this._ctx.beginPath();
        // Первое число - x, второе - y
        this._ctx.moveTo(450, 300);
        this._ctx.lineTo(350, 350);
        this._ctx.lineTo(550, 350);
        this._ctx.fill();
    }

    this.GetNewColor = function(number)
    {
        this._colorNumber = number;
    }

}



function Game()
{
    var _canvas = window.document.getElementById('test');
    var _ctx = _canvas.getContext('2d');
    var _rectangle = new Rectangle([300, 75, 300, 150], _ctx, 1);
    var _outline = new Outline([15, 55, 900, 500], _ctx, 0);
    var _triangle = new Triangle([], _ctx, 0);
    var _score = 0;
    var _gameIsOver = false;

    document.body.children[0].onclick = function(e)
    {
        if (e.which == 1)
        {
            if (_triangle.GetColor() == _rectangle.GetColor()) {
                ++_score;
                _triangle.GetNewColor(GetRandomNumber());
                _triangle.Run();
                TextRewriting();
            }
            else
            {
                _gameIsOver = true;
                _rectangle.Stop();
                _outline.Stop();
                Lose();
            }
        }
    }

    function GetRandomNumber()
    {
        return Math.floor(Math.random() * (4 - 0 + 1));
    }

    function CreateText(ctx, number)
    {
        ctx.fillStyle = "#00F";
        ctx.font = "italic 30pt Arial";
        ctx.textBaseline = "top";
        ctx.fillText("Score " + number, 930, 55);

    }

    function Lose()
    {
        _ctx.fillStyle = "#00F";
        _ctx.font = "italic 30pt Arial";
        _ctx.textBaseline = "top";
        _ctx.fillText("You lose", 130, 130);
    }


    function CreateGameElements()
    {
        CreateText(_ctx, _score);
        _rectangle.Run();
        _outline.Run();
        _triangle.GetNewColor(GetRandomNumber());
        _triangle.Run();
    }

    function TextRewriting()
    {
        _ctx.clearRect(930, 55, 1200, 100);
        CreateText(_ctx, _score);
    }
    
    this.Run = function()
    {
        CreateGameElements();
    }
}

var game = new Game();
game.Run();

