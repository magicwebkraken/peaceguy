(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    2936: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(9212);
        },
      ]);
    },
    9212: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => M });
      var n = r(7876),
        a = r(4232),
        s = r(7328),
        l = r.n(s),
        o = r(8230),
        c = r.n(o);
      let i = function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            n = window.pageYOffset,
            a = e - n - r,
            s = null;
          requestAnimationFrame(function e(r) {
            var l, o, c;
            null === s && (s = r);
            let i = r - s,
              d =
                ((l = i),
                (o = n),
                (c = a),
                (l /= t / 2) < 1
                  ? (c / 2) * l * l + o
                  : (-c / 2) * (--l * (l - 2) - 1) + o);
            window.scrollTo(0, d), i < t && requestAnimationFrame(e);
          });
        },
        d = (e) => {
          let {
              href: t,
              children: r,
              activeSection: a,
              isDrawer: s,
              toggleDrawer: l,
            } = e,
            o = a === t.substring(t.indexOf("#") + 1);
          return (0, n.jsx)(c(), {
            href: t,
            onClick: (e) => {
              if (t.startsWith("/") && t.length > 1) {
                e.preventDefault();
                let r = t.substring(t.indexOf("#") + 1),
                  n = document.getElementById(r);
                n && (i(n.offsetTop, 250, 80), s && l());
              } else s && l();
            },
            className:
              "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200\n        "
                .concat(
                  o ? "bg-[#7D9FAC] text-[#FFFFFF]" : "hover:bg-[#E0E0E0]",
                  "\n        "
                )
                .concat(s ? "w-full text-center py-3" : "", "\n      "),
            children: r,
          });
        },
        u = (e) => {
          let { activeSection: t, isDrawer: r, toggleDrawer: a } = e;
          return (0, n.jsx)("nav", {
            className: r ? "flex flex-col space-y-4" : "flex space-x-1.5",
            children: [
              { href: "/#home", label: "HOME" },
              { href: "/#generate-meme", label: "GENERATE MEME" },
            ].map((e) =>
              (0, n.jsx)(
                d,
                {
                  href: e.href,
                  activeSection: t,
                  isDrawer: r,
                  toggleDrawer: a,
                  children: e.label,
                },
                e.href
              )
            ),
          });
        },
        h = (e) => {
          let { name: t, url: r, icon: a } = e;
          return (0, n.jsx)("a", {
            href: r,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:opacity-80 transition-opacity duration-200",
            children: (0, n.jsx)("img", {
              src: a,
              alt: "".concat(t, " icon"),
              className: "w-8 h-8",
            }),
          });
        },
        x = JSON.parse(
          '{"lj":[{"name":"X","url":"0x1eB683F42784C989E798B4030534c605E7D7a9a3","icon":"/icons/twitter.png"},{"name":"TikTok","url":"https://t.me/peaceguyEth","icon":"/icons/icon-telegram.png"},{"name":"Dexscreener","url":"https://dexscreener.com/ethereum/0x1eB683F42784C989E798B4030534c605E7D7a9a3","icon":"/icons/dexscreener.png"},{"name":"Dextools","url":"https://www.dextools.io/app/ether/pair-explorer/0x17dd24e04f2d1dd4e3ad4dff6719d791d47f3c2c","icon":"/icons/dextools.png"}],"$T":"0x1eB683F42784C989E798B4030534c605E7D7a9a3","_m":"https://birdeye.so/token/0x1eB683F42784C989E798B4030534c605E7D7a9a3?chain=solana"}'
        ),
        m = () =>
          (0, n.jsx)("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: x.lj.map((e) =>
              (0, n.jsx)(h, { name: e.name, url: e.url, icon: e.icon }, e.name)
            ),
          }),
        p = (e) => {
          let { children: t, className: r } = e,
            { _m: a } = x;
          
        },
        g = (e) => {
          let { onClick: t, isOpen: r } = e;
          return (0, n.jsxs)("button", {
            onClick: t,
            className:
              "flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer focus:outline-none",
            children: [
              (0, n.jsx)("div", {
                className:
                  "w-6 h-1 bg-black-2 rounded-full transition-all duration-300 transform ".concat(
                    r ? "rotate-45 translate-y-2" : "rotate-0"
                  ),
              }),
              (0, n.jsx)("div", {
                className:
                  "w-6 h-1 bg-black-2 rounded-full transition-all duration-300 ".concat(
                    r ? "opacity-0" : "opacity-100"
                  ),
              }),
              (0, n.jsx)("div", {
                className:
                  "w-6 h-1 bg-black-2 rounded-full transition-all duration-300 transform ".concat(
                    r ? "-rotate-45 -translate-y-2" : "rotate-0"
                  ),
              }),
            ],
          });
        },
        f = (e) => {
          let { isOpen: t, toggleDrawer: r, activeSection: a } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              t &&
                (0, n.jsx)("div", {
                  className:
                    "fixed inset-0 bg-black-2 opacity-50 z-40 lg:hidden",
                  onClick: r,
                }),
              (0, n.jsx)("div", {
                className:
                  "fixed top-0 left-0 h-full w-64 bg-sky-2 shadow-xl transform transition-transform duration-300 ease-in-out z-50\n          ".concat(
                    t ? "translate-x-0" : "-translate-x-full",
                    " lg:hidden"
                  ),
                children: (0, n.jsxs)("div", {
                  className:
                    "flex flex-col items-center py-8 space-y-6 relative h-[100vh]",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: r,
                      className:
                        "absolute top-4 right-4 text-black-2 hover:text-gray-4 focus:outline-none",
                      children: (0, n.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center space-x-2 mb-4 ",
                      children: [
                        (0, n.jsx)("img", {
                          src: "/logo.png",
                          alt: "Logo",
                          className: "h-8",
                        }),
                        (0, n.jsx)("span", {
                          className: "text-xl font-bold text-[#1A1A1A]",
                          children: "Peace Guy",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-10 space-y-4",
                      children: [
                        (0, n.jsx)(u, {
                          activeSection: a,
                          isDrawer: !0,
                          toggleDrawer: r,
                        }),
                        (0, n.jsx)(p, {}),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex flex-col items-center space-y-3 mt-5",
                      children: (0, n.jsx)(m, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        y = () => {
          let [e, t] = (0, a.useState)(!1),
            [r, s] = (0, a.useState)("home"),
            [l, o] = (0, a.useState)(0),
            c = () => {
              t(!e);
            };
          return (
            (0, a.useEffect)(
              () => (
                e
                  ? (o(window.scrollY),
                    (document.body.style.overflow = "hidden"),
                    (document.body.style.position = "fixed"),
                    (document.body.style.top = "-".concat(
                      window.scrollY,
                      "px"
                    )),
                    (document.body.style.width = "100%"))
                  : ((document.body.style.overflow = ""),
                    (document.body.style.position = ""),
                    (document.body.style.top = ""),
                    (document.body.style.width = ""),
                    window.scrollTo(0, l)),
                () => {
                  (document.body.style.overflow = ""),
                    (document.body.style.position = ""),
                    (document.body.style.top = ""),
                    (document.body.style.width = "");
                }
              ),
              [e, l]
            ),
            (0, a.useEffect)(() => {
              let e = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      e.isIntersecting &&
                        (s(e.target.id),
                        console.log("Active Section:", e.target.id));
                    });
                  },
                  { root: null, rootMargin: "0px", threshold: 0.7 }
                ),
                t = document.querySelectorAll("section[id]");
              return (
                t.forEach((t) => {
                  e.observe(t);
                }),
                () => {
                  t.forEach((t) => {
                    e.unobserve(t);
                  });
                }
              );
            }, []),
            (0, n.jsxs)("header", {
              className:
                "fixed top-0 w-full flex justify-center py-4 z-50 bg-transparent",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative flex items-center justify-between bg-white-1 rounded-full px-6 py-1.5 shadow-lg min-w-[90vw] lg:min-w-[1000px] mx-4",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "hidden lg:flex items-center justify-between w-full",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, n.jsx)("img", {
                              src: "/logo.png",
                              alt: "Logo",
                              className: "h-8",
                            }),
                            (0, n.jsx)("span", {
                              className: "text-xl font-bold text-black-1",
                              children: "Peace Guy",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            (0, n.jsx)(u, { activeSection: r }),
                            (0, n.jsx)(p, {}),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "flex items-center space-x-3",
                          children: (0, n.jsx)(m, {}),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "lg:hidden flex items-center justify-between w-full",
                      children: [
                        (0, n.jsx)(g, { onClick: c, isOpen: e }),
                        (0, n.jsx)(p, {}),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(f, { isOpen: e, toggleDrawer: c, activeSection: r }),
              ],
            })
          );
        };
      var w = r(7685);
      let b = () =>
          (0, n.jsxs)("section", {
            id: "home",
            className:
              "min-h-screen h-screen flex flex-col space-y-10 items-center justify-center  p-4 ",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "lg:w-[1000px] flex lg:flex-row flex-col items-center justify-between",
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "glowing tracking-wider text-[96px] md:text-[115.2px] lg:text-[153.6px] font-bold text-white-1 font-bangers uppercase text-center w-full",
                    children: "Peace Guy",
                  }),
                  (0, n.jsx)("img", {
                    src: "/home.png",
                    alt: "Peace Guy Logo",
                    className:
                      "w-[230px] h-[230px] md:w-[307px] md:h-[307px] lg:w-[461px] lg:h-[461px] object-contain",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex items-center bg-white-1 rounded-full p-2 shadow-lg w-full lg:w-[1000px] ",
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "bg-[#FF8C00] text-[#FFFFFF] font-bold px-4 py-2 rounded-full mr-2",
                    children: "CA:",
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "flex-grow text-black-2 text-sm md:text-base break-all pr-2 truncate",
                    children: x.$T,
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      navigator.clipboard.writeText(x.$T),
                        w.Ay.success("Contract Address Copied!", {
                          duration: 2e3,
                          position: "bottom-center",
                          style: {
                            background: "#333",
                            color: "#fff",
                            borderRadius: "10px",
                            padding: "16px",
                          },
                        });
                    },
                    className:
                      "ml-2 p-2 rounded-full hover:bg-gray-2 hover:cursor-pointer  transition-colors duration-200",
                    children: (0, n.jsx)("svg", {
                      className: "w-6 h-6 text-black-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 0h-2M10 12h.01M14 12h.01M18 12h.01",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        v = () => {
          let [e, t] = (0, a.useState)(null),
            [r, s] = (0, a.useState)({ x: 0, y: 0 }),
            [l, o] = (0, a.useState)(1),
            [c, i] = (0, a.useState)(!1),
            [d, u] = (0, a.useState)(!1),
            [h, x] = (0, a.useState)(null),
            [m, p] = (0, a.useState)({ x: 0, y: 0 }),
            [g, f] = (0, a.useState)({}),
            [y, b] = (0, a.useState)(2),
            [v, j] = (0, a.useState)(!1),
            [k, N] = (0, a.useState)(0),
            [E, S] = (0, a.useState)(null),
            M = (0, a.useRef)(null),
            A = (0, a.useRef)(null),
            C = (0, a.useRef)(null),
            F = (e) => {
              let t = M.current;
              if (!t) return { x: 0, y: 0 };
              let r = t.getBoundingClientRect(),
                n = t.width / r.width,
                a = t.height / r.height,
                s =
                  e.clientX ||
                  (e.touches && e.touches[0] ? e.touches[0].clientX : 0),
                l =
                  e.clientY ||
                  (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
              return { x: (s - r.left) * n, y: (l - r.top) * a };
            },
            D = (0, a.useCallback)(() => {
              let t = M.current;
              if (!t || !A.current || !C.current) return;
              let n = t.getContext("2d");
              if (!n) return;
              n.clearRect(0, 0, t.width, t.height),
                e &&
                  A.current.complete &&
                  n.drawImage(
                    A.current,
                    0,
                    0,
                    A.current.naturalWidth,
                    A.current.naturalHeight,
                    0,
                    0,
                    t.width,
                    t.height
                  );
              let a = C.current.naturalWidth * l,
                s = C.current.naturalHeight * l;
              C.current.complete && n.drawImage(C.current, r.x, r.y, a, s),
                e &&
                  ((n.strokeStyle = "#00AAFF"),
                  (n.lineWidth = 2),
                  n.strokeRect(r.x, r.y, a, s),
                  (n.fillStyle = "#FFFFFF"),
                  (n.strokeStyle = "#00AAFF"),
                  [
                    { x: r.x, y: r.y, cursor: "nwse-resize", type: "nw" },
                    { x: r.x + a, y: r.y, cursor: "nesw-resize", type: "ne" },
                    { x: r.x, y: r.y + s, cursor: "nesw-resize", type: "sw" },
                    {
                      x: r.x + a,
                      y: r.y + s,
                      cursor: "nwse-resize",
                      type: "se",
                    },
                    { x: r.x + a / 2, y: r.y, cursor: "ns-resize", type: "n" },
                    {
                      x: r.x + a,
                      y: r.y + s / 2,
                      cursor: "ew-resize",
                      type: "e",
                    },
                    {
                      x: r.x + a / 2,
                      y: r.y + s,
                      cursor: "ns-resize",
                      type: "s",
                    },
                    { x: r.x, y: r.y + s / 2, cursor: "ew-resize", type: "w" },
                  ].forEach((e) => {
                    n.beginPath(),
                      n.rect(e.x - 4, e.y - 4, 8, 8),
                      n.fill(),
                      n.stroke();
                  }));
            }, [e, r, l, c, d]);
          (0, a.useEffect)(() => {
            (A.current = new Image()),
              (C.current = new Image()),
              (C.current.src = "/logo.png");
          }, []),
            (0, a.useEffect)(() => {
              e &&
                A.current &&
                C.current &&
                M.current &&
                ((A.current.src = e),
                (A.current.onload = () => {
                  let e = M.current;
                  if (!e) return;
                  (e.width = A.current.naturalWidth),
                    (e.height = A.current.naturalHeight);
                  let t = A.current.naturalWidth,
                    n = A.current.naturalHeight,
                    a = t,
                    o = n,
                    c = t / n;
                  a > 1e3 && (o = (a = 1e3) / c),
                    o > 1500 && (a = (o = 1500) * c),
                    f({
                      width: "".concat(a, "px"),
                      height: "".concat(o, "px"),
                      maxWidth: "100%",
                      display: "block",
                      height: "auto",
                    }),
                    0 === r.x &&
                      0 === r.y &&
                      s({
                        x: e.width / 2 - (C.current.naturalWidth * l) / 2,
                        y: e.height / 2 - (C.current.naturalHeight * l) / 2,
                      }),
                    b(
                      Math.min(
                        A.current.naturalWidth,
                        A.current.naturalHeight
                      ) /
                        Math.max(
                          C.current.naturalWidth,
                          C.current.naturalHeight
                        )
                    ),
                    D();
                }));
            }, [e, D]),
            (0, a.useEffect)(() => {
              e && M.current && A.current && C.current && D();
            }, [r, l, D]);
          let z = (e, t) => {
              if (!C.current) return null;
              let n = C.current.naturalWidth * l,
                a = C.current.naturalHeight * l;
              for (let s of [
                { x: r.x, y: r.y, cursor: "nwse-resize", type: "nw" },
                { x: r.x + n, y: r.y, cursor: "nesw-resize", type: "ne" },
                { x: r.x, y: r.y + a, cursor: "nesw-resize", type: "sw" },
                { x: r.x + n, y: r.y + a, cursor: "nwse-resize", type: "se" },
                { x: r.x + n / 2, y: r.y, cursor: "ns-resize", type: "n" },
                { x: r.x + n, y: r.y + a / 2, cursor: "ew-resize", type: "e" },
                { x: r.x + n / 2, y: r.y + a, cursor: "ns-resize", type: "s" },
                { x: r.x, y: r.y + a / 2, cursor: "ew-resize", type: "w" },
              ])
                if (
                  e >= s.x - 4 &&
                  e <= s.x + 4 &&
                  t >= s.y - 4 &&
                  t <= s.y + 4
                )
                  return s;
              return null;
            },
            L = (e) => {
              let { x: t, y: n } = F(e),
                a = z(t, n);
              if (a) {
                u(!0), x(a.type), p({ x: t, y: n });
                return;
              }
              let s = C.current.naturalWidth * l,
                o = C.current.naturalHeight * l;
              t > r.x &&
                t < r.x + s &&
                n > r.y &&
                n < r.y + o &&
                (i(!0), p({ x: t - r.x, y: n - r.y }));
            },
            W = (e) => {
              let { x: t, y: n } = F(e),
                a = M.current;
              if (!c && !d && a) {
                let e = z(t, n);
                if (e) a.style.cursor = e.cursor;
                else {
                  let e = C.current.naturalWidth * l,
                    s = C.current.naturalHeight * l;
                  t > r.x && t < r.x + e && n > r.y && n < r.y + s
                    ? (a.style.cursor = "move")
                    : (a.style.cursor = "default");
                }
              }
              if (c) return void s({ x: t - m.x, y: n - m.y });
              if (d && C.current) {
                let e = C.current.naturalWidth,
                  a = e / C.current.naturalHeight,
                  c = C.current.naturalWidth * l,
                  i = C.current.naturalHeight * l,
                  d = r.x,
                  u = r.y,
                  x = t - m.x,
                  g = n - m.y;
                switch (h) {
                  case "se":
                    i = (c = Math.max(20, c + x)) / a;
                    break;
                  case "sw":
                    (i = (c = Math.max(20, c - x)) / a), (d = r.x + x);
                    break;
                  case "ne":
                    (i = (c = Math.max(20, c + x)) / a),
                      (u = r.y - (i - C.current.naturalHeight * l));
                    break;
                  case "nw":
                    (i = (c = Math.max(20, c - x)) / a),
                      (d = r.x + x),
                      (u = r.y - (i - C.current.naturalHeight * l));
                    break;
                  case "n":
                    (c = (i = Math.max(20, i - g)) * a),
                      (d = r.x - (c - C.current.naturalWidth * l) / 2),
                      (u = r.y + g);
                    break;
                  case "s":
                    (c = (i = Math.max(20, i + g)) * a),
                      (d = r.x - (c - C.current.naturalWidth * l) / 2);
                    break;
                  case "e":
                    (i = (c = Math.max(20, c + x)) / a),
                      (u = r.y - (i - C.current.naturalHeight * l) / 2);
                    break;
                  case "w":
                    (i = (c = Math.max(20, c - x)) / a),
                      (d = r.x + x),
                      (u = r.y - (i - C.current.naturalHeight * l) / 2);
                }
                o(c / e), s({ x: d, y: u }), p({ x: t, y: n });
              }
            },
            R = () => {
              i(!1), u(!1), x(null);
            },
            P = () => {
              let t,
                n,
                a,
                s,
                o = M.current;
              if (!o) return null;
              let c = document.createElement("canvas");
              (c.width = 1080), (c.height = 1920);
              let i = c.getContext("2d");
              (i.fillStyle = "black"), i.fillRect(0, 0, c.width, c.height);
              let d = o.width,
                u = o.height,
                h = c.width,
                x = c.height,
                m = d / u;
              m > h / x
                ? ((t = h), (a = 0), (s = (x - (n = h / m)) / 2))
                : ((n = x), (a = (h - (t = x * m)) / 2), (s = 0));
              let p = document.createElement("canvas");
              (p.width = o.width), (p.height = o.height);
              let g = p.getContext("2d");
              if (
                (e &&
                  A.current &&
                  A.current.complete &&
                  g.drawImage(
                    A.current,
                    0,
                    0,
                    A.current.naturalWidth,
                    A.current.naturalHeight,
                    0,
                    0,
                    p.width,
                    p.height
                  ),
                C.current && C.current.complete)
              ) {
                let e = C.current.naturalWidth * l,
                  t = C.current.naturalHeight * l;
                g.drawImage(C.current, r.x, r.y, e, t);
              }
              return (
                i.drawImage(p, a, s, t, n),
                {
                  dataUrl: c.toDataURL("image/png"),
                  dimensions: { width: c.width, height: c.height },
                  offsets: { x: a, y: s },
                  scale: { width: t, height: n },
                }
              );
            },
            I = async () => {
              try {
                j(!0), N(0);
                let e = P();
                if (!e) {
                  w.Ay.error("Failed to create merged image"), j(!1);
                  return;
                }
                S(e);
                let t = document.createElement("canvas");
                (t.width = 1080), (t.height = 1920);
                let r = t.getContext("2d"),
                  n = new Image();
                (n.src = e.dataUrl),
                  await new Promise((e) => {
                    n.onload = e;
                  });
                let a = document.createElement("video");
                (a.style.display = "none"), document.body.appendChild(a);
                let s = new (window.AudioContext ||
                    window.webkitAudioContext)(),
                  l = s.createMediaStreamDestination(),
                  o = document.createElement("audio");
                (o.src = "/background.mp3"),
                  (o.loop = !1),
                  document.body.appendChild(o);
                let c = s.createMediaElementSource(o);
                c.connect(l), c.connect(s.destination);
                let i = t.captureStream(25),
                  d = new MediaStream([
                    ...i.getVideoTracks(),
                    ...l.stream.getAudioTracks(),
                  ]),
                  u = "video/mp4";
                !MediaRecorder.isTypeSupported(u) &&
                  ((u = "video/webm; codecs=h264,opus"),
                  MediaRecorder.isTypeSupported(u) || (u = "video/webm"));
                let h = new MediaRecorder(d, {
                    mimeType: u,
                    videoBitsPerSecond: 5e6,
                  }),
                  x = [];
                (h.ondataavailable = (e) => {
                  e.data.size > 0 && x.push(e.data);
                }),
                  (h.onstop = () => {
                    let e = u.includes("mp4") ? "mp4" : "webm",
                      t = new Blob(x, { type: u }),
                      r = URL.createObjectURL(t),
                      n = document.createElement("a");
                    (n.href = r),
                      (n.download = "meme-video.".concat(e)),
                      n.click(),
                      URL.revokeObjectURL(r),
                      document.body.removeChild(a),
                      document.body.removeChild(o),
                      j(!1),
                      N(100),
                      w.Ay.success(
                        "Video generated successfully as ".concat(
                          e.toUpperCase(),
                          "!"
                        )
                      );
                  }),
                  o.addEventListener("loadedmetadata", () => {
                    let e = o.duration;
                    console.log("Audio duration:", e, "seconds");
                    let a = Math.ceil(25 * e),
                      s = 0,
                      l = !1;
                    o.addEventListener(
                      "canplaythrough",
                      () => {
                        l ||
                          ((l = !0),
                          console.log("Starting recording..."),
                          h.start(1e3),
                          o.play().catch((e) => {
                            console.error("Audio play error:", e),
                              w.Ay.error(
                                "Error playing audio. Please try again."
                              );
                          }));
                      },
                      { once: !0 }
                    );
                    let c = () => {
                      N(Math.floor((s / a) * 100)),
                        (r.fillStyle = "black"),
                        r.fillRect(0, 0, t.width, t.height),
                        r.drawImage(n, 0, 0),
                        ++s < a
                          ? setTimeout(c, 40)
                          : (console.log(
                              "All frames rendered, stopping recording"
                            ),
                            setTimeout(() => {
                              "recording" === h.state && h.stop();
                            }, 1e3));
                    };
                    c();
                  }),
                  o.addEventListener("ended", () => {
                    console.log("Audio ended"),
                      setTimeout(() => {
                        "recording" === h.state && h.stop();
                      }, 1e3);
                  }),
                  o.addEventListener("error", (e) => {
                    console.error("Audio error:", e),
                      w.Ay.error("Error loading background music"),
                      "recording" === h.state && h.stop(),
                      j(!1);
                  }),
                  o.load();
              } catch (e) {
                console.error("Error generating video:", e),
                  w.Ay.error("Error generating video. Please try again."),
                  j(!1),
                  N(0);
              }
            };
          return (0, n.jsxs)("section", {
            id: "generate-meme",
            className:
              "min-h-screen flex flex-col items-center justify-center bg-sky-4/10 p-4",
            children: [
              (0, n.jsx)("h2", {
                className:
                  "text-4xl font-bold text-black-1 font-bangers uppercase mb-8",
                children: "Generate Your Meme",
              }),
              e
                ? (0, n.jsxs)("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, n.jsx)("canvas", {
                            ref: M,
                            className:
                              "border border-gray-300 shadow-lg ".concat(
                                c ? "cursor-grabbing" : ""
                              ),
                            onMouseDown: L,
                            onMouseMove: W,
                            onMouseUp: R,
                            onMouseLeave: R,
                            onTouchStart: (e) => {
                              e.preventDefault(), L(e);
                            },
                            onTouchMove: (e) => {
                              e.preventDefault(), W(e);
                            },
                            onTouchEnd: (e) => {
                              e.preventDefault(), R();
                            },
                            style: g,
                          }),
                          (0, n.jsx)("div", {
                            className: "mt-2 text-sm text-gray-600 text-center",
                            children: (0, n.jsx)("p", {
                              children:
                                "Drag the logo to position it. Use the handles to resize.",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex space-x-4 mt-4",
                        children: [
                          (0, n.jsx)("button", {
                            onClick: () => {
                              let t = M.current;
                              if (!t) return;
                              let n = document.createElement("canvas");
                              (n.width = t.width), (n.height = t.height);
                              let a = n.getContext("2d");
                              if (
                                (e &&
                                  A.current &&
                                  A.current.complete &&
                                  a.drawImage(
                                    A.current,
                                    0,
                                    0,
                                    A.current.naturalWidth,
                                    A.current.naturalHeight,
                                    0,
                                    0,
                                    n.width,
                                    n.height
                                  ),
                                C.current && C.current.complete)
                              ) {
                                let e = C.current.naturalWidth * l,
                                  t = C.current.naturalHeight * l;
                                a.drawImage(C.current, r.x, r.y, e, t);
                              }
                              let s = document.createElement("a");
                              (s.download = "meme.png"),
                                (s.href = n.toDataURL("image/png")),
                                s.click();
                            },
                            className:
                              "bg-green-500 text-white-1 px-6 py-3 rounded-full "
                                .concat(
                                  !v ? "hover:bg-green-600" : "opacity-50",
                                  " transition-colors duration-200 "
                                )
                                .concat(
                                  v ? "cursor-not-allowed" : "cursor-pointer"
                                ),
                            disabled: v,
                            children: "Download Image",
                          }),
                          (0, n.jsx)("button", {
                            onClick: I,
                            className:
                              "bg-blue-500 text-white-1 px-6 py-3 rounded-full "
                                .concat(
                                  !v ? "hover:bg-blue-600" : "opacity-70",
                                  " transition-colors duration-200 "
                                )
                                .concat(
                                  v ? "cursor-not-allowed" : "cursor-pointer"
                                ),
                            disabled: v,
                            children: v
                              ? "Processing ".concat(k, "%")
                              : "Download Video",
                          }),
                          (0, n.jsx)("button", {
                            onClick: () => {
                              t(null),
                                s({ x: 0, y: 0 }),
                                o(1),
                                f({}),
                                i(!1),
                                u(!1),
                                x(null),
                                p({ x: 0, y: 0 }),
                                b(2);
                            },
                            className:
                              "bg-red-500 text-white-1 px-6 py-3 rounded-full "
                                .concat(
                                  !v ? "hover:bg-red-600" : "opacity-50",
                                  " transition-colors duration-200 "
                                )
                                .concat(
                                  v ? "cursor-not-allowed" : "cursor-pointer"
                                ),
                            disabled: v,
                            children: "Restart",
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    onDrop: (e) => {
                      e.preventDefault();
                      let r = e.dataTransfer.files[0];
                      if (r && r.type.startsWith("image/")) {
                        let e = new Image();
                        e.onload = () => {
                          if (e.width < 500 || e.height < 500)
                            return void w.Ay.error(
                              "Image must be at least 500x500 pixels"
                            );
                          t(e.src);
                        };
                        let n = new FileReader();
                        (n.onload = (t) => {
                          e.src = t.target.result;
                        }),
                          n.readAsDataURL(r);
                      } else w.Ay.error("Please drop an image file.");
                    },
                    onDragOver: (e) => e.preventDefault(),
                    className:
                      "w-full max-w-2xl border-2 border-dashed border-gray-400 rounded-lg p-12 text-center cursor-pointer hover:border-gray-600 transition-colors duration-200 bg-white/5 backdrop-blur-sm",
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col items-center space-y-4",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "w-16 h-16 rounded-full bg-sky-4/20 flex items-center justify-center",
                          children: (0, n.jsx)("svg", {
                            className: "w-8 h-8 text-sky-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, n.jsx)("p", {
                              className: "text-xl font-semibold text-black-1",
                              children: "Drop your image here",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-sm text-gray-600",
                              children: "or",
                            }),
                            (0, n.jsx)("input", {
                              type: "file",
                              accept: "image/*",
                              onChange: (e) => {
                                let r = e.target.files[0];
                                if (r && r.type.startsWith("image/")) {
                                  let e = new Image();
                                  e.onload = () => {
                                    if (e.width < 500 || e.height < 500)
                                      return void w.Ay.error(
                                        "Image must be at least 500x500 pixels"
                                      );
                                    t(e.src);
                                  };
                                  let n = new FileReader();
                                  (n.onload = (t) => {
                                    e.src = t.target.result;
                                  }),
                                    n.readAsDataURL(r);
                                } else
                                  w.Ay.error("Please select an image file.");
                              },
                              className: "hidden",
                              id: "fileInput",
                            }),
                            (0, n.jsx)("label", {
                              htmlFor: "fileInput",
                              className:
                                "inline-block bg-sky-4 text-white-1 px-6 py-3 rounded-full cursor-pointer hover:bg-sky-5 transition-colors duration-200",
                              children: "Browse Files",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-sm text-gray-500 space-y-1",
                          children: [
                            (0, n.jsx)("p", {
                              children: "Supported formats: JPG, PNG, GIF",
                            }),
                            (0, n.jsx)("p", {
                              children: "Maximum file size: 10MB",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
            ],
          });
        };
      var j = r(4587),
        k = r.n(j);
      let N = () => {
          let e = (0, a.useRef)(null),
            t = Array.from({ length: 14 }, (e, t) =>
              "/sliders/".concat(t + 1, ".webp")
            ),
            r = [...t, ...t];
          return (
            (0, a.useEffect)(() => {
              let r,
                n = e.current;
              if (!n) return;
              let a = 0,
                s = () => {
                  a -= 0.5;
                  let e = window.innerWidth < 768 ? 200 : 250,
                    l = -(t.length * e);
                  a <= l && (a = 0),
                    (n.style.transform = "translateX(".concat(a, "px)")),
                    (r = requestAnimationFrame(s));
                };
              r = requestAnimationFrame(s);
              let l = () => {
                (a = 0), (n.style.transform = "translateX(".concat(a, "px)"));
              };
              return (
                window.addEventListener("resize", l),
                () => {
                  cancelAnimationFrame(r),
                    window.removeEventListener("resize", l);
                }
              );
            }, [t.length]),
            (0, n.jsx)("section", {
              className: "w-full overflow-hidden  ",
              children: (0, n.jsx)("div", {
                className: "relative w-full overflow-hidden",
                children: (0, n.jsx)("div", {
                  ref: e,
                  className: "flex whitespace-nowrap",
                  style: { willChange: "transform" },
                  children: r.map((e, t) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: "inline-block px-2",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative",
                          children: (0, n.jsx)(k(), {
                            src: e,
                            alt: "Slider image ".concat(t + 1),
                            fill: !0,
                            className: "object-cover rounded-lg",
                            sizes: "(max-width: 768px) 200px, 250px",
                            priority: t < 5,
                          }),
                        }),
                      },
                      "".concat(e, "-").concat(t)
                    )
                  ),
                }),
              }),
            })
          );
        },
        E = () => {
          let e = new Date().getFullYear();
          return (0, n.jsx)("footer", {
            className: "w-full py-6 !bg-black text-white",
            children: (0, n.jsx)("div", {
              className: "container mx-auto px-4",
              children: (0, n.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-center",
                children: [
                  (0, n.jsx)("div", {
                    className: "mb-4 md:mb-0",
                    children: (0, n.jsxs)("p", {
                      className: "text-sm",
                      children: [
                        "\xa9 ",
                        e,
                        " Peace Guy. All rights reserved.",
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "flex flex-wrap justify-center gap-3",
                    children: x.lj.map((e) =>
                      (0, n.jsx)(
                        "a",
                        {
                          href: e.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "hover:opacity-80 transition-opacity duration-200",
                          children: (0, n.jsx)("img", {
                            src: e.icon,
                            alt: "".concat(e.name, " icon"),
                            className:
                              "w-6 h-6 object-cover object-center rounded-full bg-white",
                          }),
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        S = () => {
          let e = (0, a.useRef)(null),
            [t, r] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            let t = localStorage.getItem("musicPlayerState");
            if (t) {
              let { playing: n } = JSON.parse(t);
              r(n),
                n &&
                  e.current &&
                  ((e.current.volume = 0.15),
                  e.current.play().catch((e) => {
                    console.error("Auto-play was prevented:", e), r(!1), s(!1);
                  }));
            }
            e.current && (e.current.volume = 0.15);
          }, []);
          let s = (e) => {
            localStorage.setItem(
              "musicPlayerState",
              JSON.stringify({ playing: e })
            );
          };
          return (0, n.jsxs)("div", {
            className: "fixed bottom-4 right-4 z-50",
            children: [
              (0, n.jsx)("audio", {
                ref: e,
                src: "/music.mp3",
                loop: !0,
                muted: !t,
              }),
              (0, n.jsx)("button", {
                onClick: () => {
                  if (e.current) {
                    t
                      ? e.current.pause()
                      : ((e.current.volume = 0.15),
                        e.current.play().catch((e) => {
                          console.error("Play was prevented:", e);
                        }));
                    let n = !t;
                    r(n), s(n);
                  }
                },
                className:
                  "bg-black hover:bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
                "aria-label": t ? "Pause music" : "Play music",
                children: t
                  ? (0, n.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      }),
                    })
                  : (0, n.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: [
                        (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
                        }),
                        (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        }),
                      ],
                    }),
              }),
            ],
          });
        };
      function M() {
        return (0, n.jsxs)("main", {
          children: [
            (0, n.jsx)(l(), {
              children: (0, n.jsx)("title", { children: "Peace Guy" }),
            }),
            (0, n.jsx)(y, {}),
            (0, n.jsx)(b, {}),
            (0, n.jsx)(N, {}),
            (0, n.jsx)(v, {}),
            (0, n.jsx)(E, {}),
            (0, n.jsx)(S, {}),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [967, 636, 593, 792], () => t(2936)), (_N_E = e.O());
  },
]);
