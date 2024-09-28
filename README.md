# 🚀 Coding Interview Challenge

This mono repo contains a boilerplate setup for both Node.js (backend) and React (frontend).

## 🛠️ Getting Started

Follow these steps to set up the project and run it locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the frontend** (runs on port 3000):
   ```bash
   npm run start:frontend
   ```

3. **Start the backend** (runs on port 8000):
   ```bash
   npm run start:backend
   ```

## 📊 Challenge Overview

You'll be working with the following database schema:

![Database Schema](image.png)

### Database Structure

The database consists of three tables:

| Table | Description |
|-------|-------------|
| `orders` | Contains order details, including `channel_id` (source of the order) |
| `order_items` | Stores information about individual items in an order |
| `channels` | Holds details of each sales channel (e.g., Amazon, eBay) |

## 🎯 Your Task

Create an API endpoint that fetches all orders along with their associated items and channel details. This information will be displayed in a MUI table on the frontend.

### Requirements

1. 📋 Display the fetched orders in a MUI table
2. 🔘 Add a button in the last column of the table:
   - 🔵 Blue color if the order status is `UNASSIGNED`
   - 🔄 When clicked:
     - Change the order status to `SHIPPED`
     - Update button color to yellow

## 🍀 Good Luck!

Feel free to adjust any parts of this challenge as needed. We're excited to see your solution!