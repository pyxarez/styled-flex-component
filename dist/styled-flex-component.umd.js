(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components'), require('styled-is')) :
	typeof define === 'function' && define.amd ? define('styled-flex-component', ['exports', 'styled-components', 'styled-is'], factory) :
	(factory((global['styled-flex-component'] = {}),global.styled,global.is));
}(this, (function (exports,styled,is) { 'use strict';

styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
is = is && is.hasOwnProperty('default') ? is['default'] : is;

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n    display: inline-flex;\n  '], ['\n    display: inline-flex;\n  ']);
var _templateObject2 = taggedTemplateLiteral(['\n    flex-direction: row; /* default */\n  '], ['\n    flex-direction: row; /* default */\n  ']);
var _templateObject3 = taggedTemplateLiteral(['\n    flex-direction: row-reverse;\n  '], ['\n    flex-direction: row-reverse;\n  ']);
var _templateObject4 = taggedTemplateLiteral(['\n    flex-direction: column;\n  '], ['\n    flex-direction: column;\n  ']);
var _templateObject5 = taggedTemplateLiteral(['\n    flex-direction: column-reverse;\n  '], ['\n    flex-direction: column-reverse;\n  ']);
var _templateObject6 = taggedTemplateLiteral(['\n    flex-wrap: nowrap; /* default */\n  '], ['\n    flex-wrap: nowrap; /* default */\n  ']);
var _templateObject7 = taggedTemplateLiteral(['\n    flex-wrap: wrap;\n  '], ['\n    flex-wrap: wrap;\n  ']);
var _templateObject8 = taggedTemplateLiteral(['\n    flex-wrap: wrap-reverse;\n  '], ['\n    flex-wrap: wrap-reverse;\n  ']);
var _templateObject9 = taggedTemplateLiteral(['\n    justify-content: flex-start; /* default */\n  '], ['\n    justify-content: flex-start; /* default */\n  ']);
var _templateObject10 = taggedTemplateLiteral(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']);
var _templateObject11 = taggedTemplateLiteral(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']);
var _templateObject12 = taggedTemplateLiteral(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']);
var _templateObject13 = taggedTemplateLiteral(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']);
var _templateObject14 = taggedTemplateLiteral(['\n    align-content: flex-start;\n  '], ['\n    align-content: flex-start;\n  ']);
var _templateObject15 = taggedTemplateLiteral(['\n    align-content: flex-end;\n  '], ['\n    align-content: flex-end;\n  ']);
var _templateObject16 = taggedTemplateLiteral(['\n    align-content: center;\n  '], ['\n    align-content: center;\n  ']);
var _templateObject17 = taggedTemplateLiteral(['\n    align-content: space-between;\n  '], ['\n    align-content: space-between;\n  ']);
var _templateObject18 = taggedTemplateLiteral(['\n    align-content: space-around;\n  '], ['\n    align-content: space-around;\n  ']);
var _templateObject19 = taggedTemplateLiteral(['\n    align-content: stretch; /* default */\n  '], ['\n    align-content: stretch; /* default */\n  ']);
var _templateObject20 = taggedTemplateLiteral(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']);
var _templateObject21 = taggedTemplateLiteral(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']);
var _templateObject22 = taggedTemplateLiteral(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']);
var _templateObject23 = taggedTemplateLiteral(['\n    align-items: baseline;\n  '], ['\n    align-items: baseline;\n  ']);
var _templateObject24 = taggedTemplateLiteral(['\n    align-items: stretch;\n  '], ['\n    align-items: stretch;\n  ']);
var _templateObject25 = taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  '], ['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  ']);
var _templateObject26 = taggedTemplateLiteral(['\n    align-items: center;\n    justify-content: center;\n  '], ['\n    align-items: center;\n    justify-content: center;\n  ']);

var flex = styled.div.withConfig({
  displayName: 'flex'
})(['display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';'], is('inline')(_templateObject), is('row')(_templateObject2), is('rowReverse')(_templateObject3), is('column')(_templateObject4), is('columnReverse')(_templateObject5), is('nowrap')(_templateObject6), is('wrap')(_templateObject7), is('wrapReverse')(_templateObject8), is('justifyStart')(_templateObject9), is('justifyEnd')(_templateObject10), is('justifyCenter')(_templateObject11), is('justifyBetween')(_templateObject12), is('justifyAround')(_templateObject13), is('contentStart')(_templateObject14), is('contentEnd')(_templateObject15), is('contentCenter')(_templateObject16), is('contentSpaceBetween')(_templateObject17), is('contentSpaceAround')(_templateObject18), is('contentStretch')(_templateObject19), is('alignStart')(_templateObject20), is('alignEnd')(_templateObject21), is('alignCenter')(_templateObject22), is('alignBaseline')(_templateObject23), is('alignStretch')(_templateObject24), is('full')(_templateObject25), is('center')(_templateObject26));

var _templateObject$1 = taggedTemplateLiteral(['\n    order: ', '\n  '], ['\n    order: ', '\n  ']);
var _templateObject2$1 = taggedTemplateLiteral(['\n    flex-basis: ', '\n  '], ['\n    flex-basis: ', '\n  ']);
var _templateObject3$1 = taggedTemplateLiteral(['\n    flex-grow: ', ';\n  '], ['\n    flex-grow: ', ';\n  ']);
var _templateObject4$1 = taggedTemplateLiteral(['\n    flex-shrink: ', ';\n  '], ['\n    flex-shrink: ', ';\n  ']);
var _templateObject5$1 = taggedTemplateLiteral(['\n    flex-shrink: 0;\n  '], ['\n    flex-shrink: 0;\n  ']);

var item = styled.div.withConfig({
  displayName: 'item'
})(['order:0;flex-basis:auto;flex-grow:0;flex-shrink:1;', ';', ';', ';', ';', ';'], is('order')(_templateObject$1, function (props) {
  return props.order;
}), is('basis')(_templateObject2$1, function (props) {
  return props.basis;
}), is('grow')(_templateObject3$1, function (props) {
  return props.grow;
}), is('shrink')(_templateObject4$1, function (props) {
  return props.shrink;
}), is('noShrink')(_templateObject5$1));

exports['default'] = flex;
exports.FlexItem = item;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9ob21lL3B5eGFyZXovd2ViL3N0eWxlZC1mbGV4LWNvbXBvbmVudC9zcmMvZmxleC5qcyIsIi9ob21lL3B5eGFyZXovd2ViL3N0eWxlZC1mbGV4LWNvbXBvbmVudC9zcmMvaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpcyBmcm9tICdzdHlsZWQtaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZGlzcGxheSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2Rpc3BsYXkgKioqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnaW5saW5lJylgXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBkaXJlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2ZsZXgtZGlyZWN0aW9uICoqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ3JvdycpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIGRlZmF1bHQgKi9cbiAgYH07XG5cbiAgJHtpcygncm93UmV2ZXJzZScpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYH07XG5cbiAgJHtpcygnY29sdW1uJylgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYH07XG5cbiAgJHtpcygnY29sdW1uUmV2ZXJzZScpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHdyYXAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvZmxleC13cmFwICoqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnbm93cmFwJylgXG4gICAgZmxleC13cmFwOiBub3dyYXA7IC8qIGRlZmF1bHQgKi9cbiAgYH07XG5cbiAgJHtpcygnd3JhcCcpYFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYH07XG5cbiAgJHtpcygnd3JhcFJldmVyc2UnKWBcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgYH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIGp1c3RpZnktY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKiogaHR0cDovL2Nzc3JlZmVyZW5jZS5pby9wcm9wZXJ0eS9qdXN0aWZ5LWNvbnRlbnQgKioqKioqKioqKioqKi9cblxuICAke2lzKCdqdXN0aWZ5U3RhcnQnKWBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIGRlZmF1bHQgKi9cbiAgYH07XG5cbiAgJHtpcygnanVzdGlmeUVuZCcpYFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGB9O1xuXG4gICR7aXMoJ2p1c3RpZnlDZW50ZXInKWBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYH07XG5cbiAgJHtpcygnanVzdGlmeUJldHdlZW4nKWBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGB9O1xuXG4gICR7aXMoJ2p1c3RpZnlBcm91bmQnKWBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBhbGlnbi1jb250ZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvYWxpZ24tY29udGVudCAqKioqKioqKioqKioqKi9cblxuICAke2lzKCdjb250ZW50U3RhcnQnKWBcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgfTtcblxuICAke2lzKCdjb250ZW50RW5kJylgXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gIGB9O1xuXG4gICR7aXMoJ2NvbnRlbnRDZW50ZXInKWBcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGB9O1xuXG4gICR7aXMoJ2NvbnRlbnRTcGFjZUJldHdlZW4nKWBcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgfTtcblxuICAke2lzKCdjb250ZW50U3BhY2VBcm91bmQnKWBcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGB9O1xuXG4gICR7aXMoJ2NvbnRlbnRTdHJldGNoJylgXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgLyogZGVmYXVsdCAqL1xuICBgfTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBhbGlnbi1pdGVtcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvYWxpZ24taXRlbXMgKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ2FsaWduU3RhcnQnKWBcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYH07XG5cbiAgJHtpcygnYWxpZ25FbmQnKWBcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGB9O1xuXG4gICR7aXMoJ2FsaWduQ2VudGVyJylgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYH07XG5cbiAgJHtpcygnYWxpZ25CYXNlbGluZScpYFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYH07XG5cbiAgJHtpcygnYWxpZ25TdHJldGNoJylgXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiB1dGlsaXRpZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnZnVsbCcpYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICBgfTtcblxuICAke2lzKCdjZW50ZXInKWBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBgfTtcbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBpcyBmcm9tICdzdHlsZWQtaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICBvcmRlcjogMDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBvcmRlciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvb3JkZXIgKioqKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ29yZGVyJylgXG4gICAgb3JkZXI6ICR7cHJvcHMgPT4gcHJvcHMub3JkZXJ9XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBmbGV4LWJhc2lzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2ZsZXgtYmFzaXMgKioqKioqKioqKioqKioqKi9cblxuICAke2lzKCdiYXNpcycpYFxuICAgIGZsZXgtYmFzaXM6ICR7cHJvcHMgPT4gcHJvcHMuYmFzaXN9XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBmbGV4LWdyb3cgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvZmxleC1ncm93ICoqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnZ3JvdycpYFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgYH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZmxleC1zaHJpbmsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2ZsZXgtc2hyaW5rICoqKioqKioqKioqKioqKi9cblxuICAke2lzKCdzaHJpbmsnKWBcbiAgICBmbGV4LXNocmluazogJHtwcm9wcyA9PiBwcm9wcy5zaHJpbmt9O1xuICBgfTtcblxuICAke2lzKCdub1NocmluaycpYFxuICAgIGZsZXgtc2hyaW5rOiAwO1xuICBgfTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiZGl2IiwiaXMiLCJwcm9wcyIsIm9yZGVyIiwiYmFzaXMiLCJncm93Iiwic2hyaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBR0EsV0FBZUEsT0FBT0MsR0FBdEI7OzZPQVVJQyxHQUFHLFFBQUgsQ0FWSixtQkFpQklBLEdBQUcsS0FBSCxDQWpCSixvQkFxQklBLEdBQUcsWUFBSCxDQXJCSixvQkF5QklBLEdBQUcsUUFBSCxDQXpCSixvQkE2QklBLEdBQUcsZUFBSCxDQTdCSixvQkFvQ0lBLEdBQUcsUUFBSCxDQXBDSixvQkF3Q0lBLEdBQUcsTUFBSCxDQXhDSixvQkE0Q0lBLEdBQUcsYUFBSCxDQTVDSixvQkFtRElBLEdBQUcsY0FBSCxDQW5ESixvQkF1RElBLEdBQUcsWUFBSCxDQXZESixxQkEyRElBLEdBQUcsZUFBSCxDQTNESixxQkErRElBLEdBQUcsZ0JBQUgsQ0EvREoscUJBbUVJQSxHQUFHLGVBQUgsQ0FuRUoscUJBMEVJQSxHQUFHLGNBQUgsQ0ExRUoscUJBOEVJQSxHQUFHLFlBQUgsQ0E5RUoscUJBa0ZJQSxHQUFHLGVBQUgsQ0FsRkoscUJBc0ZJQSxHQUFHLHFCQUFILENBdEZKLHFCQTBGSUEsR0FBRyxvQkFBSCxDQTFGSixxQkE4RklBLEdBQUcsZ0JBQUgsQ0E5RkoscUJBcUdJQSxHQUFHLFlBQUgsQ0FyR0oscUJBeUdJQSxHQUFHLFVBQUgsQ0F6R0oscUJBNkdJQSxHQUFHLGFBQUgsQ0E3R0oscUJBaUhJQSxHQUFHLGVBQUgsQ0FqSEoscUJBcUhJQSxHQUFHLGNBQUgsQ0FySEoscUJBMkhJQSxHQUFHLE1BQUgsQ0EzSEoscUJBaUlJQSxHQUFHLFFBQUgsQ0FqSUo7Ozs7Ozs7O0FDSEEsQUFHQSxXQUFlRixPQUFPQyxHQUF0Qjs7b0ZBU0lDLEdBQUcsT0FBSCxDQVRKLG9CQVVhO1NBQVNDLE1BQU1DLEtBQWY7Q0FWYixHQWdCSUYsR0FBRyxPQUFILENBaEJKLHFCQWlCa0I7U0FBU0MsTUFBTUUsS0FBZjtDQWpCbEIsR0F1QklILEdBQUcsTUFBSCxDQXZCSixxQkF3QmlCO1NBQVNDLE1BQU1HLElBQWY7Q0F4QmpCLEdBOEJJSixHQUFHLFFBQUgsQ0E5QkoscUJBK0JtQjtTQUFTQyxNQUFNSSxNQUFmO0NBL0JuQixHQWtDSUwsR0FBRyxVQUFILENBbENKOzs7Ozs7Ozs7Ozs7OyJ9