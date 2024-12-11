const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./mostPopularLanguages.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS mostPopularLanguages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            popularityRank INTEGER NOT NULL,
            imagePath TEXT NOT NULL,
            creationDate TEXT NOT NULL,
            description TEXT NOT NULL
        )
    `);

    const stmt = db.prepare("INSERT INTO mostPopularLanguages (name, popularityRank, imagePath, creationDate, description) VALUES (?, ?, ?, ?, ?)");

    const mostPopularLanguages = [
        { 
            popularityRank: 1, 
            name: 'Python', 
            creationDate: '20.02.1991', 
            imagePath: 'assets/python.svg',
            description: 'Высокоуровневый язык, популярный для анализа данных, машинного обучения и веб-разработки.'
        },
        { 
            popularityRank: 2, 
            name: 'C++', 
            creationDate: '15.10.1985', 
            imagePath: 'assets/cplusplus.svg',
            description: 'Мощный язык с возможностью низкоуровневого программирования, используется для создания операционных систем, игр и приложений с высокой производительностью.'
        },
        { 
            popularityRank: 3, 
            name: 'Java', 
            creationDate: '23.05.1995', 
            imagePath: 'assets/java.svg',
            description: 'Многоцелевой язык, широко используемый в корпоративных приложениях, мобильных и веб-сервисах.'
        },
        { 
            popularityRank: 4, 
            name: 'C#', 
            creationDate: '01.01.2000', 
            imagePath: 'assets/csharp.svg',
            description: 'Язык, разработанный Microsoft для создания приложений на платформе .NET.'
        },
        { 
            popularityRank: 5, 
            name: 'JavaScript', 
            creationDate: '04.12.1995', 
            imagePath: 'assets/javascript.svg',
            description: 'Язык программирования для создания интерактивных веб-страниц и серверных приложений.'
        },
    ];
     
      

    mostPopularLanguages.forEach(({ name, popularityRank, imagePath, creationDate, description }) => {
        stmt.run(name, popularityRank, imagePath, creationDate, description);
    });
    

    stmt.finalize();
});

db.close(() => {
    console.log("Database 'mostPopularLanguages' setup complete.");
});
