# CoolRefs

This is a small Chrome extension designed to help me quickly save reference images from Twitter under an established naming scheme.

I made this mainly to save time, but it has been a nice learning experience too.

## What it does

* Adds a context menu item to images on twitter.com
* If you click on the item, it composes a filename made out of: the ID of the tweet author, the ID of the tweet itself, and which photo it is in the set of up to 4.
* Then it downloads the image to your default `Downloads` folder, under the `coolrefs` subdirectory.

## Todo
* get the original size, or largest possible (currently it is resized if you do it from the TL)
* if it's possible to use the path setting, then use it (it probably isn't though)
    * yes that means I wasted my time with `popup.js` and the listener thing
