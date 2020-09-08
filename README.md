# Repository for NISER Open Day website

Temporary development on [https://openday2020.dunce.ml](https://openday2020.dunce.ml)

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
- [ ] Link the navbar icon to niser home page
- [ ] loading spinner or something for lazy loading
- [ ] link the COVID-19 link to niser's covid 19 link
- [ ] Fix Schedule shadow styling
- [ ] Hamburger menu on the navbar
- [ ] Better Typography
- [ ] Manual image compression for better performance
- [ ] History mode
- [ ] Footer
- [ ] Vulnerabilities

## post-build-pre-deployment checklist
- [ ] Paste stuff from `meta.txt` into `index.html`'s `head` from the build.

## How to develop

Move to `open-day-vue` directory and

```
$ npm install
$ npm run serve
```
