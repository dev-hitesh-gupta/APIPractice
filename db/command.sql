 CREATE TABLE USERS(
   ID  SERIAL PRIMARY KEY,
   NAME           TEXT      NOT NULL,
   EMAIL          TEXT       NOT NULL,
   PASSWORD       TEXT      NOT NULL,
   PHONE          TEXT      NOT NULL,
   HOBBIES        TEXT,
   ORGANIZATION   TEXT,
   QUALIFICATION  TEXT,
   FOOD           TEXT
);

CREATE TABLE ADDRESSES(
   ID SERIAL PRIMARY KEY      NOT NULL,
   TYPE            ADDRESS NOT NULL,
   ADDRESS         TEXT NOT NULL,
   CITY            CHAR(50) NOT NULL,
   STATE           CHAR(50) NOT NULL,
   ZIP             CHAR(10) NOT NULL,
   COUNTRY         CHAR(50) NOT NULL,
   USER_ID         INT      references USERS(ID)
);

INSERT INTO USERS (NAME,EMAIL,PASSWORD,PHONE)
VALUES ( 'Paul', 'hiteshgupta3012@gmail.com', 'hitesh', '8559093899' );

create type address as enum ('correspondence','permanent');
