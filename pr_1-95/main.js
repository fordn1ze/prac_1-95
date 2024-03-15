// №1
// let elem = document.querySelector('#elem');
// elem.style.color = 'red';

// console.log(elem.style.color);

// №2
// let myDiv = document.getElementById('myDiv');
// let changeSizeButton = document.getElementById('changeSizeButton');

// changeSizeButton.addEventListener('click', function() {
//   myDiv.style.width = '400px';
//   myDiv.style.height = '300px';
// });

// №2.1
// let elem = document.getElementById('elem');
// let getDimensionsButton = document.getElementById('getDimensionsButton');

// getDimensionsButton.addEventListener('click', function() {
//   let widthWithoutUnits = parseInt(elem.style.width);
//   let heightWithoutUnits = parseInt(elem.style.height);

//   console.log('Ширина без единиц измерения:', widthWithoutUnits);
//   console.log('Высота без единиц измерения:', heightWithoutUnits);
// });

// №2.2
// let elem = document.getElementById('elem');
// let getFontSizeButton = document.getElementById('getFontSizeButton');

// getFontSizeButton.addEventListener('click', function() {
//   let fontSizeWithoutUnits = parseFloat(window.getComputedStyle(elem).fontSize);

//   console.log('Размер шрифта без единиц измерения:', fontSizeWithoutUnits);
// });

// №3.4
// let elem = document.getElementById('elem');
// let increaseSizeButton = document.getElementById('increaseSizeButton');

// increaseSizeButton.addEventListener('click', function() {
//   let currentWidth = parseInt(window.getComputedStyle(elem).width);
//   let currentHeight = parseInt(window.getComputedStyle(elem).height);

//   elem.style.width = (currentWidth + 50) + 'px';
//   elem.style.height = (currentHeight + 50) + 'px';
// });

// №3.5
// let elem = document.getElementById('elem');
// let increaseSizeButton = document.getElementById('increaseSizeButton');

// increaseSizeButton.addEventListener('click', function() {
//   let currentWidth = parseInt(window.getComputedStyle(elem).width);
//   let currentHeight = parseInt(window.getComputedStyle(elem).height);

//   let newWidth = currentWidth * 1.1;
//   let newHeight = currentHeight * 1.1;

//   elem.style.width = newWidth + 'px';
//   elem.style.height = newHeight + 'px';
// });

// №4
// let elem = document.getElementById('elem');
// let getBorderStyleButton = document.getElementById('getBorderStyleButton');

// getBorderStyleButton.addEventListener('click', function() {
//   let computedStyle = window.getComputedStyle(elem);
  
//   console.log('Толщина границы:', computedStyle.borderWidth);
//   console.log('Тип границы:', computedStyle.borderStyle);
//   console.log('Цвет границы:', computedStyle.borderColor);
// });

// №5
// let elem = document.getElementById('elem');
// let hideButton = document.getElementById('hideButton');
// let showButton = document.getElementById('showButton');

// hideButton.addEventListener('click', function() {
//   elem.style.display = 'none';
// });

// showButton.addEventListener('click', function() {
//   elem.style.display = '';
// });

// №5.1
// let myDiv = document.getElementById('myDiv');
// let makeRedButton = document.getElementById('makeRedButton');
// let restoreColorButton = document.getElementById('restoreColorButton');

// let originalColor = window.getComputedStyle(myDiv).backgroundColor;

// makeRedButton.addEventListener('click', function() {
//   myDiv.style.backgroundColor = 'red';
// });

// restoreColorButton.addEventListener('click', function() {
//   myDiv.style.backgroundColor = originalColor;
// });

// №6
// let elem = document.getElementById('yourElementId');

// elem.style.cssText = `
//   width: 100px;
//   height: 100px;
//   margin: 10px auto;
//   color: red;
// `;

// №8
// let elem = document.getElementById('elem');
// let getSizeButton = document.getElementById('getSizeButton');

// getSizeButton.addEventListener('click', function() {
//   let computedStyle = getComputedStyle(elem);

//   console.log('Ширина элемента:', computedStyle.width);
//   console.log('Высота элемента:', computedStyle.height);
// });

// №8.1
// let elem = document.getElementById('elem');
// let increaseSizeButton = document.getElementById('increaseSizeButton');

// increaseSizeButton.addEventListener('click', function() {
//   let computedStyle = getComputedStyle(elem);

//   let currentWidth = parseInt(computedStyle.width);
//   let currentHeight = parseInt(computedStyle.height);

//   elem.style.width = (currentWidth * 2) + 'px';
//   elem.style.height = (currentHeight * 2) + 'px';
// });

// №9
// let elem = document.getElementById('elem');
// let getFontSizeButton = document.getElementById('getFontSizeButton');

// getFontSizeButton.addEventListener('click', function() {
//   let computedStyle = getComputedStyle(elem);

//   let fontSizeInEm = parseFloat(computedStyle.fontSize);
  
//   console.log('Размер шрифта в em:', fontSizeInEm);
// });

// №10
// let paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//   let number = parseInt(paragraph.textContent);

//   if (number % 2 === 0) {
//     paragraph.classList.add('even');
//   } else {
//     paragraph.classList.add('odd');
//   }
// });

// №11
// let paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//   paragraph.addEventListener('click', function() {
//     paragraph.classList.toggle('active');
//   });
// });

// №12
// let myInput = document.getElementById('myInput');

// myInput.addEventListener('blur', function() {
//   if (myInput.value.length <= 9) {
//     myInput.classList.remove('invalid');
//     myInput.classList.add('valid');
//   } else {
//     myInput.classList.remove('valid');
//     myInput.classList.add('invalid');
//   }
// });

// №13
// let myInput = document.getElementById('myInput');

// myInput.addEventListener('blur', function() {
//   let inputValue = parseFloat(myInput.value);

//   if (!isNaN(inputValue)) {
//     if (inputValue < 10) {
//       myInput.dataset.type = 'green';
//     } else if (inputValue >= 10 && inputValuse <= 20) {
//       myInput.dataset.type = 'yellow';
//     } else {
//       myInput.dataset.type = 'red';
//     }
//   }
// });

// №15
// let testElem = document.getElementById('testElem');

// console.log(testElem);

// №16
// let myElement = document.getElementById('myElement');
// let getSizeButton = document.getElementById('getSizeButton');

// getSizeButton.addEventListener('click', function() {
//   console.log('Клиентская ширина:', myElement.clientWidth);
//   console.log('Клиентская высота:', myElement.clientHeight);
// });

// №17
// let myElement = document.getElementById('myElement');
// let getSizeButton = document.getElementById('getSizeButton');

// getSizeButton.addEventListener('click', function() {
//   console.log('Полная ширина:', myElement.offsetWidth);
//   console.log('Полная высота:', myElement.offsetHeight);
// });

// №18
// let myElement = document.getElementById('myElement');
// let getSizeButton = document.getElementById('getSizeButton');

// getSizeButton.addEventListener('click', function() {
//   console.log('Ширина с прокруткой:', myElement.scrollWidth);
//   console.log('Высота с прокруткой:', myElement.scrollHeight);
// });

// №19
// let myElement = document.getElementById('myElement');
// let getScrollButton = document.getElementById('getScrollButton');

// getScrollButton.addEventListener('click', function() {
//   console.log('Прокрутка сверху:', myElement.scrollTop);
// });

// №19.1
// let myElement = document.getElementById('myElement');
// let checkScrollButton = document.getElementById('checkScrollButton');

// checkScrollButton.addEventListener('click', function() {
//   if (myElement.scrollTop > 0) {
//     console.log('Элемент прокручен сверху');
//   } else {
//     console.log('Элемент не прокручен сверху');
//   }
// });

// №19.2
// let myElement = document.getElementById('myElement');
// let getTotalScrollButton = document.getElementById('getTotalScrollButton');

// getTotalScrollButton.addEventListener('click', function() {
//   myElement.scrollTop = myElement.scrollHeight;

//   console.log('Полная прокрутка:', myElement.scrollTop);
// });

// №19.3
// let myElement = document.getElementById('myElement');
// let getDiffButton = document.getElementById('getDiffButton');

// getDiffButton.addEventListener('click', function() {
//   let scrollHeight = myElement.scrollHeight;
//   let scrollDiff = scrollHeight - myElement.scrollTop;

//   console.log('scrollHeight:', scrollHeight);
//   console.log('scrollDiff:', scrollDiff);
// });

// №19.4
// let myElement = document.getElementById('myElement');
// let getSumDiffButton = document.getElementById('getSumDiffButton');

// getSumDiffButton.addEventListener('click', function() {
//   let offsetHeight = myElement.offsetHeight;
//   let sumDiff = myElement.scrollHeight - (offsetHeight + myElement.scrollTop);

//   console.log('offsetHeight:', offsetHeight);
//   console.log('sumDiff:', sumDiff);
// });

// №20
// let myElement = document.getElementById('myElement');
// let scrollButton = document.getElementById('scrollButton');

// scrollButton.addEventListener('click', function() {
//   myElement.scrollTop += 100;
//   myElement.scrollLeft += 50;
// });

// №20.1
// let myElement = document.getElementById('myElement');
// let scrollDownButton = document.getElementById('scrollDownButton');

// scrollDownButton.addEventListener('click', function() {
//   myElement.scrollTop += 50;
// });

// №20.2
// let myElement = document.getElementById('myElement');
// let scrollTopButton = document.getElementById('scrollTopButton');

// scrollTopButton.addEventListener('click', function() {
//   myElement.scrollTop = 0;
// });

// №20.3
// let myElement = document.getElementById('myElement');
// let scrollBottomButton = document.getElementById('scrollBottomButton');

// scrollBottomButton.addEventListener('click', function() {
//   myElement.scrollTop = myElement.scrollHeight - myElement.clientHeight;
// });

// №21
// let myElement = document.getElementById('myElement');
// let scrollToBottomButton = document.getElementById('scrollToBottomButton');

// scrollToBottomButton.addEventListener('click', function() {
//   myElement.scrollTop = myElement.scrollHeight - myElement.clientHeight;
// });

// №21.1
// let myElement = document.getElementById('myElement');
// let checkScrollButton = document.getElementById('checkScrollButton');

// checkScrollButton.addEventListener('click', function() {
//   if (myElement.scrollTop === myElement.scrollHeight - myElement.clientHeight) {
//     alert('Элемент прокручен до конца');
//   } else {
//     alert('Элемент не прокручен до конца');
//   }
// });

// №22
// let myElement = document.getElementById('myElement');
// let expandHeightButton = document.getElementById('expandHeightButton');

// expandHeightButton.addEventListener('click', function() {
//   myElement.style.height = myElement.scrollHeight + 'px';
// });

// №23
// let getScrollbarWidthButton = document.getElementById('getScrollbarWidthButton');
//   let resultElement = document.getElementById('result');

//   getScrollbarWidthButton.addEventListener('click', function() {
//     let div = document.createElement('div');
//     div.style.overflowY = 'scroll';
//     div.style.width = '50px';
//     div.style.height = '50px';

//     document.body.append(div);

//     let scrollbarWidth = div.offsetWidth - div.clientWidth;

//     div.remove();

//     resultElement.textContent = 'Ширина полосы прокрутки: ' + scrollbarWidth + 'px';
//   });

// №24
// let getWindowSizeButton = document.getElementById('getWindowSizeButton');
//   let windowSizeResult = document.getElementById('windowSizeResult');

//   getWindowSizeButton.addEventListener('click', function() {
//     let windowWidth = window.innerWidth || document.documentElement.clientWidth;
//     let windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     windowSizeResult.textContent = 'Ширина окна: ' + windowWidth + 'px, Высота окна: ' + windowHeight + 'px';
//   });

// №24.1
// let checkVerticalScrollButton = document.getElementById('checkVerticalScrollButton');
//   let verticalScrollResult = document.getElementById('verticalScrollResult');

//   checkVerticalScrollButton.addEventListener('click', function() {
//     let hasVerticalScroll = document.body.scrollHeight > window.innerHeight;

//     if (hasVerticalScroll) {
//       verticalScrollResult.textContent = 'Вертикальная прокрутка присутствует';
//     } else {
//       verticalScrollResult.textContent = 'Вертикальная прокрутка отсутствует';
//     }
//   });

// №24.2
// let checkHorizontalScrollButton = document.getElementById('checkHorizontalScrollButton');
//   let horizontalScrollResult = document.getElementById('horizontalScrollResult');

//   checkHorizontalScrollButton.addEventListener('click', function() {
//     let hasHorizontalScroll = document.body.scrollWidth > window.innerWidth;

//     if (hasHorizontalScroll) {
//       horizontalScrollResult.textContent = 'Горизонтальная прокрутка присутствует';
//     } else {
//       horizontalScrollResult.textContent = 'Горизонтальная прокрутка отсутствует';
//     }
//   });

// №25
// let getScrollHeightButton = document.getElementById('getScrollHeightButton');
//   let scrollHeightResult = document.getElementById('scrollHeightResult');

//   getScrollHeightButton.addEventListener('click', function() {
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );

//     scrollHeightResult.textContent = 'Высота с учетом прокрученной части: ' + scrollHeight + 'px';
//   });

// №25.1
// let getScrollWidthButton = document.getElementById('getScrollWidthButton');
//   let scrollWidthResult = document.getElementById('scrollWidthResult');

//   getScrollWidthButton.addEventListener('click', function() {
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );

//     scrollWidthResult.textContent = 'Ширина с учетом прокрученной части: ' + scrollWidth + 'px';
//   });

// №25.2
// let getHiddenHeightButton = document.getElementById('getHiddenHeightButton');
//   let hiddenHeightResult = document.getElementById('hiddenHeightResult');

//   getHiddenHeightButton.addEventListener('click', function() {
//     let hiddenHeight = document.body.scrollHeight - document.documentElement.clientHeight;

//     hiddenHeightResult.textContent = 'Высота спрятанной под прокруткой части: ' + hiddenHeight + 'px';
//   });

// №26
// let getVerticalScrollButton = document.getElementById('getVerticalScrollButton');
//   let verticalScrollResult = document.getElementById('verticalScrollResult');

//   getVerticalScrollButton.addEventListener('click', function() {
//     let verticalScroll = window.pageYOffset;

//     verticalScrollResult.textContent = 'Вертикальная прокрутка окна: ' + verticalScroll + 'px';
//   });

// №26.1
// let getRemainingVerticalScrollButton = document.getElementById('getRemainingVerticalScrollButton');
//   let remainingVerticalScrollResult = document.getElementById('remainingVerticalScrollResult');

//   getRemainingVerticalScrollButton.addEventListener('click', function() {
//     let remainingVerticalScroll = document.documentElement.scrollHeight - window.pageYOffset - window.innerHeight;

//     remainingVerticalScrollResult.textContent = 'Остаток прокрутки до конца по вертикали: ' + remainingVerticalScroll + 'px';
//   });

// №27
// let scrollWindowButton = document.getElementById('scrollWindowButton');

//   scrollWindowButton.addEventListener('click', function() {
//     document.documentElement.scrollTop = 300;
//   });

// №27.1
// let scrollWindowButton = document.getElementById('scrollWindowButton');

//   scrollWindowButton.addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight - 100;
//   });

// №27.2
// let scrollToTopButton = document.getElementById('scrollToTopButton');

//   scrollToTopButton.addEventListener('click', function() {
//     document.documentElement.scrollTop = 0;
//   });

// №27.3
// let scrollToBottomButton = document.getElementById('scrollToBottomButton');

//   scrollToBottomButton.addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight;
//   });

// №28
// let scrollToTopButton = document.getElementById('scrollToTopButton');

//   scrollToTopButton.addEventListener('click', function() {
//     window.scrollTo({
//       top: 300,
//       behavior: 'smooth'
//     });
//   });

// №28.1
// let scrollToTopButton = document.getElementById('scrollToTopButton');

//   scrollToTopButton.addEventListener('click', function() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

// №28.2
// let scrollToBottomButton = document.getElementById('scrollToBottomButton');

//   scrollToBottomButton.addEventListener('click', function() {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//     });
//   });

// №29
// let scrollDownButton = document.getElementById('scrollDownButton');

//   scrollDownButton.addEventListener('click', function() {
//     window.scrollBy({
//       top: 100,
//       behavior: 'smooth'
//     });
//   });

// №29.1
// let scrollUpButton = document.getElementById('scrollUpButton');

//   scrollUpButton.addEventListener('click', function() {
//     window.scrollBy({
//       top: -100,
//       behavior: 'smooth'
//     });
//   });

// №29.2
// let scrollDownButton = document.getElementById('scrollDownButton');

//   scrollDownButton.addEventListener('click', function() {
//     window.scrollBy({
//       top: 300,
//       behavior: 'smooth'
//     });
//   });

// №29.3
// let scrollUpButton = document.getElementById('scrollUpButton');

//   scrollUpButton.addEventListener('click', function() {

//     window.scrollBy({
//       top: -300,
//       behavior: 'smooth'
//     });
//   });

// №30
// function scrollToElement() {
//     document.getElementById('targetElement').scrollIntoView({
//       behavior: 'smooth'
//     });
//   }

//   function scrollByToElement() {
//     window.scrollBy({
//       top: 200,
//       behavior: 'smooth'
//     });
//   }

// №31
// window.addEventListener('scroll', function() {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       console.log('Достигнут конец страницы!');
//     }
//   });

// №32
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let map = new Map();

// map.set(array1, 'Data for Array1');
// map.set(array2, 'Data for Array2');
// map.set(array3, 'Data for Array3');

// console.log(map.get(array1));
// console.log(map.get(array2));
// console.log(map.get(array3));

// №32.1
// let obj1 = { id: 1, name: 'Object1' };
// let obj2 = { id: 2, name: 'Object2' };
// let obj3 = { id: 3, name: 'Object3' };

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let map = new Map();

// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);

// console.log(map.get(obj1));
// console.log(map.get(obj2));
// console.log(map.get(obj3));

// №35
// let myMap = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
// ]);
  
// let keysArray = Array.from(myMap.keys());
  
// for (let key of keysArray) {
//     console.log(key);
// }

// №35.1
// let myMap = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
// ]);
  
// let entriesArray = Array.from(myMap.entries());
  
// for (let [key, value] of entriesArray) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }

// №36
// let inputs = document.querySelectorAll('input');

// let inputMap = new Map();

// inputs.forEach((input, index) => {
//   inputMap.set(input, index + 1);
// });

// inputs.forEach(input => {
//   input.addEventListener('click', function() {
//     this.value = inputMap.get(this);
//   });
// });

// №36.1
// let numbersHistory = [];

// function handleEnter(event) {
//   if (event.key === 'Enter') {
//     let inputValue = parseFloat(this.value);

//     if (!isNaN(inputValue)) {
//       numbersHistory.push(inputValue);
//       this.value = '';
//     }
//   }
// }

// function handleBlur() {
//   console.log(numbersHistory);
// }

// let inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
//   input.addEventListener('keydown', handleEnter);
//   input.addEventListener('blur', handleBlur);
// });

// №37
// let set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);

// console.log(set);

// №38
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);

// console.log(set);

// №38.1
// let set = new Set([1, 2, 3]);

// set.add(2);

// console.log(set);

// №39
// let set = new Set([1, 2, 3]);

// console.log(set.size);

// №39.1
// let set = new Set([1, 2, 3]);

// console.log(set.has(4));

// №40
// let set = new Set([1, 2, 3, 4, 5]);

// let sum = 0;
// for (let elem of set) {
//     sum += elem;
// }

// console.log(sum);

// №41
// let set = new Set([1, 2, 3]);

// let arr1 = [...set];

// let arr2 = Array.from(set);

// console.log(arr1);
// console.log(arr2);

// №41.1
// let arr = [1, 2, 3];

// let set = new Set(arr);
// console.log(arr)

// №42
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
  
// let originalArray = [1, 2, 3, 1, 3, 4];
// let arrayWithoutDuplicates = removeDuplicates(originalArray);
  
// console.log(arrayWithoutDuplicates);

// №43
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// let set = new Set;

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }

// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });

// №45
// let elems = document.querySelectorAll('p');

// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);

// console.log(elems.length);

// for (let elem of elems) {
//     console.log(elem);
// }

// №46
// let elems = document.querySelectorAll('p');

// try {
//     console.log(elems.map(elem => elem.textContent));
// } catch (error) {
//     console.log('Ошибка:', error.message);
// }

// try {
//     console.log(elems.join(', '));
// } catch (error) {
//     console.log('Ошибка:', error.message);
// }

// try {
//     console.log(elems.slice(1, 3));
// } catch (error) {
//     console.log('Ошибка:', error.message);
// }

// №47
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
// ];

// for (let item of test) {
//     let isArray = Array.isArray(item);
//     console.log(isArray);
// }

// №48
// let elems = document.querySelectorAll('p');

// let arr1 = [];
// for (let elem of elems) {
//   arr1.push(elem);
// }

// let arr2 = [...elems];

// let arr3 = Array.from(elems);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// №48.1
// let elems = document.querySelectorAll('p');

// let elemsArray = Array.from(elems);

// let slicedElems = elemsArray.slice(1, -1);

// console.log(slicedElems);

// №49
// let container = document.getElementById('container');
// let childNodes = container.childNodes;

// console.log(childNodes);

// №49.1
// let container = document.getElementById('container');
// let children = container.children;

// console.log(children);

// №49.2
// let elementsByClassName = document.getElementsByClassName('paragraph');
// console.log(elementsByClassName);

// №50
// let container = document.getElementById('container');
// let children1 = container.children;
// let children2 = container.childNodes;

// console.log(children1.length);
// console.log(children2.length);


// let newParagraph = document.createElement('p');
// newParagraph.textContent = 'New Paragraph';
// container.appendChild(newParagraph);

// console.log(children1.length);
// console.log(children2.length);

// №50.1
// let parent = document.getElementById('parent');

// let childNodesCollection = parent.childNodes;
// console.log("Initial childNodes:", childNodesCollection);

// let newParagraph = document.createElement('p');
// newParagraph.textContent = 'New Paragraph';

// parent.appendChild(newParagraph);

// console.log("Updated childNodes:", childNodesCollection);

// №51
// let sym1 = Symbol();
// let sym2 = Symbol();
// let sym3 = Symbol();

// console.log(sym1, sym2, sym3);

// №52
// let sym1 = Symbol('первый символ');
// let sym2 = Symbol('второй символ');
// let sym3 = Symbol('третий символ');

// console.log(sym1, sym2, sym3);

// №53
// let obj = {
// 	regularKey: 'ordinary value',
// 	[Symbol('uniqueKey')]: 'symbolic value'
// };
  
// console.log(obj);

// №53.1
// let obj = {
// 	regularKey: 'ordinary value',
// 	[Symbol('uniqueKey')]: 'symbolic value'
// };
  
// console.log(obj);

// №54
// let obj = {
// 	regularKey: 'ordinary value',
// 	[Symbol('uniqueKey')]: 'symbolic value'
// };
  
//   for (let key in obj) {
// 	console.log(obj[key]);
// }

// №55
// let obj = {
//     regularKey: 'ordinary value',
//     [Symbol('uniqueKey')]: function() {
//       console.log(new Date().toLocaleTimeString());
//     }
// };

// let uniqueKey = Object.getOwnPropertySymbols(obj)[0];
// obj[uniqueKey]();

// №56
// let arr = [1, 2, 3];

// let sym = Symbol();

// arr[sym] = function () {
//     let sum = 0;

//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }

//     return sum;
// };

// let result = arr[sym]();
// console.log(result);

// №56.1
// let arr = [1, 2, 3];

// let sym = Symbol();

// arr[sym] = function () {
//     let sum = 0;

//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }

//     return sum;
// };

// let result = arr[sym]();
// console.log(result);

// №56.2
// let arr = [1, 2, 3];

// let sym = Symbol();

// arr[sym] = function () {
//     let sum = 0;

//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }

//     return sum;
// };

// arr.push(4, 5, 6);

// let result = arr[sym]();
// console.log(result);

// №57
// let obj1 = {};
// let obj2 = {};
// let obj3 = {};

// let sym = Symbol.for('sum');

// obj1[sym] = function () {
//     let sum = 0;

//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }

//     return sum;
// };

// obj2[sym] = function () {
//     let sum = 0;

//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }

//     return sum;
// };

// obj3[sym] = function () {
//     let sum = 0;

//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }

//     return sum;
// };

// obj1.a = 1;
// obj1.b = 2;
// obj1.c = 3;

// obj2.x = 4;
// obj2.y = 5;
// obj2.z = 6;

// obj3.alpha = 7;
// obj3.beta = 8;
// obj3.gamma = 9;

// let result1 = obj1[sym]();
// let result2 = obj2[sym]();
// let result3 = obj3[sym]();

// console.log(result1);
// console.log(result2);
// console.log(result3);

// №58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);

// console.log(key1);
// console.log(key2);

// №59
// let map = new Map();
// let iteratorKey = Symbol.iterator;

// console.log(map[iteratorKey]);

// №59.1
// let set = new Set();
// let iteratorKey = Symbol.iterator;

// console.log(set[iteratorKey]);

// №60
// let str = "Hello";
// for (let char of str) {
//   console.log(char);
// }

// let typedArray = new Uint8Array([1, 2, 3]);
// for (let num of typedArray) {
//   console.log(num);
// }

// №61
// Массив
// let array = [1, 2, 3];
// console.log(typeof array[Symbol.iterator] === 'function');

// Строка
// let string = "hello";
// console.log(typeof string[Symbol.iterator] === 'function');

// Map
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// console.log(typeof map[Symbol.iterator] === 'function');

// Set
// let set = new Set([1, 2, 3]);
// console.log(typeof set[Symbol.iterator] === 'function');

// №62
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map[Symbol.iterator]();

// let result = iter.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iter.next();
// }

// №62.1
// let nodeList = document.querySelectorAll('p');

// let iter = nodeList[Symbol.iterator]();

// let result = iter.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iter.next();
// }

// №62.2
// let htmlCollection = document.getElementsByClassName('example');

// let elementsArray = Array.from(htmlCollection);

// let iter = elementsArray[Symbol.iterator]();

// let result = iter.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iter.next();
// }

// №63
// function* countdown() {
//     yield 5;
//     yield 4;
//     yield 3;
//     yield 2;
//     yield 1;
// }

// let iter = countdown();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// №64
// function* countdown() {
//     for (let i = 10; i >= 0; i--) {
//         yield i;
//     }
// }

// let iter = countdown();

// console.log(iter.next());
// console.log(iter.next());

// №64.1
// function* decrementGenerator(start) {
//     while (start >= 0) {
//         yield start;
//         start--;
//     }
// }

// let iter = decrementGenerator(5);

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next());

// №64.2
// function* halveGenerator(start) {
//     while (start >= 1) {
//         yield start;
//         start /= 2;
//     }
// }

// let iter = halveGenerator(20);

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next());

// №64.3
// function* powersOfTwo() {
//     let current = 1;
//     while (true) {
//         yield current;
//         current *= 2;
//     }
// }

// let iter = powersOfTwo();

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// №64.4
// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     while (true) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// let iter = fibonacci();

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// №65
// function* func() {
//     for (let i = 1; i <= 3; i++) {
//         yield i;
//     }
// }

// for (let elem of func()) {
//     console.log(elem);
// }

// for (let elem of func()) {
//     console.log(elem);
// }

// №66
// function* func(obj) {
//     for (let key in obj) {
//         yield [key, obj[key]];
//     }
// }

// let iter = func({a: 1, b: 2, c: 3});

// for (let elem of iter) {
//     console.log(elem);
// }

// №67
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// obj[Symbol.iterator] = function* () {
//     for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//             yield {key: key, val: this[key]};
//         }
//     }
// };

// for (let elem of obj) {
//     console.log(elem);
// }

// №68
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function* () {
//         for (let key in this) {
//             if (this.hasOwnProperty(key)) {
//                 yield {key: key, val: this[key]};
//             }
//         }
//     }
// };

// for (let elem of obj) {
//     console.log(elem);
// }

// №69
// let array = [1, 2, 3];

// let iter = array.values();

// for (let elem of iter) {
//     console.log(elem);
// }

// №69.1
// let set = new Set([1, 2, 3]);

// let iter = set.values();

// for (let elem of iter) {
//     console.log(elem);
// }

// №70
// let map = new Map();

// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.keys();

// for (let key of iter) {
//     console.log(key);
// }

// №70.1
// let set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');

// let iter = set.keys();

// for (let value of iter) {
//     console.log(value);
// }

// №71
// let map = new Map();

// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.entries();

// for (let entry of iter) {
//     console.log(entry);
// }

// for (let [key, value] of map.entries()) {
//     console.log(key);
//     console.log(value);
// }

// №71.1
// let set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');

// let iter = set.entries();

// for (let entry of iter) {
//     console.log(entry);
// }

// for (let [value1, value2] of set.entries()) {
//     console.log(value1);
//     console.log(value2);
// }

// №71.2
// let divs = document.querySelectorAll('div');

// if (typeof divs.entries === 'function') {
//     let entries = divs.entries();
//     for (let [index, div] of entries) {
//         console.log(index, div.textContent);
//     }
// } else {
//     console.log('Метод entries не поддерживается в данной реализации NodeList');
// }

// №72
// let set = new Set();
// set.add('a');
// set.add('b');
// set.add('c');

// for (let elem of set) {
//     console.log(elem);
// }

// №73
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function *(){
//         for (let key in this){
//             if (this.hasOwnProperty(key)) {
//                 yield this[key];
//             }
//         }
//     }
// };

// let arr = [...obj];
// console.log(arr);

// №74
// let str = '12345';
// let sum = 0;

// for (let digit of str) {
//     sum += +digit;
// }

// console.log(sum);

// №75
// let num = 67890;

// let sum = [...String(num)].map(Number).reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

// №76
// let cells = document.querySelectorAll('#myTable td');

// for (let [index, cell] of cells.entries()) {
//   cell.textContent += ` ${index + 1}`;
// }

// №77
// let inputs = document.querySelectorAll('input');

// for (let [index, {id, value}] of inputs.entries()) {
//   console.log(index + 1, id, value);
// }

// №84
// localStorage.setItem('number1', '10');
// localStorage.setItem('number2', '20');
// localStorage.setItem('number3', '30');

// let num1 = parseInt(localStorage.getItem('number1'), 10);
// let num2 = parseInt(localStorage.getItem('number2'), 10);
// let num3 = parseInt(localStorage.getItem('number3'), 10);

// let sum = num1 + num2 + num3;

// console.log(sum);

// №85
// let lastVisitTime = localStorage.getItem('lastVisitTime');

// if (lastVisitTime) {
//     lastVisitTime = parseInt(lastVisitTime, 10);

//     let now = Date.now();

//     let secondsSinceLastVisit = Math.floor((now - lastVisitTime) / 1000);

//     console.log(`С момента вашего последнего визита прошло ${secondsSinceLastVisit} секунд.`);
// } else {
//     console.log("Это ваш первый визит на сайт!");
// }

// localStorage.setItem('lastVisitTime', Date.now());

// №85.1
// function getFormattedDate(date) {
//     let day = date.getDate();
//     let month = date.getMonth() + 1;

//     day = day < 10 ? `0${day}` : day;
//     month = month < 10 ? `0${month}` : month;

//     return `${month}-${day}`;
// }

// let birthDate = localStorage.getItem('birthDate');

// if (birthDate) {
//     const today = getFormattedDate(new Date());
//     if (birthDate === today) {
//         alert("Поздравляем с Днем Рождения!");
//     } else {
//         console.log("Сегодня не ваш день рождения.");
//     }
// } else {
//     let userBirthDate = prompt("Пожалуйста, введите вашу дату рождения в формате ММ-ДД, например, 12-31.");
//     if (userBirthDate) {
//         localStorage.setItem('birthDate', userBirthDate);
//     }
// }

// №85.2
// document.addEventListener('DOMContentLoaded', function() {
//     const input = document.getElementById('userInput');

//     const savedValue = localStorage.getItem('inputValue');
//     if (savedValue) {
//         input.value = savedValue;
//     }

//     input.addEventListener('blur', function() {
//         localStorage.setItem('inputValue', input.value);
//     });
// });

// №86
// document.addEventListener('DOMContentLoaded', () => {
//     let count = localStorage.getItem('pageRefreshCounter');

//     if (count === null) {
//         count = 0;
//     } else {

//         count = parseInt(count) + 1;
//     }

//     localStorage.setItem('pageRefreshCounter', count);

//     document.getElementById('counter').textContent = `Счетчик обновлений: ${count}`;
// });

// №87
// document.addEventListener('DOMContentLoaded', () => {
//     let count = localStorage.getItem('pageRefreshCounter');

//     if (count === null) {
//         count = 0;
//     } else {
//         count = parseInt(count);

//         count = (count + 1) % 11;
//     }

//     localStorage.setItem('pageRefreshCounter', count);

//     document.getElementById('counter').textContent = `Счетчик обновлений: ${count}`;
// });

// №88
// localStorage.clear();

// console.log('Проверка key1:', localStorage.getItem('key1'));
// console.log('Проверка key2:', localStorage.getItem('key2'));
// console.log('Проверка key3:', localStorage.getItem('key3'));

// №89
// document.getElementById('showCount').addEventListener('click', function() {
//     let num = localStorage.length;
//     console.log('Количество записей в localStorage:', num);
//     alert('Количество записей в localStorage: ' + num);
// });

// №89.1
// document.getElementById('checkStorage').addEventListener('click', function() {
//     let num = localStorage.length;
//     if (num > 10) {
//         localStorage.clear();
//         alert('localStorage был очищен, так как содержал более 10 записей.');
//     } else {
//         alert('Количество записей в localStorage: ' + num + '. Очистка не требуется.');
//     }
// });

// №90
// for (let i = 0; i < 3; i++) {
//     let key = localStorage.key(i);
//     if (key !== null) {
//         let value = localStorage.getItem(key);
//         console.log(`Запись №${i}: ключ = "${key}", значение = "${value}"`);
//     } else {
//         console.log(`Запись с номером ${i} не найдена.`);
//     }
// }

// localStorage.setItem('firstKey', 'First Value');
// localStorage.setItem('secondKey', 'Second Value');
// localStorage.setItem('thirdKey', 'Third Value');

// №91
// document.getElementById('showStorage').addEventListener('click', function() {
//     let storageContents = document.getElementById('storageContents');
//     storageContents.innerHTML = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let val = localStorage.getItem(key);
//         console.log(key, val);
//         storageContents.innerHTML += `Ключ: ${key}, Значение: ${val}<br>`;
//     }
//     if (localStorage.length === 0) {
//         storageContents.innerHTML = 'localStorage пуст';
//     }
// });

// №92
// document.getElementById('showKeys').addEventListener('click', function() {
//     let keysList = document.getElementById('keysList');
//     keysList.innerHTML = '';

//     let keys = Object.keys(localStorage);
    
//     if (keys.length === 0) {
//         keysList.innerHTML = 'В localStorage нет данных';
//         return;
//     }

//     for (let key of keys) {
//         console.log(key);
//         keysList.innerHTML += `Ключ: ${key}<br>`;
//     }
// });

// №92.1
// document.getElementById('showValues').addEventListener('click', function() {
//     const valuesList = document.getElementById('valuesList');
//     valuesList.innerHTML = '';

//     let keys = Object.keys(localStorage);
    
//     if (keys.length === 0) {
//         valuesList.innerHTML = 'В localStorage нет данных';
//         return;
//     }

//     for (let key of keys) {
//         let value = localStorage.getItem(key);
//         console.log(value);
//         valuesList.innerHTML += `Значение: ${value}<br>`;
//     }
// });

// №93
// document.getElementById('save').addEventListener('click', function() {
//     let inputsTextArray = [
//         document.getElementById('input1').value,
//         document.getElementById('input2').value,
//         document.getElementById('input3').value
//     ];

//     localStorage.setItem('inputsText', JSON.stringify(inputsTextArray));
// });

// №93.1
// document.getElementById('save').addEventListener('click', function() {
//     let inputsTextArray = [
//         document.getElementById('input1').value,
//         document.getElementById('input2').value,
//         document.getElementById('input3').value
//     ];

//     localStorage.setItem('inputsText', JSON.stringify(inputsTextArray));
// });

// function loadSavedInputs() {
//     let savedInputs = localStorage.getItem('inputsText');
//     if (savedInputs) {
//         let inputsTextArray = JSON.parse(savedInputs);

//         if (inputsTextArray.length >= 3) {
//             document.getElementById('input1').value = inputsTextArray[0];
//             document.getElementById('input2').value = inputsTextArray[1];
//             document.getElementById('input3').value = inputsTextArray[2];
//         }
//     }
// }

// window.onload = loadSavedInputs;

// №94
// let users = [
//     {
//         surn: 'surn1',
//         name: 'name1',
//         age: 31,
//     },
//     {
//         surn: 'surn2',
//         name: 'name2',
//         age: 32,
//     },
//     {
//         surn: 'surn3',
//         name: 'name3',
//         age: 33,
//     },
// ];

// localStorage.setItem('users', JSON.stringify(users));

// function addNewUser() {
//     let usersFromStorage = JSON.parse(localStorage.getItem('users'));
    
//     let newUser = {
//         surn: document.getElementById('surn').value,
//         name: document.getElementById('name').value,
//         age: parseInt(document.getElementById('age').value, 10),
//     };
    
//     usersFromStorage.push(newUser);
    
//     localStorage.setItem('users', JSON.stringify(usersFromStorage));
// }

// document.getElementById('addUser').addEventListener('click', addNewUser);

// №95
// document.addEventListener('DOMContentLoaded', () => {
//     loadTasks();
//     document.getElementById('addTask').addEventListener('click', addTask);
// });

// function loadTasks() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     let tasksList = document.getElementById('tasksList');
//     tasksList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         let taskElement = document.createElement('li');
//         taskElement.textContent = task.text;

//         if (task.completed) {
//             taskElement.style.textDecoration = 'line-through';
//         }

//         let deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Удалить';
//         deleteBtn.onclick = () => deleteTask(index);

//         let editBtn = document.createElement('button');
//         editBtn.textContent = 'Изменить';
//         editBtn.onclick = () => editTask(index, task.text);

//         let completeBtn = document.createElement('button');
//         completeBtn.textContent = 'Выполнено';
//         completeBtn.onclick = () => toggleCompletion(index);

//         taskElement.appendChild(deleteBtn);
//         taskElement.appendChild(editBtn);
//         taskElement.appendChild(completeBtn);

//         tasksList.appendChild(taskElement);
//     });
// }

// function addTask() {
//     let newTaskInput = document.getElementById('newTask');
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push({ text: newTaskInput.value, completed: false });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     newTaskInput.value = '';
//     loadTasks();
// }

// function deleteTask(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     loadTasks();
// }

// function editTask(index, oldText) {
//     let newText = prompt('Измените задачу', oldText);
//     if (newText !== null && newText.trim() !== '') {
//         let tasks = JSON.parse(localStorage.getItem('tasks'));
//         tasks[index].text = newText;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         loadTasks();
//     }
// }

// function toggleCompletion(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks[index].completed = !tasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     loadTasks();
// }

// №95.1
// document.addEventListener('DOMContentLoaded', function() {
//     let editor = document.getElementById('noteEditor');
//     let saveButton = document.getElementById('saveNote');
//     let notesList = document.getElementById('notesList');

    
//     function loadNotes() {
//         notesList.innerHTML = ''; 
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         notes.forEach((note, index) => {
//             let noteLink = document.createElement('a');
//             noteLink.href = '#';
//             noteLink.textContent = `Запись ${index + 1}`;
//             noteLink.onclick = () => loadNoteIntoEditor(index);
//             notesList.appendChild(noteLink);
//             notesList.appendChild(document.createElement('br'));
//         });
//     }

    
//     function loadNoteIntoEditor(index) {
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         if (notes[index]) {
//             editor.value = notes[index];
//             editor.dataset.noteIndex = index; 
//         }
//     }

    
//     saveButton.onclick = () => {
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         let noteText = editor.value.trim();
//         if (noteText) {
//             let index = editor.dataset.noteIndex ? parseInt(editor.dataset.noteIndex, 10) : notes.length;
//             notes[index] = noteText; 
//             localStorage.setItem('notes', JSON.stringify(notes));
//             delete editor.dataset.noteIndex; 
//             editor.value = ''; 
//             loadNotes(); 
//         }
//     };

    
//     editor.addEventListener('input', () => {
//         delete editor.dataset.noteIndex; 
//     });

//     loadNotes(); 
// });

// №95.2
document.addEventListener('DOMContentLoaded', function() {
    let addStickerBtn = document.getElementById('addSticker');
    let newStickerText = document.getElementById('newStickerText');
    let stickersContainer = document.getElementById('stickersContainer');

    function saveStickers(stickers) {
        localStorage.setItem('stickers', JSON.stringify(stickers));
    }

    function loadStickers() {
        let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
        stickersContainer.innerHTML = ''; 
        stickers.forEach((text, index) => createSticker(text, index));
    }

    function createSticker(text, index) {
        let sticker = document.createElement('div');
        sticker.className = 'sticker';
        
        let textarea = document.createElement('textarea');
        textarea.value = text;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.onclick = function() {
            deleteSticker(index);
        };
        
        sticker.appendChild(textarea);
        sticker.appendChild(deleteBtn);
        stickersContainer.appendChild(sticker);

        textarea.addEventListener('blur', () => {
            updateSticker(index, textarea.value);
        });
    }

    function updateSticker(index, newText) {
        let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
        stickers[index] = newText;
        saveStickers(stickers);
    }

    function deleteSticker(index) {
        let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
        stickers.splice(index, 1);
        saveStickers(stickers);
        loadStickers(); 
    }

    addStickerBtn.addEventListener('click', () => {
        let text = newStickerText.value.trim();
        if (text) {
            let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
            stickers.push(text);
            saveStickers(stickers);
            createSticker(text, stickers.length - 1);
            newStickerText.value = ''; 
        }
    });

    loadStickers(); 
});
