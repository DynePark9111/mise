# mise

## About

- mise (particulate matter) observation web app

## Stack

- React (FE)
- Nodejs (BE)
- Nginx (Only for deployment)

## Images

|                   Homepage                   |                Map                |
| :------------------------------------------: | :-------------------------------: |
| ![Homepage](/image/home.gif "Homepage demo") | ![Map](/image/map.gif "Map demo") |

|                  About                  |                      Bookmark                       |                    Search                     |
| :-------------------------------------: | :-------------------------------------------------: | :-------------------------------------------: |
| ![About](/image/about.png "About page") | ![Bookmark](/image/bookmark.png "Bookmark feature") | ![Search](/image/search.png "Search feature") |

## Get started

### frontend

1. git clone
2. cd frontend
3. npm install
4. create .env file
5. npm start

### backend

1. git clone
2. cd backend
3. npm install
4. create .env file
5. create an acount at [data.go.kr](https://www.data.go.kr/uim/mss/socialMberInfoStep1FormView.do)
6. get API_KEY from [airkorea](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15073861)
7. npm run dev

### .env

```
./backend/.env.lcoal
PORT=
ORIGIN=
API_KEY=

./frontend/.env.lcoal
REACT_APP_URL=
```

## API

| Method | URL                | Description                      |
| ------ | ------------------ | -------------------------------- |
| GET    | /                  | display port                     |
| GET    | /mise              | used only for testing purpose    |
| GET    | /mise/:stationName | get mise data from {stationName} |

### Request parameters

| Field       | options       | Description                                |
| ----------- | ------------- | ------------------------------------------ |
| stationName | (서울 종로구) | required. list available in FE search page |
