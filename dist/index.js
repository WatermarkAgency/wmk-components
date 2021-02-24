function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var fa = require('react-icons/fa');
var gatsby = require('gatsby');
var reactBootstrap = require('react-bootstrap');
var io = require('react-icons/io');
var wmkLib = require('wmk-lib');
var useScrollPosition = require('@n8tb1t/use-scroll-position');
var videoReact = require('video-react');
var Img = _interopDefault(require('gatsby-image'));
var Helmet = _interopDefault(require('react-helmet'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var wmkClass = function wmkClass(name, group, append, prefix) {
  if (append === void 0) {
    append = "";
  }

  if (prefix === void 0) {
    prefix = "wmk";
  }

  var classes = [prefix + "-" + group, prefix + "-" + group + "-" + name, append];
  return classes.join(" ").trim();
};

var _Anchor$propTypes;
var Anchor = React__default.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      to = _ref.to,
      id = _ref.id,
      className = _ref.className,
      target = _ref.target,
      children = _ref.children,
      style = _ref.style,
      speed = _ref.speed,
      mailto = _ref.mailto,
      tel = _ref.tel,
      animate = _ref.animate,
      rel = _ref.rel,
      label = _ref.label;

  var _style = animate ? _extends({}, style, {
    transition: "all " + speed + "s ease"
  }) : style;

  var _target = target ? "_" + target.replace("_", "") : null;

  var _rel = _target === "_blank" ? "noopener noreferrer" : rel;

  var prefix = tel ? "tel:" : mailto ? "mailto:" : "";

  var _to = tel ? to.replace(/\D/g, "") : to;

  var _link = tel ? "tel" : mailto ? "mailto" : "anchor";

  return /*#__PURE__*/React__default.createElement("a", {
    href: prefix + _to,
    id: id ? id : undefined,
    className: wmkClass(_link, "link", className),
    target: _target,
    rel: _rel,
    ref: ref,
    style: _style,
    "aria-label": label,
    onClick: onClick
  }, children);
});
Anchor.propTypes = (_Anchor$propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
}, _Anchor$propTypes["children"] = PropTypes.node.isRequired, _Anchor$propTypes.style = PropTypes.object, _Anchor$propTypes.speed = PropTypes.oneOfType([PropTypes.number, PropTypes.string]), _Anchor$propTypes.mailto = PropTypes.bool, _Anchor$propTypes.tel = PropTypes.bool, _Anchor$propTypes.animate = PropTypes.bool, _Anchor$propTypes.rel = PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), _Anchor$propTypes);
Anchor.defaultProps = {
  target: false,
  id: false,
  className: "",
  speed: ".3",
  mailto: false,
  tel: false,
  animate: false
};

var SocialMediaIcon = React__default.forwardRef(function (_ref, ref) {
  var platform = _ref.platform,
      url = _ref.url,
      target = _ref.target,
      className = _ref.className;
  var Icon = platform.Icon,
      name = platform.name;

  var _className = name + (className !== "" ? " " + className : "");

  return /*#__PURE__*/React__default.createElement(Anchor, {
    key: name,
    to: url,
    target: target,
    className: _className,
    ref: ref
  }, /*#__PURE__*/React__default.createElement(Icon, null), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only sr-only-focusable"
  }, "Open " + name + " page"));
});
SocialMediaIcon.propTypes = {
  platform: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string
};
SocialMediaIcon.defaultProps = {
  target: "_blank",
  className: ""
};

var SocialMediaIcons = function SocialMediaIcons(_ref) {
  var query = _ref.query,
      platforms = _ref.platforms,
      className = _ref.className;

  var getPlatform = function getPlatform(platform, platforms) {
    var socialPlatform = null;
    platforms.forEach(function (p) {
      if (platform.toLowerCase().indexOf(p.name) !== -1) {
        socialPlatform = p;
      }
    });
    return socialPlatform;
  };

  var _className = wmkClass("icon", "social", className);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, query.map(function (icon) {
    var title = icon.title,
        url = icon.url,
        target = icon.target;
    var platform = getPlatform(title, platforms);
    return /*#__PURE__*/React__default.createElement(SocialMediaIcon, {
      platform: platform,
      url: url,
      target: target,
      className: _className,
      key: platform.name + "-icon"
    });
  }));
};
SocialMediaIcons.propTypes = {
  query: PropTypes.array.isRequired,
  platforms: PropTypes.array,
  className: PropTypes.string
};
SocialMediaIcons.defaultProps = {
  platforms: [{
    name: "facebook",
    Icon: fa.FaFacebookF
  }, {
    name: "twitter",
    Icon: fa.FaTwitter
  }, {
    name: "linkedin",
    Icon: fa.FaLinkedinIn
  }, {
    name: "youtube",
    Icon: fa.FaYoutube
  }, {
    name: "instagram",
    Icon: fa.FaInstagram
  }, {
    name: "pinterest",
    Icon: fa.FaPinterestP
  }, {
    name: "yelp",
    Icon: fa.FaYelp
  }],
  className: ""
};

var WMKLink = React__default.forwardRef(function (_ref, ref) {
  var to = _ref.to,
      id = _ref.id,
      children = _ref.children,
      target = _ref.target,
      mailto = _ref.mailto,
      tel = _ref.tel,
      style = _ref.style,
      className = _ref.className,
      speed = _ref.speed,
      animate = _ref.animate,
      label = _ref.label,
      onClick = _ref.onClick;

  var _className = wmkClass("gatsby", "link", className);

  var _target = target ? "_" + target.replace("_", "") : null;

  var _to = mailto || tel ? to !== "/" ? to : children : to;

  return _target && _target !== "_internal" || _target && _target !== "_link" || mailto || tel ? /*#__PURE__*/React__default.createElement(Anchor, {
    to: _to,
    mailto: mailto,
    tel: tel,
    target: target,
    className: className,
    id: id,
    ref: ref,
    style: style,
    speed: speed,
    animate: animate,
    label: label,
    onClick: onClick
  }, children) : /*#__PURE__*/React__default.createElement(gatsby.Link, {
    onClick: onClick,
    to: to,
    ref: ref,
    className: _className,
    id: id ? id : undefined,
    style: style,
    "aria-label": label
  }, children);
});
WMKLink.defaultProps = {
  tel: false,
  mailto: false,
  id: false,
  target: false,
  className: "",
  to: "/",
  animate: false
};
WMKLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node.isRequired,
  mailto: PropTypes.bool,
  tel: PropTypes.bool,
  animate: PropTypes.bool
};

var SearchSliderDrawer = function SearchSliderDrawer(_ref) {
  var isSearchOpen = _ref.isSearchOpen,
      setIsSearchOpen = _ref.setIsSearchOpen,
      query = _ref.query,
      Result = _ref.Result,
      Close = _ref.Close,
      className = _ref.className,
      style = _ref.style,
      useAlgorithm = _ref.useAlgorithm;

  var _useState = React.useState(null),
      searchResults = _useState[0],
      setSearchResults = _useState[1];

  var _useState2 = React.useState(""),
      searchKey = _useState2[0],
      setSearchKey = _useState2[1];

  var _style = _extends({}, style, {
    position: isSearchOpen ? "fixed" : "absolute",
    zIndex: !isSearchOpen ? -1 : 20000,
    width: isSearchOpen ? "100%" : "1px",
    minHeight: isSearchOpen ? "100%" : "none",
    height: isSearchOpen ? "auto" : "1px",
    transition: "all 0.3s ease",
    right: 0,
    top: 0,
    overflow: isSearchOpen ? "scroll" : "hidden"
  });

  var getSearchIndex = function getSearchIndex(query) {
    var searchIndices = Object.keys(query).map(function (key) {
      var data = query[key].edges.map(function (edge) {
        edge.node["nodeType"] = key;
        return edge.node;
      });
      var all = data.map(function (datum) {
        return datum;
      });
      return all;
    });
    var searchIndex = [].concat.apply([], searchIndices).sort(function (a, b) {
      return a.title > b.title ? 1 : -1;
    });
    return searchIndex;
  };

  var searchIndex = getSearchIndex(query);

  var handleSearch = function handleSearch(e) {
    var _useAlgorithm = useAlgorithm(e, searchIndex),
        key = _useAlgorithm.key,
        results = _useAlgorithm.results;

    setSearchKey(key);
    setSearchResults(results);
  };

  var handleClose = function handleClose() {
    setIsSearchOpen(false);
  };

  var handleSumbit = function handleSumbit(e) {
    e.preventDefault();
  };

  var _className = [];

  _className.push(isSearchOpen ? "search-open" : "search-closed");

  _className.push(className);

  return /*#__PURE__*/React__default.createElement("div", {
    style: _style,
    className: wmkClass("drawer", "search", _className.join(" "))
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: "flex-column",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      padding: "2vh 3vw",
      minHeight: "5rem"
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: handleClose,
    "aria-label": "Close Search",
    className: "close"
  }, /*#__PURE__*/React__default.createElement(Close, null))), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    style: {
      display: "flex",
      justifyContent: "center",
      minHeight: "5rem"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form, {
    style: {
      width: "80%"
    },
    onSubmit: handleSumbit,
    className: "search-form"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    placeholder: "Enter Search...",
    onChange: handleSearch
  }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    className: "results"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Container, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    style: {
      maxWidth: "80%",
      margin: "auto"
    },
    className: "flex-column"
  }, searchResults && searchResults.length && searchKey !== "" ? searchResults.map(function (result, i) {
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      key: result.title + i
    }, /*#__PURE__*/React__default.createElement(Result, {
      result: result
    }));
  }) : searchResults && !searchResults.length && searchKey !== "" ? /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement("em", null, "No results matching ", /*#__PURE__*/React__default.createElement("strong", null, searchKey), "."), /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement("sub", null, "Please try another search."))) : null)))));
};
SearchSliderDrawer.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  setIsSearchOpen: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired,
  Result: PropTypes.func,
  Close: PropTypes.func,
  useAlgorithm: PropTypes.func
};
SearchSliderDrawer.defaultProps = {
  Result: function Result(_ref2) {
    var result = _ref2.result;
    return /*#__PURE__*/React__default.createElement(wmkLib.WMKLink, {
      to: result.slug
    }, result.title);
  },
  Close: function Close() {
    return /*#__PURE__*/React__default.createElement(io.IoIosClose, null);
  },
  useAlgorithm: function useAlgorithm(event, index) {
    var search = index.filter(function (item) {
      var lower = item.title.toLowerCase();
      return lower.includes(event.target.value.toLowerCase());
    });
    return {
      key: event.target.value,
      results: search
    };
  }
};

var SearchSliderOpen = function SearchSliderOpen(_ref) {
  var isSearchOpen = _ref.isSearchOpen,
      setIsSearchOpen = _ref.setIsSearchOpen,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style;

  var handleFocus = function handleFocus() {
    setIsSearchOpen(true);
  };

  var _className = [];

  _className.push(isSearchOpen ? "search-open" : "search-closed");

  _className.push(className);

  return /*#__PURE__*/React__default.createElement("button", {
    className: wmkClass("open", "search", _className.join(" ")),
    onClick: handleFocus,
    style: style ? style : undefined
  }, children);
};
SearchSliderOpen.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  setIsSearchOpen: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
SearchSliderOpen.defaultProps = {
  className: ""
};

var Search = {
  Slider: {
    Drawer: SearchSliderDrawer,
    Button: SearchSliderOpen
  }
};
var SearchSliderOpen$1 = SearchSliderOpen;
var SearchSliderDrawer$1 = SearchSliderDrawer;

var Copyright = React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  var year = new Date().getFullYear();
  return /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: wmkClass("copyright", "layout", className),
    ref: ref
  }, "\xA9 ", year, " ", children);
});

var FlexSpacer = function FlexSpacer(_ref) {
  var className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/React__default.createElement("div", {
    className: wmkClass("flex-spacer", "layout", className),
    id: id,
    style: {
      margin: "auto"
    }
  });
};
FlexSpacer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};
FlexSpacer.defaultProps = {
  id: "",
  className: ""
};

var Footer = React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/React__default.createElement("footer", {
    className: wmkClass("footer", "layout", className),
    id: id,
    ref: ref
  }, children);
});

var MainLayout = function MainLayout(_ref) {
  var children = _ref.children,
      Header = _ref.Header,
      Footer = _ref.Footer,
      className = _ref.className;
  var HeaderJSX = Header;
  var FooterJSX = Footer;
  return /*#__PURE__*/React__default.createElement("div", {
    className: wmkClass("wrap", "layout"),
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React__default.createElement(HeaderJSX, null), /*#__PURE__*/React__default.createElement("main", {
    className: wmkClass("main", "layout", className)
  }, children), /*#__PURE__*/React__default.createElement(FlexSpacer, null), /*#__PURE__*/React__default.createElement(FooterJSX, null));
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  Header: PropTypes.func,
  Footer: PropTypes.func
};
MainLayout.defaultProps = {
  Header: function Header() {
    return /*#__PURE__*/React__default.createElement("div", null, "Pass Header JSX");
  },
  Footer: function Footer() {
    return /*#__PURE__*/React__default.createElement("div", null, "Pass Footer JSX");
  }
};

var Header = React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/React__default.createElement("header", {
    className: wmkClass("header", "layout", className),
    style: style,
    ref: ref
  }, children);
});

var Sticky = function Sticky(_ref) {
  var Alert = _ref.Alert,
      className = _ref.className,
      children = _ref.children,
      absolute = _ref.absolute,
      style = _ref.style,
      zIndex = _ref.zIndex,
      width = _ref.width,
      trigger = _ref.trigger;
  var domPosition = absolute ? "absolute" : "relative";

  var _useState = React.useState({
    y: 0,
    height: 0,
    width: 0
  }),
      headerRect = _useState[0],
      setHeaderRect = _useState[1];

  var _useState2 = React.useState(0),
      scrollPos = _useState2[0],
      setScrollPos = _useState2[1];

  var headerRef = React.useRef();
  React.useEffect(function () {
    var handleResize = function handleResize() {
      setHeaderRect(headerRef.current.getBoundingClientRect());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  useScrollPosition.useScrollPosition(function (_ref2) {
    var currPos = _ref2.currPos;
    setScrollPos(currPos.y * -1);
  });
  var classes = [className];
  var triggerHeight = !Alert && !headerRect.y ? trigger >= 0 ? trigger : headerRect.height : headerRect.y;
  var isTriggered = scrollPos > triggerHeight;
  if (isTriggered) classes.push("stuck");
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: wmkClass("sticky-header", "layout", classes.join(" ")),
    style: _extends({}, style, {
      position: isTriggered ? "fixed" : domPosition,
      zIndex: zIndex,
      width: width
    })
  }, !isTriggered ? Alert : null, /*#__PURE__*/React__default.createElement(Header, {
    ref: headerRef
  }, children)), Alert && isTriggered ? /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: headerRect.y
    }
  }) : null, isTriggered && /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: headerRect.height
    }
  }));
};
Sticky.propTypes = {
  Alert: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  absolute: PropTypes.bool,
  zIndex: PropTypes.number,
  width: PropTypes.string,
  trigger: PropTypes.number
};
Sticky.defaultProps = {
  Alert: /*#__PURE__*/React__default.createElement(React__default.Fragment, null),
  className: "",
  absolute: false,
  zIndex: 1000,
  width: "100%",
  trigger: 0
};

var ListItemColumn = function ListItemColumn(_ref) {
  var list = _ref.list,
      JSX = _ref.JSX;
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: "flex-column"
  }, list && list.length ? list.map(function (li, i) {
    return /*#__PURE__*/React__default.createElement(JSX, {
      key: li + i,
      li: li
    });
  }) : null);
};
ListItemColumn.propTypes = {
  list: PropTypes.array.isRequired,
  JSX: PropTypes.func
};
ListItemColumn.defaultProps = {
  JSX: function JSX(_ref2) {
    var li = _ref2.li;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, console.log(li), " List Item Data");
  }
};

var ListItemColumns = function ListItemColumns(_ref) {
  var list = _ref.list,
      cols = _ref.cols,
      JSX = _ref.JSX,
      className = _ref.className;
  var sortList = [].concat(list);
  var total = sortList.length;
  var per = Math.floor(total / cols);
  var rem = total % cols;
  var columns = [];

  for (var i = 0; i < cols; i++) {
    var retVal = i < cols - 1 ? per : per + rem;
    var column = [];

    for (var j = 0; j < retVal; j++) {
      column.push(sortList.shift());
    }

    columns.push(column);
  }

  return columns && columns.length ? /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: wmkClass('list-item-columns', 'layout', className)
  }, columns.map(function (col, i) {
    var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      key: col + "-" + randomString + "-" + i,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React__default.createElement(ListItemColumn, {
      list: col,
      JSX: JSX
    }));
  })) : null;
};
ListItemColumns.propTypes = {
  list: PropTypes.array.isRequired,
  cols: PropTypes.number,
  JSX: PropTypes.func,
  className: PropTypes.string
};
ListItemColumns.defaultProps = {
  cols: 3,
  JSX: function JSX(_ref2) {
    var li = _ref2.li;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, console.log(li), " List Item Data");
  },
  className: ""
};

var Spinner = function Spinner() {
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100%",
      textAlign: "center",
      position: "absolute",
      top: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "lds-ring"
  }, /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("div", null)));
};

var Ratio = (function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return /*#__PURE__*/React__default.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 " + width + " " + height,
    style: {
      enableBackground: "new 0 0 " + width + " " + height
    }
  });
});

var Video = function Video(_ref) {
  var id = _ref.id,
      className = _ref.className,
      url = _ref.url,
      poster = _ref.poster,
      dimensions = _ref.dimensions,
      Loader = _ref.Loader;

  var _useState = React.useState(null),
      readyState = _useState[0],
      setReadyState = _useState[1];

  var _useState2 = React.useState(false),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  var _useState3 = React.useState(0),
      winWidth = _useState3[0],
      setWinWidth = _useState3[1];

  var playerRef = React.useRef();
  React.useEffect(function () {
    playerRef.current.subscribeToStateChange(function (state, prevState) {
      setReadyState(state.readyState);
      if (state.readyState > 3) setHasLoaded(true);
    });

    var handleResize = function handleResize() {
      setWinWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  });
  var edgeLong = dimensions.split("x")[0];
  var edgeShort = dimensions.split("x")[1];

  var _id = id ? id : undefined;

  return /*#__PURE__*/React__default.createElement("div", {
    id: _id,
    className: wmkClass("video", "media", className),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React__default.createElement(Ratio, {
    width: winWidth > edgeShort ? edgeLong : edgeShort,
    height: winWidth > edgeShort ? edgeShort : edgeLong,
    style: {
      width: "100%",
      maxWidth: "none",
      visibility: "hidden"
    }
  }), (!readyState || readyState < 4) && !hasLoaded ? /*#__PURE__*/React__default.createElement(Loader, null) : null, /*#__PURE__*/React__default.createElement(videoReact.Player, {
    ref: playerRef,
    poster: poster,
    preload: "auto",
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url
  }), /*#__PURE__*/React__default.createElement(videoReact.ControlBar, {
    disableCompletely: true
  })));
};
Video.propTypes = {
  url: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  poster: PropTypes.string,
  dimensions: PropTypes.string,
  Loader: PropTypes.func
};
Video.defaultProps = {
  id: false,
  url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4",
  poster: "",
  dimensions: "1280x720",
  Loader: Spinner
};

var LightBoxImage = function LightBoxImage(_ref) {
  var url = _ref.url,
      alt = _ref.alt,
      caption = _ref.caption,
      fluid = _ref.fluid,
      prefix = _ref.prefix;

  var _useState = React.useState(false),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var handleExpand = function handleExpand() {
    setIsExpanded(!isExpanded);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("figure", {
    className: prefix + "-wrap"
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": "Expand " + alt + " image",
    style: {
      border: "none",
      appearance: "none"
    },
    onClick: handleExpand
  }, /*#__PURE__*/React__default.createElement("img", {
    className: prefix,
    src: url,
    alt: alt
  })), caption && /*#__PURE__*/React__default.createElement("figcaption", {
    className: prefix + "-caption"
  }, caption)), isExpanded ? /*#__PURE__*/React__default.createElement(reactBootstrap.Container, {
    fluid: true,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,.75)",
      zIndex: 11111,
      padding: 0
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: "flex-column",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      WebkitFlex: "initial"
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": "Close lightbox",
    onClick: handleExpand,
    style: {
      margin: "3vh 3vh 0 3vh",
      background: "none",
      color: "white",
      appearance: "none",
      border: "none",
      fontSize: "4rem",
      lineHeight: 0,
      padding: 0
    }
  }, /*#__PURE__*/React__default.createElement(io.IoIosClose, null))), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    style: {
      display: "flex",
      justifyContent: "center",
      WebkitFlex: "initial",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      alignItems: "center"
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": "Close lightbox",
    onClick: handleExpand,
    style: {
      position: "absolute",
      background: "transparent",
      width: "100%",
      height: "100%",
      zIndex: 1
    }
  }, "Close"), /*#__PURE__*/React__default.createElement("img", {
    className: prefix + "-lightbox",
    src: url,
    alt: alt,
    style: {
      width: fluid ? "100%" : "auto",
      maxWidth: "80vw",
      maxHeight: fluid ? "80vh" : "none",
      objectFit: "contain",
      zIndex: 2
    }
  })), caption && /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    style: {
      display: "flex",
      justifyContent: "center",
      WebkitFlex: "initial"
    }
  }, /*#__PURE__*/React__default.createElement("figcaption", {
    className: prefix + "-lightbox-caption",
    style: {
      color: "white",
      padding: ".5rem"
    }
  }, caption)))) : null);
};
LightBoxImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  fluid: PropTypes.bool,
  prefix: PropTypes.string
};
LightBoxImage.defaultProps = {
  alt: "",
  fluid: false,
  prefix: "embedded-image"
};

var MenuItems = function MenuItems(_ref) {
  var Header = _ref.Header,
      header = _ref.header,
      menus = _ref.menus,
      Menu = _ref.Menu;
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: "flex-column"
  }, /*#__PURE__*/React__default.createElement(Header, null, header), menus && menus.map(function (item, i) {
    var title = item.title,
        target = item.target,
        to = item.to;
    return /*#__PURE__*/React__default.createElement(Menu, {
      key: title + i,
      to: to,
      target: target
    }, title);
  }));
};
MenuItems.defaultProps = {
  Header: function Header(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, children);
  },
  Menu: function Menu(_ref3) {
    var to = _ref3.to,
        target = _ref3.target,
        children = _ref3.children;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(WMKLink, {
      to: to,
      target: target
    }, children));
  },
  menus: []
};
MenuItems.propTypes = {
  Header: PropTypes.func,
  Menu: PropTypes.func,
  menus: PropTypes.array,
  header: PropTypes.node
};

var ContentfulLogo = function ContentfulLogo(_ref) {
  var fluid = _ref.fluid,
      fixed = _ref.fixed,
      contentType = _ref.contentType,
      url = _ref.url,
      id = _ref.id,
      className = _ref.className,
      to = _ref.to,
      alt = _ref.alt,
      target = _ref.target;
  var isFixed = fixed && !fixed.notAProp ? fixed : false;
  var isFluid = fluid && !fluid.notAProp ? fluid : false;
  var JSX = null;

  switch (true) {
    case contentType.indexOf("svg") !== -1:
      JSX = function JSX(_ref2) {
        var src = _ref2.src,
            alt = _ref2.alt,
            className = _ref2.className,
            id = _ref2.id;
        return /*#__PURE__*/React__default.createElement("img", {
          className: wmkClass("logo", "ctfl", className),
          id: id,
          src: src,
          alt: alt
        });
      };

      break;

    case isFixed !== false:
      JSX = function JSX(_ref3) {
        var fixed = _ref3.fixed,
            alt = _ref3.alt,
            id = _ref3.id,
            className = _ref3.className;
        return /*#__PURE__*/React__default.createElement(Img, {
          className: wmkClass("logo", "ctfl", className),
          id: id,
          fixed: fixed,
          alt: alt
        });
      };

      break;

    case isFluid !== false:
      JSX = function JSX(_ref4) {
        var fluid = _ref4.fluid,
            alt = _ref4.alt,
            id = _ref4.id,
            className = _ref4.className;
        return /*#__PURE__*/React__default.createElement(Img, {
          className: wmkClass("logo", "ctfl", className),
          id: id,
          fluid: fluid,
          alt: alt
        });
      };

      break;

    default:
      JSX = function JSX() {
        return /*#__PURE__*/React__default.createElement("div", null, "Contentful Image Error");
      };

  }

  return target === "internal" ? /*#__PURE__*/React__default.createElement(WMKLink, {
    to: to
  }, /*#__PURE__*/React__default.createElement(JSX, {
    src: url,
    alt: alt,
    fixed: isFixed,
    fluid: isFluid,
    className: className,
    id: id
  })) : /*#__PURE__*/React__default.createElement(WMKLink, {
    to: to,
    target: target
  }, /*#__PURE__*/React__default.createElement(JSX, {
    src: url,
    alt: alt,
    fixed: isFixed,
    fluid: isFluid,
    className: className,
    id: id
  }));
};
ContentfulLogo.propTypes = {
  fluid: PropTypes.object,
  fixed: PropTypes.object,
  alt: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string
};
ContentfulLogo.defaultProps = {
  fluid: {
    notAProp: true
  },
  fixed: {
    notAProp: true
  },
  url: "",
  id: "",
  className: "",
  to: "/",
  target: "internal"
};

var SEO = {};

var sanitizeSocialImageUrl = function sanitizeSocialImageUrl(url) {
  var _url = typeof url === "string" || url instanceof String ? url : "";

  return _url.indexOf("//") === 0 ? "https:" + _url : _url;
};

SEO.Meta = function (_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      title = _ref.title,
      path = _ref.path,
      slug = _ref.slug,
      ogImage = _ref.ogImage,
      twitterImage = _ref.twitterImage,
      twitterHandle = _ref.twitterHandle,
      baseUrl = _ref.baseUrl,
      siteTitle = _ref.siteTitle;
  var slugVar = !slug || slug === "/" ? "" : slug;
  var pathVar = !slug || slug === "/" ? "" : path;
  var metaProps = [{
    name: "description",
    content: description
  }, {
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: description
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "" + baseUrl + pathVar + slugVar
  }, {
    property: "og:sitename",
    content: baseUrl
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:creator",
    content: siteTitle
  }, {
    name: "twitter:image:alt",
    content: title
  }, {
    name: "twitter:title",
    content: title
  }, {
    name: "twitter:description",
    content: description
  }];

  if (typeof ogImage !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        property: "og:image",
        content: sanitizeSocialImageUrl(ogImage)
      });
    }
  } else {
    console.log("No Open Graph Image set in SEO.Meta");
  }

  if (typeof twitterImage !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        name: "twitter:image",
        content: sanitizeSocialImageUrl(twitterImage)
      });
    }
  } else {
    console.log("No Twitter Image set in SEO.Meta");
  }

  if (typeof twitterHandle !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        name: "twitter:site",
        content: twitterHandle
      });
    }
  } else {
    console.log("No Twitter Handle set in SEO.Meta");
  }

  return /*#__PURE__*/React__default.createElement(Helmet, {
    htmlAttributes: {
      lang: lang
    },
    link: [{
      rel: "canonical",
      href: "" + baseUrl + pathVar + slugVar
    }],
    title: title,
    titleTemplate: "%s | " + siteTitle,
    meta: metaProps
  });
};

SEO.Meta.defaultProps = {
  lang: "en",
  description: "",
  path: "/"
};
SEO.Meta.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  slug: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  twitterHandle: PropTypes.string,
  baseUrl: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired
};
var generateGraph = function generateGraph(type, graphMeta, baseUrl) {
  if (graphMeta === void 0) {
    graphMeta = {};
  }

  var info = {
    "@type": type,
    "@id": baseUrl + "/#" + type.toLowerCase()
  };
  return _extends({}, info, graphMeta);
};

SEO.Schema = function (_ref2) {
  var graphs = _ref2.graphs,
      baseUrl = _ref2.baseUrl,
      siteTitle = _ref2.siteTitle;
  var website = generateGraph("WebSite", {
    name: siteTitle,
    url: baseUrl,
    publisher: {
      "@id": baseUrl + "/#organization"
    }
  }, baseUrl);
  graphs.push(website);
  var schema = {
    "@context": "https://schema.org",
    "@graph": []
  };
  graphs.forEach(function (graph) {
    return schema["@graph"].push(graph);
  });
  return /*#__PURE__*/React__default.createElement(Helmet, null, /*#__PURE__*/React__default.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(schema)));
};

SEO.Schema.defaultProps = {
  graphs: []
};
SEO.Schema.propTypes = {
  graphs: PropTypes.array,
  baseUrl: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var MediaQueries = /*#__PURE__*/function () {
  function MediaQueries(breakpoints, _units) {
    var units = _units ? _units : "px";
    this.breakpoints = breakpoints ? _extends({}, breakpoints) : {
      xs: {
        amount: 576,
        units: units
      },
      sm: {
        amount: 768,
        units: units
      },
      md: {
        amount: 992,
        units: units
      },
      lg: {
        amount: 1200,
        units: units
      }
    };
  }

  var _proto = MediaQueries.prototype;

  _proto._bp = function _bp(size) {
    return get_1(this, "breakpoints." + size, {
      amount: "error",
      units: "error"
    });
  };

  _proto.range = function range(start, end, css, _typeObj) {
    var typeObj = _typeObj ? _typeObj : {
      type: "screen",
      qualifier: "only"
    };

    var startBreaks = this._bp(start);

    var endBreaks = this._bp(end);

    var minFirst = get_1(startBreaks, "amount", NaN) < get_1(endBreaks, "amount", NaN);
    return this.query(typeObj, [{
      feature: minFirst ? "min-width" : "max-width",
      "break": {
        amount: get_1(startBreaks, "amount") + (minFirst ? 0.1 : -0.1),
        units: get_1(startBreaks, "units")
      }
    }, {
      feature: minFirst ? "max-width" : "min-width",
      "break": {
        amount: get_1(endBreaks, "amount") + (minFirst ? -0.1 : 0.1),
        units: get_1(endBreaks, "units")
      }
    }], css);
  };

  _proto.addSize = function addSize(size, amount, _units) {
    var units = _units ? _units : "px";
    this.breakpoints[size] = {
      amount: amount,
      units: units
    };
  };

  _proto.max = function max(size, css, mediaType) {
    var type = mediaType ? mediaType : {
      type: "screen",
      qualifier: "only"
    };
    return this.query(type, [{
      feature: "max-width",
      "break": this._bp(size)
    }], css);
  };

  _proto.min = function min(size, css, mediaType) {
    var type = mediaType ? mediaType : {
      type: "screen",
      qualifier: "only"
    };
    return this.query(type, [{
      feature: "min-width",
      "break": this._bp(size)
    }], css);
  };

  _proto.only = function only(css, _type) {
    var type = _type ? _type : "screen";
    return this.query({
      type: type,
      qualifier: "only"
    }, [], css);
  };

  _proto._mediaFeature = function _mediaFeature(feature, breakpoint) {
    var featStr = get_1(breakpoint, "amount", "") + get_1(breakpoint, "units", "");
    return "and (" + feature + ": " + featStr + ")";
  };

  _proto._mediaType = function _mediaType(type, qualifier) {
    var _t = type ? type : "all";

    var _q = qualifier === "only" ? " only " : qualifier === "not" ? " not " : " ";

    return "@media" + _q + _t;
  };

  _proto.query = function query(typeObj, features, css) {
    var _this = this;

    var feats = features.map(function (feat) {
      return _this._mediaFeature(feat.feature, feat["break"]);
    });
    return this._mediaType(get_1(typeObj, "type"), get_1(typeObj, "qualifier")) + " " + feats.join(" ") + "{" + css + "}";
  };

  return MediaQueries;
}();

var UrlPaths = /*#__PURE__*/function () {
  function UrlPaths(baseUrl, parents) {
    this.baseUrl = baseUrl;
    this.parents = parents.reduce(function (a, b) {
      var path = b.path,
          subs = b.subs,
          name = b.name;
      a[name] = {
        path: path,
        subs: subs
      };
      return a;
    }, {});
  }

  var _proto = UrlPaths.prototype;

  _proto.url = function url(name, str) {
    var _str = str ? "/" + str : "";

    return name ? "//" + this.baseUrl + this._getParentPath(name) + _str : "//" + this.baseUrl + _str;
  };

  _proto.rel = function rel(name, str) {
    var _str = str ? "/" + str : "";

    return name ? this._getParentPath(name) + _str : _str;
  };

  _proto._getParentPath = function _getParentPath(parent) {
    var _ref = this.parents[parent] ? this.parents[parent] : {
      path: "",
      subs: {}
    },
        path = _ref.path;

    return "/" + path;
  };

  return UrlPaths;
}();

exports.Anchor = Anchor;
exports.ContentfulLogo = ContentfulLogo;
exports.Copyright = Copyright;
exports.FlexSpacer = FlexSpacer;
exports.Footer = Footer;
exports.Header = Header;
exports.LightBoxImage = LightBoxImage;
exports.ListItemColumns = ListItemColumns;
exports.MainLayout = MainLayout;
exports.MediaQueries = MediaQueries;
exports.MenuItems = MenuItems;
exports.SEO = SEO;
exports.Search = Search;
exports.SearchSliderDrawer = SearchSliderDrawer$1;
exports.SearchSliderOpen = SearchSliderOpen$1;
exports.SocialMediaIcons = SocialMediaIcons;
exports.Sticky = Sticky;
exports.UrlPaths = UrlPaths;
exports.Video = Video;
exports.WMKLink = WMKLink;
exports.generateGraph = generateGraph;
//# sourceMappingURL=index.js.map
