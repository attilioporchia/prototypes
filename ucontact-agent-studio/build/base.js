function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} = React;

/* ============================ ICONS ============================ */
const I = {
  burger: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  monitor: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4"
  })),
  inbox: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5h13l3.5 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z"
  })),
  card: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9h4M15 13h4M6 16h7"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.6v.2"
  })),
  user: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 20a7.5 7.5 0 0 1 15 0"
  })),
  users: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 19.5a6.5 6.5 0 0 1 13 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.5a3.2 3.2 0 0 1 0 6M17.5 19.5a6.6 6.6 0 0 0-2-4.7"
  })),
  plug: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15.5 11 11l4.5-2.5L13 13z"
  })),
  bolt: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12a8 8 0 1 1 2.4 5.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8v4h4"
  })),
  gear: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5v2.6M12 18.9v2.6M4.2 7.2l2.2 1.3M17.6 15.5l2.2 1.3M4.2 16.8l2.2-1.3M17.6 8.5l2.2-1.3"
  })),
  spark: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
  })),
  chat: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 12a7.5 7.5 0 0 1-11 6.6L4.5 20l1.3-4A7.5 7.5 0 1 1 20 12z"
  })),
  board: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "15",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 15v-3M11 15V9M15 15v-5"
  })),
  form: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8h8M8 12h8M8 16h4"
  })),
  bell: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 0 4 0"
  })),
  cup: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9h2a2.5 2.5 0 0 1 0 5h-2"
  })),
  phoneOut: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 3.5h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5 14 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  phoneIn: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5 14 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5v5.5h5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  phone: /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5 9.5 18 20 6.5"
  })),
  plus: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  x: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  })),
  back: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  })),
  fwd: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  })),
  lock: /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10.5",
    width: "16",
    height: "11",
    rx: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5V7a4 4 0 0 1 8 0v3.5"
  })),
  pencil: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 20h4L20 8l-4-4L4 16z"
  })),
  send: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12 20 4l-8 16-2-6z"
  })),
  play: /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4l13 8-13 8z"
  })),
  clock: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5.5l3.5 2"
  })),
  calendar: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  })),
  quote: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h9l4 4v14H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12h7M9 16h5M9 8h4"
  })),
  msg: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 11.5a7 7 0 0 1-10.3 6.2L5 19l1.2-4A7 7 0 1 1 20 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11.5h5"
  })),
  scale: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v16M6 20h12M12 7 5 9l3 5 3-5zM12 7l7 2-3 5-3-5z"
  })),
  globe: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 9.5h17M3.5 14.5h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"
  })),
  arrowUp: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5.5 11.5 12 5l6.5 6.5"
  })),
  arrowDown: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5.5 12.5 12 19l6.5-6.5"
  })),
  spinner: /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 1 0 9 9"
  })),
  wand: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 19 16 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5 15 7l2.5 1-2.5 1-1 2.5-1-2.5L10.5 8 13 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 13.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7.5 3v5.5c0 4.5-3.2 7.8-7.5 9.5-4.3-1.7-7.5-5-7.5-9.5V6z"
  }))
};

/* ============================ MOCK DATA ============================ */

const persona = id => PERSONAS.find(p => p.id === id) || PERSONAS[0];
const GOALS = {
  leads: [{
    id: 'quote_wa',
    v: 'sends a quote by WhatsApp the same day',
    say: 'Le envío la cotización por WhatsApp hoy mismo, ¿le parece?',
  sayEn: 'I can send the quote over on WhatsApp today — does that work for you?'
  }, {
    id: 'visit',
    v: 'books a visit with an advisor',
    say: 'Le agendo una visita con un asesor, ¿mañana a las 10:00 le sirve?',
  sayEn: 'I can book you a visit with an advisor. Would tomorrow at ten suit you?'
  }, {
    id: 'budget',
    v: 'asks the budget and passes it to sales',
    say: '¿Qué presupuesto tiene en mente? Con eso le paso el caso a un asesor.',
  sayEn: 'What budget did you have in mind? I will pass that to an advisor with your details.'
  }],
  appointments: [{
    id: 'confirm',
    v: 'confirms or moves the appointment',
    say: '¿Le confirmo la cita del jueves a las 10:00, o prefiere otro horario?',
  sayEn: 'Shall I confirm Thursday at ten, or would another time suit you better?'
  }, {
    id: 'confirm_only',
    v: 'only confirms, never reschedules',
    say: '¿Me confirma que asistirá el jueves a las 10:00?',
  sayEn: 'Can you confirm you will be there on Thursday at ten?'
  }, {
    id: 'prep',
    v: 'confirms and explains what to bring',
    say: 'Le confirmo el jueves 10:00. Traiga su documento y los exámenes previos.',
  sayEn: 'Thursday at ten, confirmed. Please bring your ID and any previous test results.'
  }],
  messages: [{
    id: 'callback',
    v: 'agrees a callback time and number',
    say: '¿A qué número le devolvemos la llamada, y a qué hora le conviene?',
  sayEn: 'What number should we call you back on, and what time suits you?'
  }, {
    id: 'deliver',
    v: 'delivers the message and ends',
    say: 'Le dejo el recado y con eso termino. Gracias por su tiempo.',
  sayEn: 'I will leave that message for you, and that is everything. Thanks for your time.'
  }, {
    id: 'confirm_r',
    v: 'reads the message back to confirm',
    say: 'Le repito el recado para confirmar que quedó bien anotado.',
  sayEn: 'Let me read the message back so we know it is right.'
  }],
  // Collections: what it can offer, in the order the supervisor sets. "When do you intend to pay"
  // is no longer one of them — it is the fixed fallback (INTENT_ASK in data.js).
  collections: [{
    id: 'date5',
    v: 'full payment within',
    say: '¿Puede realizar el pago total dentro de {n}?',
    sayEn: 'Could you pay the full balance within {n}?'
  }, {
    id: 'partial',
    v: 'a partial payment of at least',
    say: 'Podemos registrar un abono de al menos {n} del saldo, es decir {amt}. ¿Le parece?',
    sayEn: 'We can take a part payment of at least {n} of the balance — that is {amt}. Would that work?'
  }, {
    id: 'minimum',
    v: 'the minimum payment',
    say: 'Puede realizar el pago mínimo de {min}. ¿Le sirve?',
    sayEn: 'You can make the minimum payment of {min}. Would that work?'
  }, {
    id: 'twopart',
    v: 'in two parts: first today, the rest within',
    say: 'Podemos dividirlo en dos pagos: uno hoy y el resto dentro de {n}. ¿Le parece?',
    sayEn: 'We can split it in two: one part today and the rest within {n}. Would that work?'
  }, {
    id: 'reduced',
    v: 'a reduced balance without interest',
    say: 'Podemos dejar el saldo en {red}, sin intereses. ¿Le parece?',
    sayEn: 'We can settle the balance at {red}, without interest. Would that work?'
  }],
  reception: [{
    id: 'takemsg',
    v: 'collects the caller’s details and confirms them back',
    // `short` is used only when several jobs are listed together, where the full phrases
    // (which carry their own "and" and comma clauses) would run into each other
    short: 'takes a message',
    say: 'Let me make sure I have that right — I’ll read it back to you before we finish.'
  }, {
    id: 'book',
    v: 'books an appointment from the connected calendar',
    short: 'books appointments',
    say: 'I can book that for you now. Which day works best?'
  }, {
    id: 'answer',
    v: 'answers questions from the business profile, then takes a message',
    short: 'answers questions from the business profile',
    say: 'Happy to help with that. Anything I can’t answer, I’ll pass on as a message.'
  }]
};
const IDENTITY = [{
  id: 'verify',
  v: 'verifies who it is speaking to',
  say: '¿Hablo con la persona titular?',
  sayEn: 'Am I speaking with the account holder?'
}, {
  id: 'byname',
  v: 'asks for the person by name',
  say: '¿Se encuentra la señora Herrera?',
  sayEn: 'Is Mrs Herrera available?'
}, {
  id: 'none',
  v: 'speaks to whoever answers',
  say: 'Le comento el motivo de la llamada.',
  sayEn: 'Let me explain why I am calling.'
}];
const HANDOFF = [{
  id: 'campaign',
  v: 'transfers to a campaign',
  say: 'Con gusto, le paso con el equipo de esa campaña ahora mismo.',
  // sayEn is used by the one template that speaks English; the rest quote `say`
  sayEn: 'Of course — let me put you through to the team on that campaign.'
}, {
  id: 'msg',
  v: 'takes a message and ends the call',
  say: 'Le tomo el recado y una persona le devuelve la llamada.',
  sayEn: 'I’ll take a message and someone will call you back.'
}];
const TEMPLATES = [{
  id: 'leads',
  name: 'Lead capture & quotes',
  icon: I.quote,
  blurb: 'Calls people who asked about a product, checks what they need and gets them a quote.',
  stat: 'Used by 34 teams',
  company: 'Seguros Vida Andina',
  who: 'people who asked for a quote from',
  mid: 'asks what they need, and',
  goal: 'quote_wa',
  handoff: 'campaign',
  campaign: 'Sales_Engineers',
  opener: 'Le llamo por la cotización que solicitó.',
  openerEn: 'I am calling about the quote you asked us for.',
  inOpener: '¿En qué producto está interesado?',
  inOpenerEn: 'Which product are you interested in?',
  promises: ['Never promise a final price', 'Never promise a discount', 'Never promise same-day delivery'],
  banned: ['gratis', 'garantizado'],
  bannedEn: ['free', 'guaranteed'],
  custSay: 'Sí, pedí información por la página.',
  custSayEn: 'Yes, I asked for information on your website.'
}, {
  id: 'appointments',
  name: 'Appointments',
  icon: I.calendar,
  blurb: 'Confirms, moves and reminds — for clinics, workshops and service visits.',
  stat: 'Used by 51 teams',
  company: 'Clínica Andes',
  who: 'customers of',
  mid: 'states the date and time, and',
  goal: 'confirm',
  handoff: 'campaign',
  campaign: 'Citas_Sept',
  opener: 'Le llamo para confirmar su cita del jueves a las 10:00.',
  openerEn: 'I am calling to confirm your appointment on Thursday at ten.',
  inOpener: '¿Desea agendar, mover o confirmar una cita?',
  inOpenerEn: 'Would you like to book, move or confirm an appointment?',
  promises: ['Never promise a specific doctor', 'Never promise a same-day slot', 'Never give clinical advice'],
  banned: ['diagnóstico', 'urgencia'],
  bannedEn: ['diagnosis', 'emergency'],
  custSay: 'Sí, con ella. ¿De qué se trata?',
  custSayEn: 'Speaking. What is it about?'
}, {
  id: 'messages',
  name: 'Messages & callbacks',
  icon: I.msg,
  blurb: 'Delivers a message, takes one back and agrees when a person will call.',
  stat: 'Used by 22 teams',
  company: 'Servicios Del Plata',
  who: 'people who left a message for',
  mid: 'delivers the message, and',
  goal: 'callback',
  handoff: 'msg',
  opener: 'Le devuelvo la llamada por el mensaje que nos dejó.',
  openerEn: 'I am returning your call about the message you left us.',
  inOpener: '¿Desea dejar un mensaje o que le devolvamos la llamada?',
  inOpenerEn: 'Would you like to leave a message, or have us call you back?',
  promises: ['Never promise an exact callback minute', 'Never promise a resolution'],
  banned: ['reclamo'],
  bannedEn: ['complaint'],
  custSay: 'Ah sí, llamé ayer y no me contestaron.',
  custSayEn: 'Oh yes, I rang yesterday and nobody picked up.'
}, {
  id: 'collections',
  name: 'Collections',
  icon: I.scale,
  blurb: 'Explains an overdue balance, agrees a payment date and sends the payment link.',
  stat: 'Used by 18 teams',
  company: 'Banco Sol',
  who: 'people with overdue payments at',
  mid: 'explains the balance, and',
  goal: 'date5',
  handoff: 'campaign',
  campaign: 'Cobros_Ago',
  opener: 'Le llamo por su saldo pendiente.',
  openerEn: 'I am calling about your outstanding balance.',
  inOpener: '¿Desea consultar su saldo o registrar un pago?',
  inOpenerEn: 'Would you like to check your balance or make a payment?',
  promises: ['Never promise to remove interest', 'Never promise to stop legal action', 'Never promise a discount on the balance'],
  banned: ['abogado'],
  bannedEn: ['lawyer'],
  custSay: 'Sí, soy yo. Ya sé del saldo pendiente.',
  custSayEn: 'Yes, speaking. I know about the balance.'
}, {
  id: 'reception',
  name: 'Receptionist',
  icon: I.phoneIn,
  inboundOnly: true,
  blurb: 'Answers the company line, greets callers, collects who is calling and why, and passes a summary on.',
  stat: 'New · inbound only',
  company: 'Estudio Jurídico Lara',
  who: 'callers of',
  mid: '',
  goal: 'takemsg',
  handoff: 'msg',
  opener: 'Thank you for calling — how can I help you today?',
  inOpener: 'Thank you for calling — how can I help you today?',
  promises: ['Never promise a person will call back at an exact time', 'Never quote a price', 'Never confirm an appointment the calendar hasn’t accepted'],
  banned: ['guaranteed', 'immediately'],
  custSay: 'Hi, I was hoping to speak with someone about my case.'
}];
const template = id => TEMPLATES.find(t => t.id === id) || TEMPLATES[1];
const DEFAULT_BANNED = ['urgente', 'demanda', 'embargo'];
/* the same three, for an agent that speaks English */
const DEFAULT_BANNED_EN = ['urgent', 'lawsuit', 'seizure'];
function newDraft() {
  return {
    direction: null,
    template: null,
    lang: null,
    handover: [],
    handoverOther: [],
    collect: [],
    knowledge: { about: '', urls: [] },
    personaId: null,
    tokens: {},
    opener: '',
    attempts: 2,
    from: 8,
    to: 18,
    banned: [],
    promises: [],
    name: ''
  };
}
const NAME_ES = {
  appointments: 'Citas ',
  collections: 'Cobros ',
  messages: 'Recados ',
  leads: 'Cotizaciones '
};
function seedFromTemplate(d, tid) {
  const t = template(tid);
  const inbound = d.direction === 'in';
  return {
    ...d,
    template: tid,
    name: (inbound ? 'Recepción ' : NAME_ES[tid] || '') + t.company,
    handover: (HANDOVER_SEED[tid] || []).slice(),
    handoverOther: [],
    // only the receptionist has anything here; every other template gets clean defaults
    collect: tid === 'reception' ? COLLECT_DEFAULTS.map(f => ({ ...f })) : [],
    knowledge: tid === 'reception' ? { about: '', urls: [] } : { about: '', urls: [] },
    tokens: {
      company: t.company,
      identity: 'verify',
      goal: t.goal,
      // a receptionist can hold several jobs at once; goal stays the first of them
      goals: multiGoal(tid) ? [t.goal] : undefined,
      handoff: t.handoff,
      campaign: t.campaign || CAMPAIGNS[0],
      // collections only: what it says about the balance, and how the customer pays
      ...(tid === 'collections' ? { disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
        mentions: { overdue: false, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
        offers: OFFER_IDS.map(id => ({ id, on: id === 'date5' })), closing: '' } : {})
    },
    opener: d.lang === 'en'
      ? (inbound ? (t.inOpenerEn || t.inOpener) : (t.openerEn || t.opener))
      : (inbound ? t.inOpener : t.opener),
    banned: d.lang === 'en'
      ? [...DEFAULT_BANNED_EN, ...(t.bannedEn || t.banned)]
      : [...DEFAULT_BANNED, ...t.banned],
    // whoever rang in is by definition the person on the line, so the wrong-recipient rule is
    // seeded for outbound work only
    promises: (inbound ? [] : [{ t: THIRD_PARTY_RULE, on: true, kind: 'rule' }])
      // collections adds the two sibling rules: never the amount, and the message it leaves
      .concat(!inbound && tid === 'collections' ? [
        { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
        { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault(d.lang, t.company) }] : [])
      // a template rule that does not begin "Never promise" was never a promise: the summary
      // read "never promises ... or Never give clinical advice". It is an other-rule.
      .concat(t.promises.map(p => ({
        t: p,
        on: true,
        kind: /^never promise/i.test(p) ? 'promise' : 'rule'
      })))
  };
}

/* ---- the call log a supervisor picks from before correcting anything ---- */
const OUTCOMES = {
  confirmed: {
    label: 'Confirmed',
    cls: 'pill-live'
  },
  moved: {
    label: 'Rescheduled',
    cls: 'pill-live'
  },
  message: {
    label: 'Took a message',
    cls: 'pill-reh'
  },
  transfer: {
    label: 'Transferred',
    cls: 'pill-acc'
  },
  none: {
    label: 'No answer',
    cls: 'pill-dra'
  }
};
const CALL_LOG = [{
  id: 'c1',
  no: '4.812',
  when: 'Today · 15:42',
  dur: '1:06',
  kind: 'message',
  flag: true,
  snippet: 'Ese día no puedo, estoy trabajando hasta tarde.'
}, {
  id: 'c2',
  no: '4.809',
  when: 'Today · 15:10',
  dur: '0:38',
  kind: 'confirmed',
  snippet: 'Sí, perfecto, ahí estaré.'
}, {
  id: 'c3',
  no: '4.804',
  when: 'Today · 14:29',
  dur: '0:12',
  kind: 'none',
  snippet: 'Nadie contestó.'
}, {
  id: 'c4',
  no: '4.791',
  when: 'Yesterday · 17:55',
  dur: '1:24',
  kind: 'transfer',
  flag: true,
  snippet: 'Prefiero hablar con una persona.'
}, {
  id: 'c5',
  no: '4.786',
  when: 'Yesterday · 16:31',
  dur: '0:52',
  kind: 'moved',
  snippet: '¿El viernes a las nueve? Sí, me sirve.'
}, {
  id: 'c6',
  no: '4.770',
  when: 'Yesterday · 11:07',
  dur: '0:44',
  kind: 'message',
  flag: true,
  snippet: 'Ahora no puedo hablar.'
}, {
  id: 'c7',
  no: '4.755',
  when: '23 Aug · 09:48',
  dur: '1:11',
  kind: 'confirmed',
  snippet: 'Listo, confirmado.'
}];
/* A draft agent has never run. On the Test rung the log is simulated. */
const callById = (a, id) => {
  const cs = callsFor(a);
  return cs.find(c => c.id === id) || cs[0] || null;
};

/* What a correction on each kind of call would change. */
const proposalFor = (a, kind) => kind === 'transfer' ? {
  rule: 'Answer what it can answer before transferring'
} : kind === 'confirmed' || kind === 'moved' ? {
  rule: 'Read the date back before ending the call'
} : a.template === 'collections' ? {
  rule: 'Offer another available slot before taking a message'
} : {
  rule: 'Offer another available slot before taking a message',
  goal: goalsFor(a.template)[0]
};
const SEED_AGENTS_RAW = [{
  id: 'a1',
  name: 'Citas Clínica Andes',
  personaId: 'gloria',
  template: 'appointments',
  assignedToDialer: true,
  dialers: ['Citas_Septiembre'],
  versions: [
    // `was` = what this version held that the agent no longer does; the newest needs none
    { id: 'v1', author: 'attilio.porchia', when: '2 Aug 2026, 10:04',  changed: 'First version',
      was: { opener: 'Le llamo por su cita en Clínica Andes.', handoverOther: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '14 Aug 2026, 09:12',changed: 'Reworded the opener',
      was: { handoverOther: [] } },
    { id: 'v3', author: 'carina.soca',     when: '22 Aug 2026, 16:40', changed: 'Added the medical-emergency handover rule' }
  ],
  calls: 412,
  direction: 'out',
  attempts: 3,
  from: 8,
  to: 18,
  tokens: {
    company: 'Clínica Andes',
    identity: 'verify',
    goal: 'confirm',
    handoff: 'campaign',
    campaign: 'Citas_Sept'
  },
  opener: 'Le llamo para confirmar su cita del jueves a las 10:00.',
  banned: [...DEFAULT_BANNED, 'diagnóstico'],
  promises: [{
    t: 'Never promise a specific doctor',
    on: true
  }, {
    t: 'Never promise a same-day slot',
    on: true
  }],
  extraRules: []
}, {
  id: 'a2',
  name: 'Cotizaciones Seguros Vida',
  personaId: 'antonio',
  template: 'leads',
  assignedToDialer: true,
  dialers: ['Cotizaciones_Q3', 'Leads_Web'],
  versions: [
    { id: 'v1', author: 'carina.soca',     when: '18 Aug 2026, 15:22', changed: 'First version',
      was: { promises: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '29 Aug 2026, 11:05', changed: 'Never-promise: final price' }
  ],
  calls: 20,
  direction: 'out',
  attempts: 5,
  from: 9,
  to: 19,
  tokens: {
    company: 'Seguros Vida Andina',
    identity: 'byname',
    goal: 'quote_wa',
    handoff: 'campaign',
    campaign: 'Sales_Engineers'
  },
  opener: 'Le llamo por la cotización que solicitó.',
  banned: [...DEFAULT_BANNED, 'gratis'],
  promises: [{
    t: 'Never promise a final price',
    on: true
  }],
  extraRules: []
}, {
  // the worked example for the Receptionist template, and the one inbound agent in the set.
  // It speaks English because that template's own wording is written in English.
  id: 'a3',
  name: 'Recepción Del Plata',
  personaId: 'gail',
  template: 'reception',
  lang: 'en',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '12 Aug 2026, 09:30',
      changed: 'First version',
      // it only took messages then; booking came later
      was: { tokens: { company: 'Servicios Del Plata', identity: 'verify', goal: 'takemsg',
        goals: ['takemsg'], handoff: 'msg' } } },
    { id: 'v2', author: 'carina.soca', when: '3 Sep 2026, 11:40',
      changed: 'Let it book appointments as well as take messages' }
  ],
  calls: 38,
  direction: 'in',
  attempts: 4,
  from: 10,
  to: 20,
  tokens: {
    company: 'Servicios Del Plata',
    identity: 'verify',
    goal: 'takemsg',
    goals: ['takemsg', 'book'],
    handoff: 'msg'
  },
  opener: 'Thank you for calling — how can I help you today?',
  banned: [...DEFAULT_BANNED_EN, 'guaranteed', 'immediately'],
  collect: COLLECT_DEFAULTS.map(f => ({ ...f })),
  knowledge: { about: 'Servicios Del Plata handles maintenance contracts for commercial buildings. The office is open Monday to Friday, 9 to 6.', urls: ['servicios-del-plata.com/contact'] },
  promises: [{
    t: 'Never promise a person will call back at an exact time',
    on: true
  }, {
    t: 'Never quote a price',
    on: true,
    kind: 'rule'
  }],
  extraRules: []
}, {
  id: 'a4',
  name: 'Bienvenida Nuevos Clientes',
  personaId: 'charles',
  template: 'leads',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '31 Aug 2026, 17:48',changed: 'First version' }
  ],
  calls: 0,
  direction: 'out',
  attempts: 2,
  from: 8,
  to: 18,
  tokens: {
    company: 'Multitienda Cuscatlán',
    identity: 'verify',
    goal: 'budget',
    handoff: 'campaign',
    campaign: 'Sales_Engineers'
  },
  opener: 'Le llamo para darle la bienvenida y explicarle su plan.',
  banned: DEFAULT_BANNED,
  promises: [],
  extraRules: []
}, {
  id: 'a5',
  // collections is outbound work — the wizard cannot produce an inbound one, so no seeded
  // agent should be one either
  name: 'Cobros WhatsApp Banco Sol',
  personaId: 'frank',
  template: 'collections',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'carina.soca', when: '1 Sep 2026, 08:15',changed: 'First version',
      was: { opener: 'Le escribo por un saldo vencido.', banned: [...DEFAULT_BANNED],
        tokens: { company: 'Banco Sol', identity: 'verify', goal: 'date5', handoff: 'campaign', campaign: 'Cobros_Ago',
          disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
          mentions: { overdue: false, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
          offers: OFFER_IDS.map(id => ({ id, on: false })), closing: '' } } },
    { id: 'v2', author: 'carina.soca', when: '8 Sep 2026, 16:02',
      changed: 'Say only that a balance is outstanding, never the amount',
      was: { banned: [...DEFAULT_BANNED] } },
    { id: 'v3', author: 'attilio.porchia', when: '15 Sep 2026, 10:25',
      changed: 'Added abogado to the words it must never use' }
  ],
  calls: 12,
  direction: 'out',
  attempts: 3,
  from: 8,
  to: 18,
  tokens: {
    company: 'Banco Sol',
    identity: 'verify',
    goal: 'date5',
    handoff: 'campaign',
    campaign: 'Cobros_Ago',
    disclose: 'exists',
    amount: AMOUNT_PLACEHOLDER,
    payment: 'channel',
    paymentPlace: '',
    // no offers: it says a balance is outstanding and asks when the customer intends to pay
    mentions: { overdue: false, contract: false },
    overdueUnit: 'days',
    cols: { ...LIST_COLS },
    offers: OFFER_IDS.map(id => ({ id, on: false })),
    closing: ''
  },
  opener: 'Le escribo por su saldo pendiente con Banco Sol.',
  banned: [...DEFAULT_BANNED, 'abogado'],
  promises: [{
    t: 'Never promise to remove interest',
    on: true
  }, {
    t: 'Never promise a discount on the balance',
    on: true
  }, { t: THIRD_PARTY_RULE, on: true, kind: 'rule' },
     { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
     { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault('es', 'Banco Sol') }],
  extraRules: []
}, {
  // the established outbound collections agent: live in a dialer, with a version to replace
  id: 'a6',
  name: 'Cobros Banco Sol',
  personaId: 'antonio',
  template: 'collections',
  assignedToDialer: true,
  dialers: ['Cobros_Septiembre'],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '26 Aug 2026, 10:12',
      changed: 'First version', was: { tokens: { company: 'Banco Sol', identity: 'verify',
        goal: 'date5', handoff: 'campaign', campaign: 'Cobros_Ago', params: { date5: 3, partial: 30 },
        disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
        mentions: { overdue: true, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
        offers: [{ id: 'date5', on: true }, { id: 'partial', on: true }, { id: 'minimum', on: false }, { id: 'twopart', on: false }, { id: 'reduced', on: false }], closing: '' } } },
    { id: 'v2', author: 'carina.soca', when: '4 Sep 2026, 12:20',
      changed: 'Gave customers five days instead of three' }
  ],
  calls: 96,
  direction: 'out',
  attempts: 4,
  from: 9,
  to: 19,
  tokens: {
    company: 'Banco Sol',
    identity: 'verify',
    goal: 'date5',
    handoff: 'campaign',
    campaign: 'Cobros_Ago',
    disclose: 'amount',
    amount: AMOUNT_PLACEHOLDER,
    payment: 'channel',
    paymentPlace: '',
    // it states the amount and how long it's overdue, then offers full payment in 5 days, then 30%
    params: { date5: 5, partial: 30 },
    mentions: { overdue: true, contract: false },
    overdueUnit: 'days',
    cols: { ...LIST_COLS },
    offers: [{ id: 'date5', on: true }, { id: 'partial', on: true }, { id: 'minimum', on: false }, { id: 'twopart', on: false }, { id: 'reduced', on: false }],
    closing: ''
  },
  opener: 'Le llamo por su saldo pendiente con Banco Sol.',
  banned: [...DEFAULT_BANNED, 'abogado'],
  promises: [{
    t: 'Never promise to remove interest',
    on: true
  }, {
    t: 'Never promise to stop legal action',
    on: true
  }, {
    t: 'Never promise a discount on the balance',
    on: true
  }, { t: THIRD_PARTY_RULE, on: true, kind: 'rule' },
     { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
     { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault('es', 'Banco Sol') }],
  extraRules: []
}];
const SEED_AGENTS = SEED_AGENTS_RAW.map((a, i) => ({
  ...a,
  handover: (SEED_HANDOVER[i] || []).slice(),
  handoverOther: i === 0 ? ['El paciente menciona una urgencia médica'] : []
}));

/* Inbound has no batch test — there is no list of contacts to run 20 of. */
const dirLabel = dir => dir === 'in' ? 'Inbound' : 'Outbound';
const hh = h => String(h).padStart(2, '0') + ':00';
const fmtRange = (a, b) => hh(a) + ' and ' + hh(b);
const val = (arr, id) => arr.find(o => o.id === id) || arr[0];
const goalsFor = tid => GOALS[tid] || GOALS.appointments;

/* ============================ PRIMITIVES ============================ */
function Avatar({
  p,
  size = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ava",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.36,
      background: p.grad,
      ...style
    }
  }, p.name[0]);
}
function Pill({
  cls,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + cls
  }, /*#__PURE__*/React.createElement("i", null), children);
}
function Popover({
  onClose,
  align,
  wide,
  children
}) {
  const ref = useRef(null);
  useEffect(() => {
    const down = e => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const key = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', down);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('mousedown', down);
      document.removeEventListener('keydown', key);
    };
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'pop' + (align === 'right' ? ' right' : '') + (wide ? ' pop-wide' : ''),
    ref: ref
  }, children);
}
function Option({
  on,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "radio",
    "aria-checked": on,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "radio"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
function Modal({
  title,
  children,
  onClose,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("h3", null, title), children, /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, actions)));
}
function Toast({
  msg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, I.check, msg);
}

/* ============================ SHELL ============================ */
function Shell({
  children,
  crumb,
  onHome,
  onGo,
  here,
  uiLang,
  onUiLang
}) {
  const nav = [{
    g: 'Administrator'
  }, {
    t: 'Users',
    i: I.user
  }, {
    t: 'Connectors',
    i: I.plug
  }, {
    t: 'Campaigns',
    i: I.users
  }, {
    t: 'AI Agents',
    i: I.spark,
    go: 'list'
  }, {
    t: 'Automations',
    i: I.bolt
  }, {
    t: 'Configuration',
    i: I.gear
  }, {
    g: 'Analytics'
  }, {
    t: 'Outbound hub',
    i: I.board
  }, {
    t: 'Interactions',
    i: I.chat,
    go: 'interactions'
  }, {
    t: 'Wallboards',
    i: I.board
  }, {
    g: 'Developer'
  }, {
    t: 'Forms',
    i: I.form
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-burger"
  }, I.burger), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.monitor), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.inbox), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico",
    "aria-current": "true"
  }, I.spark), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.card)), /*#__PURE__*/React.createElement("div", {
    className: "rail-foot"
  }, I.info)), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      height: 11
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      height: 19
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "ucontact")), nav.map((n, i) => n.g ? /*#__PURE__*/React.createElement("div", {
    className: "nav-grp mono",
    key: i,
    style: {
      fontSize: 11,
      letterSpacing: '.1em'
    }
  }, n.g) : /*#__PURE__*/React.createElement("button", {
    className: "nav-item",
    key: i,
    "aria-current": n.go && here === n.go ? 'true' : undefined,
    onClick: n.go ? () => onGo(n.go) : undefined
  }, n.i, n.t))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "topnav"
  }, [{ k: 'list', t: 'AI Agents', i: I.spark }, { k: 'interactions', t: 'Interactions', i: I.chat }].map(x => /*#__PURE__*/React.createElement("button", {
    key: x.k,
    className: "topnav-b",
    "aria-current": here === x.k ? 'true' : undefined,
    onClick: () => onGo(x.k)
  }, x.i, /*#__PURE__*/React.createElement("span", null, x.t)))), /*#__PURE__*/React.createElement("span", {
    className: "topbar-t"
  }, crumb), /*#__PURE__*/React.createElement("span", {
    className: "topbar-r"
  }, onUiLang && /*#__PURE__*/React.createElement("span", {
    className: "langsw",
    role: "radiogroup",
    "aria-label": "Interface language"
  }, [['en', 'EN'], ['es', 'ES']].map(([id, lab]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    role: "radio",
    "aria-checked": uiLang === id,
    className: 'langsw-b' + (uiLang === id ? ' on' : ''),
    onClick: () => onUiLang(id)
  }, lab))), I.cup, I.bell, /*#__PURE__*/React.createElement("span", {
    className: "ava-me"
  }))), children));
}

/* ============================ 1 · AGENT LIST ============================ */
/* ============================ WIZARD CHROME ============================ */
const STEP_LABELS = ['Direction & job', 'Voice', 'Scope', 'Rules', 'Test'];
function SavedState({
  busy
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'saved' + (busy ? ' busy' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "saved-dot"
  }, busy ? I.spinner : I.check), busy ? 'Updating…' : 'Not saved yet');
}
function WizardBar({
  step,
  maxStep,
  onGo,
  busy,
  onExit
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wz-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    onClick: onExit,
    style: {
      marginLeft: -8
    }
  }, I.back, "Agents"), /*#__PURE__*/React.createElement("div", {
    className: "wz-steps"
  }, STEP_LABELS.map((l, i) => {
    const n = i + 1,
      s = n === step ? 'now' : n < step || n <= maxStep ? 'done' : 'todo';
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      className: "wz-seg",
      "data-s": s,
      disabled: s === 'todo',
      onClick: () => s !== 'todo' && onGo(n),
      title: 'Step ' + n + ' · ' + l
    }, /*#__PURE__*/React.createElement("span", {
      className: "wz-lab"
    }, n, ". ", l));
  })), /*#__PURE__*/React.createElement(SavedState, {
    busy: busy
  })));
}
function StepHead({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 27
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sub));
}
function Foot({
  onBack,
  onNext,
  nextLabel,
  nextOk,
  wide,
  extra
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wz-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz-foot-in",
    style: wide ? {
      maxWidth: 1120
    } : null
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho",
    onClick: onBack
  }, I.back, "Back"), extra, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      marginLeft: 'auto'
    },
    disabled: !nextOk,
    onClick: onNext
  }, nextLabel || 'Continue', I.fwd)));
}

/* ============================ 2 · DIRECTION ============================ */

/* ============================ 3 · TEMPLATE GALLERY ============================ */

/* ============================ 4 · VOICE & LANGUAGE ============================ */
/* ============================ 5 · THE BRIEF ============================ */
function Chip({
  label,
  hint,
  children,
  align,
  onOpen,
  isOpen
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip' + (isOpen ? ' open' : ''),
    onClick: onOpen,
    title: 'Edit — ' + label
  }, label), isOpen && /*#__PURE__*/React.createElement(Popover, {
    onClose: onOpen,
    align: align
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, hint), children));
}
/* A goal parameter's stepper: preset pills, plus — when gp.custom is set — a "Custom" pill that
   opens an inline number input so an exact value can be typed. custom:'replace' gives that slot
   the last preset's place (days to pay: 3/5/7/15/Custom); custom:'add' keeps every preset and
   appends one (minimum share: 30/50/70/Custom). A param with no gp.custom renders exactly as
   before. Mounted only while the chip popover is open, so it always opens in a clean state. */
function ParamStepper({ gp, pv, setParam, close }) {
  const presets = gp.custom === 'replace' ? gp.opts.slice(0, -1) : gp.opts;
  const isPreset = presets.indexOf(pv) > -1;
  const [editing, setEditing] = useState(!!gp.custom && !isPreset);
  const commit = v => { const n = parseInt(v, 10); if (!(n > 0)) return null;
    const capped = gp.max ? Math.min(n, gp.max) : n; setParam(capped); return capped; };
  return /*#__PURE__*/React.createElement("div", {
    className: "steps-row",
    role: "radiogroup",
    "aria-label": gp.title
  }, presets.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "step-pill",
    role: "radio",
    "aria-checked": n === pv && !editing,
    onClick: () => { setParam(n); setEditing(false); close(); }
  }, gp.fmt(n))), gp.custom && (editing ? /*#__PURE__*/React.createElement("span", {
    className: "step-pill step-custom",
    key: "custom"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: gp.max || null,
    className: "step-custom-inp",
    autoFocus: true,
    "aria-label": "Custom " + gp.title.toLowerCase(),
    defaultValue: isPreset ? '' : pv,
    onKeyDown: e => { if (e.key === 'Enter' && commit(e.target.value) !== null) close(); },
    onBlur: e => commit(e.target.value)
  }), /*#__PURE__*/React.createElement("span", { className: "mono" }, gp.unit)) : /*#__PURE__*/React.createElement("button", {
    key: "custom",
    className: "step-pill",
    role: "radio",
    "aria-checked": !isPreset,
    onClick: () => setEditing(true)
  }, isPreset ? "Custom" : gp.fmt(pv))));
}
function StepBrief({
  draft,
  set,
  next,
  back
}) {
  const [open, setOpen] = useState(null);
  const t = template(draft.template),
    p = persona(draft.personaId);
  const tk = draft.tokens,
    inb = draft.direction === 'in';
  const goals = goalsFor(draft.template);
  const goal = val(goals, tk.goal),
    ident = val(identityFor(draft.template), tk.identity),
    hand = val(HANDOFF, tk.handoff);
  const setTok = (k, v) => set({
    tokens: {
      ...tk,
      [k]: v
    }
  });
  const tog = k => () => setOpen(open === k ? null : k);
  const gp = paramOf(goal.id),
    pv = gp ? paramVal(draft, goal.id) : null;
  const setParam = n => setTok('params', { ...(tk.params || {}), [goal.id]: n });
  const disclosure = disclosureFor(draft);
  const col = draft.template === 'collections';
  const b3 = (tk.identity === 'none' ? '' : saysIn(ident, langOf(draft)) + ' ') + (col ? discloseSentence(draft) + ' ' : '') + goalSay(draft);
  /* collections only: what it says about the balance, and how the customer pays */
  const discChip = col && /*#__PURE__*/React.createElement(Chip, {
    label: discloseFull(draft),
    hint: "What it tells the right person about the balance.",
    isOpen: open === 'disclose',
    onOpen: tog('disclose')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, DISCLOSE.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === discloseOf(draft).id,
    onClick: () => {
      setTok('disclose', o.id);
      setOpen(null);
    }
  }, o.v))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.shield, /*#__PURE__*/React.createElement("span", null, "Either way the balance is only ever discussed with the intended person. The real amount comes from the campaign\u2019s contact list; ", amountOf(draft), " stands in for it here.")), /*#__PURE__*/React.createElement(MentionsPicker, {
    draft: draft,
    set: set
  }));
  const payChip = col && /*#__PURE__*/React.createElement(Chip, {
    label: paymentLabel(draft),
    hint: "How the customer pays once a date is agreed.",
    isOpen: open === 'payment',
    onOpen: tog('payment')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, PAYMENT.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === paymentOf(draft).id,
    onClick: () => {
      setTok('payment', o.id);
      if (o.id !== 'place') setOpen(null);
    }
  }, o.v))), paymentOf(draft).id === 'place' && /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: { marginTop: 10 },
    autoFocus: true,
    value: tk.paymentPlace || '',
    placeholder: "Any Banco Sol branch, quoting contract {contract}",
    "aria-label": "Where to pay",
    onChange: e => setTok('paymentPlace', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "The link goes to the channel the contact list holds \u2014 the agent never reads out a phone number or an email.")), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 8 }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "It applies whenever a date is recorded \u2014 an accepted offer or the date the customer gives. With no date, the call ends without it. The place may include {contract}.")));
  const companyChip = /*#__PURE__*/React.createElement(Chip, {
    label: tk.company,
    hint: "The name the agent says out loud.",
    isOpen: open === 'company',
    onOpen: tog('company')
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    autoFocus: true,
    value: tk.company,
    onChange: e => setTok('company', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Used in the greeting and the spoken disclosure.")));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brief-2col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "What it will do on every call",
    sub: "Written out in full. Anything underlined is yours to change \u2014 tap it."
  }), /*#__PURE__*/React.createElement("p", {
    className: "brief"
  }, inb ? /*#__PURE__*/React.createElement(React.Fragment, null, "It answers calls to ", companyChip, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "It calls ", t.who, " ", companyChip, "."), ' ', "On each one it", ' ', /*#__PURE__*/React.createElement(Chip, {
    label: ident.v,
    hint: "How it opens, before anything else.",
    isOpen: open === 'identity',
    onOpen: tog('identity')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, identityFor(draft.template).map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.identity,
    onClick: () => {
      setTok('identity', o.id);
      setOpen(null);
    }
  }, o.v))), draft.template === 'collections' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 11 }
  }, I.shield, /*#__PURE__*/React.createElement("span", null, "On collections calls the agent must establish who it is speaking to. The balance can never be mentioned to anyone else, so there is no option to speak to whoever answers."))), col ? /*#__PURE__*/React.createElement(React.Fragment, null, ', ', discChip, ', ', /*#__PURE__*/React.createElement(OffersChip, {
    draft: draft,
    set: set,
    open: open,
    tog: tog
  }), ', ', fallbackPhrase(draft), '.', ' ', "Once a date is agreed, it ", payChip, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, t.mid ? ', ' + t.mid.replace(/,?\s*and$/, '') + ', then ' : ', then ', /*#__PURE__*/React.createElement(Chip, {
    label: goal.v,
    hint: "The one thing the call is for.",
    isOpen: open === 'goal',
    onOpen: tog('goal')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, goals.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.goal,
    onClick: () => {
      setTok('goal', o.id);
      setOpen(null);
    }
  }, optLabel(o, draft))))), gp && ' ', gp && /*#__PURE__*/React.createElement(Chip, {
    label: gp.fmt(pv),
    hint: gp.hint,
    isOpen: open === 'param',
    onOpen: tog('param')
  }, /*#__PURE__*/React.createElement(ParamStepper, {
    gp: gp,
    pv: pv,
    setParam: setParam,
    close: () => setOpen(null)
  })), "."), ' ', "If someone asks for a person, it ", /*#__PURE__*/React.createElement(Chip, {
    label: handLabel(draft),
    align: "right",
    hint: "The escape hatch. Always available to the caller.",
    isOpen: open === 'handoff',
    onOpen: tog('handoff')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, HANDOFF.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.handoff,
    onClick: () => {
      setTok('handoff', o.id);
      if (o.id !== 'campaign') setOpen(null);
    }
  }, o.v))), tk.handoff === 'campaign' && /*#__PURE__*/React.createElement("select", {
    className: "inp",
    style: { marginTop: 10 },
    value: campaignOf(draft),
    "aria-label": "Campaign",
    onChange: e => setTok('campaign', e.target.value)
  }, CAMPAIGNS.map(c => /*#__PURE__*/React.createElement("option", { key: c, value: c }, c))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "A transfer goes to the people working that campaign. Taking a message ends the call and sends your team what it collected."))), "."), /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "Every call opens with the required disclosure:", col ? /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap chip-fix-block"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip chip-lockpick' + (open === 'disclosure' ? ' open' : ''),
    onClick: tog('disclosure'),
    title: "Required on every call \u2014 choose the wording, it cannot be removed"
  }, I.lock, disclosure), open === 'disclosure' && /*#__PURE__*/React.createElement(Popover, {
    onClose: tog('disclosure')
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, "The disclosure"), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, "Said first on every call. Pick the wording \u2014 it cannot be switched off."), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Disclosure wording"
  }, DISCLOSURES.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === disclosureOpt(draft).id,
    onClick: () => {
      setTok('disclosure', o.id);
      setOpen(null);
    }
  }, disclosureLine(o, langOf(draft), tk.company)))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Every option says it is a virtual assistant and names ", tk.company, ". That part is not optional.")))) : /*#__PURE__*/React.createElement("span", {
    className: "chip-fix chip-fix-block",
    title: "Required by law \u2014 cannot be removed"
  }, I.lock, disclosure), "Then its opener:", ' ', /*#__PURE__*/React.createElement(Chip, {
    label: draft.opener,
    hint: "Your opener, in the agent's own voice.",
    isOpen: open === 'opener',
    onOpen: tog('opener')
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: draft.opener,
    onChange: e => set({
      opener: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Keep it to one sentence. ", p.name, " says it in ", p.reg.split(' · ')[0], ".")))), col && /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "And it ends every call with ", /*#__PURE__*/React.createElement(ClosingChip, {
    draft: draft,
    set: set,
    open: open,
    tog: tog
  }), ".")), /*#__PURE__*/React.createElement("div", {
    className: "prev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    className: "prev-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'a' + disclosure + draft.opener
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 0:02"), /*#__PURE__*/React.createElement("span", {
    className: "disc"
  }, disclosure), " ", draft.opener), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-c",
    key: "c1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, "Customer"), inLang(t, 'custSay', langOf(draft))), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'a' + b3
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 0:11"), b3), col && closingOf(draft) && /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'z' + closingOf(draft)
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 end"), closingOf(draft))), ))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: !!tk.company.trim(),
    wide: true
  }));
}

/* ============================ 6 · BUSINESS RULES ============================ */
function TagInput({
  tags,
  onChange,
  placeholder
}) {
  const [v, setV] = useState('');
  const add = () => {
    const w = v.trim().toLowerCase();
    if (w && !tags.includes(w)) onChange([...tags, w]);
    setV('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    className: "tag",
    key: t
  }, t, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(tags.filter(x => x !== t)),
    "aria-label": 'Remove ' + t
  }, I.x))), /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: placeholder,
    onChange: e => setV(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        add();
      }
      if (e.key === 'Backspace' && !v && tags.length) onChange(tags.slice(0, -1));
    },
    onBlur: add
  }));
}

/* ============================ 7 · TEST ============================ */
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
function agentReply(input, draft, history) {
  const s = norm(input),
    tk = draft.tokens;
  const goal = val(goalsFor(draft.template), tk.goal),
    hand = val(HANDOFF, tk.handoff);
  if (draft.template === 'reception') {
    const k = draft.knowledge || { about: '', urls: [] };
    const ask = (draft.collect || []).filter(f => f.on);
    const first = ask[0] ? ' ' + ask[0].question : '';
    if (/message|leave a|mensaje|recado/.test(s)) return {
      txt: 'Of course.' + (first || ' May I have your name?'),
      why: 'Goal: collects the caller’s details'
    };
    if (/appointment|book|schedule|cita|agendar/.test(s)) return goalIds(draft).indexOf('book') > -1 ? {
      txt: 'I can book that from the calendar. Which day works best for you?',
      why: 'Goal: books from the connected calendar'
    } : {
      txt: 'I can’t book that myself, but I’ll take your details and the team will call you back to set it up.' + first,
      why: 'Goal setting → takes a message instead'
    };
    if (/robot|human|person|someone|speak to|real|assistant|machine/.test(s)) return {
      txt: 'You’re speaking with a virtual assistant for ' + tk.company + '. ' + (hand.sayEn || hand.say),
      why: 'Rule: always disclose · handoff setting'
    };
    if (/hours|open|opening|close|horario|abren/.test(s)) return (k.about || '').trim() ? {
      txt: 'Sure. ' + k.about.trim().split('. ')[0].replace(/\.$/, '') + '. Is there anything else I can help with?',
      why: 'Answered from the business profile'
    } : {
      txt: 'I don’t have that to hand, so let me take a message and someone will confirm the hours with you.' + first,
      why: 'Nothing in the business profile yet → takes a message'
    };
  }
  /* everything below answers in the agent's own language; en picks the second string */
  const L = langOf(draft), pick = (es, en) => L === 'en' ? en : es;
  const handSay = saysIn(hand, L);
  if (/robot|humano|persona|quien habla|con quien|maquina|grabacion|asistente|human|speak to|speaking to|who am i|am i talking|real person/.test(s)) return {
    txt: pick('Soy un asistente virtual de ' + tk.company + '. ',
             'You’re speaking with a virtual assistant for ' + tk.company + '. ') + handSay,
    why: 'Rule: always disclose · handoff setting'
  };
  const tp = thirdParty(draft), col = draft.template === 'collections';
  if (/no soy|no est|se equivoc|numero equivocado|wrong number|not here|he.s out|she.s out|who.s calling/i.test(s)
      && (tp.ends || tp.message !== null)) {
    /* the three third-party rules, read together: the message it may leave, then it ends; and
       the balance is never in this reply — by construction, nothing here quotes it */
    const bye = pick('Que tenga buen día.', 'Have a good day.') + (col && closingOf(draft) ? ' ' + closingOf(draft) : '');
    if (tp.message) return {
      txt: tp.message + ' ' + bye,
      why: 'Rule: leaves the message you set, then ends the call' + (tp.noAmount ? ' · the amount is never disclosed' : '')
    };
    return {
      txt: pick('Disculpe la molestia, no dejo ningún detalle. ', 'Sorry to trouble you — I’ll not leave any details. ') + bye,
      why: 'Rule: ends the call — the wrong person answered' + (tp.noAmount ? ' · the amount is never disclosed' : '')
    };
  }
  if (col && /como pago|donde pago|como le pago|link de pago|enlace de pago|how do i pay|where do i pay|payment link|how can i pay/i.test(s)) return {
    txt: paymentSay(draft),
    why: 'Payment setting: ' + paymentLabel(draft)
  };
  /* the customer names a day to pay (the answer the "when do you intend to pay" goal asks for):
     the agent records it and says how to pay — it never pushes a date the customer did not give */
  const DAYWORD = /\b(lunes|martes|miercoles|jueves|viernes|sabado|domingo|manana|semana|quincena|fin de mes|el \d{1,2}|monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|next week|end of the month|payday|on the \d{1,2})\b/i;
  if (col && DAYWORD.test(s)) return {
    txt: pick('Perfecto, dejo registrada esa fecha. ', 'Perfect, I have noted that date. ') + paymentSay(draft) + pick(' Gracias por su tiempo.', ' Thanks for your time.') + colEnd(draft),
    why: 'Fallback: records the date the customer gave · payment setting: ' + paymentLabel(draft),
    stage: 'done',
    // the day the customer named, in their words — the agent never turns it into a date it chose
    promise: promiseFor(draft, 'intent', (s.match(DAYWORD) || [s])[0].trim() + (L === 'en' ? ' (as stated)' : ' (según el cliente)'))
  };
  if (/no me llame|no vuelva a llamar|de la lista|dar de baja|no quiero recibir|no llame mas|do ?n.?t call|do not call|stop calling|take me off/i.test(s)) return {
    txt: pick('Entendido, no le insisto más. Cierro la llamada aquí. Buen día.',
      'Understood — I will not call again. I will close the call here. Have a good day.') + (col ? colEnd(draft) : ''),
    why: 'Ends the call · the disposition is set outside the agent'
  };
  if (col) { const r = collectionsTurn(s, draft, history, pick); if (r) return r; }
  if (/no tengo|no puedo pagar|sin plata|sin dinero|desemplead|can.?t pay|cannot pay|no money|no way to pay|out of work|unemployed/i.test(s)) return {
    txt: pick('Entiendo. Podemos registrar un abono parcial, ¿cuánto podría abonar esta semana?',
      'I understand. We can take a part payment — how much could you manage this week?'),
    why: 'Rule: offer a partial payment before escalating'
  };
  const guard = guardFor(draft, s);
  if (guard && col) {
    /* refuse what the rule forbids, then put the offer that is on the table back on it */
    const st = colStage(history), lead = guard.rule ? pick(guard.g.es, guard.g.en) : '';
    const r = typeof st === 'number' || st === 'intent' ? colOffer(draft, st === 'intent' ? activeOffers(draft).length : st, pick, lead)
      : colOpenOffer(draft, pick, lead);
    return { ...r, why: guard.rule ? 'Rule: ' + guard.rule.t : 'Nothing stops it answering that · ' + r.why };
  }
  if (guard) return {
    txt: (guard.rule ? pick(guard.g.es, guard.g.en) : '') + goalSay(draft),
    why: guard.rule ? 'Rule: ' + guard.rule.t : 'Nothing stops it answering that · goal setting'
  };
  if (/no puedo|ocupad|trabaj|otro dia|otro horario|mas tarde|cambiar|mover|reagenda|can.?t do that day|cannot do that|another day|reschedule|move it|later/i.test(s)) return {
    txt: pick('Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?',
      'No problem. I have Friday at nine or Monday at three. Would either of those work?'),
    why: 'Rule: offer another slot before taking a message'
  };
  if (/^(si|claro|ok|dale|listo|confirmo|de acuerdo|perfecto|bueno|yes|sure|confirmed|agreed|fine|okay)\b/i.test(s)) return {
    // only the callback goal has a number to read back
    txt: tk.goal === 'callback'
      ? pick('Perfecto. Le repito el número para asegurarme de que quedó bien, y le devolvemos la llamada a esa hora.',
          'Perfect. Let me read the number back so we have it right, and we will call you at that time.')
      : col
      ? pick('Perfecto, queda registrado. ', 'Perfect, that is noted. ') + paymentSay(draft) + pick(' Gracias por su tiempo.', ' Thanks for your time.')
      : pick('Perfecto, queda confirmado. Le enviamos el detalle por WhatsApp. Gracias por su tiempo.',
          'Perfect, that is confirmed. We will send the details on WhatsApp. Thanks for your time.'),
    why: col ? 'Goal reached · payment setting: ' + paymentLabel(draft) : 'Goal reached · call ends'
  };
  if (/gracias|adios|chao|hasta luego|thanks|thank you|goodbye|bye/i.test(s)) return {
    txt: pick('Gracias a usted. Que tenga buen día.', 'Thank you. Have a good day.') + (col ? colEnd(draft) : ''),
    why: 'Closing'
  };
  const hv = draft.handover || [];
  if (hv.indexOf('legal') > -1 && /abogado|demanda|queja|superintendencia|denuncia|defensor|lawyer|solicitor|complaint|regulator|sue you|legal action/i.test(s)) return {
    txt: pick('Prefiero que esto lo vea una persona. ', 'I would rather a person looked at this. ') + handSay,
    why: 'Handover rule: a complaint or a lawyer is mentioned'
  };
  const own = ownHandoverHit(draft, s);
  if (own) return {
    txt: pick('Prefiero que esto lo vea una persona. ', 'I would rather a person looked at this. ') + handSay,
    why: 'Your own handover rule: “' + own + '”'
  };
  const bad = bannedHit(draft, s);
  if (bad) return {
    txt: pick('Le entiendo. ', 'I understand. ') + handSay,
    why: '“' + bad + '” is on its never-use list → rephrase and hand off'
  };
  if (col) return colOpenOffer(draft, pick, '');
  return {
    txt: goalSay(draft),
    why: 'Goal setting'
  };
}
/* ---- Collections, turn by turn -----------------------------------------------------------
   The scripted call keeps one piece of state on each agent line: which offer is on the table
   (its position in the ordered list), 'intent' once it has fallen back to asking for a date, or
   'done' once a date was recorded or the call ended without one. */
const colEnd = d => closingOf(d) ? ' ' + closingOf(d) : '';
const colStage = history => { const a = (history || []).filter(m => m.who === 'a' && m.stage !== undefined);
  return a.length ? a[a.length - 1].stage : null; };
const colOffer = (d, i, pick, lead, why) => { const offers = activeOffers(d);
  if (i < offers.length) return { txt: lead + offerSay(d, offers[i].id), stage: i,
    why: why || 'Offer ' + (i + 1) + ' of ' + offers.length + ': ' + offerLabel(d, offers[i].id) };
  return { txt: lead + intentSay(d), stage: 'intent',
    why: offers.length ? 'No offer accepted → fallback: asks when the customer intends to pay'
                       : 'No offers ticked → fallback: asks when the customer intends to pay' }; };
/* first contact with the right person: the balance, what else it mentions, then offer 1 */
const colOpenOffer = (d, pick, lead) => { const r = colOffer(d, 0, pick, lead + discloseSentence(d) + ' ');
  return { ...r, why: discloseFull(d) + ' · ' + r.why }; };
const DECLINE = /^(no|nop|tampoco|imposible)\b|no me alcanza|no puedo|no tengo|no me sirve|es mucho|demasiado|can.?t|cannot|no way|too much|not possible|afford/i;
const ACCEPT = /^(si|claro|ok|dale|listo|confirmo|de acuerdo|perfecto|bueno|me sirve|yes|sure|confirmed|agreed|fine|okay|that works)\b/i;
function collectionsTurn(s, d, history, pick) {
  const stage = colStage(history), offers = activeOffers(d);
  if (stage === 'done') return null;
  /* asking for interest off or a discount while a reduced balance is on offer: that IS the offer */
  if (reducedOn(d) && /interes|descuento|rebaj|discount|interest/i.test(s)) {
    const i = offers.findIndex(g => g.id === 'reduced');
    return colOffer(d, i, pick, pick('Puedo ofrecerle esto: ', 'Here is what I can offer: '), 'Offer: a reduced balance without interest');
  }
  if (DECLINE.test(s)) {
    if (stage === 'intent') return {
      txt: pick('Entiendo. Dejo constancia de que por ahora no puede darme una fecha. Gracias por su tiempo.',
        'I understand. I will note that you cannot give me a date for now. Thanks for your time.') + colEnd(d),
      why: 'No date recorded → the call ends · the payment step does not apply', stage: 'done' };
    if (typeof stage === 'number') return colOffer(d, stage + 1, pick, pick('Entiendo. ', 'I understand. '));
    return colOffer(d, 0, pick, pick('Entiendo. ', 'I understand. '));
  }
  if (ACCEPT.test(s)) {
    if (typeof stage === 'number' && stage < offers.length) { const id = offers[stage].id;
      return { txt: pick('Perfecto, queda registrado. ', 'Perfect, that is noted. ') + paymentSay(d) + pick(' Gracias por su tiempo.', ' Thanks for your time.') + colEnd(d),
        why: 'Offer accepted: ' + offerLabel(d, id) + ' · payment setting: ' + paymentLabel(d),
        stage: 'done', promise: promiseFor(d, id) }; }
    if (stage === 'intent') return { txt: pick('¿Qué fecha le queda bien?', 'Which date works for you?'),
      why: 'Fallback: waiting for the date the customer gives', stage: 'intent' };
    return colOpenOffer(d, pick, '');
  }
  return null;
}
/* What a customer actually says to THIS agent. One generic set meant a collections agent
   offered "I cannot do that day" and "How much does it cost?" — lines from two other jobs.
   Each set is chosen so every line reaches a real branch: the identity check, the goal, a rule
   the template ticks, a handover trigger it seeds, and the two that end a call. */
const QUICKS_BY_TEMPLATE = {
  collections: {
    es: ['¿Con quién hablo?', 'No tengo cómo pagar ahora', '¿Me quita los intereses?',
         'Voy a hablar con mi abogado', '¿Me hace un descuento?', 'No soy yo, se equivocó',
         '¿Cómo pago?', 'No me alcanza', 'Le pago el viernes', 'Sí, confirmo', 'No me llame más'],
    en: ['Who am I speaking to?', 'I have no way to pay right now', 'Can you drop the interest?',
         'I am speaking to my lawyer', 'Can I get a discount?', 'Wrong person, she is not here',
         'How do I pay?', 'That is too much for me', 'I will pay on Friday', 'Yes, confirmed', 'Do not call me again']
  },
  appointments: {
    es: ['¿Con quién hablo?', 'Ese día no puedo', '¿Me lo puede mover?', '¿Me atiende otro médico?',
         'No soy yo, se equivocó', 'Sí, confirmo', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'I cannot do that day', 'Could you move it?', 'Can I see a different doctor?',
         'Wrong person, she is not here', 'Yes, confirmed', 'I want to speak to a person', 'Do not call me again']
  },
  leads: {
    es: ['¿Con quién hablo?', '¿Cuánto cuesta?', '¿Me hace un descuento?', 'Mándemelo por WhatsApp',
         'No soy yo, se equivocó', 'Sí, me interesa', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'How much does it cost?', 'Can you give me a discount?',
         'Send it to me on WhatsApp', 'Wrong person, she is not here', 'Yes, I am interested',
         'I want to speak to a person', 'Do not call me again']
  },
  messages: {
    es: ['¿Con quién hablo?', '¿A qué hora me llaman?', 'Necesito que me solucionen esto', 'Llamé ayer y nadie contestó',
         'No soy yo, se equivocó', 'Sí, confirmo', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'What time will you call?', 'I need you to fix it',
         'I rang yesterday and nobody answered', 'Wrong person, she is not here', 'Yes, confirmed',
         'I want to speak to a person', 'Do not call me again']
  }
};
/* the fallback, for a template with no set of its own */
const QUICKS = ['¿Con quién hablo?', 'No soy yo, se equivocó', 'Gracias, adiós', 'Sí, confirmo',
  'Quiero hablar con una persona', 'No me llame más'];
const QUICKS_EN = ['Who am I speaking to?', 'Wrong person, she is not here', 'Thanks, goodbye',
  'Yes, confirmed', 'I want to speak to a person', 'Do not call me again'];
const quicksFor = d => { if(d.template === 'reception') return RECEPTION_QUICKS;
  const set = QUICKS_BY_TEMPLATE[d.template], lang = langOf(d) === 'en' ? 'en' : 'es';
  return set ? set[lang] : (lang === 'en' ? QUICKS_EN : QUICKS); };
/* Live mode. The page asks Claude for the agent's next line through the artifact runtime's
   `sample` capability — the same call the Coach AI prototype makes — from a prompt composed of
   every setting on the previous screens (agentPrompt). `modelTier: 'quick'` keeps it on the
   fast, low-effort tier. Guarded: with no runtime the status pill reads "Script" and the scripted
   simulator answers as it always has; a failed live turn falls back for that turn and says so. */
const liveRuntime = () => (typeof window !== 'undefined' && window.claude
  && typeof window.claude.use === 'function') ? window.claude : null;
let liveSampler = null;                                   // resolved once, reused across turns
async function liveReply(draft, history, input) {
  const rt = liveRuntime();
  if (!rt) return null;
  try {
    if (!liveSampler) liveSampler = await rt.use('sample');
    const { text } = await liveSampler(liveTurns(draft, history, input), { cache: false, modelTier: 'quick' });
    const t = String(text == null ? '' : text);
    const a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a > -1 && b > a) {
      const j = JSON.parse(t.slice(a, b + 1));
      if (j && j.say) return { txt: String(j.say), why: 'Live · ' + (j.why ? String(j.why) : 'Claude'),
        promise: j.promise && j.promise.date ? { offer: String(j.promise.offer || 'intent'), amount: String(j.promise.amount || ''), date: String(j.promise.date) } : undefined };
    }
    const plain = t.trim();
    return plain ? { txt: plain, why: 'Live · Claude' } : null;
  } catch (e) {
    liveSampler = null;                                  // a stale sampler is re-resolved next turn
    return null;
  }
}
function StepTest({
  draft,
  set,
  next,
  back,
  testExit
}) {
  const [live] = useState(() => !!liveRuntime());
  const p = persona(draft.personaId),
    tk = draft.tokens;
  const inb = draft.direction === 'in';
  /* The agent is set to establish who it is speaking to, and the brief's preview says so — but
     the simulated call used to skip straight past it. An agent that rings you and opens with a
     balance before checking it has the right person is the thing the setting exists to prevent. */
  const identLine = (draft.template !== 'reception' && tk.identity !== 'none')
    ? ' ' + saysIn(val(identityFor(draft.template), tk.identity), langOf(draft)) : '';
  const open = disclosureFor(draft) + ' ' + draft.opener + identLine;
  const [msgs, setMsgs] = useState([{
    who: 'a',
    txt: open,
    why: 'Fixed disclosure + your opener' + (identLine ? ' + the identity check' : '')
  }]);
  const [v, setV] = useState('');
  const [typing, setTyping] = useState(false);
  const [call, setCall] = useState(null);
  const scroll = useRef(null);
  useEffect(() => {
    if (scroll.current) scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [msgs, typing]);
  const send = txt => {
    const m = (txt || v).trim();
    if (!m) return;
    const history = msgs;                       // the turns before this one
    setMsgs(x => [...x, {
      who: 'c',
      txt: m
    }]);
    setV('');
    setTyping(true);
    const scripted = () => ({ who: 'a', ...agentReply(m, draft, history) });
    if (live) {
      liveReply(draft, history, m).then(r => {
        setTyping(false);
        setMsgs(x => [...x, r ? { who: 'a', ...r }
          : { ...scripted(), why: 'Live reply failed → script · ' + agentReply(m, draft, history).why }]);
      });
      return;
    }
    setTimeout(() => {
      setTyping(false);
      setMsgs(x => [...x, scripted()]);
    }, 700);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "Try it before anyone else does",
    sub: 'You play the customer' + (inb ? ' who just called in' : '') + '. Type anything, or tap a line below. Nothing here reaches a real phone.'
  }), /*#__PURE__*/React.createElement("div", {
    className: "chatbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, tk.company), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + (live ? 'pill-live' : 'pill-reh'),
    style: {
      marginLeft: 'auto'
    },
    title: live
      ? 'Replies come from Claude (quick tier), from a prompt built out of this agent’s settings'
      : 'Live mode is not available in this build — replies follow a script that reads the same settings'
  }, /*#__PURE__*/React.createElement("i", null), live ? 'Live · Claude' : 'Script')), /*#__PURE__*/React.createElement("div", {
    className: "chat-scroll",
    ref: scroll
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: m.who === 'a' ? 'flex-start' : 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'bub ' + (m.who === 'a' ? 'bub-a' : 'bub-c')
  }, m.txt), m.why && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      marginTop: 5,
      marginLeft: 4
    }
  }, m.why), m.promise && /*#__PURE__*/React.createElement(PromiseCard, {
    p: m.promise,
    title: "End of call \xB7 promise recorded"
  }))), typing && /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a"
  }, /*#__PURE__*/React.createElement("span", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("div", {
    className: "quick"
  }, quicksFor(draft).map(q => /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    key: q,
    onClick: () => send(q)
  }, q))), /*#__PURE__*/React.createElement("div", {
    className: "chat-in"
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: "Say something as the customer\u2026",
    onChange: e => setV(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send()
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    onClick: () => send(),
    "aria-label": "Send"
  }, I.send))), /*#__PURE__*/React.createElement("div", {
    className: "tnote"
  }, "Test conversations spend credits like any other interaction \u2014 the test agent itself costs nothing extra. Tests are not written to the call log and don\u2019t affect metrics.", live ? ' Live replies use your account’s Claude credits.' : '')), /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Hear it for real"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-call",
    onClick: () => setCall('setup')
  }, inb ? I.phoneIn : I.phoneOut, "Call")))), call && /*#__PURE__*/React.createElement(CallMe, {
    draft: draft,
    state: call,
    setState: setCall
  }), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: true,
    nextLabel: testExit === 'agent' ? "Back to the agent" : "Back to the rules",
    wide: true
  }));
}
function CallMe({
  draft,
  state,
  setState
}) {
  const p = persona(draft.personaId),
    tk = draft.tokens;
  const inb = draft.direction === 'in';
  const [num, setNum] = useState(inb ? '601 555 0142' : '310 555 0142');
  useEffect(() => {
    if (state !== 'ring') return;
    const t = setTimeout(() => setState('done'), 2800);
    return () => clearTimeout(t);
  }, [state, setState]);
  const gSay = goalSay(draft);
  const tr = [{
    w: p.name,
    t: disclosureFor(draft) + ' ' + draft.opener
  }, {
    w: 'You',
    t: inb ? 'Llamo por mi cita del jueves.' : 'Sí, dígame.'
  }, {
    w: p.name,
    t: gSay
  }, {
    w: 'You',
    t: 'Ese día no puedo.'
  }, {
    w: p.name,
    t: 'Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?'
  }];
  if (state === 'ring') return /*#__PURE__*/React.createElement(Modal, {
    title: inb ? 'Connecting you' : 'Calling you now',
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState(null)
    }, "Cancel")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ringer"
  }, I.phone), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 22
    }
  }, inb ? /*#__PURE__*/React.createElement(React.Fragment, null, "Dialling ", /*#__PURE__*/React.createElement("b", {
    className: "tnum"
  }, num), "\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, "Ringing ", /*#__PURE__*/React.createElement("b", {
    className: "tnum"
  }, num), "\u2026"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, inb ? 'You are calling in — talk to ' + p.name + ' as a customer would.' : 'Answer and talk to ' + p.name + ' as if you were a customer.')));
  if (state === 'done') return /*#__PURE__*/React.createElement(Modal, {
    title: "Call finished \xB7 0:41",
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState('ring')
    }, "Call again"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => setState(null)
    }, "Done"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Here is what was said. Tap any line later on the correction screen to fix it."), /*#__PURE__*/React.createElement("div", {
    className: "tr",
    style: {
      marginTop: 4
    }
  }, tr.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tr-row ' + (r.w === 'You' ? 'cust' : ''),
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, r.w), /*#__PURE__*/React.createElement("span", {
    className: "tr-txt",
    style: {
      fontSize: 15
    }
  }, r.t)))));
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Call",
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState(null)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => setState('ring')
    }, inb ? I.phoneIn : I.phoneOut, inb ? 'Simulate the call' : 'Call me now'))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, inb ? 'This is the number the agent will answer while it is being tested. Only you can reach it.' : 'One call, to you only. It does not touch your contact list.'), /*#__PURE__*/React.createElement("input", {
    className: "inp tnum",
    value: num,
    onChange: e => setNum(e.target.value),
    "aria-label": inb ? 'Test line' : 'Your phone number'
  }));
}
/* ============================ 9 · THE AGENT PAGE + GO-LIVE LADDER ============================ */

/* ============================ 10 · PICK A CALL ============================ */
function CallList({
  agent,
  onBack,
  onOpen
}) {
  const a = agent,
    p = persona(a.personaId);
  const calls = callsFor(a);
  const [filter, setFilter] = useState('all');
  const flagged = calls.filter(c => c.flag).length;
  const shown = filter === 'flag' ? calls.filter(c => c.flag) : calls;
  const chip = on => on ? {
    background: 'var(--accent-soft)',
    borderColor: 'var(--accent)',
    color: 'var(--accent-ink)',
    fontWeight: 600
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    style: {
      marginLeft: -12,
      marginBottom: 6
    },
    onClick: onBack
  }, I.back, "All agents"), /*#__PURE__*/React.createElement("div", {
    className: "panel-eyebrow"
  }, a.name), /*#__PURE__*/React.createElement("h1", null, "Which call should it learn from?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Tap a call to read what was said and fix it. Every correction becomes a setting you approve first.")), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto'
    }
  }, calls.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '46px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--grey-soft)',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 14px'
    }
  }, I.chat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "No calls yet"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      margin: '6px auto 0',
      maxWidth: '44ch'
    }
  }, p.name, " has not made any calls yet. Assign it to a dialer in the Outbound Hub and its calls show up here.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'all'),
    onClick: () => setFilter('all')
  }, "All ", calls.length), /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'flag'),
    onClick: () => setFilter('flag')
  }, "Worth a look ", flagged)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden',
      padding: 0
    }
  }, shown.map((c, i) => {
    const o = OUTCOMES[c.kind],
      dead = c.kind === 'none';
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        width: 116,
        flex: 'none',
        paddingTop: 4
      }
    }, c.when), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 132,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      cls: o.cls
    }, o.label)), /*#__PURE__*/React.createElement("span", {
      className: "tr-txt",
      style: {
        flex: '1 1 220px',
        fontSize: 15.5
      }
    }, "\u201C", c.snippet, "\u201D"), /*#__PURE__*/React.createElement("span", {
      className: "mono tnum",
      style: {
        paddingTop: 4
      }
    }, c.dur), /*#__PURE__*/React.createElement("span", {
      style: {
        color: dead ? 'transparent' : 'var(--ink-3)',
        paddingTop: 2
      }
    }, I.fwd));
    const st = {
      borderTop: i ? '1px solid var(--line-2)' : 0,
      borderRadius: 0,
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: '100%',
      textAlign: 'left',
      opacity: dead ? .55 : 1
    };
    return dead ? /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "tr-row",
      style: st,
      title: "Nobody answered \u2014 nothing was said"
    }, inner) : /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "tr-row agent",
      style: st,
      onClick: () => onOpen(c.id)
    }, inner);
  })), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 16
    }
  }, I.check, /*#__PURE__*/React.createElement("span", null, "Nothing needs a look right now.")), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 16
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "\u201CWorth a look\u201D marks calls that ended without reaching the goal. No answers cannot be corrected \u2014 nothing was said."))))));
}

/* ============================ 11 · CORRECTION ============================ */
function transcriptFor(a, call) {
  const tk = a.tokens,
    inb = a.direction === 'in';
  const kind = call && call.kind || 'message';
  const greet = {
    w: 'a',
    t: disclosureFor(a) + ' ' + a.opener
  };
  const hello = inb ? {
    w: 'c',
    t: 'Hola, llamo por mi cita del jueves.'
  } : {
    w: 'c',
    t: '¿Aló?'
  };
  const head = inb ? [greet, hello] : [hello, greet];
  const gSay = goalSay(a);
  const hand = val(HANDOFF, tk.handoff);
  if (kind === 'confirmed') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Sí, perfecto, ahí estaré.'
  }, {
    w: 'a',
    t: 'Gracias a usted. Que tenga buen día.'
  }];
  if (kind === 'moved') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Ese día no puedo. ¿Hay algo el viernes?'
  }, {
    w: 'a',
    t: 'Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?'
  }, {
    w: 'c',
    t: '¿El viernes a las nueve? Sí, me sirve.'
  }, {
    w: 'a',
    t: 'Queda para el viernes. Gracias por su tiempo.'
  }];
  if (kind === 'transfer') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: '¿Y eso cuánto me va a costar?'
  }, {
    w: 'a',
    t: hand.say,
    bad: true
  }, {
    w: 'c',
    t: 'Prefiero hablar con una persona.'
  }, {
    w: 'a',
    t: 'Le paso ahora mismo. Gracias por su tiempo.'
  }];
  return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Ese día no puedo, estoy trabajando hasta tarde.'
  }, {
    w: 'a',
    t: 'Entiendo. Le tomo el recado y una persona le devuelve la llamada.',
    bad: true
  }, {
    w: 'c',
    t: 'Bueno… ¿pero no hay algo por la tarde?'
  }, {
    w: 'a',
    t: 'Le paso el recado a recepción. Gracias por su tiempo.',
    bad: true
  }];
}
const SUGGESTS = {
  message: ['Ofrecer otro horario disponible antes de tomar el recado', 'Preguntar qué días y horas le sirven', 'Ofrecer la tarde del viernes'],
  transfer: ['Responder lo que sí puede antes de transferir', 'Explicar que el precio lo confirma un asesor', 'Preguntar si prefiere que le llamemos'],
  confirmed: ['Repetir la fecha antes de cerrar', 'Confirmar el lugar de la cita'],
  moved: ['Repetir la nueva fecha antes de cerrar', 'Preguntar si quiere un recordatorio']
};
function Correction({
  agent,
  call,
  agents,
  setAgents,
  onBack,
  toast
}) {
  const a = agent,
    p = persona(a.personaId);
  const tr = useMemo(() => transcriptFor(a, call), [a, call]);
  const [sel, setSel] = useState(null);
  const [txt, setTxt] = useState('');
  const [proposed, setProposed] = useState(null);
  const [apply, setApply] = useState({
    rule: true,
    goal: true
  });
  const suggests = SUGGESTS[call.kind] || SUGGESTS.message;
  const pick = i => {
    setSel(i);
    setTxt('');
    setProposed(null);
  };
  const submit = () => setProposed({
    ...proposalFor(a, call.kind),
    said: txt
  });
  const confirm = () => {
    setAgents(agents.map(x => x.id === a.id ? {
      ...x,
      extraRules: [...(x.extraRules || []), ...(apply.rule ? [proposed.rule] : [])],
      tokens: proposed.goal && apply.goal ? {
        ...x.tokens,
        goal: proposed.goal.id
      } : x.tokens
    } : x));
    setProposed(null);
    setSel(null);
    toast('Settings updated. ' + p.name + ' uses this from the next interaction.');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    style: {
      marginLeft: -12,
      marginBottom: 6
    },
    onClick: onBack
  }, I.back, "All calls"), /*#__PURE__*/React.createElement("div", {
    className: "panel-eyebrow"
  }, a.name, " \xB7 Call ", call.no, " \xB7 ", call.when, " \xB7 ", call.dur, " \xB7 ", OUTCOMES[call.kind].label), /*#__PURE__*/React.createElement("h1", null, "Teach it what to say"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Tap anything ", p.name, " said that was wrong, then write what it should have said instead. We turn it into a setting \u2014 you approve the change before it takes effect.")), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "corr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr"
  }, tr.map((r, i) => r.w === 'c' ? /*#__PURE__*/React.createElement("div", {
    className: "tr-row cust",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, "Customer"), /*#__PURE__*/React.createElement("span", {
    className: "tr-txt"
  }, r.t)) : /*#__PURE__*/React.createElement("button", {
    className: 'tr-row agent' + (sel === i ? ' sel' : ''),
    key: i,
    onClick: () => pick(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, p.name), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "tr-txt"
  }, r.t), sel === i && /*#__PURE__*/React.createElement("span", {
    className: "tr-hint"
  }, I.pencil, "Selected \u2014 tell us what it should have said \u2192"), sel !== i && r.bad && /*#__PURE__*/React.createElement("span", {
    className: "tr-hint",
    style: {
      color: 'var(--ink-3)'
    }
  }, I.pencil, "Tap to correct")))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Corrections become plain-language settings. There is no script or prompt text to edit here \u2014 there never is."))), /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, sel === null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Pick a line"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      marginBottom: 0
    }
  }, "Tap any line ", p.name, " said. Most supervisors start where the customer got stuck \u2014 here, right after \u201C", call.snippet, "\u201D.")), sel !== null && !proposed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "What should it have said?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 5
    }
  }, "In your own words. One sentence is enough."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: txt,
    onChange: e => setTxt(e.target.value),
    placeholder: "It should have offered another time before taking a message\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap',
      marginTop: 11
    }
  }, suggests.map(s => /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    key: s,
    onClick: () => setTxt(s)
  }, s))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      width: '100%',
      marginTop: 15
    },
    disabled: !txt.trim(),
    onClick: submit
  }, I.wand, "See the change")), proposed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pill pill-acc"
  }, /*#__PURE__*/React.createElement("i", null), "Proposed change"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      margin: '12px 0 0'
    }
  }, "From \u201C", proposed.said, "\u201D we would change ", proposed.goal ? 'two settings' : 'one setting', ":"), /*#__PURE__*/React.createElement("div", {
    className: "diff"
  }, /*#__PURE__*/React.createElement("label", {
    className: "diff-item",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: apply.rule,
    onChange: e => setApply({
      ...apply,
      rule: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Add rule:"), " ", proposed.rule, ".")), proposed.goal && /*#__PURE__*/React.createElement("label", {
    className: "diff-item",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: apply.goal,
    onChange: e => setApply({
      ...apply,
      goal: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Change the goal"), " to \u201C", goalLabel({ template: a.template, tokens: { ...a.tokens, goal: proposed.goal.id } }), "\u201D, so it may offer an alternative instead of only taking a message."))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 12
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Applies to future calls only. ", 'It reaches live calls as soon as it is applied.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => setProposed(null)
  }, "Discard"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      flex: 1
    },
    disabled: !apply.rule && !(proposed.goal && apply.goal),
    onClick: confirm
  }, "Apply change")))))));
}

/* Saving an edit of an agent that is live in a dialer. Saving replaces the version it runs, so the
   warning names the dialers and that version before the supervisor commits to it. */
function SaveLiveWarning({
  agent,
  onCancel,
  onConfirm
}) {
  const a = agent || {},
    dials = dialersOf(a),
    cur = currentVersion(a);
  return /*#__PURE__*/React.createElement(Modal, {
    title: "This agent is live",
    onClose: onCancel,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: onCancel
    }, "Keep editing"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: onConfirm
    }, "Save and replace"))
  }, /*#__PURE__*/React.createElement("p", {
    style: { marginTop: 0 }
  }, /*#__PURE__*/React.createElement("b", null, a.name), " is live in ", /*#__PURE__*/React.createElement("b", null, andList(dials)), ". Saving replaces the version it is running", cur ? /*#__PURE__*/React.createElement(React.Fragment, null, ", ", /*#__PURE__*/React.createElement("b", null, cur.id)) : null, ", in every one of them at once."), /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Any interactions in progress will be affected.")));
}

/* ============================ APP ROOT ============================ */
function App() {
  const [agents, setAgents] = useState(SEED_AGENTS);
  const [scr, setScr] = useState({
    n: 'list'
  });
  const [draft, setDraft] = useState(newDraft);
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [talk, setTalk] = useState(false);
  const [askSave, setAskSave] = useState(false);   // editing a live agent: warn before saving
  /* the interface language; every element is translated on its way to the screen (i18n.js) */
  const [uiLang, setUiLangState] = useState(UI_LANG);
  UI_LANG = uiLang;
  const switchUi = l => { setUiLang(l); setUiLangState(UI_LANG); };
  const timer = useRef(null);
  const savedRef = useRef(null);
  const toast = t => {
    setMsg(t);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 3400);
  };
  const set = patch => {
    setDraft(d => ({
      ...d,
      ...patch
    }));
    setBusy(true);
    clearTimeout(savedRef.current);
    savedRef.current = setTimeout(() => setBusy(false), 620);
  };
  const go = n => {
    setStep(n);
    setMaxStep(m => Math.max(m, n));
    const el = document.querySelector('.panel');
    if (el) el.scrollTop = 0;
  };
  const startCreate = () => {
    setDraft(newDraft());
    setStep(1);
    setMaxStep(1);
    setScr({
      n: 'wizard'
    });
  };
  const editAgent = id => {
    const a = agents.find(x => x.id === id);
    setDraft({
      ...newDraft(),
      ...a
    });
    setStep(3);
    setMaxStep(5);
    setScr({
      n: 'wizard',
      editing: id
    });
  };
  const testAgent = id => {
    const a = agents.find(x => x.id === id);
    setDraft({ ...newDraft(), ...a });
    setStep(5);
    setMaxStep(5);
    setScr({ n: 'wizard', editing: id, from: 'agent' });
  };
  /* Recovering a version changes nothing by itself. It loads that version's configuration onto
     the Scope screen; saving it from the wizard makes it the current version, and leaving without
     saving leaves the agent as it was. */
  const recoverVersion = (id, v) => {
    const a = agents.find(x => x.id === id);
    if (!a) return;
    const cfg = versionConfig(a, v);
    setDraft({ ...newDraft(), ...a, ...cfg });
    setStep(3);
    setMaxStep(5);
    setScr({ n: 'wizard', editing: id, recovered: v.id });
    toast(v.id + ' loaded. Review it, then save to make it the current version.');
  };
  const deleteAgent = id => {
    const a = agents.find(x => x.id === id);
    setAgents(agents.filter(x => x.id !== id));
    setScr({ n: 'list' });
    toast((a ? a.name : 'Agent') + ' deleted.');
  };
  const finish = () => {
    if (scr.editing) {
      const was = agents.find(x => x.id === scr.editing) || {};
      const newVersion = nextVersionId(was), prev = currentVersion(was);
      setAgents(agents.map(x => {
        if (x.id !== scr.editing) return x;
        const merged = { ...x, ...draft, id: x.id };
        return {
          ...merged,
          // every save is a new version, and it is the one the agent runs from now on
          versions: [...(x.versions || []), {
            id: newVersion, author: ME, when: nowStamp(),
            changed: scr.recovered ? 'Recovered ' + scr.recovered : 'Edited the agent',
            cfg: configOf(merged)
          }]
        };
      }));
      toast('Saved as ' + newVersion + '. ' + (isLive(was)
        ? 'It replaces ' + (prev ? prev.id : 'the previous version') + ' in ' + andList(dialersOf(was)) + ' from the next interaction.'
        : 'It is now the current version.'));
      setScr({
        n: 'agent',
        id: scr.editing
      });
    } else {
      const id = 'n' + (agents.length + 1);
      setAgents([...agents, {
        ...draft,
        id,
        calls: 0,
        assignedToDialer: false,
        dialers: [],
        versions: [{ id: 'v1', author: ME, when: nowStamp(), changed: 'First version',
          cfg: configOf(draft) }],
        extraRules: []
      }]);
      toast('Saved as v1. Add it to a dialer in the Outbound Hub to put it live.');
      setScr({
        n: 'agent',
        id
      });
    }
  };
  const agent = scr.id ? agents.find(a => a.id === scr.id) : null;
  const crumb = scr.n === 'interactions' ? 'Analytics / Interactions' : scr.n === 'ix' ? 'Analytics / Interactions / Detail' : scr.n === 'wizard' ? 'AI Agents / ' + (scr.editing ? 'Edit' : 'New agent') : scr.n === 'calls' ? 'AI Agents / ' + (agent ? agent.name : '') + ' / Calls' : scr.n === 'correct' ? 'AI Agents / ' + (agent ? agent.name : '') + ' / Calls / Correct' : scr.n === 'agent' ? 'AI Agents / ' + (agent ? agent.name : '') : 'AI Agents';
  let body;
  if (scr.n === 'list') body = /*#__PURE__*/React.createElement(AgentList, {
    agents: agents,
    onCreate: startCreate,
    onOpen: id => setScr({
      n: 'agent',
      id
    })
  });else if (scr.n === 'agent' && agent) body = /*#__PURE__*/React.createElement(AgentPage, {
    agent: agent,
    agents: agents,
    setAgents: setAgents,
    onBack: () => setScr({
      n: 'list'
    }),
    onEdit: editAgent,
    onTest: testAgent,
    onRecover: recoverVersion,
    onDelete: deleteAgent,
    toast: toast
  });else if (scr.n === 'interactions') body = /*#__PURE__*/React.createElement(Interactions, {
    agents: agents,
    onOpenRow: rid => setScr({
      n: 'ix',
      rowId: rid
    })
  });else if (scr.n === 'ix') body = /*#__PURE__*/React.createElement(InteractionDetail, {
    row: INTERACTIONS.find(r => r.id === scr.rowId) || INTERACTIONS[0],
    agents: agents,
    onBack: () => setScr({
      n: 'interactions'
    }),
    onTeach: (aid, cid) => setScr({
      n: 'correct',
      id: aid,
      callId: cid
    })
  });else if (scr.n === 'calls' && agent) body = /*#__PURE__*/React.createElement(CallList, {
    agent: agent,
    onBack: () => setScr({
      n: 'list'
    }),
    onOpen: cid => setScr({
      n: 'correct',
      id: scr.id,
      callId: cid
    })
  });else if (scr.n === 'correct' && agent) body = callById(agent, scr.callId) ? /*#__PURE__*/React.createElement(Correction, {
    agent: agent,
    call: callById(agent, scr.callId),
    agents: agents,
    setAgents: setAgents,
    onBack: () => setScr({
      n: 'calls',
      id: scr.id
    }),
    toast: toast
  }) : /*#__PURE__*/React.createElement(CallList, {
    agent: agent,
    onBack: () => setScr({
      n: 'list'
    }),
    onOpen: cid => setScr({
      n: 'correct',
      id: scr.id,
      callId: cid
    })
  });else {
    const common = {
      draft,
      set,
      // the agent is saved from the Rules step; Test is opened from the agent page and
      // only ever goes back — it never writes a version
      // saving an edit of an agent that is live in a dialer asks first
      next: () => step === 4 ? (scr.editing && isLive(agents.find(x => x.id === scr.editing) || {}) ? setAskSave(true) : finish()) : step === 5 ? (scr.from === 'agent' ? setScr({ n: 'agent', id: scr.editing }) : go(4)) : go(step + 1),
      back: () => go(step - 1),
      testExit: scr.from === 'agent' ? 'agent' : 'rules'
    };
    body = /*#__PURE__*/React.createElement("div", {
      className: "panel"
    }, /*#__PURE__*/React.createElement(WizardBar, {
      step: step,
      maxStep: maxStep,
      onGo: go,
      busy: busy,
      onExit: () => setScr({
        n: 'list'
      })
    }), step === 1 && /*#__PURE__*/React.createElement(StepDirection, _extends({}, common, {
      locked: !!scr.editing,
      talk: () => setTalk(true)
    })), step === 2 && /*#__PURE__*/React.createElement(StepVoice, common), step === 3 && /*#__PURE__*/React.createElement(draft.template === 'reception' ? StepBriefReception : StepBrief, common), step === 4 && /*#__PURE__*/React.createElement(StepRules, common), step === 5 && /*#__PURE__*/React.createElement(StepTest, common));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shell, {
    crumb: crumb,
    uiLang: uiLang,
    onUiLang: switchUi,
    here: scr.n === 'interactions' || scr.n === 'ix' ? 'interactions' : 'list',
    onGo: where => setScr({
      n: where
    }),
    onHome: () => setScr({
      n: 'list'
    })
  }, body), askSave && /*#__PURE__*/React.createElement(SaveLiveWarning, {
    agent: agents.find(x => x.id === scr.editing),
    onCancel: () => setAskSave(false),
    onConfirm: () => { setAskSave(false); finish(); }
  }), talk && /*#__PURE__*/React.createElement(Modal, {
    title: "Tell us about the job",
    onClose: () => setTalk(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setTalk(false)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => {
        setTalk(false);
        toast('Sent. Your account team will pick it up with you.');
      }
    }, "Send to my team"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Describe the calls you want in your own words. A solutions engineer builds the template with you."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    placeholder: "We need to call people who missed a delivery and agree a new day\u2026"
  })), msg && /*#__PURE__*/React.createElement(Toast, {
    msg: msg
  }));
}
