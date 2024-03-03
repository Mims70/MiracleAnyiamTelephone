# MiracleAnyiamTelephone
# Telephone Observer Pattern

This code implements a basic Telephone class in JavaScript, using the Observer design pattern. The Telephone class allows users to add, remove, and dial phone numbers while notifying registered observers whenever a phone number is dialed.

## Class Structure

### `Telephone` Class

- **Constructor:** Initializes the `phoneNumbers` set and the `observers` array.
  
- **`addObserver(observer):`** Adds an observer to the list of subscribers.

- **`removeObserver(observer):`** Removes an observer from the list of subscribers.

- **`notifyObservers(phoneNumber):`** Notifies all registered observers when a phone number is dialed.

- **`addPhoneNumber(phoneNumber):`** Adds a new phone number to the list of allowed numbers.

- **`removePhoneNumber(phoneNumber):`** Removes a phone number from the list of allowed numbers.

- **`dialPhoneNumber(phoneNumber):`** Dials a phone number and notifies observers if it exists in the allowed numbers.

### `Observer` Class

- **`notify(phoneNumber):`** Abstract method to be implemented by subclasses for receiving notifications.

### `PrintPhoneNumberObserver` Class

- Subclass of `Observer` that prints a simple "Dialing" message to the console.

### `CustomMessageObserver` Class

- Subclass of `Observer` that prints a custom "Now Dialing" message to the console.

## Example Usage

```javascript
// Create a new Telephone instance
const telephone = new Telephone();

// Create two observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new CustomMessageObserver();

// Add observers to the telephone instance
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Add phone numbers to the telephone instance
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");

// Dial phone numbers and notify observers
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
```
**Observer Pattern Usage**

The *Observer pattern* is employed here to allow the `Telephone` class to notify multiple observers (such as `PrintPhoneNumberObserver` and `CustomMessageObserver`) whenever a phone number is dialed. Observers are added to the `observers` array, and when a phone number is dialed, the `notifyObservers` method is called, which, in turn, invokes the `notify` method on each observer, triggering their specific actions.

This pattern promotes a *loosely coupled design*, allowing for flexible and extensible code. Additional observers can be added without modifying the `Telephone` class, making it easy to enhance or customize the behavior of the system.
