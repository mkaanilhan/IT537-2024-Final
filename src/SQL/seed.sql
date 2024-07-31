

CREATE TABLE users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    header TEXT NOT NULL,
    title TEXT NOT NULL,
    para TEXT NOT NULL,
    author_id TEXT NOT NULL,
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (author_id) REFERENCES users (id)
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    blog_id INT NOT NULL,
    user_id TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (blog_id) REFERENCES blog (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);




