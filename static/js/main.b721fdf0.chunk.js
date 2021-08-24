(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__18-X4",total:"Cart_total__funNA",actions:"Cart_actions__2c4a2","button--alt":"Cart_button--alt__129ap",button:"Cart_button__1OfDo"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2Wnty",summary:"CartItem_summary__3Mf9R",price:"CartItem_price__1Rqv5",amount:"CartItem_amount__jKB7D",actions:"CartItem_actions__owJsZ"}},,,,function(e,t,n){e.exports={button:"HeaderCardButton_button__1gvjp",icon:"HeaderCardButton_icon__2FRZC",badge:"HeaderCardButton_badge__3RDuG",bump:"HeaderCardButton_bump__ajPkB"}},function(e,t,n){e.exports={meal:"MealItem_meal__2Dc1P",description:"MealItem_description__xTl1B",price:"MealItem_price__1y8j2"}},,function(e,t,n){e.exports={header:"Header_header__1CeLV","main-image":"Header_main-image__E37e2"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__jebjx",modal:"Modal_modal__25bIw","slide-down":"Modal_slide-down__1jgGa"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__tG45U"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1uUGy","meals-appear":"AvailableMeals_meals-appear__1gpcX"}},function(e,t,n){e.exports={card:"Card_card__3GXZ_"}},function(e,t,n){e.exports={input:"Input_input__KOn0m"}},function(e,t,n){e.exports={form:"MealItemForm_form__hMA--"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(2)),r=n(1),s=n.n(r),o=n(12),l=n.n(o),m=n.p+"static/media/meals.2971f633.jpg",u=n(9),d=n.n(u),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=s.a.createContext({items:[],totalAmount:0,removeItem:function(e){},addItem:function(e){}}),p=function(e){var t=Object(r.useContext)(x),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=t.items;console.log(o),console.log(t);var l=o.reduce((function(e,t){return e+t.amount}),0);Object(r.useEffect)((function(){if(0!==t.items.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[t.items]);var m="".concat(d.a.button," ").concat(c&&d.a.bump);return Object(j.jsxs)("button",{onClick:e.onClick,className:m,children:[Object(j.jsx)("span",{children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:d.a.badge,children:l})]})},O=function(e){return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"React Meals"}),Object(j.jsx)(p,{onClick:e.openCart})]}),Object(j.jsx)("div",{className:l.a["main-image"],children:Object(j.jsx)("img",{alt:"img",src:m})})]})},h=n(15),_=n.n(h),f=function(e){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered to You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(17),y=n.n(g),N=function(e){return Object(j.jsx)("div",{className:y.a.card,children:e.children})},A=n(10),I=n.n(A),M=n(3),w=n(18),k=n.n(w),B=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:k.a.Input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(M.a)({ref:t},e.input))]})})),H=n(19),R=n.n(H),D=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(j.jsxs)("form",{className:R.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c>5||c<1?s(!1):e.onSubmit(c)},children:[Object(j.jsx)(B,{label:"amount",ref:t,input:{type:"number",id:"amount_"+e.id,step:"1",min:"1",max:"5",defaultValue:"1"}}),Object(j.jsx)("button",{type:"submit",children:" + Add"}),!c&&Object(j.jsx)("p",{children:"Please set a number between 1 and 5"})]})},F=function(e){var t=Object(r.useContext)(x),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:I.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:I.a.description,children:e.description}),Object(j.jsx)("div",{className:I.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{id:e.id,onSubmit:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(e){var t=S.map((function(e){return Object(j.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(N,{children:Object(j.jsx)("ul",{children:t})})})},G=function(){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(E,{})]})},P=n(4),z=n.n(P),T=n(13),V=n.n(T),J=function(e){return Object(j.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},X=function(e){return Object(j.jsx)("div",{className:V.a.modal,children:Object(j.jsx)("div",{children:e.children})})},Z=document.getElementById("overlay_root"),$=function(e){return Object(j.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(j.jsx)(J,{onClose:e.onClose}),Z),c.a.createPortal(Object(j.jsx)(X,{children:e.children}),Z)]})},q=n(5),K=n.n(q),U=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:K.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:K.a.summary,children:[Object(j.jsx)("span",{className:K.a.price,children:t}),Object(j.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=function(e){var t=Object(r.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(e)},s=Object(j.jsx)("ul",{className:z.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(U,{price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e),name:e.name},e.id)}))});return Object(j.jsxs)($,{onClose:e.onClose,children:[s,Object(j.jsxs)("div",{className:z.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("div",{children:n})]}),Object(j.jsxs)("div",{className:z.a.actions,children:[Object(j.jsx)("button",{className:z.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(j.jsx)("button",{className:z.a.button,children:"Order"})]})]})},L=n(14),W={items:[],totalAmount:0},Q=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.price*t.item.amount;console.log(n);var a,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(M.a)(Object(M.a)({},i),{},{amount:i.amount+t.item.amount});(a=Object(L.a)(e.items))[c]=r}else a=e.items.concat(t.item);return{items:a,totalAmount:n}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==l.id}));else{var u=Object(M.a)(Object(M.a)({},l),{},{amount:l.amount-1});(s=Object(L.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return W},ee=function(e){var t=Object(r.useReducer)(Q,W),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(x.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ee,{children:[n&&Object(j.jsx)(Y,{onClose:function(){a(!1)}}),Object(j.jsx)(O,{openCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(G,{})})]})};c.a.render(Object(j.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.b721fdf0.chunk.js.map