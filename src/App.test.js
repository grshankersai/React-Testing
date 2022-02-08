/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import App from './App';
import {render , fireEvent, getRoles} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
beforeEach(()=>{
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(<App />);
  getByTestId = component.getByTestId;
  
})

describe("test1",()=>{
  test("Header renders with correct text", ()=>{

    // eslint-disable-next-line testing-library/render-result-naming-convention
    //const component = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    //const headerEl = component.getByTestId("header");
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
  
  
  
  })

})


describe("test2",()=>{
  test("Initial counter text to be 0",()=>{
  

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const counterVal = getByTestId("counter");
  
    expect(counterVal.textContent).toBe("0");
    
  })

})


describe("test3",()=>{
  test("Check the Change Factor Initial Value",()=>{

    //const {getByTestId} = render(<App />);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputEle = getByTestId('factor');
  
    expect(inputEle.value).toBe("1");
  
  })
  
})




describe("test4",()=>{
  test("Increment Button renders with + Symbol",()=>{
    //const {getByTestId} = render(<App />);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const addbtn = getByTestId("increment-button");
  
    expect(addbtn.textContent).toBe("+");
    
  })
  
})


describe("test5",()=>{
  test ("Check for decrement button render" , ()=>{
    //const {getByTestId} = render(<App/>);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const subbtn = getByTestId("decrement-button");
  
    expect(subbtn.textContent).toBe("-");
  })
  
})




describe("test6",()=>{
  test ("to check if the value of input element changes",()=>{
    //const {getByTestId} = render(<App />);  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputEle = getByTestId("factor");
    fireEvent.change(inputEle,{
      target:{
        value:5
      }
    });
  
    expect(inputEle.value).toBe("5");
  
  })
  
})




describe("test7",()=>{
  test("clicking on plus button adds 1 to counter",()=>{
    //const {getByTestId} = render(<App/>);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const btnEl = getByTestId('increment-button');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const counter = getByTestId('counter');
  
    expect(counter.textContent).toBe("0");
  
    fireEvent.click(btnEl);  
    
  
    expect(counter.textContent).toBe("1");
  
  })
  
})




describe("test8",()=>{
  test("Initial test for Sub-Button",()=>{
    // const {getByTestId} = render(<App/>);
     
     const subBtn = getByTestId('decrement-button');
     const counter= getByTestId('counter');
   
     expect(counter.textContent).toBe("0");
   
     fireEvent.click(subBtn);
     expect(counter.textContent).toBe("-1");
   
   
   })
  
})



describe("test9",()=>{
  test("for adding the changed factor", ()=>{
    //const {getByTestId} = render(<App />);
    const addBtn = getByTestId("increment-button");
    const subBtn = getByTestId("decrement-button");
    const factor = getByTestId("factor");
    const counter = getByTestId("counter");
  
    fireEvent.change(factor,{
      target:{
        value:4
      }
    });
  
    fireEvent.click(addBtn);
  
    expect(counter.textContent).toBe("4");
  
    fireEvent.change(factor,{
      target:{
        value:5
      }
    })
    fireEvent.click(subBtn);
    expect(counter.textContent).toBe("-1");
  
  })
  
})





describe("test10",()=>{
  test("for Color Change",()=>{

    //const {getByTestId} = render(<App />);
    const addBtn = getByTestId("increment-button");
    const subBtn = getByTestId("decrement-button");
    const factor = getByTestId("factor");
    const counter = getByTestId("counter");
  
    fireEvent.change(factor,{
      target:{
        value:101
      }
    });
  
    fireEvent.click(addBtn)
  
    expect(counter.style.color).toBe("green");
  
    fireEvent.change(factor,{
      target:{
        value:300
      }
    });
    fireEvent.click(subBtn);
    expect(counter.style.color).toBe('red');
  
  })
  
})

test("for Color Change",()=>{

  //const {getByTestId} = render(<App />);
  const addBtn = getByTestId("increment-button");
  const subBtn = getByTestId("decrement-button");
  const factor = getByTestId("factor");
  const counter = getByTestId("counter");

  fireEvent.change(factor,{
    target:{
      value:101
    }
  });

  fireEvent.click(addBtn)

  expect(counter.style.color).toBe("green");

  fireEvent.change(factor,{
    target:{
      value:300
    }
  });
  fireEvent.click(subBtn);
  expect(counter.style.color).toBe('red');

})