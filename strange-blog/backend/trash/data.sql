create table posts(
    int id primary key,
    login varchar(20) not null,
    post_title varchar(500) not null,
    post_content text not null,
    tags text,
    date varchar(100) not null
);

create table users(
    login varchar(20) primary key,
    password varchar(50) not null,
    mail varchar(50) not null,
    foreign key(login) references posts(login) on delete cascade
);
