# Amazon Replica - Next.js Website

This project is a personal endeavor by Neeraj, replicating Amazon's functionality, allowing users to register, log in, and purchase products using Stripe for payments. The website is built with Next.js, uses MongoDB as the database, and employs Redux for global data management.

## Introduction

This project aims to replicate the core features of the Amazon website, providing users with the ability to:

- Register and create user accounts.
- Log in to existing accounts.
- Browse a catalog of products.
- Add products to their cart.
- Use Stripe for secure payment processing.
- Review and complete their orders.

## Features

- User Registration: Users can sign up for an account by providing their details.
- User Authentication: Registered users can log in securely.
- Product Listings: A catalog of products is available for users to browse and select from.
- Shopping Cart: Users can add products to their shopping cart before making a purchase.
- Stripe Checkout: Secure payment processing using the Stripe API.
- Order Management: Users can review and complete their orders.
- Redux Integration: Global state management for data shared across components.

## Technology Stack

- **Frontend**: Next.js
- **Database**: MongoDB
- **Authentication**: User authentication is implemented (crypto js for encription i will add JWT in future).
- **Payment**: Stripe integration for payment processing.
- **State Management**: Redux is used for global data handling.

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Running

Follow these steps to install and run the Amazon Replica website:

```bash

# Clone the repository
git clone https://github.com/web10crown/amazon-crown.git

# Change your working directory to the project folder
cd amazon-crown

# Install project dependencies
npm install

# Set up environment variables for Stripe and MongoDB connection (create a .env file with the necessary variables).

# Start the development server
npm run dev


## Usage

1. Open the website in your web browser.
2. Register for a new user account or log in with existing credentials.
3. Browse products, add them to your cart, and proceed to checkout.
4. Complete the purchase using Stripe's secure checkout process.

## Folder Structure

- `pages`: Contains the Next.js pages and routes.
- `components`: Reusable React components used throughout the site.
- `redux`: Redux-related files for global state management.
- `api`: Server-side code for interacting with the database and Stripe.


