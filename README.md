# React application made for Kazidomi technical test 🍃

Base project use a boiler plate to integrate NextJS, React and TailwindCSS (https://github.com/ixartz/Next-js-Boilerplate.git) 

Redux, SwiperJS and NotiJS has been added during the development of the project.

- Redux : https://redux.js.org/ (State management)
- Noty : https://ned.im/noty/#/ (Toast)
- Swiper : https://swiperjs.com/swiper-api (Swipe and carousel)

## Requirements

- Node.js and npm

## Getting started

Run the following command on your local environment:

```
git clone https://github.com/ziracmo/kazidomi-react-app.git
cd kazidomi-react-app
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

## Instructions given

### 1 - Login :

- Use the following APIs: Endpoint: https://fakestoreapi.com/auth/login Method: POST ✅ 

- INPUT : 
```json
 {
     "username": "mor_2314",
     "password": "83r5^_"
}
```

- OUTPUT : 
```json
 {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

### 2 - A landing page (main page) that has the following specification :

- List all products, API will return 20 products ✅ 
- Display image, title, price and add to cart button for each product ✅ 
- When the user click on add to cart button, the item should be added to the cart (store the
cart in the client side, you may use local storage, state, redux, ...etc) ✅ 
- When the user clicks on the product, open a modal that displays product image, title and
description. ✅ 
- Electronics section, use carousel to display the products ✅ 
   - Use the following API to get products list: Endpoint: https://fakestoreapi.com/products Method: GET ✅  
   - Use the following API to get carousel items: Endpoint: https://fakestoreapi.com/products/category/electronics Method: GET ✅ 

### 3 - Cart page that has the following specifications :
- List all shopping cart items. ✅ 
- Display item image, title and quantity for each item  ✅ 
- User should be able to increase/decrease item quantity ✅ 
- User should be able to remove items from the shopping cart ✅ 
- Display total cart price ✅ 

### Note :

- Use your design talents to make it beautiful and seamless
- This has to be done using ReactJS latest version.
- Bounce: Feel free to add any enchantment to the app(validation, error handling, loading
indicator, ..etc) as you see fit. If you are adding extra functionality or assumptions make
sure you state these in the email, when you submit.
- If you run out of time, please submit whatever you have completed.
- Share the source code on Github.

### Added outside the instructions :

- Skeletons on the home page
- Default template on the cart page
- Toast using Noty (Login error and production added to cart)
- Application is fully responsive
- Error management in the login form

## Features given by the boilerplate

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
