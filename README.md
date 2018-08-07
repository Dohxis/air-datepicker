![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# `<air-datepicker>`
 Air DatePicker is a really awesome date picker. While the actual library is written using jQuery, I sometimes find it difficult to use inside modern libraries. That's why
 this project exist. It's a little wrapper around AirDatePicker which gives a simple web component and you can use it inside 
 your vanilla, React, Vue, (...) application.
 
 ![air-datepicker](https://i.imgur.com/chRlShK.png)
 
 ## Instalattion
You can use `NPM` or `Yarn` to install the component
 ```bash
 npm install --save wc-air-datepicker
 ```
 Now just include one Javascript and you're done
 ```html
 <script src="node_modules/air-datepicker/dist/air-datepicker.js"></script>
 ```
Or you can check [this page](https://stenciljs.com/docs/framework-integration) which guides how to plug it inside a framework of choice.
 
 ## Changes
 We have made some changes to the component here are all of them
 <br /> 🔤 English is default language instead of Russian
 <br /> 🔌 Automatically loading jQuery if it's not already loaded.
 <br /> 💅 Added custom properties to make styling a little bit easier
<br />

I am open to suggestion and improvements, open an issue or submit a PR if you would like to improve the project!

## Styling
You can change some colors using custom properties. I haven't invested into making every single color available here, just the ones that seems reasonable to have.
If you need more colors you can always open an issue or submit a PR.
```html
  :root {
    --air-datepicker--day-name: #ff9a19;
    --air-datepicker--current: #4eb5e6;
    --air-datepicker--selected: #5cc4ef;
    --air-datepicker--selected-focus: #45bced;
  }
```
 
 ## Usage
 ```html
   <air-datepicker>
      <input /> <!-- We will attach date picker on the first input field  -->
   </air-datepicker>
 ```
  ```html
   <air-datepicker timepicker="true">
      <input />
   </air-datepicker>
 ```
 You can set all of your customizations on `<air-datepicker>` tag, for the full list of available customizations go to [this page](http://t1m0n.name/air-datepicker/docs/).
