<br />
<div align="center">

  <h1 align="center">Grocery-Price-Tracker</h1>

  <p align="center">
    An app to help you save money on groceries!
    <br />
    <a href="https://github.com/ianstewart4/grocery-price-tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ianstewart4/grocery-price-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/ianstewart4/grocery-price-tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I've always been a frugal shopper, always looking for deals and waiting for sales to stock up on my frequently purchased items. With groceries making up the bulk of my purchases throughout the year by a wide margin, it seemed like the right place to focus my efforts to save the most money. I kept finding myself missing out on sales either by catching them too late, or seeing them right after I made a purchase, so I decided to make an app that would allow me to track my frequently purchased items and never miss another sale. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Set up a database with MongoDB
2. Clone the repo
   ```sh
   git clone https://github.com/ianstewart4/grocery-price-tracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file in the main directory using the following variables
   ```js
   NODE_ENV = development
   PORT = 8000
   API_KEY -> You can get this from the Superstore website
   DB_STRING 

   DB_USERNAME
   DB_PASSWORD 

   JWT_SECRET
   ```
5. Run development server
    ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_Coming soon..._

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Let users look up items using item code
- [ ] Change theme selector to light/dark toggle with default being system setting
- [ ] Allow users to select their store
- [ ] Allow users to create a list of watched and tracked items
- [ ] Allow users to set up and receive email notification of items on sale
- [ ] Allow users to search for items directly in the app
- [ ] Track price history
- [ ] Add other chains
    - [ ] Other Loblaws chains
    - [ ] Walmart
    - [ ] Sobeys

## Ideas
- [ ] Allow users to generate and edit printable grocery lists
- [ ] Let users add items to a basket which will let users quickly check which stores have the best prices
- [ ] Show user which store/location has the best price for each item within a user's chosen radius
- [ ] If a user is willing to make trips to multiple stores, create printable lists for items with the best price and respective locations
    - [ ]  Let users select number of stops they're willing to make

See the [open issues](https://github.com/ianstewart4/grocery-price-tracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Othneil Drew's Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Choose an Open Source License](https://choosealicense.com)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
