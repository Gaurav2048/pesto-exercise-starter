import {copyObj, 
  isComplimentaryDirection, 
  positionPrey, 
  isPreyHunted, 
  isGameOver} from "./index"

describe('index', () => {
  test('must return copy of an object.', () => {
    const obj = {
      a:22, b:36
    }
    const copy = copyObj(obj)
    obj.a = 23
    
    expect(copy.a).toBe(22);
  });

  test('must find oposite or complementary direction of movements', ()=>{
    const square_1 = {
      top: 38, left: 38, direction: 38
    }
    const square_2 = {
      top: 38, left: 38, direction: 40
    }
    expect(isComplimentaryDirection(square_1, square_2)).toBe(true)
  })

  test('it must return the prey is hunted or not', ()=>{
    var preyPosition = {top: 20, left: 20}
    var snakeHeadPosition = {top: 20, left: 20}
    expect(isPreyHunted(preyPosition, snakeHeadPosition)).toBe(true)

    preyPosition = {top: 10, left: 10}
    snakeHeadPosition = {top: 11, left: 11}
    expect(isPreyHunted(preyPosition, snakeHeadPosition)).toBe(true)

    preyPosition = {top: 10, left: 10}
    snakeHeadPosition = {top: 9, left: 9}
    expect(isPreyHunted(preyPosition, snakeHeadPosition)).toBe(false)
  })

  test('must respond true when game over', ()=>{
    var snakeHeadPosition = [{top: 80, left: 80, direction: 40}]
    expect(isGameOver(snakeHeadPosition).isGameOver).toBe(true)

    snakeHeadPosition = [{top: 38, left: 38, direction: 38}, {top: 40, left: 38, direction: 38}, {top: 42, left: 38, direction: 38}]
    expect(isGameOver(snakeHeadPosition).isGameOver).toBe(false)

  })

});