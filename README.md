﻿# BeeInventor_interview

## Q1: Simple Dictionary

Please review `src/simple_dictionary.ts` file.

## Q2: WildCard Dictionary

Please review `src/wildcard_dictionary.ts` file.

## Q3: System Design

You could review `OpenAPI` folder and below link.  
[Database](https://dbdiagram.io/d/texts-or-books-design-6777f9bc5406798ef735c906)  
[OpenAPI](https://app.swaggerhub.com/apis-docs/LeoHung/BooksTexts/1.0.0#/Texts/post_v1_user_texts)

### JWT Structure

#### Header
Specifies the algorithm (alg) and token type (typ):
```json
{
  "alg": "ES256",
  "typ": "JWT"
}
```

#### Payload
Contains the claims (data) about the user or subject. For example:

```json
{
  "sub": "11d7edca-090f-4faa-a13d-bc874c52fe57",
  "name": "Leo Hung",
  "role": "user",
  "iat": 1736162904,
  "exp": 1736166504
}
```

- `sub`: The unique identifier (UUID) for the user.
- `name`: The name of the user.
- `role`: User's role (e.g., admin, user).
- `iat`: Issued at timestamp (in seconds).
- `exp`: Expiration timestamp (in seconds).
