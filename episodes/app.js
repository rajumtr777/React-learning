// const heading = React.createElement("h1", { id: "heading" }, "Rect learning");
// console.log(heading, "heading"); //object
//React.createElement(object)=> Browser(Understanding);
//while rendering to dom root.render(parent); its convert to html tag
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "h1" }, "h 1 tag here")
//   )
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "h 1 tag here"),
    React.createElement("h2", { id: "h2" }, "h 2 tag here"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "h 1 tag here"),
    React.createElement("h2", { id: "h2" }, "h 2 tag here"),
  ]),
]);

// <div id="parent">
//   <div id="child">
//     <h1 id="h1">h 1 tag here</h1>
//     <h2 id="h2">h 2 tag here</h2>
//   </div>
// </div>;
/* <div id="parent">
  <div id="child">
    <h1 id="h1">h 1 tag here</h1>
    <h2 id="h2">h 2 tag here</h2>
  </div>
  <div id="child2">
    <h1 id="h1">h 1 tag here</h1>
    <h2 id="h2">h 2 tag here</h2>
  </div>
</div>; */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//it will replace div with id root with whatever inside parent
