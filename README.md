# Password Generator

This project is a simple **Password Generator** application built using React.js. The application allows users to generate random passwords with customizable options such as password length, inclusion of numbers, and special characters. The generated password can also be copied to the clipboard for easy use.

---

## Features

- **Dynamic Password Generation**: Generate passwords with a customizable length.
- **Include Numbers**: Option to include numbers (0-9) in the password.
- **Include Special Characters**: Option to include special characters (!@#$%^&*-_+=()[]{}~`).
- **Password Preview**: View the generated password in a text input field.
- **Copy to Clipboard**: Copy the generated password directly to the clipboard.
- **Real-Time Updates**: Password updates dynamically based on user preferences.

---

## Technologies Used

- **React.js**: For building the user interface and managing state.
- **Tailwind CSS**: For styling and layout.

---

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd passwordGen
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## How to Use

1. **Adjust Password Length**:
   - Use the range slider to set the desired length of the password (between 6 and 100 characters).

2. **Customize Password Options**:
   - Check the "Numbers" option to include numeric characters.
   - Check the "Characters" option to include special characters.

3. **Generate Password**:
   - The password will be generated dynamically based on your selected preferences.

4. **Copy to Clipboard**:
   - Click the "Copy" button to copy the password to the clipboard.

---

## File Structure

```
passwordGen/
├── public/
│   ├── index.html
├── src/
│   ├── App.js       # Main component
│   ├── index.js     # Entry point
│   ├── App.css      # Styling
│   ├── assets/      # Static assets (if any)
├── package.json     # Project configuration
```

---

## Future Enhancements

- Add more customization options, such as:
  - Avoid ambiguous characters (e.g., `O` and `0`).
  - Specify character groups to include/exclude.
- Provide a light/dark mode toggle.
- Improve the UI design for better user experience.

---

## Acknowledgments

Special thanks to the open-source community for providing tools and inspiration for this project.

