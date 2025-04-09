Construye un Comprobador de Palíndromos
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando signos de puntuación, mayúsculas/minúsculas y espacios.

Nota: Necesitarás eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo a la misma capitalización (minúsculas o mayúsculas) para verificar si es un palíndromo.

Objetivo: Construye una aplicación que funcione de manera similar a https://palindrome-checker.freecodecamp.rocks.

Historias de Usuario:

Debes tener un elemento de entrada con un id de "text-input".
Debes tener un elemento de botón con un id de "check-btn".
Debes tener un elemento div, span o p con un id de "result".
Cuando hagas clic en el elemento #check-btn sin ingresar un valor en el elemento #text-input, debería aparecer una alerta con el texto "Please input a value" (Por favor, ingresa un valor).
Cuando el elemento #text-input solo contiene la letra A y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "A is a palindrome" (A es un palíndromo).
Cuando el elemento #text-input contiene el texto "eye" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "eye is a palindrome" (eye es un palíndromo).
Cuando el elemento #text-input contiene el texto "_eye" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "_eye is a palindrome" (_eye es un palíndromo).
Cuando el elemento #text-input contiene el texto "race car" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "race car is a palindrome" (race car es un palíndromo).
Cuando el elemento #text-input contiene el texto "not a palindrome" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "not a palindrome is not a palindrome" (not a palindrome no es un palíndromo).
Cuando el elemento #text-input contiene el texto "A man, a plan, a canal. Panama" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "A man, a plan, a canal. Panama is a palindrome" (A man, a plan, a canal. Panama es un palíndromo).
Cuando el elemento #text-input contiene el texto "never odd or even" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "never odd or even is a palindrome" (never odd or even es un palíndromo).
Cuando el elemento #text-input contiene el texto "nope" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "nope is not a palindrome" (nope no es un palíndromo).
Cuando el elemento #text-input contiene el texto "almostomla" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "almostomla is not a palindrome" (almostomla no es un palíndromo).
Cuando el elemento #text-input contiene el texto "My age is 0, 0 si ega ym." y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "My age is 0, 0 si ega ym. is a palindrome" (My age is 0, 0 si ega ym. es un palíndromo).
Cuando el elemento #text-input contiene el texto "1 eye for of 1 eye." y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "1 eye for of 1 eye. is not a palindrome" (1 eye for of 1 eye. no es un palíndromo).
Cuando el elemento #text-input contiene el texto "0_0 (: /-\ :) 0-0" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "0_0 (: /-\ :) 0-0 is a palindrome" (0_0 (: /-\ :) 0-0 es un palíndromo).
Cuando el elemento #text-input contiene el texto "five|_/|four" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "five|_/|four is not a palindrome" (five|_/|four no es un palíndromo).
Cumple con las historias de usuario y pasa todas las pruebas a continuación para completar este proyecto. Dale tu propio estilo personal. ¡Feliz Codificación!