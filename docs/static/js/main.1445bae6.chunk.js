(this["webpackJsonpmy-react-project"] =
  this["webpackJsonpmy-react-project"] || []).push([
  [0],
  {
    14: function (e, t, a) {},
    15: function (e, t, a) {},
    27: function (e, t, a) {},
    37: function (e, t, a) {},
    38: function (e, t, a) {},
    39: function (e, t, a) {},
    40: function (e, t, a) {},
    41: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        s = a.n(n),
        c = a(16),
        r = a.n(c),
        o = a(7),
        i = a(8),
        l = a(2),
        j = {
          get: function (e, t) {
            var a = localStorage.getItem(e);
            return null === a ? t : JSON.parse(a);
          },
          set: function (e, t) {
            localStorage.setItem(e, JSON.stringify(t));
          },
        },
        u = function () {
          var e = j.get("token");
          return fetch("https://51.38.51.187:5050/api/v1/users", {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              Authentication: "Bearer Token",
              "X-Custom-Header": e.accessToken,
            },
          })
            .then(function (e) {
              return console.log(e), e.json();
            })
            .then(function (e) {
              return e.results.map(function (e) {
                return {
                  email: e.email,
                  password: e.password,
                  name: e.name,
                  surname: e.surname,
                  id: e.id,
                };
              });
            })
            .catch(function (e) {
              return console.log(e);
            });
        },
        b = a.p + "static/media/logo.401216d7.png",
        h = (a(27), a(0));
      function m() {
        return Object(h.jsx)("div", {
          children: Object(h.jsx)(o.b, {
            to: "/",
            children: Object(h.jsxs)("header", {
              className: "header",
              children: [
                Object(h.jsx)("img", {
                  className: "header__img",
                  src: b,
                  title: "Go to home",
                  alt: "Isle of dogs",
                }),
                Object(h.jsx)("h1", {
                  className: "header__title",
                  children: "Isle of dogs",
                }),
              ],
            }),
          }),
        });
      }
      a(14);
      var d = function () {
          var e = Object(l.f)();
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("div", {
              className: "page__wrapper",
              children: [
                Object(h.jsx)("h1", {
                  className: "page__title",
                  children: "Why we are here?",
                }),
                Object(h.jsx)("p", {
                  className: "page__paragraph",
                  children:
                    "An outbreak of canine influenza spreads through the city of Megasaki with the risk of contagion to humans. The city's authoritarian mayor, Kenji Kobayashi, ratifies an official decree banishing all dogs to Garbage Island, which is immediately approved despite the insistence of Professor Watanabe, the mayor's political opponent, who claims to be close to creating a cure.",
                }),
                Object(h.jsx)("h1", {
                  className: "page__title",
                  children: "Who are we?",
                }),
                Object(h.jsxs)("p", {
                  className: "page__paragraph",
                  children: [
                    " ",
                    "Like many of us, six months ago Atari lost his best friend Spots. We believe there is a cure for the disease, but the government is hiding it, so we are willing to fly to Trash Island and get all our friends back. We have a great team and a better canine pack on the ground led by Chief. Will you join us in this adventure?",
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "page__buttons",
                  children: [
                    Object(h.jsx)("button", {
                      className: "page__button",
                      onClick: function () {
                        return e.push("/SignUp");
                      },
                      children: "Sign Up",
                    }),
                    Object(h.jsx)("button", {
                      className: "page__button",
                      onClick: function () {
                        return e.push("/Login");
                      },
                      children: "Login",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = a(19),
        O = a(20),
        f = a(22),
        x = a(21),
        g =
          (a(37),
          (function (e) {
            Object(f.a)(a, e);
            var t = Object(x.a)(a);
            function a() {
              return Object(p.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(O.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(h.jsxs)("footer", {
                      className: "footer",
                      children: [
                        Object(h.jsxs)("small", {
                          className: "footer__small",
                          children: [
                            "We ",
                            Object(h.jsx)("i", {
                              class: "footer__heart fas fa-heart",
                            }),
                            " dogs",
                          ],
                        }),
                        Object(h.jsx)("img", {
                          className: "footer__logo",
                          src: b,
                          alt: "Butterfly",
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        _ = g,
        N =
          (a(15),
          function () {
            var e = Object(n.useState)(""),
              t = Object(i.a)(e, 2),
              a = t[0],
              s = t[1],
              c = Object(n.useState)(""),
              r = Object(i.a)(c, 2),
              l = r[0],
              j = r[1],
              u = Object(n.useState)(""),
              b = Object(i.a)(u, 2),
              m = b[0],
              d = b[1],
              p = Object(n.useState)(""),
              O = Object(i.a)(p, 2),
              f = O[0],
              x = O[1];
            return Object(h.jsxs)(h.Fragment, {
              children: [
                Object(h.jsx)(o.b, {
                  className: "form__link",
                  to: "/",
                  children: Object(h.jsx)("span", {
                    className: "form__icon",
                    children: "\ud83d\udc48\ud83c\udffb",
                  }),
                }),
                Object(h.jsxs)("div", {
                  className: "form",
                  children: [
                    Object(h.jsxs)("label", {
                      htmlFor: "name",
                      className: "form__label",
                      children: [
                        Object(h.jsx)("input", {
                          placeholder: "Name",
                          className: "form__input",
                          type: "text",
                          name: "name",
                          value: a,
                          onChange: function (e) {
                            s(e.target.value);
                          },
                        }),
                        " ",
                      ],
                    }),
                    Object(h.jsx)("br", {}),
                    " ",
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("label", {
                      htmlFor: "surname",
                      className: "form__label",
                      children: Object(h.jsx)("input", {
                        placeholder: "Surname",
                        className: "form__input",
                        type: "text",
                        name: "surname",
                        value: l,
                        onChange: function (e) {
                          j(e.target.value);
                        },
                      }),
                    }),
                    " ",
                    Object(h.jsx)("br", {}),
                    " ",
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("label", {
                      htmlFor: "email",
                      className: "form__label",
                      children: Object(h.jsx)("input", {
                        placeholder: "Email",
                        className: "form__input",
                        type: "text",
                        name: "email",
                        value: m,
                        onChange: function (e) {
                          d(e.target.value);
                        },
                      }),
                    }),
                    " ",
                    Object(h.jsx)("br", {}),
                    " ",
                    Object(h.jsx)("br", {}),
                    Object(h.jsxs)("label", {
                      htmlFor: "password",
                      className: "form__label",
                      children: [
                        Object(h.jsx)("input", {
                          placeholder: "Pasword",
                          className: "form__input",
                          type: "text",
                          name: "password",
                          value: f,
                          onChange: function (e) {
                            x(e.target.value);
                          },
                        }),
                        " ",
                      ],
                    }),
                    Object(h.jsx)("br", {}),
                    " ",
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("button", {
                      className: "form__button",
                      type: "submit",
                      onClick: function () {
                        var e = { name: a, surname: l, email: m, password: f };
                        fetch("https://51.38.51.187:5050/api/v1/auth/sign-up", {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(e),
                        }).then(function (e) {
                          e.json().then(function (e) {
                            console.log("result", e);
                          });
                        });
                      },
                      children: "Sign Up",
                    }),
                  ],
                }),
              ],
            });
          }),
        v = function () {
          var e = Object(n.useState)(""),
            t = Object(i.a)(e, 2),
            a = t[0],
            s = t[1],
            c = Object(n.useState)(""),
            r = Object(i.a)(c, 2),
            l = r[0],
            j = r[1];
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(o.b, {
                to: "/",
                children: Object(h.jsx)("span", {
                  className: "form__icon",
                  children: "\ud83d\udc48\ud83c\udffb",
                }),
              }),
              Object(h.jsxs)("div", {
                className: "form",
                children: [
                  Object(h.jsxs)("label", {
                    htmlFor: "email",
                    className: "form__label",
                    children: [
                      Object(h.jsx)("input", {
                        className: "form__input",
                        placeholder: "Email",
                        type: "text",
                        name: "email",
                        value: a,
                        onChange: function (e) {
                          s(e.target.value);
                        },
                      }),
                      " ",
                    ],
                  }),
                  Object(h.jsx)("br", {}),
                  " ",
                  Object(h.jsx)("br", {}),
                  Object(h.jsxs)("label", {
                    htmlFor: "password",
                    className: "form__label",
                    children: [
                      Object(h.jsx)("input", {
                        className: "form__input",
                        placeholder: "Pasword",
                        type: "text",
                        name: "password",
                        value: l,
                        onChange: function (e) {
                          j(e.target.value);
                        },
                      }),
                      " ",
                    ],
                  }),
                  Object(h.jsx)("br", {}),
                  " ",
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)("button", {
                    type: "submit",
                    className: "form__button",
                    onClick: function () {
                      var e = { email: a, password: l };
                      console.log(e),
                        fetch("https://51.38.51.187:5050/api/v1/auth/log-in", {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(e),
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            var t = JSON.stringify(e);
                            localStorage.setItem("token", t);
                          });
                    },
                    children: "Login",
                  }),
                ],
              }),
            ],
          });
        },
        y =
          (a(38),
          function (e) {
            var t = e.user;
            return Object(h.jsx)("div", {
              className: "container",
              children: Object(h.jsxs)("article", {
                className: "user",
                children: [
                  Object(h.jsx)("h4", {
                    className: "user__name",
                    children: t.name,
                  }),
                  Object(h.jsxs)(o.b, {
                    to: "/user/".concat(t.id),
                    children: [
                      " ",
                      Object(h.jsx)("button", {
                        className: "user__button",
                        children: "Book a 3D consultation",
                      }),
                      " ",
                    ],
                  }),
                ],
              }),
            });
          }),
        S =
          (a(39),
          function (e) {
            var t = e.users.map(function (e) {
              return Object(h.jsx)(
                "li",
                { children: Object(h.jsx)(y, { user: e }) },
                e.id
              );
            });
            return Object(h.jsx)("section", {
              children: Object(h.jsx)("ul", {
                className: "cards",
                children: t,
              }),
            });
          }),
        w = function () {
          var e = Object(n.useState)([]),
            t = Object(i.a)(e, 2),
            a = t[0],
            s = t[1];
          return (
            Object(n.useEffect)(function () {
              0 === a.length &&
                u().then(function (e) {
                  s(e);
                });
            }, []),
            Object(h.jsxs)("div", {
              className: "page",
              children: [
                Object(h.jsx)(m, {}),
                Object(h.jsxs)(l.c, {
                  children: [
                    Object(h.jsx)(l.a, {
                      exact: !0,
                      path: "/",
                      children: Object(h.jsx)(d, {}),
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/SignUp",
                      children: Object(h.jsx)(N, {}),
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/Login",
                      children: Object(h.jsx)(v, {}),
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/users",
                      children: Object(h.jsx)(S, { users: a }),
                    }),
                  ],
                }),
                Object(h.jsx)(_, {}),
              ],
            })
          );
        };
      a(40);
      r.a.render(
        Object(h.jsx)(o.a, { children: Object(h.jsx)(w, {}) }),
        document.querySelector("#root")
      );
    },
  },
  [[41, 1, 2]],
]);
//# sourceMappingURL=main.1445bae6.chunk.js.map
