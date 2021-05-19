(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(e,t,i){"use strict";i.r(t);var s=i(45),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"creating-custom-objects"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-objects"}},[e._v("#")]),e._v(" Creating Custom Objects")]),e._v(" "),i("p",[e._v("Sometimes you want to do more than just paint a scene with tiles. You want to open a chest or talk to an NPC. Objects are how you create dynamism in the TwilioQuest world.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WIP ⚠️")]),e._v(" "),i("p",[e._v("This guide is still a work in progress!")])]),e._v(" "),i("h2",{attrs:{id:"what-is-an-object"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-object"}},[e._v("#")]),e._v(" What is an Object?")]),e._v(" "),i("p",[e._v("Objects in TwilioQuest are "),i("em",[e._v("things")]),e._v(" that create dyanmic behavior. This could be something like an NPC or a door that opens when you approach it.")]),e._v(" "),i("p",[e._v("An object is composed of a few different configuration files.")]),e._v(" "),i("ul",[i("li",[e._v("A configuration file called "),i("code",[e._v("config.js")])]),e._v(" "),i("li",[e._v("Any image files needed to render the object")]),e._v(" "),i("li",[e._v("An icon image for use in Tiled tilesets")])]),e._v(" "),i("h2",{attrs:{id:"built-in-objects"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#built-in-objects"}},[e._v("#")]),e._v(" Built-in Objects")]),e._v(" "),i("p",[e._v("TwilioQuest comes with built in objects that handle some of the common use cases you might have for dynamic objects. Check out the "),i("RouterLink",{attrs:{to:"/api/objects.html"}},[e._v("built in objects API page")]),e._v(" for a list of these before re-building something that already exists!")],1),e._v(" "),i("h2",{attrs:{id:"animations-rendering"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#animations-rendering"}},[e._v("#")]),e._v(" Animations & Rendering")]),e._v(" "),i("p",[e._v("The first thing to consider about a new object is how it appears. What does it look like rendered in the game? Does it have animations?")]),e._v(" "),i("h3",{attrs:{id:"image-assets"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#image-assets"}},[e._v("#")]),e._v(" Image Assets")]),e._v(" "),i("p",[e._v("You can use spritesheets, and will commonly want to use them if your object has animations. You can get away with a single image if your object is only ever rendered as one frame.")]),e._v(" "),i("p",[i("img",{attrs:{src:"",alt:"example of a spritesheet here"}})]),e._v(" "),i("h3",{attrs:{id:"what-s-a-spritesheet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-s-a-spritesheet"}},[e._v("#")]),e._v(" What's a spritesheet?")]),e._v(" "),i("p",[e._v("A spritesheet is a series of frames with an image on them. Usually, this series depicts one of more animations that it's subject is performing.")]),e._v(" "),i("p",[e._v("To describe a spritesheet you'd want the following information:")]),e._v(" "),i("ul",[i("li",[e._v("width of each frame")]),e._v(" "),i("li",[e._v("height of each frame")]),e._v(" "),i("li",[e._v("margin around edge of spritesheet")]),e._v(" "),i("li",[e._v("padding between frames")]),e._v(" "),i("li",[e._v("number of frames per row")]),e._v(" "),i("li",[e._v("number of frames per column (optional?)")])]),e._v(" "),i("p",[i("img",{attrs:{src:"",alt:"image of a spritesheet's components labeled"}})]),e._v(" "),i("p",[e._v("We use this information to describe our spritesheet in the "),i("code",[e._v("config.js")]),e._v(" file so that TwilioQuest can import it correctly.")]),e._v(" "),i("h3",{attrs:{id:"icon-for-tiled"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#icon-for-tiled"}},[e._v("#")]),e._v(" Icon for Tiled")]),e._v(" "),i("p",[e._v("If your object is a single image, you can re-use that. Otherwise, you'll want to export a single frame of your spritesheet separately as an "),i("code",[e._v("icon.png")]),e._v(" file that you can add into a Tiled tilesheet.")]),e._v(" "),i("h2",{attrs:{id:"scripting-custom-behavior"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scripting-custom-behavior"}},[e._v("#")]),e._v(" Scripting Custom Behavior")]),e._v(" "),i("ul",[i("li",[e._v("objects have state")]),e._v(" "),i("li",[e._v("objects modify their state in response to events that happen in the game")]),e._v(" "),i("li",[e._v("objects render themselves and make changes on how they're displayed via render")])]),e._v(" "),i("h2",{attrs:{id:"object-configuration-directory"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#object-configuration-directory"}},[e._v("#")]),e._v(" Object Configuration Directory")]),e._v(" "),i("p",[e._v("Every object type has a corresponding directory with information in it in the "),i("code",[e._v("objects")]),e._v(" root directory of an extension. This directory contains:")]),e._v(" "),i("ul",[i("li",[e._v("config.json")]),e._v(" "),i("li",[e._v("icon.png")]),e._v(" "),i("li",[e._v("spritesheet.png (whatever spritesheet files you need)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);