# Repository for NISER Open Day website

Temporary deployment on [https://openday2020.dunce.ml](https://openday2020.dunce.ml)

## Features

- Responsive

- The schedule is dynamically loaded from [this google sheet]( https://docs.google.com/spreadsheets/d/1haXwrbIHVaAwNO_ltAjDiaUV8IrdyKwrUzWheZKHD-0/edit#gid=0 )

- All the images a loaded only when they are needed on screen, thus drastically improving loading speed.

- Once an image is loaded on the website on any page. It can be anywhere (any page) without loading again.

## To-Do

- [x] Link the schedule page to schedule google sheet
- [x] Favicon
- [x] Lazy load the gallery
- [x] Lazy load images in organisers
- [x] Move Logo in navbar to left
- [x] Link the navbar icon to niser home page
- [x] Link the COVID-19 link to niser's covid 19 link
- [x] Hamburger menu on the navbar
- [x] Vulnerabilities
- [x] Loading thing for schedule page
- [x] Fix Schedule shadow styling
- [x] Manual image compression for better performance
- [x] Better placeholder Images
- [ ] Loading spinner or something for lazy loading
- [ ] Better Typography
- [ ] History mode
- [ ] Footer

## post-build-pre-deployment checklist
- [ ] Paste stuff from `meta.txt` into `index.html`'s `head` from the build.

## How to develop

Move to `open-day-vue` directory and

```
$ npm install
$ npm run serve
```
