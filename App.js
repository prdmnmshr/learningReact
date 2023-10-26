const parent = React.createElement(

    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "THis is h2 tag")
        ])
    ], React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "THis is h2 tag")
    ])
    // to over come this problem jsx introduced
);
console.log();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);