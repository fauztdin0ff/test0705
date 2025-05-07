/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*------------------------------
Accordion 
---------------------------*/
document.querySelectorAll('.accordion__group-title').forEach(title => {
   title.addEventListener('click', () => {
      const group = title.parentElement;
      const content = group.querySelector('.accordion__group-text');

      if (group.classList.contains('open')) {
         content.style.maxHeight = null;
         group.classList.remove('open');
      } else {
         document.querySelectorAll('.accordion__group.open').forEach(openGroup => {
            openGroup.querySelector('.accordion__group-text').style.maxHeight = null;
            openGroup.classList.remove('open');
         });

         group.classList.add('open');
         content.style.maxHeight = content.scrollHeight + 24 + "px";
      }
   });
});


/*------------------------------
Upload file
---------------------------*/
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const progressThumb = document.getElementById('progressThumb');
const progressBox = document.querySelector('.upload__popup');
const progressTitle = document.querySelector('.upload__progress-title');

if (dropZone && fileInput && progressThumb && progressBox && progressTitle) {
   ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, e => e.preventDefault());
      dropZone.addEventListener(eventName, e => e.stopPropagation());
   });

   dropZone.addEventListener('dragover', () => {
      dropZone.classList.add('dragover');
   });

   dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
   });

   function uploadFileWithProgress(file) {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append('file', file);
      dropZone.classList.add('loading');
      document.body.classList.add('loading');
      progressBox.style.display = "grid";
      progressTitle.textContent = "Загрузка...";

      xhr.upload.addEventListener('progress', (e) => {
         if (e.lengthComputable) {
            const percent = (e.loaded / e.total) * 100;
            progressThumb.style.width = percent + "%";
         }
      });

      xhr.upload.addEventListener('load', () => {
         progressThumb.style.width = "100%";
         progressTitle.textContent = "Загрузка завершена!";
      });

      xhr.upload.addEventListener('error', () => {
         progressTitle.textContent = "Ошибка загрузки";
      });

      xhr.open('POST', '/upload-endpoint');
      xhr.send(formData);
   }

   dropZone.addEventListener('drop', (e) => {
      dropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;

      if (files.length > 0) {
         uploadFileWithProgress(files[0]);
      }
   });

   fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
         uploadFileWithProgress(fileInput.files[0]);
      }
   });
}



/*------------------------------
Check timer
---------------------------*/
function startProgress(durationSeconds = 118) {
   const timerElement = document.getElementById("checkTimer");
   const progressThumb = document.querySelector(".check-popup__progress-thumb");

   if (!timerElement || !progressThumb) return;

   const startTime = performance.now();
   const endTime = startTime + durationSeconds * 1000;

   function animate() {
      const now = performance.now();
      const remaining = Math.max((endTime - now) / 1000, 0);
      const progress = Math.min((now - startTime) / (durationSeconds * 1000), 1);

      const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
      const seconds = String(Math.floor(remaining % 60)).padStart(2, "0");
      timerElement.textContent = `${minutes}:${seconds}`;

      progressThumb.style.width = `${progress * 100}%`;

      if (progress < 1) {
         requestAnimationFrame(animate);
      }
   }

   requestAnimationFrame(animate);
}

// Запуск
window.addEventListener("load", () => startProgress());

})();

/******/ })()
;