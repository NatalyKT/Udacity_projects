var c = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, g) {
  a != Array.prototype && a != Object.prototype && (a[b] = g.value);
}, d = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function e() {
  e = function() {
  };
  d.Symbol || (d.Symbol = f);
}
var f = function() {
  var a = 0;
  return function(b) {
    return "jscomp_symbol_" + (b || "") + a++;
  };
}();
function h() {
  e();
  var a = d.Symbol.iterator;
  a || (a = d.Symbol.iterator = d.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && c(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return k(this);
  }});
  h = function() {
  };
}
function k(a) {
  var b = 0;
  return l(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}
function l(a) {
  h();
  a = {next:a};
  a[d.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function m() {
  var a = n;
  h();
  var b = a[Symbol.iterator];
  a = b ? b.call(a) : k(a);
  for (var g = []; !(b = a.next()).done;) {
    g.push(b.value);
  }
  return g;
}
var n = document.getElementsByClassName("card"), p = [].concat(n instanceof Array ? n : m());
console.log(p);
var q = document.getElementById("card-deck"), t = 0, u = document.querySelector(".moves"), v = document.querySelectorAll(".fa-star"), w = document.getElementsByClassName("match"), x = document.querySelector(".close"), y = document.getElementById("popup_menu"), z = [];
function A() {
  for (var a = p, b = a.length, g, r; 0 !== b;) {
    r = Math.floor(Math.random() * b), --b, g = a[b], a[b] = a[r], a[r] = g;
  }
  return a;
}
document.body.onload = B();
function B() {
  p = A();
  for (var a = 0; a < p.length; a++) {
    q.innerHTML = "", [].forEach.call(p, function(a) {
      q.appendChild(a);
    }), p[a].classList.remove("show", "open", "match", "disabled");
  }
  t = 0;
  u.innerHTML = t;
  for (a = 0; a < v.length; a++) {
    v[a].style.color = "#FFD700", v[a].style.visibility = "visible";
  }
  hour = C = D = 0;
  document.querySelector(".timer").innerHTML = "0 mins 0 secs";
  clearInterval(E);
}
function F() {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}
function G() {
  z.push(this);
  if (2 === z.length) {
    t++;
    u.innerHTML = t;
    1 == t && (hour = C = D = 0, H());
    if (8 < t && 12 > t) {
      for (I = 0; 3 > I; I++) {
        1 < I && (v[I].style.visibility = "collapse");
      }
    } else {
      if (13 < t) {
        for (I = 0; 3 > I; I++) {
          0 < I && (v[I].style.visibility = "collapse");
        }
      }
    }
    z[0].type === z[1].type ? (z[0].classList.add("match", "disabled"), z[1].classList.add("match", "disabled"), z[0].classList.remove("show", "open", "no-event"), z[1].classList.remove("show", "open", "no-event"), z = []) : J();
  }
}
function J() {
  z[0].classList.add("unmatched");
  z[1].classList.add("unmatched");
  K();
  setTimeout(function() {
    z[0].classList.remove("show", "open", "no-event", "unmatched");
    z[1].classList.remove("show", "open", "no-event", "unmatched");
    L();
    z = [];
  }, 1100);
}
function K() {
  Array.prototype.filter.call(p, function(a) {
    a.classList.add("disabled");
  });
}
function L() {
  Array.prototype.filter.call(p, function(a) {
    a.classList.remove("disabled");
    for (a = 0; a < w.length; a++) {
      w[a].classList.add("disabled");
    }
  });
}
var D = 0, C = 0;
hour = 0;
var M = document.querySelector(".timer"), E;
function H() {
  E = setInterval(function() {
    M.innerHTML = C + "mins " + D + "secs";
    D++;
    60 == D && (C++, D = 0);
    60 == C && (hour++, C = 0);
  }, 1000);
}
function N() {
  if (16 == w.length) {
    clearInterval(E);
    finalTime = M.innerHTML;
    y.classList.add("show");
    var a = document.querySelector(".stars").innerHTML;
    document.getElementById("finalMove").innerHTML = t;
    document.getElementById("starRating").innerHTML = a;
    document.getElementById("totalTime").innerHTML = finalTime;
    O();
  }
}

function O() {
  x.addEventListener("click", function() {
    y.classList.remove("show");
    B();
  });
}
for (var I = 0; I < p.length; I++) {
  n = p[I], n.addEventListener("click", F), n.addEventListener("click", G), n.addEventListener("click", N);
}
;