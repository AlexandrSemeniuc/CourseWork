const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./allLanguages.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS allLanguages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            linkToDocs TEXT NOT NULL,
            hashtags TEXT NOT NULL,
            imagePath TEXT NOT NULL
        )
    `);

    const stmt = db.prepare("INSERT INTO allLanguages (name, linkToDocs, hashtags, imagePath) VALUES (?, ?, ?, ?)");

    const allLanguages = [
        { name: "JavaScript", linkToDocs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", hashtags: "#frontend #backend #web", imagePath: "assets/javascript.svg" },
        { name: "Python", linkToDocs: "https://docs.python.org/3/", hashtags: "#dataScience #AI #backend", imagePath: "assets/python.svg" },
        { name: "Java", linkToDocs: "https://docs.oracle.com/en/java/", hashtags: "#enterprise #backend #mobile", imagePath: "assets/java.svg" },
        { name: "C#", linkToDocs: "https://learn.microsoft.com/en-us/dotnet/csharp/", hashtags: "#dotnet #games #enterprise", imagePath: "assets/csharp.svg" },
        { name: "C++", linkToDocs: "https://cplusplus.com/reference/", hashtags: "#performance #gaming #system", imagePath: "assets/cplusplus.svg" },
        { name: "Ruby", linkToDocs: "https://www.ruby-lang.org/en/documentation/", hashtags: "#backend #rails #web", imagePath: "assets/ruby.svg" },
        { name: "Go", linkToDocs: "https://go.dev/doc/", hashtags: "#cloud #performance #concurrency", imagePath: "assets/go.svg" },
        { name: "Rust", linkToDocs: "https://doc.rust-lang.org/", hashtags: "#performance #safe #system", imagePath: "assets/rust.svg" },
        { name: "PHP", linkToDocs: "https://www.php.net/docs.php", hashtags: "#web #backend #cms", imagePath: "assets/php.svg" },
        { name: "Kotlin", linkToDocs: "https://kotlinlang.org/docs/home.html", hashtags: "#android #backend #modern", imagePath: "assets/kotlin.svg" },
        { name: "Swift", linkToDocs: "https://developer.apple.com/swift/resources/", hashtags: "#ios #mac #mobile", imagePath: "assets/swift.svg" },
        { name: "TypeScript", linkToDocs: "https://www.typescriptlang.org/docs/", hashtags: "#frontend #backend #strict", imagePath: "assets/typescript.svg" },
        { name: "Dart", linkToDocs: "https://dart.dev/guides", hashtags: "#flutter #mobile #frontend", imagePath: "assets/dart.svg" },
        { name: "Scala", linkToDocs: "https://docs.scala-lang.org/", hashtags: "#functional #backend #bigData", imagePath: "assets/scala.svg" },
        { name: "Perl", linkToDocs: "https://perldoc.perl.org/", hashtags: "#scripting #legacy #text", imagePath: "assets/perl.svg" },
        { name: "Shell", linkToDocs: "https://www.gnu.org/software/bash/manual/bash.html", hashtags: "#automation #scripts #linux", imagePath: "assets/powershell.svg" },
        { name: "Lua", linkToDocs: "https://www.lua.org/manual/", hashtags: "#lightweight #games #embedded", imagePath: "assets/lua.svg" },
        { name: "R", linkToDocs: "https://cran.r-project.org/manuals.html", hashtags: "#statistics #dataScience #visualization", imagePath: "assets/r.svg" },
        { name: "MATLAB", linkToDocs: "https://www.mathworks.com/help/matlab/", hashtags: "#engineering #dataScience #math", imagePath: "assets/matlab.svg" },
        { name: "Objective-C", linkToDocs: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html", hashtags: "#ios #legacy #mac", imagePath: "assets/c.svg" },
        { name: "Haskell", linkToDocs: "https://www.haskell.org/documentation/", hashtags: "#functional #pure #lazy", imagePath: "assets/haskell.svg" },
        { name: "Elixir", linkToDocs: "https://elixir-lang.org/getting-started/introduction.html", hashtags: "#functional #concurrent #modern", imagePath: "assets/elixir.svg" },
        { name: "Erlang", linkToDocs: "https://www.erlang.org/docs", hashtags: "#concurrent #telecom #reliable", imagePath: "assets/erlang.svg" },
        { name: "Fortran", linkToDocs: "https://fortran-lang.org/learn/", hashtags: "#science #legacy #performance", imagePath: "assets/fortran.svg" },
        { name: "COBOL", linkToDocs: "https://www.ibm.com/docs/en/cobol", hashtags: "#legacy #enterprise #finance", imagePath: "assets/none.svg" },
        { name: "SQL", linkToDocs: "https://www.w3schools.com/sql/", hashtags: "#database #queries #structured", imagePath: "assets/sql.svg" },
        { name: "VB.NET", linkToDocs: "https://learn.microsoft.com/en-us/dotnet/visual-basic/", hashtags: "#legacy #dotnet #windows", imagePath: "assets/vb.svg" },
        { name: "Ada", linkToDocs: "https://learn.adacore.com/", hashtags: "#safe #system #defense", imagePath: "assets/none.svg" },
        { name: "F#", linkToDocs: "https://learn.microsoft.com/en-us/dotnet/fsharp/", hashtags: "#functional #dotnet #modern", imagePath: "assets/fsharp.svg" },
        { name: "Julia", linkToDocs: "https://docs.julialang.org/en/v1/", hashtags: "#scientific #dataScience #performance", imagePath: "assets/julia.svg" },
        { name: "Groovy", linkToDocs: "https://groovy-lang.org/documentation.html", hashtags: "#scripting #java #dsl", imagePath: "assets/groovy.svg" },
        { name: "Clojure", linkToDocs: "https://clojure.org/", hashtags: "#functional #lisp #modern", imagePath: "assets/clojure.svg" },
        { name: "Crystal", linkToDocs: "https://crystal-lang.org/reference/", hashtags: "#fast #ruby-like #modern", imagePath: "assets/crystal.svg" },
        { name: "Nim", linkToDocs: "https://nim-lang.org/docs.html", hashtags: "#lightweight #performance #modern", imagePath: "assets/nim.svg" },
        { name: "Pascal", linkToDocs: "https://www.freepascal.org/docs.html", hashtags: "#legacy #teaching #classic", imagePath: "assets/none.svg" },
        { name: "Prolog", linkToDocs: "https://www.swi-prolog.org/pldoc/", hashtags: "#logic #ai #declarative", imagePath: "assets/prolog.svg" },
        { name: "OCaml", linkToDocs: "https://ocaml.org/docs/", hashtags: "#functional #system #modern", imagePath: "assets/ocaml.svg" },
        { name: "Scheme", linkToDocs: "https://schemers.org/", hashtags: "#lisp #minimalist #academic", imagePath: "assets/none.svg" },
        { name: "Bash", linkToDocs: "https://www.gnu.org/software/bash/manual/", hashtags: "#scripts #linux #shell", imagePath: "assets/bash.svg" },
        { name: "PowerShell", linkToDocs: "https://learn.microsoft.com/en-us/powershell/", hashtags: "#automation #windows #scripts", imagePath: "assets/powershell.svg" },
        { name: "Scratch", linkToDocs: "https://scratch.mit.edu/", hashtags: "#teaching #kids #visual", imagePath: "assets/none.svg" },
        { name: "Assembly", linkToDocs: "https://docs.microsoft.com/en-us/cpp/assembler/masm/", hashtags: "#lowLevel #performance #hardware", imagePath: "assets/none.svg" },
        { name: "Tcl", linkToDocs: "https://tcl.tk/doc/", hashtags: "#scripting #gui #embedded", imagePath: "assets/none.svg" },
        { name: "VHDL", linkToDocs: "https://www.vhdl.org/", hashtags: "#hardware #design #digital", imagePath: "assets/none.svg" },
        { name: "Verilog", linkToDocs: "https://www.verilog.com/", hashtags: "#hardware #fpga #design", imagePath: "assets/none.svg" },
        { name: "ABAP", linkToDocs: "https://help.sap.com/viewer/product/ABAP", hashtags: "#sap #enterprise #legacy", imagePath: "assets/none.svg" },
        { name: "D", linkToDocs: "https://dlang.org/documentation.html", hashtags: "#modern #performance #compiled", imagePath: "assets/none.svg" },
        { name: "Racket", linkToDocs: "https://docs.racket-lang.org/", hashtags: "#lisp #teaching #research", imagePath: "assets/none.svg" },
        { name: "Smalltalk", linkToDocs: "http://www.smalltalk.org/", hashtags: "#oop #interactive #legacy", imagePath: "assets/none.svg" },
        { name: "Q#", linkToDocs: "https://learn.microsoft.com/en-us/azure/quantum/user-guide/", hashtags: "#quantum #modern #science", imagePath: "assets/none.svg" },
        { name: "Solidity", linkToDocs: "https://docs.soliditylang.org/", hashtags: "#blockchain #smartContracts #ethereum", imagePath: "assets/solidity.svg" },
        { name: "Haxe", linkToDocs: "https://haxe.org/documentation/introduction/", hashtags: "#crossPlatform #gameDev #modern", imagePath: "assets/haxe.svg" },
        { name: "ActionScript", linkToDocs: "https://help.adobe.com/en_US/as3/reference/flash/", hashtags: "#flash #legacy #animation", imagePath: "assets/none.svg" },
        { name: "LabVIEW", linkToDocs: "https://www.ni.com/docs/en-US/bundle/labview/page/lv_home.html", hashtags: "#visual #engineering #science", imagePath: "assets/labview.svg" }
      ];
      
      
    allLanguages.forEach(({name, linkToDocs, hashtags, imagePath}) => {
        stmt.run(name, linkToDocs, hashtags, imagePath);
    })

    stmt.finalize();
});

db.close(() => {
    console.log("Database 'allLanguages' setup complete.");
});
