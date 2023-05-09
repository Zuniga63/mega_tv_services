# MEGA TV SERVICES

MEGA Services is a new platform to contract television services in a building. The main objective is to help users contract a cable TV service for their home.

---

## Backend

For the backend, I used NestJs in its default configuration with expressJs, which is structured by modules, where each module corresponds to an entity of the diagram and has controllers, services, and data transfer objects (DTO).

### Diagram

![ER](https://user-images.githubusercontent.com/50376585/236594100-e11b45de-18ed-403f-b4b1-a1222847a00e.png)

### Documentation

Swagger takes advantage of the decorators provided by NestJs and was used for the documentation.

![Documentation](https://user-images.githubusercontent.com/50376585/236655634-c05524e3-bb86-4ae4-b5e0-39e99b0bb988.gif)

### Folder Structure

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/c184693b-f355-4ab5-a5bd-6100d48226db)

### Server Installation

For installation go to the [server folder and read README.md](./server/README.md)

## Frontend

For the frontend, Nextjs version 13 was used with the default TailwindCSS configuration. Redux Tool Kit was used to handle state subscriptions, Redux Thunk for asynchronous state updates, Axios for server requests, and TypeScript as the programming language.

The project consists of two routes, a root route to initiate the process and another for subscriptions. The subscription route has four steps that request the customer's contact and address information. Routing is done using the Nextjs folder system.

### Landing Page

![Landing Page](https://github.com/Zuniga63/next-pos-app/assets/50376585/0f21c034-cc3e-42a5-8434-202ab8bb5faf)

### Subscription Page

#### **Step 1**

![Step 1](https://github.com/Zuniga63/next-pos-app/assets/50376585/f2a013b8-a34a-4748-996c-6be56f30e8b2)
![Step 1-1](https://github.com/Zuniga63/next-pos-app/assets/50376585/2061bf23-29bf-4b5d-9058-b046a92271ac)

#### **Step 2**

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/8840d456-8eb9-4cb8-97c3-242fa9b32121)

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/6a5cbe8a-846f-4a74-9b96-52276ea31390)

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/aaf72cf3-2ce8-414e-82fa-058657f83b67)

#### **Step 3**

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/ba126aa9-b8b6-40f7-ac8c-c27807885c7d)

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/acfbc6a0-5d5f-4a05-8394-60380da07f18)

#### **Step 4**

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/48aaca69-6c07-46df-aa65-9c905c84dffe)

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/eb967320-c95c-40c6-ba8a-7f408797b0f4)

![image](https://github.com/Zuniga63/next-pos-app/assets/50376585/2a797901-664b-4c76-8696-d97629fecef2)

All views are fully responsive

### Client Installation

For installation go to the [client folder and read README.md](./client/README.md)
