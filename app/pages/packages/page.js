var app = require("../../app");

var groupExtract = /^\.\/~\/([^\/]+)/;
function sorter(a, b) { 
    return a.size - b.size 
};

module.exports = function() {
    document.title = "packages";

    var packages = [];
    var packageByName = {};

    app.stats.modules.forEach(function (module) {
        var match = module.name.match(groupExtract);
        if (!match) {
            return;
        }

        var packageName = match[1];

        var pkg;
        if (!packageByName.hasOwnProperty(packageName)) {
            pkg = packageByName[packageName] = { size: 0, name: packageName, modules: [] };
            packages.push(pkg);
        }
        else {
            pkg = packageByName[packageName];
        }

        pkg.size += module.size;
        pkg.modules.push(module);
    });

    packages.sort(sorter);
    packages.forEach(function (pkg) {
        pkg.modules.sort(sorter);
    });

    $(".page").html(require("./packages.jade")({
        packages: packages
    }));
    return function() {
    }
};