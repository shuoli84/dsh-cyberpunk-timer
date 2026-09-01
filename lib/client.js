window.__ModuleLoader__.load({
  id: "dsh-plugin-cyberpunk-clock",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const React = require("react");
    const h = React.createElement;

    const CSS = `
.dsh-cyber-clock { position: fixed; top: 22px; right: 24px; z-index: 40; pointer-events: auto; min-width: 224px; padding: 14px 16px 13px; overflow: hidden; border: 1px solid rgba(73,238,255,0.8); border-left: 3px solid #ff2bd6; border-radius: 3px; background: linear-gradient(135deg, rgba(8,16,35,0.96), rgba(18,8,38,0.94)), repeating-linear-gradient(0deg, transparent 0 3px, rgba(73,238,255,0.035) 3px 4px); box-shadow: 0 0 0 1px rgba(255,43,214,0.18), 0 0 22px rgba(73,238,255,0.18), 0 0 44px rgba(255,43,214,0.11), inset 0 0 22px rgba(73,238,255,0.06); color: #e7fbff; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; user-select: none; cursor: grab; touch-action: none; will-change: transform; transform: translate3d(clamp(-42vw, var(--clock-dx, 0px), 42vw), clamp(-38vh, var(--clock-dy, 0px), 38vh), 0); }
.dsh-cyber-clock:active { cursor: grabbing; }
.dsh-cyber-clock::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(180deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 4px); mix-blend-mode: screen; }
.dsh-cyber-clock__header, .dsh-cyber-clock__date { position: relative; display: flex; align-items: center; justify-content: space-between; letter-spacing: 0.14em; text-transform: uppercase; }
.dsh-cyber-clock__header { margin-bottom: 5px; color: #49eeff; font-size: 9px; font-weight: 700; }
.dsh-cyber-clock__status { display: inline-flex; align-items: center; gap: 6px; color: #ff63df; }
.dsh-cyber-clock__dot { width: 5px; height: 5px; border-radius: 50%; background: #ff2bd6; box-shadow: 0 0 8px #ff2bd6; }
.dsh-cyber-clock__time { position: relative; color: #f2ffff; font-size: 31px; line-height: 1.15; font-weight: 800; letter-spacing: 0.08em; text-shadow: 0 0 7px rgba(73,238,255,0.9), 2px 0 0 rgba(255,43,214,0.34); font-variant-numeric: tabular-nums; }
.dsh-cyber-clock__time--blink { animation: dsh-cyber-clock-blink 0.9s ease-in-out infinite; }
.dsh-cyber-clock__colon { display: inline-block; color: #ff2bd6; animation: dsh-cyber-clock-pulse 1s steps(2, start) infinite; text-shadow: 0 0 8px rgba(255,43,214,0.9); }
.dsh-cyber-clock__date { margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(73,238,255,0.22); color: rgba(184,234,242,0.78); font-size: 9px; }
.dsh-cyber-clock__entry { appearance: none; background: transparent; border: 1px solid rgba(73,238,255,0.45); color: #49eeff; font: inherit; font-size: 9px; letter-spacing: 0.12em; line-height: 1.4; padding: 1px 6px; border-radius: 2px; cursor: pointer; text-transform: none; }
.dsh-cyber-clock__entry:hover { background: rgba(73,238,255,0.12); border-color: #49eeff; }
.dsh-cyber-clock__entry--empty { color: rgba(184,234,242,0.45); border-color: rgba(73,238,255,0.22); }
.dsh-cyber-clock__entry--active { color: #ff2bd6; border-color: #ff2bd6; text-shadow: 0 0 8px rgba(255,43,214,0.9); animation: dsh-cyber-clock-blink 0.9s ease-in-out infinite; }
.dsh-cyber-clock__alarms { position: relative; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(73,238,255,0.22); display: flex; flex-direction: column; gap: 6px; font-size: 10px; letter-spacing: 0.08em; }
.dsh-cyber-clock input { user-select: text; color-scheme: dark; }
.dsh-cyber-clock button { color: inherit; }
.dsh-cyber-clock__alarm { display: flex; align-items: center; gap: 8px; }
.dsh-cyber-clock__alarm-dot { width: 4px; height: 4px; border-radius: 50%; background: #49eeff; box-shadow: 0 0 6px #49eeff; flex: 0 0 auto; }
.dsh-cyber-clock__alarm--active .dsh-cyber-clock__alarm-dot { background: #ff2bd6; box-shadow: 0 0 8px #ff2bd6; }
.dsh-cyber-clock__alarm-label { color: #e7fbff; flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-cyber-clock__alarm-time { color: #49eeff; font-variant-numeric: tabular-nums; }
.dsh-cyber-clock__alarm--active .dsh-cyber-clock__alarm-label, .dsh-cyber-clock__alarm--active .dsh-cyber-clock__alarm-time { color: #fff; animation: dsh-cyber-clock-blink 0.9s ease-in-out infinite; }
.dsh-cyber-clock__iconbtn { appearance: none; background: transparent; border: none; color: rgba(184,234,242,0.55); cursor: pointer; font-size: 10px; line-height: 1; padding: 0 2px; }
.dsh-cyber-clock__iconbtn:hover { color: #49eeff; }
.dsh-cyber-clock__iconbtn--del:hover { color: #ff2bd6; }
.dsh-cyber-clock__iconbtn--ok:hover { color: #49eeff; }
.dsh-cyber-clock__add { appearance: none; background: transparent; border: 1px dashed rgba(73,238,255,0.35); color: rgba(184,234,242,0.75); cursor: pointer; font: inherit; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 0; border-radius: 2px; }
.dsh-cyber-clock__add:hover { color: #49eeff; border-color: #49eeff; }
.dsh-cyber-clock__alarm--form { gap: 6px; }
.dsh-cyber-clock__field { appearance: none; background: rgba(8,16,35,0.6); border: 1px solid rgba(73,238,255,0.4); color: #e7fbff; font: inherit; font-size: 10px; padding: 3px 6px; border-radius: 2px; min-width: 0; }
.dsh-cyber-clock__field--label { flex: 1 1 auto; }
.dsh-cyber-clock__field--time { width: 72px; }
.dsh-cyber-clock__field:focus { outline: none; border-color: #49eeff; box-shadow: 0 0 8px rgba(73,238,255,0.4); }
.dsh-cyber-clock__lead { display: flex; align-items: center; gap: 6px; color: rgba(184,234,242,0.7); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
.dsh-cyber-clock__lead-val { color: #49eeff; min-width: 16px; text-align: center; font-variant-numeric: tabular-nums; }
.dsh-cyber-clock__step { appearance: none; background: transparent; border: 1px solid rgba(73,238,255,0.4); color: #49eeff; cursor: pointer; width: 16px; height: 16px; line-height: 1; padding: 0; border-radius: 2px; font-size: 11px; }
.dsh-cyber-clock__step:hover { background: rgba(73,238,255,0.12); }
@keyframes dsh-cyber-clock-pulse { 50% { opacity: 0.28; } }
@keyframes dsh-cyber-clock-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
.dsh-cyber-marquee { position: fixed; top: 0; left: 0; right: 0; z-index: 35; pointer-events: none; overflow: hidden; height: 26px; display: flex; align-items: center; background: linear-gradient(180deg, rgba(8,16,35,0.92), rgba(18,8,38,0.88)); border-bottom: 1px solid #ff2bd6; box-shadow: 0 0 18px rgba(255,43,214,0.28), inset 0 0 12px rgba(73,238,255,0.05); }
.dsh-cyber-marquee__track { display: inline-flex; flex-wrap: nowrap; white-space: nowrap; will-change: transform; animation: dsh-cyber-marquee-scroll 12s linear infinite; }
.dsh-cyber-marquee__run { flex: 0 0 auto; padding-right: 3em; color: #49eeff; font-size: 11px; letter-spacing: 0.1em; text-shadow: 0 0 8px rgba(73,238,255,0.8); }
@keyframes dsh-cyber-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`;

    if (typeof document !== "undefined" && document.head !== null &&
        document.querySelector("style[data-plugin-css=\"dsh-plugin-cyberpunk-clock\"]") === null) {
      const tag = document.createElement("style");
      tag.dataset.plugin = "dsh-plugin-cyberpunk-clock";
      tag.dataset.pluginCss = "dsh-plugin-cyberpunk-clock/style.css";
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }

    const inject = ["timer"];
    const STORAGE_KEY = "dsh.cyberpunk-clock.state.v1";

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    function normalizeHhmm(value) {
      if (typeof value !== "string") return null;
      const m = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
      if (!m) return null;
      const hh = Number(m[1]);
      const mm = Number(m[2]);
      if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
      return pad(hh) + ":" + pad(mm);
    }

    function newId() {
      if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
      return "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    }

    function loadState() {
      const fallback = { leadMin: 10, alarms: [] };
      if (typeof localStorage === "undefined") return fallback;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        const leadMin = typeof parsed.leadMin === "number" && parsed.leadMin >= 5 ? parsed.leadMin : 10;
        const alarms = Array.isArray(parsed.alarms)
          ? parsed.alarms
              .filter((a) => a && typeof a.id === "string" && typeof a.label === "string" && typeof a.hhmm === "string")
              .map((a) => ({ id: a.id, label: a.label, hhmm: normalizeHhmm(a.hhmm) || a.hhmm }))
          : [];
        return { leadMin, alarms };
      } catch {
        return fallback;
      }
    }

    function saveState(state) {
      if (typeof localStorage === "undefined") return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // ignore quota / privacy errors — the clock keeps working in-memory
      }
    }

    function alarmTimeMs(now, hhmm, dayOffset) {
      const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
      if (!m) return null;
      const hh = Number(m[1]);
      const mm = Number(m[2]);
      if (hh > 23 || mm > 59) return null;
      return new Date(now.getFullYear(), now.getMonth(), now.getDate() + dayOffset, hh, mm, 0, 0).getTime();
    }

    function computeApproaching(now, alarms, leadMin) {
      const leadMs = Math.max(1, leadMin) * 60000;
      const nowMs = now.getTime();
      const ids = [];
      for (const alarm of alarms) {
        let target = alarmTimeMs(now, alarm.hhmm, 0);
        if (target === null) continue;
        if (target - nowMs < 0) target = alarmTimeMs(now, alarm.hhmm, 1); // midnight rollover
        if (target === null) continue;
        const remaining = target - nowMs;
        if (remaining >= 0 && remaining <= leadMs) ids.push(alarm.id);
      }
      return ids;
    }

    function apply(ctx) {
      const slots = ctx.get("slots");
      if (slots === undefined) return;

      function Clock() {
        const [now, setNow] = React.useState(() => new Date());
        const [drag, setDrag] = React.useState({ active: false, dx: 0, dy: 0 });
        const [state, setState] = React.useState(loadState);
        const [open, setOpen] = React.useState(false);
        const [editing, setEditing] = React.useState(null); // null | "new" | alarmId
        const [form, setForm] = React.useState({ label: "", hhmm: "" });

        React.useEffect(() => {
          setNow(new Date());
          return ctx.timer.interval(() => setNow(new Date()), 1000);
        }, []);

        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());
        const date = now.getFullYear() + "." + pad(now.getMonth() + 1) + "." + pad(now.getDate());

        const approaching = React.useMemo(
          () => computeApproaching(now, state.alarms, state.leadMin),
          [now, state.alarms, state.leadMin]
        );
        const approachingSet = new Set(approaching);
        const approachingAlarms = state.alarms.filter((alarm) => approachingSet.has(alarm.id));
        const isApproaching = approachingAlarms.length > 0;
        const marqueeMessage = "!提醒 " + approachingAlarms.map((alarm) => alarm.label + " " + alarm.hhmm).join(" · ");
        const marqueeRun = Array(10).fill(marqueeMessage).join("    ◆    ") + "    ◆    ";

        function commit(next) {
          setState(next);
          saveState(next);
        }

        function beginDrag(event) {
          const t = event.target;
          if (t && typeof t.closest === "function" &&
              (t.closest("input") || t.closest("button") || t.closest(".dsh-cyber-clock__alarms"))) {
            return;
          }
          event.preventDefault();
          event.currentTarget.setPointerCapture(event.pointerId);
          setDrag((prev) => ({ active: true, dx: prev.dx, dy: prev.dy }));
        }

        function moveDrag(event) {
          const moveX = Number(event.movementX) || 0;
          const moveY = Number(event.movementY) || 0;
          if (moveX === 0 && moveY === 0) return;
          setDrag((prev) => prev.active ? ({ active: true, dx: prev.dx + moveX, dy: prev.dy + moveY }) : prev);
        }

        function endDrag(event) {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          setDrag((prev) => ({ active: false, dx: prev.dx, dy: prev.dy }));
        }

        function stop(event) {
          event.stopPropagation();
        }

        function startAdd() {
          const later = new Date(now.getTime() + 60 * 60 * 1000);
          setForm({ label: "", hhmm: pad(later.getHours()) + ":" + pad(later.getMinutes()) });
          setEditing("new");
        }

        function startEdit(alarm) {
          setForm({ label: alarm.label, hhmm: alarm.hhmm });
          setEditing(alarm.id);
        }

        function cancelEdit() {
          setEditing(null);
          setForm({ label: "", hhmm: "" });
        }

        function saveForm() {
          const label = form.label.trim();
          const hhmm = normalizeHhmm(form.hhmm);
          if (!label || !hhmm) return;
          if (editing === "new") {
            commit({ ...state, alarms: [...state.alarms, { id: newId(), label, hhmm }] });
          } else if (typeof editing === "string") {
            commit({
              ...state,
              alarms: state.alarms.map((a) => (a.id === editing ? { ...a, label, hhmm } : a))
            });
          }
          cancelEdit();
        }

        function removeAlarm(id) {
          commit({ ...state, alarms: state.alarms.filter((a) => a.id !== id) });
          if (editing === id) cancelEdit();
        }

        function changeLead(delta) {
          commit({ ...state, leadMin: Math.max(5, Math.min(240, state.leadMin + delta)) });
        }

        const timeClass = "dsh-cyber-clock__time" + (isApproaching ? " dsh-cyber-clock__time--blink" : "");

        const entryClass = "dsh-cyber-clock__entry" +
          (state.alarms.length === 0 ? " dsh-cyber-clock__entry--empty" : "") +
          (isApproaching ? " dsh-cyber-clock__entry--active" : "");

        const entryText = state.alarms.length === 0 ? "+" : "\u25A3" + state.alarms.length;

        const formRow = (title) => h("div", { className: "dsh-cyber-clock__alarm dsh-cyber-clock__alarm--form" },
          h("input", {
            type: "text",
            className: "dsh-cyber-clock__field dsh-cyber-clock__field--label",
            value: form.label,
            placeholder: "\u540D\u79F0",
            onChange: (e) => setForm((f) => ({ ...f, label: e.target.value })),
            onKeyDown: (e) => { if (e.key === "Enter") saveForm(); }
          }),
          h("input", {
            type: "time",
            className: "dsh-cyber-clock__field dsh-cyber-clock__field--time",
            value: form.hhmm,
            onChange: (e) => setForm((f) => ({ ...f, hhmm: e.target.value })),
            onKeyDown: (e) => { if (e.key === "Enter") saveForm(); }
          }),
          h("button", { type: "button", className: "dsh-cyber-clock__iconbtn dsh-cyber-clock__iconbtn--ok", title: "\u4FDD\u5B58", onClick: (e) => { stop(e); saveForm(); } }, "\u2713"),
          h("button", { type: "button", className: "dsh-cyber-clock__iconbtn", title: "\u53D6\u6D88", onClick: (e) => { stop(e); cancelEdit(); } }, "\u2715")
        );

        const alarmRows = state.alarms.map((alarm) => {
          if (editing === alarm.id) {
            return h("div", { key: alarm.id, className: "dsh-cyber-clock__alarm dsh-cyber-clock__alarm--form" }, formRow(null));
          }
          const active = approachingSet.has(alarm.id);
          return h("div", { key: alarm.id, className: "dsh-cyber-clock__alarm" + (active ? " dsh-cyber-clock__alarm--active" : "") },
            h("i", { className: "dsh-cyber-clock__alarm-dot" }),
            h("span", { className: "dsh-cyber-clock__alarm-label" }, alarm.label),
            h("span", { className: "dsh-cyber-clock__alarm-time" }, alarm.hhmm),
            h("button", { type: "button", className: "dsh-cyber-clock__iconbtn", title: "\u7F16\u8F91", onClick: (e) => { stop(e); startEdit(alarm); } }, "\u270E"),
            h("button", { type: "button", className: "dsh-cyber-clock__iconbtn dsh-cyber-clock__iconbtn--del", title: "\u5220\u9664", onClick: (e) => { stop(e); removeAlarm(alarm.id); } }, "\u2715")
          );
        });

        const drawer = h("div", { className: "dsh-cyber-clock__alarms" },
          alarmRows,
          editing === "new"
            ? h("div", { key: "new", className: "dsh-cyber-clock__alarm dsh-cyber-clock__alarm--form" }, formRow(null))
            : h("button", { type: "button", className: "dsh-cyber-clock__add", onClick: (e) => { stop(e); startAdd(); } }, "+ \u65B0\u589E"),
          h("div", { className: "dsh-cyber-clock__lead" },
            h("span", null, "\u63D0\u524D"),
            h("button", { type: "button", className: "dsh-cyber-clock__step", onClick: (e) => { stop(e); changeLead(-5); } }, "-"),
            h("span", { className: "dsh-cyber-clock__lead-val" }, String(state.leadMin)),
            h("button", { type: "button", className: "dsh-cyber-clock__step", onClick: (e) => { stop(e); changeLead(5); } }, "+"),
            h("span", null, "\u5206\u949F")
          )
        );

        const clockElement = h(
          "section",
          {
            className: "dsh-cyber-clock",
            "aria-label": "24-hour digital clock with reminders",
            style: { "--clock-dx": drag.dx + "px", "--clock-dy": drag.dy + "px" },
            onPointerDown: beginDrag,
            onPointerMove: moveDrag,
            onPointerUp: endDrag,
            onPointerCancel: endDrag
          },
          h("div", { className: "dsh-cyber-clock__header" },
            h("span", null, "SYS.TIME // LOCAL"),
            h("span", { className: "dsh-cyber-clock__status" },
              h("i", { className: "dsh-cyber-clock__dot" }), "LIVE"
            )
          ),
          h("div", { className: timeClass, "aria-live": "polite" },
            hours,
            h("span", { className: "dsh-cyber-clock__colon" }, ":"),
            minutes,
            h("span", { className: "dsh-cyber-clock__colon" }, ":"),
            seconds
          ),
          h("div", { className: "dsh-cyber-clock__date" },
            h("span", null, date),
            h("button", {
              type: "button",
              className: entryClass,
              title: state.alarms.length === 0 ? "\u65B0\u589E\u63D0\u9192" : "\u63D0\u9192\u5217\u8868",
              "aria-expanded": open ? "true" : "false",
              onClick: (e) => { stop(e); setOpen((o) => !o); }
            }, entryText)
          ),
          open ? drawer : null
        );

        if (!isApproaching) return clockElement;
        return h(React.Fragment, null,
          clockElement,
          h("div", { className: "dsh-cyber-marquee", "aria-hidden": "true" },
            h("div", { className: "dsh-cyber-marquee__track" },
              h("span", { className: "dsh-cyber-marquee__run" }, marqueeRun),
              h("span", { className: "dsh-cyber-marquee__run" }, marqueeRun)
            )
          )
        );
      }

      slots.inject("shell.overlay", () => slots.register(
        { name: "shell.overlay", id: "cyberpunk-clock", order: 50, label: "Cyberpunk Clock" },
        () => h(Clock)
      ));
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});