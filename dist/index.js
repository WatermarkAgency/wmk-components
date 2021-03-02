function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));
var wmkColorPalette = require('wmk-color-palette');
var wmkLib = require('wmk-lib');

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = new wmkColorPalette.ColorPalette([{
  value: "#048CB9",
  group: "blue",
  tertiary: true
}, {
  value: "#ebe72a",
  group: "yellow",
  accent: true
}, {
  value: "#B9D800",
  group: "green"
}, {
  value: "#fefefe",
  group: "white"
}, {
  value: "#E48C2B",
  group: "orange",
  primary: true
}, {
  value: "#696969",
  group: "black",
  text: true
}, {
  value: "#0a0a0a",
  group: "black",
  black: true
}, {
  value: "#F15A24",
  group: "red",
  secondary: true
}, {
  value: "#cccccc",
  group: "gray"
}, {
  value: "#ffd500",
  group: "yellow",
  coaccent: true
}, {
  value: "#464646",
  group: "gray"
}, {
  value: "#fefefe",
  group: "white",
  reverse: true
}]);
var WMKGradient = new wmkColorPalette.Gradient([[colors.hex("primary")], [colors.hex("secondary")]], false, -90);
var ButtonFlashGradient = new wmkColorPalette.Gradient([[colors.rgba("primary", 0), 50], [colors.rgba("primary"), 50]], false, 0);

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var BurgerWrap = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  padding: 0 1rem;\n  left: 1.5rem;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n  z-index: 1000;\n  transition: opacity 0.25s ease;\n  background: none;\n  border: none;\n"])));
var TopBar = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (_ref) {
  var lineBaseStyle = _ref.lineBaseStyle,
      isStuck = _ref.isStuck;
  return lineBaseStyle(isStuck);
}, function (_ref2) {
  var isOpen = _ref2.isOpen,
      isStuck = _ref2.isStuck;
  return isOpen && isStuck ? "transform: rotate(45deg); left: 0;" : isOpen ? "transform: rotate(45deg); left: 0;" : isStuck ? "left: 0; top: 5px;" : "transform: rotate(130deg); left: -16px;";
});
var MidBar = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (_ref3) {
  var lineBaseStyle = _ref3.lineBaseStyle,
      isStuck = _ref3.isStuck;
  return lineBaseStyle(isStuck);
}, function (_ref4) {
  var isOpen = _ref4.isOpen,
      isStuck = _ref4.isStuck;
  return isOpen && isStuck ? "transform: rotate(180deg); left: 0; opacity: 0;" : isOpen ? "transform: rotate(180deg); left: 0; opacity: 0;" : isStuck ? "" : "transform: rotate(130deg); left: 0;";
});
var BtmBar = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (_ref5) {
  var lineBaseStyle = _ref5.lineBaseStyle,
      isStuck = _ref5.isStuck;
  return lineBaseStyle(isStuck);
}, function (_ref6) {
  var isOpen = _ref6.isOpen,
      isStuck = _ref6.isStuck;
  return isOpen && isStuck ? "transform: rotate(-45deg); left: 0;" : isOpen ? "transform: rotate(-45deg); left: 0;" : isStuck ? "left: 0; top: 20px;" : "transform: rotate(130deg); left: 16px;";
});

var BurgerButton = function BurgerButton(_ref7) {
  var isStuck = _ref7.isStuck,
      isOpen = _ref7.isOpen,
      toggle = _ref7.toggle,
      height = _ref7.height,
      colorPalatte = _ref7.colorPalatte;

  var lineBaseStyle = function lineBaseStyle(isStuck) {
    return "\n  background: " + colorPalatte.hex("primary") + ";\n  border: none;\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.35s ease;\n  cursor: pointer;\n  " + (isStuck ? "width: 70%;\n  top: 0.75rem;" : "") + "\n";
  };

  return /*#__PURE__*/React.createElement(BurgerWrap, {
    onClick: toggle,
    style: {
      top: height / 2 / 2 + "px"
    },
    "aria-label": isOpen ? "Close Menu" : "Open Menu"
  }, /*#__PURE__*/React.createElement(TopBar, {
    isOpen: isOpen,
    isStuck: isStuck,
    lineBaseStyle: lineBaseStyle
  }), /*#__PURE__*/React.createElement(MidBar, {
    isOpen: isOpen,
    isStuck: isStuck,
    lineBaseStyle: lineBaseStyle
  }), /*#__PURE__*/React.createElement(BtmBar, {
    isOpen: isOpen,
    isStuck: isStuck,
    lineBaseStyle: lineBaseStyle
  }));
};
BurgerButton.propTypes = {
  isStuck: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  height: PropTypes.number,
  colorPalatte: PropTypes.object
};
BurgerButton.defaultProps = {
  colorPalatte: colors
};

var _templateObject$1;
var MenuText = styled.span(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  position: relative;\n  left: ", ";\n  transition: opacity 0.3s ease, left 0.1s ease;\n  display: ", ";\n"])), function (_ref) {
  var isStuck = _ref.isStuck;
  return isStuck ? "0px" : "14px";
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? "22px" : "12px";
}, function (_ref3) {
  var isStuck = _ref3.isStuck;
  return isStuck ? "none" : "block";
});

var Hamburger = function Hamburger(_ref4) {
  var isOpen = _ref4.isOpen,
      toggle = _ref4.toggle,
      height = _ref4.height,
      isStuck = _ref4.isStuck;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BurgerButton, {
    isOpen: isOpen,
    toggle: toggle,
    height: height,
    isStuck: isStuck
  }), /*#__PURE__*/React.createElement(MenuText, {
    isOpen: isOpen,
    isStuck: isStuck
  }, isOpen ? "CLOSE" : "MENU"));
};

var getThemePadding = function getThemePadding(base, units) {
  if (base === void 0) {
    base = 1;
  }

  if (units === void 0) {
    units = "rem";
  }

  var padding = {};
  var sizes = [{
    size: "single",
    value: 1 * base
  }, {
    size: "double",
    value: 2 * base
  }, {
    size: "triple",
    value: 3 * base
  }, {
    size: "x4",
    value: 4 * base
  }, {
    size: "half",
    value: 0.5 * base
  }, {
    size: "quarter",
    value: 0.25 * base
  }, {
    size: "eighth",
    value: 0.125 * base
  }, {
    size: "third",
    value: 1 / 3 * base
  }, {
    size: "twoThirds",
    value: 2 / 3 * base
  }, {
    size: "threeQuarters",
    value: 3 / 4 * base
  }, {
    size: "oneAndHalf",
    value: 1.5 * base
  }, {
    size: "theeFifths",
    value: 3 / 5 * base
  }, {
    size: "fourFifths",
    value: 4 / 5 * base
  }];
  sizes.forEach(function (sz) {
    padding[sz.size] = sz.value;
  });
  return {
    sizes: padding,
    base: base,
    units: units
  };
};

var ThemeOptions = /*#__PURE__*/function () {
  function ThemeOptions(settings) {
    this.color = settings.color ? settings.color : {};
    this.transform = settings.transform ? settings.transform : {};
    this.font = settings.font ? settings.font : {};
    this.paths = settings.paths ? settings.paths : {};
    this.padding = settings.padding ? settings.padding : getThemePadding();
    this.baseUnit = settings.baseUnit ? settings.baseUnit : "rem";
    this["break"] = settings["break"] ? settings["break"] : {};
    this.gradient = settings.gradient ? settings.gradient : {};
  }

  var _proto = ThemeOptions.prototype;

  _proto.pad = function pad(size, string) {
    if (string === void 0) {
      string = true;
    }

    return string ? "" + this.padding.sizes[size] * this.padding.base + this.padding.units : "" + this.padding.sizes[size] * this.padding.base;
  };

  _proto.hexToRgb = function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  _proto.hex = function hex(color) {
    return this.color[color].hex;
  };

  _proto.rgb = function rgb(color, string) {
    if (string === void 0) {
      string = true;
    }

    var rgb = this.color[color] && this.color[color].rgb ? this.color[color].rgb : this.hexToRgb(this.color[color].hex);
    return string ? "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")" : rgb;
  };

  _proto.alpha = function alpha(color, _alpha, string) {
    if (_alpha === void 0) {
      _alpha = 1;
    }

    if (string === void 0) {
      string = true;
    }

    var rgb = this.color[color] ? this.rgb(color, false) : null;
    var rgba = rgb ? rgb : null;

    if (rgba) {
      rgba["a"] = _alpha;
    }

    return string && rgb ? "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a + ")" : rgba;
  };

  _proto.lightenDarkenColor = function lightenDarkenColor(hex, amt) {
    var usePound = false;

    if (hex[0] === "#") {
      hex = hex.slice(1);
      usePound = true;
    }

    var num = parseInt(hex, 16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;else if (r < 0) r = 0;
    var b = (num >> 8 & 0x00ff) + amt;
    if (b > 255) b = 255;else if (b < 0) b = 0;
    var g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
  };

  _proto.lighter = function lighter(color, amt) {
    if (amt === void 0) {
      amt = 10;
    }

    return this.color[color] ? this.lightenDarkenColor(this.hex(color), amt) : null;
  };

  _proto.darker = function darker(color, amt) {
    if (amt === void 0) {
      amt = 10;
    }

    return this.color[color] ? this.lightenDarkenColor(this.hex(color), amt * -1) : null;
  };

  return ThemeOptions;
}();

var Theme = new ThemeOptions({
  color: {
    primary: {
      hex: "#048CB9"
    },
    secondary: {
      hex: "#ebe72a"
    },
    accent: {
      hex: "#B9D800"
    },
    reverse: {
      hex: "#fefefe"
    },
    tang: {
      hex: "#E48C2B"
    },
    body: {
      hex: "#696969"
    },
    fire: {
      hex: "#F15A24"
    },
    light_gray: {
      hex: "#cccccc"
    },
    black: {
      hex: "#000000"
    },
    white: {
      hex: "#ffffff"
    },
    gold: {
      hex: "#ffd500"
    },
    slate: {
      hex: "#464646"
    },
    rust: {
      hex: "#B91810"
    }
  },
  paths: {
    blog: "/blog/",
    home: "/home/",
    tags: "/blog/tag/",
    baseURL: "watermarkadvertising.net",
    baseUrl: "https://wmkagency.com",
    protocol: "https",
    contact: "/contact/",
    team: "/team/",
    about: "/about/",
    work: "/work/",
    services: "/services/",
    db: "https://watermarkadvertising.net",
    prod: "https://wmkagency.com",
    dev: "localhost:8000",
    pages: "/"
  },
  "break": {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px"
  },
  font: {
    body: "'Nunito Sans', sans-serif",
    head: "Rajdhani, sans-serif"
  },
  gradient: {
    wmk: "background-color: #e48c2b;\n          background-image: linear-gradient(to right, #F15A24, #E48C2B);\n          ",
    twitter: "background-color: #4db5f5;\n              background-image: linear-gradient(to right, #1da1f2, #4db5f5);",
    facebook: "background-color: #6d84b4;\n               background-image: linear-gradient(to right, #3b5998, #6d84b4);",
    rust: "background: rgb(175,16,8);\n               background: linear-gradient(90deg, rgba(175,16,8,1) 0%, rgba(210,79,16,1) 100%);",
    black: "background: rgb(0,0,0);\n               background: linear-gradient(0deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);",
    fire: "background: rgb(241,90,36);\n            background: linear-gradient(0deg, rgba(241,90,36,.65) 0%, rgba(241,90,36,0) 100%);"
  }
});

var _templateObject$2;
var DrawerWrap = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  padding: 0;\n  z-index: 999;\n  overflow: hidden;\n  width: 100%;\n  height: 100vh;\n  transform: translateY(-100vh);\n  background: none;\n  transition: all 0.3s ease-out;\n  & > * {\n    visibility: hidden;\n  }\n  a {\n    opacity: 0;\n    position: relative;\n    left: 20vw;\n    color: ", ";\n    :nth-of-type(1) {\n      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;\n      transition-delay: 0.3s;\n    }\n    :nth-of-type(2) {\n      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;\n      transition-delay: 0.35s;\n    }\n    :nth-of-type(3) {\n      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;\n      transition-delay: 0.45s;\n    }\n    :nth-of-type(4) {\n      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;\n      transition-delay: 0.35s;\n    }\n    :nth-of-type(5) {\n      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;\n      transition-delay: 0.3s;\n    }\n  }\n  &.open {\n    background: ", ";\n    padding: 4%;\n    transform: translateY(-1vh);\n    transition: all 0.3s ease-out;\n    & > * {\n      visibility: visible;\n    }\n    a {\n      opacity: 1;\n      left: 0vw;\n      font-size: 2.5rem;\n      font-family: ", ";\n      text-transform: uppercase;\n      color: ", ";\n      :hover {\n        //text-decoration: none;\n        color: ", ";\n      }\n    }\n  }\n"])), colors.hex("secondary"), colors.rgba("reverse", 0.9), Theme.font.head, colors.hex("secondary"), colors.hex("primary"));

var Drawer = function Drawer(_ref) {
  var menus = _ref.menus,
      isOpen = _ref.isOpen,
      toggle = _ref.toggle,
      headerHeight = _ref.headerHeight;
  var slug = menus.slug,
      links = menus.links;
  var classes = isOpen ? "open" : "";
  return /*#__PURE__*/React.createElement(DrawerWrap, {
    id: slug,
    className: classes,
    style: {
      top: headerHeight + "px"
    },
    onClick: toggle
  }, links.map(function (menu) {
    return /*#__PURE__*/React.createElement(wmkLib.WMKLink, {
      key: menu.title,
      to: "/" + menu.slug
    }, menu.title);
  }));
};

var BurgerButton$1 = Hamburger;
var BurgerDrawer = Drawer;

exports.BurgerButton = BurgerButton$1;
exports.BurgerDrawer = BurgerDrawer;
//# sourceMappingURL=index.js.map
