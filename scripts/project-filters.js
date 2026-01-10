const groups = document.querySelectorAll("#project-filters .filter-group");
const items = document.querySelectorAll("#project-grid .filter-item");

const state = { stack: "", status: "", year: "" };

const applyFilters = () => {
  items.forEach((item) => {
    const stack = item.dataset.stack || "";
    const status = item.dataset.status || "";
    const year = item.dataset.year || "";
    const matchesStack = !state.stack || stack.split(",").includes(state.stack);
    const matchesStatus = !state.status || status === state.status;
    const matchesYear = !state.year || year === state.year;
    item.style.display = matchesStack && matchesStatus && matchesYear ? "" : "none";
  });
};

groups.forEach((group) => {
  const filterKey = group.dataset.filter;
  const buttons = group.querySelectorAll(".chip-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      state[filterKey] = button.dataset.value || "";
      applyFilters();
    });
  });
});
