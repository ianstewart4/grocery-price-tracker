import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorMiddleware'
import axios from 'axios'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/trackers', require('./routes/trackerRoutes'))

app.use(errorHandler);
)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

const config: {} = {
    headers: {
        'x-apikey': process.env.API_KEY,
    },
}

// Getting DDMMYYY formatted date for API requirement

const today = new Date();
const yyyy = today.getFullYear();
let mm: number = today.getMonth() + 1; // Months start at 0!
let dd: number = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + mm + yyyy;

// console.log(formattedToday)

// Types of sales to consider
// On sale
// 2 for x
// limit


const fetchItems = async (item: string) => {
    const API = `https://api.pcexpress.ca/product-facade/v4/products/${item}?lang=en&date=${formattedToday}&pickupType=STORE&storeId=1514&banner=superstore`
    try {
        const response = await axios.get(API, config)
        const itemImageURL: string = response.data.imageAssets[0].mediumUrl
        const brand: string = response.data.brand
        const name: string = response.data.name
        const pkgSize: string = response.data.packageSize
        const price: number = response.data.offers[0].price.value
        // const regPrice: number = response.data.offers[0].wasPrice.value ?? price



        console.log(`\n${item} \n${brand} ${name} (${pkgSize})`)
        console.log(price)
        // console.log(regPrice)
        console.log(response.data.offers[0].badges.dealBadge ? response.data.offers[0].badges.dealBadge.text : 'No Sale')
        console.log(response.data.offers[0].badges.dealBadge ? response.data.offers[0].badges.dealBadge.expiryDate ?? 'No Expiry' : '')
    } catch (err) {
        console.log(err)
    }
}

const items: string[] = [
    '20967759_EA',
    '21184617_EA',
    '20971511_EA', // Pizza
    '20148240_EA', // Meatballs
]

// items.map((item) => {
//     fetchItems(item)
// })

