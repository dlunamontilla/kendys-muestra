const elementos = (selector) => document.querySelectorAll(selector);
const elemento = (selector) => document.querySelector(selector);

// jQuery
(function (window, document, $) {

  $(function () {
    $("#cerrar").on("click", function (e) {
      e.preventDefault();
      history.back();
    });


    // Prototipo de apariencia del formulario:
    const ftexto = function (object) {

      if (object === undefined)
        return;

      if (object.label === undefined)
        return;

      if (object.text === undefined)
        return;

      if (object.span === undefined)
        return;

      if (object.classCSS === undefined)
        object.classCSS = "";

      let
        label = document.querySelectorAll(object.label),
        text = document.querySelectorAll(object.text),
        span = document.querySelectorAll(object.span);

      if (label.length > 0 || text.length > 0 || span.length > 0) {

        text.forEach((eTexto, key) => {
          // Remover la clase «contact-us--label-text-focused» de todos
          // los «span»:
          if (eTexto.value === "") {
            span[key].classList.remove(object.classCSS);

            if (object.labelCSS !== undefined)
              label[key].classList.remove(object.labelCSS);

            if (object.textCSS !== undefined)
              eTexto.classList.remove(object.textCSS);

          }

          // Cuando el evento de foco es capturado se agrega la clase al elemento «span»:
          eTexto.addEventListener('focus', function () {
            span[key].classList.add(object.classCSS);

            if (object.labelCSS !== undefined)
              label[key].classList.add(object.labelCSS);

            if (object.textCSS !== undefined) {
              this.classList.add(object.textCSS);
            }

          }, false);

          // Cuando se pierde el foco de la caja de texto:
          eTexto.addEventListener('blur', function () {
            if (this.value === "") {

              span[key].classList.remove(object.classCSS);

              if (object.labelCSS !== undefined)
                label[key].classList.remove(object.labelCSS);

              if (object.textCSS !== undefined)
                this.classList.remove(object.textCSS);
            }

          }, false);

        });

      }
    }

    // Apariencia del formulario según el escenario
    let texto = {
      "label": "#contacto [data='text']",
      "text": "#contacto [data='text'] [type='text']",
      "span": "#contacto [data='text'] span",
      "classCSS": "contact-us--label-text-focused"
    };

    let area = {
      "label": "#contacto [data='descripcion']",
      "text": "#contacto [data='descripcion'] textarea",
      "span": "#contacto [data='descripcion'] span",
      "classCSS": "contact-us--area-text-focused",
      "labelCSS": "contact-us--label-area-focused",
      "textCSS": "contact-us--textarea-focused"
    };

    // Caja de texto
    ftexto(texto);

    // Caja de descripción del formulario:
    ftexto(area);

    // Enlaces de sesiones:
    loginEnlaces = document.querySelectorAll("[data-enlace='sesion']");

    if (loginEnlaces.length > 0)
      loginEnlaces.forEach(function (enlace, key) {
        enlace.addEventListener('click', function (e) {
          e.preventDefault();
          $("#logout-form").submit();
        }, false);
      });


    // Botones de salida:
    let buttonExit = document.querySelectorAll("[data-button='salir']");
    if (buttonExit.length > 0)
      buttonExit.forEach(function (button, key) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          history.back();
        });
      });

    // Botón de invocación de menú:
    let buttonMenu = document.querySelectorAll("[data-button='menu']");
    if (buttonMenu.length > 0)
      buttonMenu.forEach(function (button, key) {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          parent.location.href = "#menu-smartphone";
        })
      });

    // Desplazamiento con o sin la barra de desplazamiento:
    const scrollElement = function (elemento, clase) {
      let cambios = function (elemento, clase) {
        if ($(window).scrollTop() > 100) {
          if (!$(elemento).hasClass(clase)) {
            $(elemento).addClass(clase);

            setTimeout(function () {
              $(elemento).addClass("fadeOut");

              e = document.querySelectorAll(elemento);
              if (e.length > 0) {
                e.forEach(function (elemento, key) {
                  elemento.addEventListener('animationend', function () {
                    this.classList.remove(clase);
                    this.classList.remove("fadeOut");
                  })
                })
              }
            }, 3000);
          }

          return;
        }

        if ($(elemento).hasClass(clase))
          $(elemento).removeClass(clase);
      }

      $(window).scroll(function (e) {
        cambios(elemento, clase);
      });

      $(window).mousemove(function (e) {
        cambios(elemento, clase);
      })
    }

    scrollElement("[data-button='subir']", "none");

    $("[data-button='subir']").on("click", function () {
      parent.location.href = "#home";
    });

    // Ejemplo de una clase con toggle:
    const toggle = function (selector, clase) {
      if (
        (typeof selector === "undefined" || typeof selector !== "string") &&
        (typeof clase === "undefined" || typeof clase !== "string")
      ) {
        return;
      }

      let elementosHTML = elementos(selector);

      if (elementosHTML.length > 0)
        elementosHTML.forEach(function (elementoHTML) {
          elementoHTML.addEventListener('click', function () {
            this.classList.toggle(clase);
          });
        });
    }

    toggle("[data-button='subir']", "cadena");

  });


}(window, document, jQuery));

// Manejo de errores en las imágenes:
(function () {
  let imagenes = elementos("[data-image='productos']");
  if (imagenes.length > 0)
    imagenes.forEach((imagen, key) => {
      imagen.src = imagen.src;
      imagen.addEventListener('error', () => {
        imagen.alt = "Error al cargar imagen - " + (key + 1);
        // imagen.classList.add('error');
        imagen.src = 'https://http2.mlstatic.com/D_Q_NP_148911-MLV20667223412_042016-AB.webp';
      }, false);
    });
}());

(function (window) {
  const enlaces = elementos("a[href]");
  const postImages = elementos("img[class*='post--image']");
  const imagenes = [
    "https://cdn.pixabay.com/photo/2019/04/02/16/11/cat-4098058_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/18/15/29/mountains-5842346_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/25/11/19/candle-5859094_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/01/29/19/28/arctic-wolf-5961985_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/18/15/29/mountains-5842346_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/25/11/19/candle-5859094_960_720.jpg"
  ];

  enlaces.forEach(enlace => {
    let comprobar = /(\#)/g;

    if (!comprobar.test(enlace.getAttribute("href"))) {
      // enlace.setAttribute("href", "#");
      let blog = /(blog)$/g;
      let href = enlace.getAttribute("href");

      if (blog.test(href)) {
        enlace.setAttribute("href", "#blog");
      }

      enlace.addEventListener("click", e => {
        if (!blog.test(href))
          e.preventDefault();
      }, false);
    }
  });

  // Imágenes:
  console.clear();
  postImages.forEach((postImage, key) => {
    postImage.setAttribute("src", imagenes[key]);
  });
}(window));