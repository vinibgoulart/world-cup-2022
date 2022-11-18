<!-- ABOUT THE PROJECT -->

## Fifa World Cup 2022

Follow all the data about the world cup 2022, such as the countries that are still classified, the group stage, the scores, the dates and times of the games, and much more!!!

### Third-party Services and Acknowledgements

This project consuming **[free-api-worldcup2022](https://github.com/raminmr/free-api-worldcup2022)**, my acknowledgments to its creator [raminmr](https://github.com/raminmr)

### Contributing

You can contribute to this project by forking the repo and opening your **Pull Request**

#### Environment Variables

- `ACCESS_TOKEN`: your user access token (its lifetime)

#### How to get this ACCESS_TOKEN?

**Register** on `http://api.cup2022.ir/api/v1/user`

```
curl --location --request POST 'http://api.cup2022.ir/api/v1/user' \
--header 'Content-Type: application/json' \
--data-raw '{
"name" : "Your Name",
"email": "youremail@email.com",
"password": "******",
"passwordConfirm" : "******"
}'
```

**Login** on `http://api.cup2022.ir/api/v1/user/login`

```
curl --location --request POST 'http://api.cup2022.ir/api/v1/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "youremail@email.com",
"password": "12345678"
}'
```

Your token is lifetime, enjoy it!

Consult **[free-api-worldcup2022](https://github.com/raminmr/free-api-worldcup2022)** to more details.

## Run Locally

Clone the project

```bash

git clone git@github.com:ViniBGoulart/world-cup-2022.git

cd world-cup-2022

```

Install dependencies

```bash

yarn

```

Add `.env.local`

```

ACCESS_TOKEN= "<YOUR ACCESS TOKEN>"

```

Start the server

```bash

yarn dev

```
