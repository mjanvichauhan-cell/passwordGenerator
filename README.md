# 🔐 Password Generator

A simple and responsive **Password Generator** built using **React, Tailwind CSS, and Vite**.

![password](passwordGen.png)

## ✨ Features

* Generate random passwords
* Set password length from **6 to 100 characters**
* Include numbers
* Include special characters
* Copy password with one click
* Responsive UI using Tailwind CSS

## 🛠️ Technologies Used

* React
* JavaScript
* Tailwind CSS
* Vite
* HTML / JSX

## 🎮 How to Use

1. Use the **Length** slider to select the password length.
2. Select **Numbers** to include numbers.
3. Select **Characters** to include special characters.
4. The password will be generated automatically.
5. Click the **Copy** button to copy the password.

## 🧠 React Hooks Used

### useState

Used to manage password length, options, and generated password.

```
const [length, setLength] = useState(8);
const [numberAllow, setNumber] = useState(false);
const [chrAllow, setChr] = useState(false);
const [password, setPassword] = useState("");
```

### useCallback

Used to memoize the password generation function.

```
const passGenerator = useCallback(() => {
    // password generation logic
}, [length, numberAllow, chrAllow]);
```

### useEffect

Used to generate a new password whenever the selected options change.

```
useEffect(() => {
    passGenerator();
}, [length, numberAllow, chrAllow, passGenerator]);
```

### useRef

Used to access the password input element when copying the password.

```
const passwordRef = useRef(null);
```

## 🔑 Password Generation

The generator starts with uppercase and lowercase letters:

```
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
```

Numbers are added when the **Numbers** option is enabled:

```
if (numberAllow) str += "0123456789";
```

Special characters are added when the **Characters** option is enabled:

```
if (chrAllow) str += "!@#$%^&*(){}~?|[];'.,/<>";
```

A random character is selected and added to the password:

```
let char = Math.floor(Math.random() * str.length);
pass += str.charAt(char);
```

## 📋 Copy Password

The generated password is copied using the Clipboard API:

```
window.navigator.clipboard.writeText(password);
```

## ⚠️ Note

This project is mainly created for learning:

* React Hooks
* useState
* useCallback
* useEffect
* useRef
* State management
* Tailwind CSS

For production-level security, use a cryptographically secure random-number generator instead of `Math.random()`.

## 📄 License

This project is free to use for learning and personal projects.
