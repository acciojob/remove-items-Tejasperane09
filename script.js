//your JS code here. If required.
document.getElementById("removeBtn").onclick = function () {
  const select = document.getElementById("colorSelect");

 
  if (select.selectedIndex === -1) return;


  select.remove(select.selectedIndex);
};
