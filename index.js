!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue2Dnd=t()}(this,function(){"use strict";var e={};return e.install=function(e){e.directive("draggable",{bind:function(e,t,a){if(0===Object.keys(t.modifiers).length)throw new Error("You have to specify almost one group in the modifier of draggable element");var r=function(e){e.dataTransfer.effectAllowed="all",e.dataTransfer.setData("data",JSON.stringify(t.value)),e.dataTransfer.setData("group",JSON.stringify(Object.keys(t.modifiers)))};e.setAttribute("draggable",!0),e.addEventListener("dragstart",r)},update:function(e,t,a){if(e.removeEventListener("dragstart",{}),0===Object.keys(t.modifiers).length)throw new Error("You have to specify almost one group in the modifier of draggable element");var r=function(e){e.dataTransfer.effectAllowed="all",e.dataTransfer.setData("data",JSON.stringify(t.value)),e.dataTransfer.setData("group",JSON.stringify(Object.keys(t.modifiers)))};e.setAttribute("draggable",!0),e.addEventListener("dragstart",r)},unbind:function(e,t,a){e.setAttribute("draggable",!1),e.removeEventListener("dragstart",{})}}),e.directive("droppable",{bind:function(e,t,a){var r=function(a){a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation();var r=a.dataTransfer.getData("data"),n=a.dataTransfer.getData("group"),i=JSON.parse(n),d=!1;d=0===t.modifiers.length||i.find(function(e,a,r){return t.modifiers[e]}),d?(t.value.call(e,r),a.target.classList.remove("dragover")):a.target.classList.remove("dragover")},n=function(e){e.preventDefault&&e.preventDefault(),e.target.classList.add("dragover")},i=function(e){e.preventDefault&&e.preventDefault(),e.target.classList.remove("dragover")};e.addEventListener("drop",r),e.addEventListener("dragover",n),e.addEventListener("dragenter",n),e.addEventListener("dragleave",i)},unbind:function(e,t,a){e.setAttribute("draggable",!1),e.removeEventListener("dragstart",{})}}),e.directive("dragenter",{bind:function(e,t,a){var r=function(a){a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.target.classList.add("dragover"),t.value.call(e)};e.addEventListener("dragenter",r)},unbind:function(e,t,a){e.removeEventListener("dragenter",{})}}),e.directive("dragleave",{bind:function(e,t,a){var r=function(a){a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),t.value.call(e)};e.addEventListener("dragleave",r)},unbind:function(e,t,a){e.removeEventListener("dragleave",{})}})},e});
