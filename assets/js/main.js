// Theme toggle and mobile navigation. No dependencies.
(function () {
  var root = document.documentElement;

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // Career spectrum: hover/tap the bar to select the nearest milestone line,
  // or focus it and use the arrow keys. The caption follows the selected line.
  var career = document.querySelector("[data-career]");
  if (career) {
    var bar = career.querySelector(".career-bar");
    var lines = Array.prototype.slice.call(career.querySelectorAll(".career-line"));
    var marks = Array.prototype.slice.call(career.querySelectorAll(".career-marks span"));
    var caption = career.querySelector(".career-caption");
    var tip = caption.querySelector(".career-tip");
    var current = -1;

    var select = function (i) {
      if (i === current) return;
      if (current >= 0) {
        lines[current].classList.remove("active");
        marks[current].classList.remove("active");
      }
      current = i;
      var line = lines[i];
      line.classList.add("active");
      marks[i].classList.add("active");
      tip.className = "career-tip kind-" + line.dataset.kind;
      tip.querySelector(".when").textContent = line.dataset.date;
      tip.querySelector(".text").textContent = line.dataset.text;
      var detail = tip.querySelector(".detail"), link = tip.querySelector(".link");
      detail.textContent = line.dataset.detail || "";
      detail.hidden = !line.dataset.detail;
      link.hidden = !line.dataset.url;
      if (line.dataset.url) {
        link.href = line.dataset.url;
        link.textContent = line.dataset.link + (/^https?:/.test(line.dataset.url) ? " ↗" : " →");
        if (/^https?:/.test(line.dataset.url)) { link.target = "_blank"; link.rel = "noopener"; }
        else { link.removeAttribute("target"); link.removeAttribute("rel"); }
      }
      caption.hidden = false;
      // Centre the tip under the line, keep it inside the figure, and point
      // its arrow at the line.
      var w = caption.clientWidth, tw = tip.offsetWidth;
      var lx = parseFloat(line.dataset.pos) / 100 * w;
      var left = Math.max(0, Math.min(lx - tw / 2, w - tw));
      tip.style.marginLeft = left + "px";
      tip.style.setProperty("--arrow", Math.max(10, Math.min(lx - left, tw - 10)) + "px");
    };

    var nearest = function (clientX) {
      var r = bar.getBoundingClientRect();
      var pct = (clientX - r.left) / r.width * 100;
      var best = 0;
      lines.forEach(function (l, i) {
        if (Math.abs(l.dataset.pos - pct) < Math.abs(lines[best].dataset.pos - pct)) best = i;
      });
      return best;
    };

    bar.addEventListener("pointermove", function (e) { select(nearest(e.clientX)); });
    bar.addEventListener("pointerdown", function (e) { select(nearest(e.clientX)); });
    bar.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var step = e.key === "ArrowRight" ? 1 : -1;
        select(current < 0 ? (step > 0 ? 0 : lines.length - 1)
                           : Math.max(0, Math.min(lines.length - 1, current + step)));
      }
    });
    bar.addEventListener("focus", function () { if (current < 0) select(lines.length - 1); });

    // Start on the most recent milestone so the caption is never empty.
    select(lines.length - 1);
  }
})();
