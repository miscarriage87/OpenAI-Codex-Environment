"""Simple Temperature Converter CLI app"""


def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit."""
    return celsius * 9.0 / 5.0 + 32


def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5.0 / 9.0


def main() -> None:
    """Run the simple CLI loop."""
    while True:
        print("\nSimple Temperature Converter")
        print("1. Celsius to Fahrenheit")
        print("2. Fahrenheit to Celsius")
        print("3. Exit")
        choice = input("Choose an option: ").strip()

        if choice == "1":
            value = input("Enter temperature in Celsius: ")
            try:
                celsius = float(value)
                fahrenheit = celsius_to_fahrenheit(celsius)
                print(f"{celsius:.2f}°C = {fahrenheit:.2f}°F")
            except ValueError:
                print("Invalid number. Please try again.")
        elif choice == "2":
            value = input("Enter temperature in Fahrenheit: ")
            try:
                fahrenheit = float(value)
                celsius = fahrenheit_to_celsius(fahrenheit)
                print(f"{fahrenheit:.2f}°F = {celsius:.2f}°C")
            except ValueError:
                print("Invalid number. Please try again.")
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
