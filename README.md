This is a web app that utilizes cloudinary API to programmatically upload images.

## Getting Started

Install dependencies and run the development server:

```bash
npm install && npm run dev
```
## To Run Tests
```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Notes
- I utilised app router although I favor page router due to the clear distinction and organisation of the page router.
- React-Query was used to fetch data & server side state such as loading, error etc. This is a preferable tool compared to redux because it is robust and has so many benefits such as caching, data refetching & cache invalidation.
- Image data is being stored in local storage as requested, ideally this should be information stored on the server side, fetched once on the client, cached and invalidated as necesary.
- I wrote some unit and integration tests using vitest.

