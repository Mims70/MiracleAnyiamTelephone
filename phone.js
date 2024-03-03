// Define the Telephone class
class Telephone {
  // Constructor to initialize the phone numbers set and observers array
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // Method to add an observer to the observers array
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove an observer from the observers array
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify all observers with a given phone number
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }

  // Method to add a phone number to the phoneNumbers set
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  // Method to remove a phone number from the phoneNumbers set
  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  // Method to dial a phone number and notify observers if it exists
  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Cannot dial. Phone number not added.");
    }
  }
}

// Define the Observer class
class Observer {
  // Method to be implemented by subclasses for notification
  notify(phoneNumber) {}
}

// Subclass of Observer that prints a message to the console
class PrintPhoneNumberObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Dialing: ${phoneNumber}`);
  }
}

// Subclass of Observer that prints a custom message to the console
class CustomMessageObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Now Dialing: ${phoneNumber}`);
  }
}

// Example usage:
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
